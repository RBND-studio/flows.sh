import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { OpenTelemetryModule } from "nestjs-otel";
import { LoggerModule } from "nestjs-pino";

import { AppController } from "./app.controller";
import { DatabaseModule } from "./database/database.module";
import { KafkaModule } from "./kafka/kafka.module";
import { pinoHttpOptions } from "./logging/options";
import { Sdk2Module } from "./sdk/sdk.module";

const OpenTelemetryModuleConfig = OpenTelemetryModule.forRoot({
  metrics: {
    hostMetrics: true, // Includes Host Metrics
  },
});

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    KafkaModule,
    LoggerModule.forRoot({ pinoHttp: pinoHttpOptions }),
    OpenTelemetryModuleConfig,
    Sdk2Module,
  ],
  controllers: [AppController],
})
export class AppModule {}
