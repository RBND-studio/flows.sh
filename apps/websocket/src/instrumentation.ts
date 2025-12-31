import FastifyOtelInstrumentation from "@fastify/otel";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { AsyncLocalStorageContextManager } from "@opentelemetry/context-async-hooks";
import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from "@opentelemetry/core";
import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";
import { OTLPTraceExporter as GRPC_OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { B3InjectEncoding, B3Propagator } from "@opentelemetry/propagator-b3";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

// Exposes Prometheus metrics at http://localhost:9464/metrics , so that it can be scraped by Prometheus and sent to Grafana
const metricReader = new PrometheusExporter({
  port: 9464,
  //host: "0.0.0.0",
});

// Buffers spans and periodically sends them to the trace exporter
const spanProcessor = process.env.BACKEND_OTEL_TRACE_EXPORTER_ENDPOINT
  ? new BatchSpanProcessor(
      new GRPC_OTLPTraceExporter({
        url: process.env.BACKEND_OTEL_TRACE_EXPORTER_ENDPOINT,
      }),
    )
  : undefined;

export const otelSDK = new NodeSDK({
  // Batches and sends spans
  spanProcessor,
  // Adds metadata like service name to all telemetry data
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "flows-websocket",
  }),
  // Exposes metrics via Prometheus
  metricReader,
  // Keeps trace context across async boundaries (e.g., requests, promises)
  contextManager: new AsyncLocalStorageContextManager(),
  // Adds support for tracing various modules (NestJS, HTTP, Fastify, and more)
  instrumentations: [
    getNodeAutoInstrumentations(),
    new FastifyOtelInstrumentation({ registerOnInitialization: true }),
  ],
  // Supports multiple formats for propagating trace context across services, useful for distributed tracing
  textMapPropagator: new CompositePropagator({
    propagators: [
      new W3CTraceContextPropagator(),
      new W3CBaggagePropagator(),
      new B3Propagator(),
      new B3Propagator({
        injectEncoding: B3InjectEncoding.MULTI_HEADER,
      }),
    ],
  }),
});

// Gracefully shut down the SDK when the app is terminated (e.g., docker stop, Ctrl+C)
process.on("SIGTERM", () => {
  otelSDK
    .shutdown()
    .then(
      // eslint-disable-next-line no-console -- Logging successful shutdown
      () => console.log("NodeSDK (OTEL) shut down successfully"),
      // eslint-disable-next-line no-console -- Logging error if shutdown fails
      (err) => console.log("Error shutting down NodeSDK (OTEL)", err),
    )
    .finally(() => process.exit(0));
});
