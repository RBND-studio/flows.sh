import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import type { JSX } from "react";
import { Text } from "ui";

import { ImplementationCodeExample } from "./implementation-code-example";
import { ImplementationExample } from "./implementation-example";
import { ImplementationFeatures } from "./implementation-features";
import { ImplementationSubfeatures } from "./implementation-subfeatures";
import { ImplementationTemplateCards } from "./implementation-template-cards";

export const ImplementationSection = (): JSX.Element => {
  return (
    <>
      <Section
        display="flex"
        alignItems="center"
        gap="space48"
        pt="space80"
        pb="space40"
        flexDirection="column"
        md={{ pt: "space140", pb: "space64", flexDirection: "row" }}
      >
        <Box width="100%">
          <Text mb="space24" variant="title3xl" as="h2">
            Deploy your first workflow in minutes
          </Text>
          <Text maxWidth="480px" color="muted" variant="bodyL">
            Install the SDK, add UI components, and create your first workflow. With built-in UI
            components, you can start building right away—no complex setups required.
          </Text>
        </Box>
      </Section>

      <ImplementationTemplateCards />
      <ImplementationFeatures />
      <ImplementationExample codeExample={<ImplementationCodeExample />} />
      <ImplementationSubfeatures />
    </>
  );
};
