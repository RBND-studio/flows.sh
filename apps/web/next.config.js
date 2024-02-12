const { createContentlayerPlugin } = require("next-contentlayer");

const path = require("node:path");

const withContentlayer = createContentlayerPlugin();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  // eslint-disable-next-line turbo/no-undeclared-env-vars -- ignore
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "icons", "shared"],
  output: "standalone",
  swcMinify: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    optimizePackageImports: ["ui", "icons"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        // For placeholder images
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
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
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
