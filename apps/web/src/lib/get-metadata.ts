import { links } from "lib/links";
import { type Metadata } from "next";
import { type OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";

import { DOMAIN, PRODUCTION } from "./constants";

type WebMetadataProps = {
  /**
   * The title of the webpage without trailing tag (eg. "– Flows", "– Blog")
   */
  title: string;
  description: string;
  openGraphType?: OpenGraphType;
  /**
   * Page category (e.g. "Blog", "Changelog", "Documentation"). This is added to the page title and used in og image as a tag
   */
  pageCategory?: string;
  /**
   * Optionally replace autogenerate og image
   */
  images?: {
    url: string | URL;
    secureUrl?: string | URL | undefined;
    alt?: string | undefined;
    type?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
  }[];
  /**
   * Optionally remove the title slug (e.g. "– Blog") from the page title
   */
  removeTitleSlug?: boolean;
};

export const getWebMetadata = ({
  title,
  description,
  openGraphType,
  pageCategory,
  images,
  removeTitleSlug,
}: WebMetadataProps): Metadata => {
  const titleSlug = removeTitleSlug ? "" : ` – ${pageCategory ?? "Flows"}`;

  const mainTitle = title + titleSlug;

  const metadata: Metadata = {
    metadataBase: new URL(`https://${DOMAIN}`),
    title: mainTitle,
    description,
    openGraph: {
      title: mainTitle,
      description,
      url: "./",
      type: openGraphType ?? "website",
      locale: "en_US",
      siteName: "Flows",
      images: images
        ? images
        : [
            {
              url: links.ogImage({ title, type: pageCategory }),
              width: 1200,
              height: 630,
              alt: mainTitle,
              type: "image/png",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: mainTitle,
      description,
      images: images
        ? images
        : [
            {
              url: links.ogImage({ title, type: pageCategory }),
              width: 1200,
              height: 630,
              alt: mainTitle,
              type: "image/png",
            },
          ],
      creator: "@flows_sh",
    },
    alternates: {
      canonical: "./",
    },
    keywords: ["flows", "onboarding", "product adoption", "user onboarding", "user adoption"],
    robots: PRODUCTION ? undefined : "noindex,nofollow",
  };

  return metadata;
};
