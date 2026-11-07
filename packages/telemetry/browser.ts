import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

import type { TelemetryApp, TelemetryConfig } from "./constants";
import { stripQueries } from "./strip-queries";

/**
 * Starts the Faro web SDK with tracing for the dashboard. Call once from `instrumentation-client.ts`.
 * Never throws: a broken telemetry setup must not take the page down. Same origin API calls carry
 * a `traceparent` header, so browser spans continue into the backend traces.
 */
export const initBrowserTelemetry = ({
  app,
  version,
  environment,
}: TelemetryConfig & { app: TelemetryApp }): void => {
  try {
    initializeFaro({
      url: "/api/telemetry",
      app: { name: app, version, environment },
      instrumentations: [
        // A resource timing event for every asset is a lot of volume for little insight
        ...getWebInstrumentations({ enablePerformanceInstrumentation: false }),
        new TracingInstrumentation(),
      ],
      ignoreErrors: [/^Script error\./, /ResizeObserver loop/],
      // Page meta, navigation and CSP events, web vitals, errors and fetch spans all carry URLs
      beforeSend: stripQueries,
    });
  } catch {
    // Telemetry is best effort.
  }
};
