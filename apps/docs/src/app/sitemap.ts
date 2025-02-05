import { DOMAIN } from "lib/constants";
import { source } from "lib/source";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => {
    return {
      url: `https://${DOMAIN}/docs${page.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });
}
