import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { ArrowRight16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import Link from "next/link";
import { type JSX } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

const TOOLS = [
  {
    title: "NPS calculator",
    description:
      "Turn raw survey scores into a Net Promoter Score, with the promoter, passive, and detractor split.",
    href: routes.npsCalculator,
  },
  {
    title: "CSAT calculator",
    description:
      "Work out the customer satisfaction score for one interaction, plus the average rating behind it.",
    href: routes.csatCalculator,
  },
  {
    title: "CES calculator",
    description:
      "Average a 1 to 7 effort scale into a Customer Effort Score and see where the friction sits.",
    href: routes.cesCalculator,
  },
  {
    title: "PMF survey calculator",
    description:
      "Score the product market fit survey and see how you sit against the 40 percent threshold.",
    href: routes.pmfCalculator,
  },
];

export const metadata: Metadata = getWebMetadata({
  title: "Tools",
  description: "Utilities and tools to help you build better products.",
});

export default function ToolsPage(): JSX.Element {
  return (
    <>
      <Section
        sideBorders
        bottomBorder
        decorator="vertical"
        pt={{ base: "space40", md: "space80" }}
        px="space24"
        pb="space40"
      >
        <Text as="h1" variant="title4xl" align="center" mb="space16" maxWidth={600} mx="auto">
          Tools
        </Text>
        <Text align="center" variant="bodyL" color="fg.neutral.muted" maxWidth={720} mx="auto">
          Utilities and tools to help you build better products.
        </Text>
      </Section>

      <Section sideBorders bottomBorder p={{ base: "space8", md: "space40" }}>
        <Box as="ul">
          {TOOLS.map((tool) => (
            <li key={tool.href}>
              <Link href={tool.href} className={toolLinkCss}>
                <Flex flexDirection="column" flex={1}>
                  <Text variant="titleM" as="h2">
                    {tool.title}
                  </Text>
                  <Text variant="bodyM" color="fg.neutral.muted">
                    {tool.description}
                  </Text>
                </Flex>
                <Icon className="tool-arrow" icon={ArrowRight16} color="fg.neutral.subtle" />
              </Link>
            </li>
          ))}
        </Box>
      </Section>
    </>
  );
}

const toolLinkCss = css({
  display: "flex",
  alignItems: "center",
  gap: "space16",
  padding: "space20",
  fastEaseInOut: "background-color",
  borderRadius: "radius6",
  "& .tool-arrow": {
    fastEaseInOut: "transform",
  },
  _hover: {
    backgroundColor: "bg.neutral.muted",
    "& .tool-arrow": {
      transform: "translateX(4px)",
    },
  },
});
