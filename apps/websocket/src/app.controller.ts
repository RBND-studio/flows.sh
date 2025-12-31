import { Controller, Get, Logger } from "@nestjs/common";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor() {
    process.on("unhandledRejection", (err) => {
      this.logger.fatal({ err }, `Unhandled Promise rejection`);
      process.exit(1);
    });
    process.on("uncaughtException", (err, origin) => {
      this.logger.fatal({ err, origin }, `Uncaught exception`);
      process.exit(1);
    });
  }

  @Get("status")
  getStatus(): boolean {
    return true;
  }
}
