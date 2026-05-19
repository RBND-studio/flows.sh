import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { ArrowLeft16 } from "icons";
import { links } from "lib/links";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Button, Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
  exampleWorkflowId?: string;
};

export const ExampleHeader = ({ title, description, exampleWorkflowId }: Props): ReactNode => {
  return (
    <Section pt="space40" pb="space32" md={{ pt: "space80", pb: "space64", maxWidth: "1024px" }}>
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
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="space16">
        <Flex
          flexDirection="column"
          flex={1}
          // Force example button on new line on smaller screens
          flexBasis="560px"
        >
          <Text variant="title3xl" as="h1">
            {title}
          </Text>
          <Text variant="bodyL" color="newFg.neutral.muted">
            {description}
          </Text>
        </Flex>
        {exampleWorkflowId && (
          <Button asChild size="large">
            <a
              href={links.duplicateExample({ workflowId: exampleWorkflowId })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Use this example
            </a>
          </Button>
        )}
      </Flex>
    </Section>
  );
};
