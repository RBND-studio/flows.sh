import { ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NestFastifyApplication } from "@nestjs/platform-fastify";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { WsAdapter } from "@nestjs/platform-ws";
import { Logger } from "nestjs-pino";

import { AppModule } from "./app.module";
import { otelSDK } from "./instrumentation";

async function bootstrap(): Promise<void> {
  otelSDK.start();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ trustProxy: true, logger: false }),
    { rawBody: true, bufferLogs: true },
  );
  app.useLogger(app.get(Logger));

  // Websocket adapter
  app.useWebSocketAdapter(new WsAdapter(app));

  // Api versioning (e.g. /v1/...)
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // DTO validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Enable shutdown hooks
  app.enableShutdownHooks();

  // Start the app
  await app.listen(3007, "0.0.0.0");
}
void bootstrap();
