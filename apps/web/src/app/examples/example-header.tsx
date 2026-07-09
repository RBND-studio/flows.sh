import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { ArrowLeft16 } from "icons";
import { links } from "lib/links";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Button, Icon, Text } from "ui";
import { UseThisExampleDialog } from "./use-this-example-dialog";

type Props = {
  title: string;
  description: string;
  exampleWorkflowId?: string;
};

export const ExampleHeader = ({ title, description, exampleWorkflowId }: Props): ReactNode => {
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
        href={routes.examples}
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
          <Text variant="bodyL" color="fg.neutral.muted">
            {description}
          </Text>
        </Flex>
        {exampleWorkflowId ? (
          <Button asChild size="large">
            <a
              href={links.duplicateExample({ workflowId: exampleWorkflowId })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Use this example
            </a>
          </Button>
        ) : (
          <UseThisExampleDialog />
        )}
      </Flex>
    </Section>
  );
};
