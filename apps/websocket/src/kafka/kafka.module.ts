import { Global, Module } from "@nestjs/common";

import { KafkaService } from "./kafka.service";

@Global()
@Module({
  providers: [KafkaService],
  exports: [KafkaService],
})
export class KafkaModule {}
