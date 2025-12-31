import { IncomingMessage } from "node:http";

import { EachMessagePayload } from "@confluentinc/kafka-javascript/types/kafkajs";
import type { KafkaUserStateUpdateEvent, WebsocketSDKMessage } from "@flows/types";
import { Logger } from "@nestjs/common";
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { organizations } from "db";
import { Server, WebSocket } from "ws";

import { DatabaseService } from "../database/database.service";
import { KafkaService } from "../kafka/kafka.service";

type ClientKey = string;
type ActiveWebSocket = WebSocket & { isAlive: boolean; clientKey?: string };
type ConnectedClient = {
  userId: string;
  environment: string;
  organizationId: string;
  client: ActiveWebSocket;
};

@WebSocketGateway({ path: "/ws/sdk/block-updates" })
export class SdkGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  private readonly logger = new Logger(SdkGateway.name);

  @WebSocketServer()
  server: Server;

  private readonly clients = new Map<ClientKey, ConnectedClient[]>();
  private getClientKey(props: {
    userId: string;
    environment: string;
    organizationId: string;
  }): ClientKey {
    return `${props.userId}:${props.environment}:${props.organizationId}`;
  }

  constructor(
    private readonly kafkaService: KafkaService,
    private readonly databaseService: DatabaseService,
  ) {
    void this.kafkaService.consume(
      ["user-state-updates"],
      this.handleUserStateUpdateMessage.bind(this),
    );
  }

  private organizationIdSet: Set<string> | null = null;
  async loadOrganizations(): Promise<void> {
    const organizationResult = await this.databaseService.db
      .select({ id: organizations.id })
      .from(organizations);
    this.organizationIdSet = new Set(organizationResult.map((o) => o.id));
  }

  afterInit(server: Server): void {
    // interval is making problems in tests
    if (process.env.NODE_ENV === "test") return;

    const logger = this.logger;
    const loadOrganizations = this.loadOrganizations.bind(this);
    // Initial load
    void loadOrganizations();

    const interval = setInterval(function ping() {
      // Update organizations every 30 seconds
      void loadOrganizations();

      server.clients.forEach((_ws) => {
        const ws = _ws as ActiveWebSocket;
        // Terminate dead connections
        if (!ws.isAlive) {
          return ws.terminate();
        }

        ws.isAlive = false;
        ws.ping();
      });
      logger.log({ count: server.clients.size }, "Currently connected clients");
    }, 30_000);

    server.on("close", function close() {
      clearInterval(interval);
    });
  }

  async handleUserStateUpdateMessage({ message }: EachMessagePayload): Promise<void> {
    const stringValue = message.value?.toString();
    if (!stringValue) {
      this.logger.error({ stringValue }, "Invalid user-state-updates value");
      return;
    }

    const data: KafkaUserStateUpdateEvent = JSON.parse(stringValue);

    const clientKey = this.getClientKey(data);
    const matchingClients = this.clients.get(clientKey) ?? [];

    // TODO: uncomment with new log setup, currently we don't have enough storage
    // this.logger.log(
    //   {
    //     matchingClients: matchingClients.length,
    //     ...data,
    //   },
    //   "Received user-state-updates message",
    // );

    if (!matchingClients.length) return;

    const payload: WebsocketSDKMessage = {
      exitedBlockIds: data.exitedBlockIds,
      updatedBlocks: data.updatedBlocks,
    };

    const currentClients = this.clients.get(clientKey) ?? [];
    const activeClients = currentClients.filter((c) => c.client.readyState === WebSocket.OPEN);

    // TODO: uncomment with new log setup, currently we don't have enough storage
    // this.logger.log(
    //   {
    //     userId: data.userId,
    //     environment: data.environment,
    //     organizationId: data.organizationId,
    //     currentClients: currentClients.length,
    //     activeClients: activeClients.length,
    //     payload,
    //   },
    //   "user-state-updates",
    // );

    activeClients.forEach(({ client }) => {
      client.send(JSON.stringify(payload));
    });

    // This methods needs to return Promise
    return Promise.resolve();
  }

  handleConnection(client: ActiveWebSocket, message: IncomingMessage): void {
    const url = message.url ?? "";
    const params = new URLSearchParams(url.split("?")[1] ?? "");
    const userId = params.get("userId");
    const environment = params.get("environment");
    const organizationId = params.get("organizationId");

    client.on("error", (error) => {
      this.logger.error({ error, userId, environment, organizationId }, "Websocket error");
    });

    if (!userId || !environment || !organizationId) {
      client.close();
      return;
    }

    // Close connections for non-existent organizations
    if (this.organizationIdSet && !this.organizationIdSet.has(organizationId)) {
      client.close();
      return;
    }

    // TODO: uncomment with new log setup, currently we don't have enough storage
    // this.logger.log({ userId, environment, organizationId }, "Client connected");

    const clientKey = this.getClientKey({ userId, environment, organizationId });
    client.clientKey = clientKey;
    client.isAlive = true;
    client.on("pong", function heartbeat() {
      (this as ActiveWebSocket).isAlive = true;
    });

    const clientsArray = this.clients.get(clientKey) ?? [];
    clientsArray.push({ userId, environment, client, organizationId });
    this.clients.set(clientKey, clientsArray);
  }

  handleDisconnect(client: ActiveWebSocket): void {
    const clientKey = client.clientKey;
    if (!clientKey) return;
    // TODO: uncomment with new log setup, currently we don't have enough storage
    // this.logger.log({ clientKey }, "Client disconnected");

    const clientsArray = this.clients.get(clientKey);
    if (!clientsArray) return;

    if (clientsArray.length === 1) {
      // eslint-disable-next-line drizzle/enforce-delete-with-where -- this is not a drizzle query
      this.clients.delete(clientKey);
    } else {
      this.clients.set(
        clientKey,
        clientsArray.filter((c) => c.client !== client),
      );
    }
  }
}
