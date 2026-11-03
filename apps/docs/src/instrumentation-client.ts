// A dynamic import keeps web-vitals out of the main chunk, and out of the build when disabled.
// Beacons go to the marketing site's /api/telemetry on the same origin.
if (process.env.NEXT_PUBLIC_TELEMETRY_ENABLED === "true")
  void import("telemetry/vitals").then(({ reportWebVitals }) =>
    reportWebVitals({
      app: "flows-docs-frontend",
      version: process.env.NEXT_PUBLIC_APP_VERSION,
      environment: process.env.NEXT_PUBLIC_ENV,
    }),
  );
