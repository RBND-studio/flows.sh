import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Demo apps are embedded on flows.sh/examples/*, which is the page that should rank
  headers: async () => [
    {
      source: "/(.*)",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    },
  ],
};

export default nextConfig;
