const path = require("node:path");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
  defaultShowCopyCode: true,
  staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "standalone",
  swcMinify: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    optimizePackageImports: ["ui"],
  },
  basePath: "/docs",
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withNextra(nextConfig);
