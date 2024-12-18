import { type DocsThemeConfig } from "nextra-theme-docs";
import { links } from "shared";

import { BetterCallout } from "./components/better-callout";
import { DocsLogo } from "./components/docs-logo";
import { DocsSignUp } from "./components/docs-sign-up";
import { HeadTags } from "./components/head-tags";
import { SectionLink } from "./components/section-link";
import { Timestamp } from "./components/timestamp";
import { DOMAIN } from "./lib/constants";

const config: DocsThemeConfig = {
  logo: <DocsLogo />,
  logoLink: false, // Disabled because we have a custom logo with links

  project: {
    link: links(DOMAIN).signUp,
    icon: <DocsSignUp />,
  },
  docsRepositoryBase: "https://github.com/RBND-studio/flows.sh/tree/main/apps/docs",
  feedback: { content: null },

  head: HeadTags,

  sidebar: {
    defaultMenuCollapseLevel: 1,
  },

  darkMode: true,
  color: {
    hue: 210,
    saturation: 85,
  },

  footer: {
    component: null,
  },

  components: {
    SectionLink,
    BetterCallout,
  },

  gitTimestamp({ timestamp }) {
    return <Timestamp timestamp={timestamp} />;
  },
};

export default config;
