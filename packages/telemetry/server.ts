import type { TelemetryConfig } from "./constants";

// Auth routes take tokens in the query (magic link `token`, OAuth `code`), keep them out of Loki
const stripQuery = (url: string): string => url.split(/[?#]/, 1)[0] ?? url;

/**
 * Builds `onRequestError` for `instrumentation.ts`. One structured JSON line to stdout per server
 * side error; the container log scrape carries it to Loki.
 */
export const createRequestErrorReporter =
  ({ version, environment }: TelemetryConfig) =>
  (
    error: unknown,
    request: { path: string; method: string },
    context: { routePath: string; routeType: string },
  ): void => {
    const err = error instanceof Error ? error : undefined;
    const message = err?.message ?? String(error);
    // eslint-disable-next-line no-console -- structured stdout lines are the server side log transport
    console.error(
      JSON.stringify({
        level: "error",
        msg: message,
        kind: "server",
        route: context.routePath,
        route_type: context.routeType,
        method: request.method,
        path: stripQuery(request.path),
        service_version: version,
        environment,
        error: { name: err?.name ?? typeof error, message, stack: err?.stack },
      }),
    );
  };
