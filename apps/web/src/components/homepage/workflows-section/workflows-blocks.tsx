import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { Text } from "ui";

export const WorkflowsBlocks = (): JSX.Element => {
  return (
    <Section
      display="flex"
      gap="space40"
      borderLeftColor="newBorder.neutral"
      borderLeftWidth="1px"
      alignItems="center"
      linesWrapper
    >
      <Box maxWidth={320} width="100%" pl="space32">
        <Text mb="space12" variant="titleXl">
          Create complex workflows with blocks
        </Text>
        <Text mb="space8" weight="600">
          UI components
        </Text>
        <Text weight="600">Workflow logic</Text>
      </Box>
      <Box
        borderRightColor="newBorder.neutral"
        borderRightWidth="1px"
        borderLeftColor="newBorder.neutral"
        borderLeftWidth="1px"
        layerStyle="dotBackground"
        width="100%"
        height="280px"
      />
    </Section>
  );
};
