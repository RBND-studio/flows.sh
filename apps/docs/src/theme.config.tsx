import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { Text } from "ui";

const config: DocsThemeConfig = {
  logo: (
    <span className={css({ display: "flex", gap: "space8", alignItems: "center" })}>
      <Image alt="Logo" height={28} src="/logo.svg" width={28} />
      <Text className={css({ color: "inherit" })} variant="bodyMBold">
        Flows
      </Text>
    </span>
  ),
  project: {
    link: "https://github.com/RBND-studio/flows-js",
  },
  docsRepositoryBase: "https://github.com/RBND-studio/flows-cloud/tree/main/apps/docs",
  feedback: {
    useLink: () => "https://github.com/RBND-studio/flows-js/issues/new",
  },
  footer: {
    text: "Flows",
  },
};

export default config;
