const path = require("node:path");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
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
};

module.exports = withNextra(nextConfig);
