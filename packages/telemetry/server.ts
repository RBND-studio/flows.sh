import type { TelemetryConfig } from "./constants";
import { stripQueries } from "./strip-queries";

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
      // The request path and URLs quoted in error messages can carry tokens
      JSON.stringify(
        stripQueries({
          level: "error",
          msg: message,
          kind: "server",
          route: context.routePath,
          route_type: context.routeType,
          method: request.method,
          path: request.path,
          service_version: version,
          environment,
          error: { name: err?.name ?? typeof error, message, stack: err?.stack },
        }),
      ),
    );
  };
