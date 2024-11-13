import { Box, Wrap } from "@flows/styled-system/jsx";
import { TopLine } from "components/ui";
import { Section } from "components/ui/section";
import { SignupClick } from "components/utils/signup-click";
import type { ReactElement } from "react";
import { links } from "shared";
import { Button, Text } from "ui";

export const CtaBanner = (): ReactElement => {
  return (
    <Box
      position="relative"
      borderTopWidth="1px"
      mt="space40"
      md={{ mt: "space80" }}
      borderTopColor="newBorder.neutral"
    >
      <TopLine />
      <Section
        display="flex"
        flexDirection="column"
        alignItems="center"
        py="space80"
        px="space24"
        borderRightColor="newBorder.neutral"
        borderRightWidth="1px"
        borderLeftColor="newBorder.neutral"
        borderLeftWidth="1px"
        layerStyle="dotBackground"
        gap="space24"
        md={{ py: "space120" }}
      >
        <Text align="center" as="h2" maxWidth={400} variant="title3xl">
          Build anything with Flows
        </Text>
        <Wrap gap="space16" mt="space8" justifyContent="center">
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
        </Wrap>
      </Section>
    </Box>
  );
};
