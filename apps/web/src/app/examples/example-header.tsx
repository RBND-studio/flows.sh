import { css } from "@flows/styled-system/css";
import { Section } from "components/ui";
import { ArrowLeft16 } from "icons";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
};

export const ExampleHeader = ({ title, description }: Props): ReactNode => {
  return (
    <Section pt="space40" pb="space32" md={{ pt: "space80", pb: "space64" }}>
      <Link
        href={routes.examples}
        className={css({
          display: "flex",
          gap: "space6",
          alignItems: "center",
          color: "newFg.neutral.muted",
          width: "fit-content",
          mb: "space8",
          fastEaseInOut: "all",
          "& svg": {
            fastEaseInOut: "all",
          },
          _hover: {
            color: "newFg.neutral",
            "& svg": {
              transform: "translateX(-4px)",
            },
          },
        })}
      >
        <Icon icon={ArrowLeft16} color="inherit" />
        <Text color="inherit" variant="bodyM">
          Examples library
        </Text>
      </Link>
      <Text variant="title3xl" as="h1">
        {title}
      </Text>
      <Text variant="bodyL" color="muted">
        {description}
      </Text>
    </Section>
  );
};
