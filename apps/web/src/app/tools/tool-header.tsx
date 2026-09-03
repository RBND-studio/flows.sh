import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { ArrowLeft16 } from "icons";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
};

export const ToolHeader = ({ title, description }: Props): ReactNode => {
  return (
    <Section
      sideBorders
      pt={{ base: "space40", md: "space80" }}
      pb={{ base: "space32", md: "space64" }}
      px={{ base: "space24", md: "space40" }}
      bottomBorder
      decorator="vertical"
    >
      <Link
        href={routes.tools}
        className={css({
          display: "flex",
          gap: "space6",
          alignItems: "center",
          color: "fg.neutral.muted",
          width: "fit-content",
          mb: "space8",
          fastEaseInOut: "all",
          "& svg": {
            fastEaseInOut: "all",
          },
          _hover: {
            color: "fg.neutral",
            "& svg": {
              transform: "translateX(-4px)",
            },
          },
        })}
      >
        <Icon icon={ArrowLeft16} color="inherit" />
        <Text color="inherit" variant="bodyM">
          All tools
        </Text>
      </Link>

      <Flex flexDirection="column" flex={1}>
        <Text variant="title3xl" as="h1">
          {title}
        </Text>
        <Text variant="bodyL" color="fg.neutral.muted">
          {description}
        </Text>
      </Flex>
    </Section>
  );
};
