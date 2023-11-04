const { createContentlayerPlugin } = require("next-contentlayer");

const path = require("node:path");

const withContentlayer = createContentlayerPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    optimizePackageImports: ["ui"],
  },
  images: {
    remotePatterns: [
      {
        // For placeholder images
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
