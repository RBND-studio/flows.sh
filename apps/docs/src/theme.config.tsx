import { css } from "@flows/styled-system/css";
import Image from "next/image";
import { type DocsThemeConfig } from "nextra-theme-docs";
import { Text } from "ui";

const config: DocsThemeConfig = {
  sidebar: {
    toggleButton: true,
  },

  logo: (
    <span className={css({ display: "flex", gap: "space8", alignItems: "center" })}>
      <Image alt="Logo" height={28} src="/docs/logo.svg" width={28} />
      <Text className={css({ color: "inherit" })} variant="bodyMBold">
        Flows
      </Text>
    </span>
  ),
  project: {
    link: "https://github.com/RBND-studio",
  },
  docsRepositoryBase: "https://github.com/RBND-studio/flows-cloud/tree/main/apps/docs",
  feedback: { content: null },
  footer: {
    text: "Flows",
  },
  darkMode: true,
  banner: {
    key: "beta-announcement",
    text: (
      <a href="https://flows.sh/" rel="noopener" target="_blank">
        🚧 Flows are in early development – use at your own risk. Join our waitlist to get notified
        when we launch! →
      </a>
    ),
  },
  head: null,
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Flows docs",
      defaultTitle: "Flows docs",
    };
  },
};

export default config;
