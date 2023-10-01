const { createContentlayerPlugin } = require("next-contentlayer");

const path = require("node:path");

const withContentlayer = createContentlayerPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

module.exports = withContentlayer(nextConfig);
