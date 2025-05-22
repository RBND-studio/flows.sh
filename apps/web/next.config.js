const { createContentlayerPlugin } = require("next-contentlayer2");

const path = require("node:path");

const withContentlayer = createContentlayerPlugin();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  // eslint-disable-next-line turbo/no-undeclared-env-vars -- ignore
  enabled: process.env.ANALYZE === "true",
});

const dev = process.env.NODE_ENV !== "production";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    connect-src 'self' https://app.lemonsqueezy.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src https://*.examples.flows.sh${dev ? " http://localhost:3000" : ""};
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  transpilePackages: ["ui", "icons", "shared"],
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"),
  experimental: {
    optimizePackageImports: ["ui", "icons", "shared"],
  },
  images: {
    formats: ["image/webp"],
  },
  rewrites: async () => {
    return [
      {
        source: "/box/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/box/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
  redirects() {
    return [
      {
        source: "/join-slack",
        destination:
          "https://join.slack.com/t/flows-sh/shared_invite/zt-2dkcznh40-gmX5TfKywRKA6iUGqbI~zg",
        permanent: false,
      },
      // Redirect all /solution routes to /solutions (affected pages `user-onboarding` and `feature-adoption` )
      {
        source: "/solution/:slug",
        destination: "/solutions/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
