import path from "node:path";

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

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
  async redirects() {
    return [
      {
        source: "/getting-started/migrate-to-flows-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/getting-started/quickstart",
        destination: "/quickstart",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "https://flows.sh/contact",
        permanent: true,
      },
      {
        source: "/migrate-to-flows-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*.mdx",
        destination: "/llms.mdx/:path*",
        permanent: true,
      },
      {
        source: "/create-custom-components",
        destination: "/guides/create-custom-components",
        permanent: true,
      },
      {
        source: "/block-templates",
        destination: "/components/overview",
        permanent: true,
      },
      {
        source: "/components/modal",
        destination: "/component-libraries/basics-v1/modal",
        permanent: true,
      },
      {
        source: "/components/tooltip",
        destination: "/component-libraries/basics-v1/tooltip",
        permanent: true,
      },
      {
        source: "/components/hint",
        destination: "/component-libraries/basics-v1/hint",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
