// A lot of `PackFileCacheStrategy` errors in dev mode consider reverting to .js from .mjs
//https://github.com/vercel/next.js/discussions/30870#discussioncomment-1862620

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createContentlayerPlugin } from 'next-contentlayer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const withContentlayer = createContentlayerPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui'],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

export default withContentlayer(nextConfig);
