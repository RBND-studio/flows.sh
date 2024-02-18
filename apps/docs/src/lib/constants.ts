/* eslint-disable turbo/no-undeclared-env-vars -- not needed */

export const PRODUCTION = process.env.NEXT_PUBLIC_ENV === "prod";

export const SEO_PROPS = {
  titleTemplate: "%s – Flows docs",
  defaultTitle: "Flows docs",
  openGraph: {
    type: "website",
    title: "Flows: Onboarding for modern SaaS",
    description:
      "Flows is a better way to onboard users and drive product adoption. With advanced flow steps and modern architecture, Flows is the tool for modern SaaS companies.",
    images: [{ url: "https://flows.sh/og.png" }],
    url: "https://flows.sh",
    locale: "en_US",
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@flows_sh",
  },
  description:
    "Flows is a better way to onboard users and drive product adoption. With advanced flow steps and modern architecture, Flows is the tool for modern SaaS companies.",
  keywords: ["flows", "onboarding", "product adoption", "user onboarding", "user adoption"],
  noindex: !PRODUCTION,
  nofollow: !PRODUCTION,
};
