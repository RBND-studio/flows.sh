import { Injectable } from "@nestjs/common";
import { db, DBCache, migrate } from "db";

@Injectable()
export class DatabaseService {
  db: ReturnType<typeof db>;

  constructor() {
    const cache = new DBCache(process.env.BACKEND_REDIS_CONNECTION);

    this.db = db({
      postgresConnection: process.env.BACKEND_DATABASE_CONNECTION,
      cache,
    });
    void migrate(this.db);
  }
}
