import { Module } from "@nestjs/common";

import { SdkGateway } from "./sdk.gateway";

@Module({
  controllers: [],
  providers: [SdkGateway],
})
export class Sdk2Module {}
