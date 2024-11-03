import { Box, Flex } from "@flows/styled-system/jsx";
import { TopLine } from "components/ui";
import { Section } from "components/ui/section";
import { SignupClick } from "components/utils/signup-click";
import type { ReactElement } from "react";
import { links } from "shared";
import { Button, Text } from "ui";

//TODO: fix the layout for blog and feature pages
export const CtaBanner = (): ReactElement => {
  return (
    <Box position="relative" borderTopWidth="1px" borderTopColor="newBorder.neutral">
      <TopLine />
      <Section
        display="flex"
        flexDirection="column"
        alignItems="center"
        pb="space80"
        pt="space80"
        borderRightColor="newBorder.neutral"
        borderRightWidth="1px"
        borderLeftColor="newBorder.neutral"
        borderLeftWidth="1px"
        layerStyle="dotBackground"
        gap="space24"
      >
        <Text as="h2" variant="title2xl">
          Getting started is easy and free
        </Text>
        <Text maxWidth={460} align="center" variant="bodyL" color="muted">
          Install Flows SDK and start building your in-app experiences immediately.
        </Text>

        <Flex gap="space16" mt="space8">
          <SignupClick>
            <Button asChild shadow="highlight" size="large">
              <a href={links.signUp}>Get started for free</a>
            </Button>
          </SignupClick>
          <Button variant="secondary" asChild size="large">
            <a href={links.nextJsDemo} target="_blank" rel="noopener">
              Talk to us
            </a>
          </Button>
        </Flex>
      </Section>
    </Box>
  );
};
