const { createContentlayerPlugin } = require("next-contentlayer");

const path = require("node:path");

const withContentlayer = createContentlayerPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "icons"],
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

module.exports = withContentlayer(nextConfig);
