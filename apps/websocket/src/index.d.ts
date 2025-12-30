declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_DATABASE_CONNECTION: string;
      BACKEND_REDIS_CONNECTION: string;
      BACKEND_KAFKA_BROKER: string;
      BACKEND_OTEL_TRACE_EXPORTER_ENDPOINT?: string;
    }
  }
}

export {};
