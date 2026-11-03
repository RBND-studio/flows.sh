import {
  onCLS,
  onFCP,
  onINP,
  onLCP,
  onTTFB,
  type MetricWithAttribution,
} from "web-vitals/attribution";

import type { TelemetryApp, TelemetryConfig } from "./constants";

// Undefined attribution fields drop out in JSON.stringify
type Values = Record<string, number | undefined>;
type Context = Record<string, string | undefined>;

/**
 * Real user Core Web Vitals without the Faro SDK, which would add ~40 KB gzipped to the critical
 * path of the marketing site and docs. Load it with a dynamic `import()` from
 * `instrumentation-client.ts`: the observers are buffered, so metrics from before it loads still
 * count. Sends Faro `measurement` items with the same names as the Faro SDK, so `faro.receiver`
 * ingests them and queries work across all frontends.
 */
export const reportWebVitals = ({
  app,
  version,
  environment,
}: TelemetryConfig & { app: TelemetryApp }): void => {
  // CLS and INP are reported when the page is hidden, possibly after client side route changes.
  // Attribute everything to the page the visit landed on.
  const url = location.origin + location.pathname;
  const queue: unknown[] = [];

  const add = (metric: MetricWithAttribution, values: Values, context: Context): void => {
    queue.push({
      type: "web-vitals",
      timestamp: new Date().toISOString(),
      values: { [metric.name.toLowerCase()]: metric.value, delta: metric.delta, ...values },
      context: {
        id: metric.id,
        rating: metric.rating,
        navigation_type: metric.navigationType,
        ...context,
      },
    });
  };

  const flush = (): void => {
    if (queue.length === 0) return;
    const body = JSON.stringify({
      meta: {
        app: { name: app, version, environment },
        page: { url },
        browser: {
          mobile: /Mobi/.test(navigator.userAgent),
          userAgent: navigator.userAgent,
          language: navigator.language,
          viewportWidth: String(innerWidth),
          viewportHeight: String(innerHeight),
        },
      },
      measurements: queue.splice(0),
    });
    void fetch("/api/telemetry", {
      method: "POST",
      body,
      keepalive: true,
      headers: { "content-type": "application/json" },
    }).catch(() => {
      // Telemetry is best effort.
    });
  };

  onCLS((m) => {
    const a = m.attribution;
    add(
      m,
      { largest_shift_value: a.largestShiftValue, largest_shift_time: a.largestShiftTime },
      {
        largest_shift_target: a.largestShiftTarget,
        load_state: a.loadState,
      },
    );
  });
  onFCP((m) => {
    const a = m.attribution;
    add(
      m,
      { first_byte_to_fcp: a.firstByteToFCP, time_to_first_byte: a.timeToFirstByte },
      {
        load_state: a.loadState,
      },
    );
  });
  onINP((m) => {
    const a = m.attribution;
    add(
      m,
      {
        input_delay: a.inputDelay,
        processing_duration: a.processingDuration,
        presentation_delay: a.presentationDelay,
        total_script_duration: a.totalScriptDuration,
      },
      {
        interaction_target: a.interactionTarget,
        interaction_type: a.interactionType,
        load_state: a.loadState,
      },
    );
  });
  onLCP((m) => {
    const a = m.attribution;
    add(
      m,
      {
        time_to_first_byte: a.timeToFirstByte,
        resource_load_delay: a.resourceLoadDelay,
        resource_load_duration: a.resourceLoadDuration,
        element_render_delay: a.elementRenderDelay,
      },
      { element: a.target },
    );
  });
  onTTFB((m) => {
    const a = m.attribution;
    add(
      m,
      {
        dns_duration: a.dnsDuration,
        connection_duration: a.connectionDuration,
        request_duration: a.requestDuration,
        waiting_duration: a.waitingDuration,
        cache_duration: a.cacheDuration,
      },
      {},
    );
  });

  // On window, so it runs after the web-vitals listeners on document have queued CLS and INP
  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
};
