/** Service name of each frontend in Grafana. */
export type TelemetryApp = "flows-app-frontend" | "flows-web-frontend" | "flows-docs-frontend";

/** Build info each app reads from its own env and passes in. */
export type TelemetryConfig = { version?: string; environment?: string };
