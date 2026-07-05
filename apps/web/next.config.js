const path = require("node:path");
const createMdx = require("@next/mdx");
const { withNextVideo } = require("next-video/process");

const dev = process.env.NODE_ENV !== "production";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""};
    connect-src 'self' https://app.lemonsqueezy.com https://status.flows.sh https://*.flows-cloud.com wss://*.flows-cloud.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' https://api.producthunt.com blob: data:;
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
  // Compression is handled by Nginx, also it's required to disable compression for Next.js to support streaming
  compress: false,
  poweredByHeader: false,
  typedRoutes: true,
  transpilePackages: ["ui", "icons", "shared", "shared-private"],
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"),
  experimental: {
    // Currently turbopack doesn't support this feature, that's why we're doing production builds with webpack
    // More info: https://github.com/vercel/next.js/issues/75148
    optimizePackageImports: ["ui", "icons", "shared", "shared-private"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [50, 75],
  },
  rewrites: async () => {
    return {
      afterFiles: [
        {
          source: "/box/script.js",
          destination: "https://plausible.io/js/script.js",
        },
        {
          source: "/box/event",
          destination: "https://plausible.io/api/event",
        },
        {
          source: "/:path*.md",
          destination: "/md/:path*",
        },
      ],
      beforeFiles: [
        {
          source: "/:path*",
          destination: "/md/:path*",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
        },
      ],
    };
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
      // Redirect /solutions to /solutions/user-onboarding since we don't have a solutions landing page anymore
      {
        source: "/solutions",
        destination: "/solutions/user-onboarding",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMdx({
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter", "remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        // cspell:disable-next-line
        "@shikijs/rehype",
        {
          themes: {
            light: "github-light-default",
            dark: "github-dark-dimmed",
          },
          defaultColor: "light-dark()",
        },
      ],
    ],
  },
});

module.exports = withNextVideo(withMDX(nextConfig));
