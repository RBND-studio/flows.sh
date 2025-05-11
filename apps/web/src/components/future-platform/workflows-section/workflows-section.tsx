import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import type { JSX } from "react";
import { Text } from "ui";

import { WorkflowsBlocks } from "./workflows-blocks";
import { WorkflowsExample } from "./workflows-example";
import { WorkflowsFeatures } from "./workflows-features";

export const WorkflowsSection = (): JSX.Element => {
  return (
    <>
      <Section pt="space80" pb="space40" md={{ pt: "space140", pb: "space64" }}>
        <Text mb="space24" variant="title3xl" as="h2">
          Design the user journey
        </Text>
        <Text maxWidth="480px" color="muted" variant="bodyL">
          From simple banners to onboarding checklists and product tours. Design flexible, custom
          experiences that integrate directly into your application.
        </Text>
      </Section>

      <Section>
        <Flex alignItems="center" justifyContent="center" width="100%" height={400} role="img">
          <WorkflowsExample />
        </Flex>
      </Section>

      <WorkflowsFeatures />
      <WorkflowsBlocks />
    </>
  );
};
