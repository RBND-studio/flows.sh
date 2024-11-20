import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

import { PRODUCTION } from "../lib/constants";

export const HeadTags = (): JSX.Element => {
  const headConfig = useConfig();
  const { route } = useRouter();

  const title = headConfig.title + (route === "/" ? "" : " - Flows docs");
  const description =
    headConfig.frontMatter.description ||
    "Flows is a better way to onboard users and drive product adoption. With advanced flow steps and modern architecture, Flows is the tool for modern SaaS companies.";
  const image = "https://flows.sh/og.png";

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <meta httpEquiv="Content-Language" content="en" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://flows.sh/docs${route}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@flows_sh" />
      <meta name="twitter:site:domain" content="flows.sh" />

      <link rel="icon" href="/favicon.ico" type="image/svg+xml" />

      {!PRODUCTION && <meta name="robots" content="noindex, nofollow" />}
    </>
  );
};
