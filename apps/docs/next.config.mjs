import path from "node:path";

import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
  defaultShowCopyCode: true,
  staticImage: true,
});

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://img.shields.io;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
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
  outputFileTracingRoot: path.join(path.resolve(), "../../"),
  experimental: {
    optimizePackageImports: ["ui", "icons", "shared"],
  },
  basePath: "/docs",
  images: {
    formats: ["image/webp"],
  },
};

export default withNextra(nextConfig);
