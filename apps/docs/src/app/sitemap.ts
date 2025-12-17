import { DOMAIN } from "lib/constants";
import { source } from "lib/source";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => {
    const isHomePage = page.url === "/";
    // Special handling for the home page to exclude the trailing slash
    if (isHomePage) {
      return {
        url: `https://${DOMAIN}/docs`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1.0,
      };
    }
    return {
      url: `https://${DOMAIN}/docs${page.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });
}
