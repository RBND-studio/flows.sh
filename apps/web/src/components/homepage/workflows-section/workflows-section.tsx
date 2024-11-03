import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { Text } from "ui";

import { WorkflowsBlocks } from "./workflows-blocks";
import { WorkflowsFeatures } from "./workflows-features";
import { WorkflowsSubfeatures } from "./workflows-subfeatures";

export const WorkflowsSection = (): JSX.Element => {
  return (
    <>
      <Section pt="space120" pb="space40">
        <Text mb="space12" color="muted">
          Workflows
        </Text>
        <Text mb="space24" variant="title3xl">
          Create the user journey
        </Text>
        <Text maxWidth="480px" color="muted" variant="bodyL">
          From simple banners, through onboarding checklists, to product tours. Design flexible,
          custom experiences that integrate directly into your application.
        </Text>
      </Section>

      <Section linesWrapper>
        <Box
          borderRightColor="newBorder.neutral"
          borderRightWidth="1px"
          borderLeftColor="newBorder.neutral"
          borderLeftWidth="1px"
          layerStyle="dotBackground"
          width="100%"
          height="400px"
        />
      </Section>

      <WorkflowsFeatures />
      <WorkflowsBlocks />
      <WorkflowsSubfeatures />
    </>
  );
};
