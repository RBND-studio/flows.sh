import { Box, Wrap } from "@flows/styled-system/jsx";
import { TopLine } from "components/ui";
import { Section } from "components/ui/section";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { Button, Text } from "ui";

export const CtaBanner = (): ReactElement => {
  return (
    <Box
      position="relative"
      borderTopWidth="1px"
      mt="space40"
      md={{ mt: "space80" }}
      borderTopColor="newBorder.neutral"
      layerStyle="dotBackground"
    >
      <TopLine />
      <Section
        display="flex"
        flexDirection="column"
        alignItems="center"
        py="space80"
        px="space24"
        gap="space24"
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
            <a href={links.docs.contact} target="_blank" rel="noopener">
              Talk to us
            </a>
          </Button>
        </Wrap>
      </Section>
    </Box>
  );
};
