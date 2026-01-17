import path from "node:path";

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const dev = process.env.NODE_ENV !== "production";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
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
        basePath: false,
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  poweredByHeader: false,
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
        destination: "/component-libraries/basics-v2/modal",
        permanent: true,
      },
      {
        source: "/components/tooltip",
        destination: "/component-libraries/basics-v2/tooltip",
        permanent: true,
      },
      {
        source: "/components/hint",
        destination: "/component-libraries/basics-v2/hint",
        permanent: true,
      },
      // Split docs into tabs
      {
        source: "/block-properties/action",
        destination: "/blocks/block-properties/action",
        permanent: true,
      },
      {
        source: "/block-properties/array",
        destination: "/blocks/block-properties/array",
        permanent: true,
      },
      {
        source: "/block-properties/block-key",
        destination: "/blocks/block-properties/block-key",
        permanent: true,
      },
      {
        source: "/block-properties/block-state",
        destination: "/blocks/block-properties/block-state",
        permanent: true,
      },
      {
        source: "/block-properties/block-trigger",
        destination: "/blocks/block-properties/block-trigger",
        permanent: true,
      },
      {
        source: "/block-properties/boolean",
        destination: "/blocks/block-properties/boolean",
        permanent: true,
      },
      {
        source: "/block-properties/number",
        destination: "/blocks/block-properties/number",
        permanent: true,
      },
      {
        source: "/block-properties/overview",
        destination: "/blocks/block-properties/overview",
        permanent: true,
      },
      {
        source: "/block-properties/page-targeting",
        destination: "/blocks/block-properties/page-targeting",
        permanent: true,
      },
      {
        source: "/block-properties/select",
        destination: "/blocks/block-properties/select",
        permanent: true,
      },
      {
        source: "/block-properties/slot",
        destination: "/blocks/block-properties/slot",
        permanent: true,
      },
      {
        source: "/block-properties/state-memory",
        destination: "/blocks/block-properties/state-memory",
        permanent: true,
      },
      {
        source: "/block-properties/string",
        destination: "/blocks/block-properties/string",
        permanent: true,
      },
      {
        source: "/block-properties/user-properties",
        destination: "/blocks/block-properties/user-properties",
        permanent: true,
      },
      {
        source: "/block-properties/wait",
        destination: "/blocks/block-properties/wait",
        permanent: true,
      },
      {
        source: "/blocks-overview",
        destination: "/blocks",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v1/hint",
        destination: "/blocks/basics-v2/hint",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v1/modal",
        destination: "/blocks/basics-v2/modal",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v1/overview",
        destination: "/blocks/basics-v2/overview",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v1/tooltip",
        destination: "/blocks/basics-v2/tooltip",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v2/card",
        destination: "/blocks/basics-v2/card",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v2/floating-checklist",
        destination: "/blocks/basics-v2/floating-checklist",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v2/hint",
        destination: "/blocks/basics-v2/hint",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v2/modal",
        destination: "/blocks/basics-v2/modal",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v2/overview",
        destination: "/blocks/basics-v2/overview",
        permanent: true,
      },
      {
        source: "/component-libraries/basics-v2/tooltip",
        destination: "/blocks/basics-v2/tooltip",
        permanent: true,
      },
      {
        source: "/component-libraries/overview",
        destination: "/blocks/basics-v2/overview",
        permanent: true,
      },
      {
        source: "/end-block",
        destination: "/blocks/end-block",
        permanent: true,
      },
      {
        source: "/frameworks/angular",
        destination: "/sdk/frameworks/angular",
        permanent: true,
      },
      {
        source: "/frameworks/nuxt",
        destination: "/sdk/frameworks/nuxt",
        permanent: true,
      },
      {
        source: "/frameworks/overview",
        destination: "/sdk",
        permanent: true,
      },
      {
        source: "/frameworks/svelte",
        destination: "/sdk/frameworks/svelte",
        permanent: true,
      },
      {
        source: "/javascript/installation",
        destination: "/sdk/javascript/installation",
        permanent: true,
      },
      {
        source: "/javascript/overview",
        destination: "/sdk/javascript/overview",
        permanent: true,
      },
      {
        source: "/javascript/reference",
        destination: "/sdk/javascript/reference",
        permanent: true,
      },
      {
        source: "/logic-blocks/filter",
        destination: "/blocks/logic-blocks/filter",
        permanent: true,
      },
      {
        source: "/logic-blocks/overview",
        destination: "/blocks/logic-blocks/overview",
        permanent: true,
      },
      {
        source: "/organization-setup/billing",
        destination: "/billing",
        permanent: true,
      },
      {
        source: "/react/installation",
        destination: "/sdk/react/installation",
        permanent: true,
      },
      {
        source: "/react/overview",
        destination: "/sdk/react/overview",
        permanent: true,
      },
      {
        source: "/react/reference",
        destination: "/sdk/react/reference",
        permanent: true,
      },
      {
        source: "/sdk-overview",
        destination: "/sdk",
        permanent: true,
      },
      {
        source: "/start-blocks/automatic-start",
        destination: "/blocks/start-blocks/automatic-start",
        permanent: true,
      },
      {
        source: "/start-blocks/manual-start",
        destination: "/blocks/start-blocks/manual-start",
        permanent: true,
      },
      {
        source: "/tour-block",
        destination: "/blocks/tour-block",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
