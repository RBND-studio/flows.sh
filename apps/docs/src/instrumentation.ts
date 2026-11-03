import { createRequestErrorReporter } from "telemetry/server";

export const onRequestError =
  process.env.NEXT_PUBLIC_TELEMETRY_ENABLED === "true"
    ? createRequestErrorReporter({
        version: process.env.NEXT_PUBLIC_APP_VERSION,
        environment: process.env.NEXT_PUBLIC_ENV,
      })
    : undefined;
