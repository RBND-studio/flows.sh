import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { links } from "lib/links";
import { type Metadata } from "next";
import type { JSX, ReactNode } from "react";
import { Text } from "ui";

type Props = {
  children?: ReactNode;
};

export const metadata: Metadata = {
  title: "Changelog – Flows",
  description: "New updates and improvements to Flows.",
  openGraph: {
    type: "website",
    title: "Changelog – Flows",
    description: "New updates and improvements to Flows.",
    images: "/images/changelog/changelog-og.png",
    url: "/changelog",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog – Flows",
    description: "New updates and improvements to Flows.",
    images: "/images/changelog/changelog-og.png",
    creator: "@flows_sh",
  },
};

export default function ChangelogLayout({ children }: Props): JSX.Element {
  return (
    <Section maxWidth="820px!" my="space40" md={{ my: "space80" }} marginX="auto">
      <Flex
        flexDirection="column"
        gap="space4"
        borderBottomWidth={1}
        borderBottomColor="newBorder.neutral"
        pb="space64"
        mdDown={{ pb: "space40" }}
        alignItems="flex-start"
      >
        <Text as="h1" variant="title4xl">
          Changelog
        </Text>
        <Text color="newFg.neutral.muted" variant="bodyM">
          New updates and improvements to Flows.
        </Text>
        <a
          className={css({
            textStyle: "bodyM",
            color: "newFg.primary",
            mt: "space8",
          })}
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Twitter
        </a>
      </Flex>
      {children}
    </Section>
  );
}
