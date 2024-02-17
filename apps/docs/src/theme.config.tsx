import { type DocsThemeConfig } from "nextra-theme-docs";

import { BetterCallout } from "./components/better-callout";
import { Demo } from "./components/demo";
import { DocsLogo } from "./components/docs-logo";
import { SectionLink } from "./components/section-link";
import { PRODUCTION } from "./lib/constants";

const config: DocsThemeConfig = {
  sidebar: {
    toggleButton: true,
  },
  logo: <DocsLogo />,
  logoLink: false,
  project: {
    link: "https://github.com/RBND-studio",
  },
  docsRepositoryBase: "https://github.com/RBND-studio/flows-cloud/tree/main/apps/docs",
  feedback: { content: null },
  footer: {
    component: null,
  },
  darkMode: true,
  head: null,
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Flows docs",
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
  },
  primaryHue: 12,
  primarySaturation: 80,
  components: {
    Demo,
    SectionLink,
    BetterCallout,
  },
};

export default config;
