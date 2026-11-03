// A dynamic import keeps web-vitals out of the main chunk, and out of the build when disabled
if (process.env.NEXT_PUBLIC_TELEMETRY_ENABLED === "true")
  void import("telemetry/vitals").then(({ reportWebVitals }) =>
    reportWebVitals({
      app: "flows-web-frontend",
      version: process.env.NEXT_PUBLIC_APP_VERSION,
      environment: process.env.NEXT_PUBLIC_ENV,
    }),
  );
