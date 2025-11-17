import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { Button, Text } from "ui";

type Props = {
  title?: string;
  description?: string;
  actions?: ReactElement;
};

export const CtaBanner = ({
  title = "Build anything with Flows",
  description = "Build the product adoption experiences you've always wanted.",
  actions = (
    <SignupClick>
      <Button
        asChild
        size="large"
        className={css({
          shadow: "neutralFocus",
        })}
      >
        <a href={links.signUp}>Get started for free</a>
      </Button>
    </SignupClick>
  ),
}: Props): ReactElement => {
  return (
    <Section
      mt={{
        base: "space64",
        md: "space120",
      }}
      mb={{
        base: "space24",
        md: "space48",
      }}
    >
      <Flex
        flexDirection="column"
        gap="space24"
        md={{
          px: "space64",
          py: "space80",
        }}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        px="space24"
        py="space40"
        layerStyle="dotBackground"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        borderRadius="radius12"
        maxWidth={1024}
        mx="auto"
      >
        <Flex flexDirection="column" gap="space8" alignItems="center">
          <Text as="h2" variant="title3xl" textAlign="center">
            {title}
          </Text>
          <Text variant="bodyL" color="newFg.neutral.muted" textAlign="center">
            {description}
          </Text>
        </Flex>
        {actions}
        <Text variant="bodyS" color="newFg.neutral.muted" textAlign="center">
          No credit card required. Free forever.
        </Text>
      </Flex>
    </Section>
  );
};
