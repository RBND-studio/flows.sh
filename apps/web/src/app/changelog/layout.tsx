import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import { type Metadata } from "next";
import type { JSX, ReactNode } from "react";
import { Text } from "ui";

type Props = {
  children?: ReactNode;
};

export const metadata: Metadata = getWebMetadata({
  title: "Changelog",
  description: "New updates and improvements to Flows.",
});

export default function ChangelogLayout({ children }: Props): JSX.Element {
  return (
    <Section sideBorders bottomBorder>
      <Box
        maxWidth={900}
        py={{ base: "space40", md: "space80" }}
        mx="auto"
        borderLeftWidth={{ base: 0, md: 1 }}
        borderRightWidth={{ base: 0, md: 1 }}
        borderColor="border.neutral"
      >
        <Flex
          flexDirection="column"
          gap="space4"
          borderBottomWidth={1}
          borderBottomColor="border.neutral"
          pb="space64"
          mdDown={{ pb: "space40" }}
          alignItems="flex-start"
          px={{ base: "space16", md: "space40" }}
        >
          <Text as="h1" variant="title4xl">
            Changelog
          </Text>
          <Text color="fg.neutral.muted" variant="bodyM">
            New updates and improvements to Flows.
          </Text>
          <a
            className={css({
              textStyle: "bodyM",
              color: "fg.primary",
              mt: "space8",
            })}
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on X (Twitter)
          </a>
        </Flex>
        {children}
      </Box>
    </Section>
  );
}
