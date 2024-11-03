import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderModal, PlaceholderTable, PlaceholderTooltip, Section } from "components/ui";
import { Text } from "ui";

export const ImplementationFeatures = (): JSX.Element => {
  return (
    <Section display="flex" gap="space40" pt="space80" pb="space64">
      <Box width="100%">
        <Text mb="space12" variant="titleXl">
          Inline components
        </Text>
        <Text mb="space32" variant="bodyL">
          Render inline components directly within your app’s UI using Slots as anchors.
        </Text>
        <Box
          borderColor="newBorder.neutral"
          borderWidth="1px"
          overflow="hidden"
          width="100%"
          height="288px"
          borderRadius={6}
          position="relative"
          background="pane.bg.secondary"
        >
          <Box
            position="absolute"
            bottom={0}
            left={0}
            height={48}
            background="linear-gradient(0deg, token(colors.pane.bg.secondary), transparent)"
            width="100%"
          />
          <PlaceholderTable />
        </Box>
      </Box>
      <Box width="100%">
        <Text mb="space12" variant="titleXl">
          Floating components
        </Text>
        <Text mb="space32" variant="bodyL">
          Show tooltips and modals anywhere in your app to guide users.
        </Text>
        <Flex
          alignItems="center"
          borderColor="newBorder.neutral"
          borderWidth="1px"
          layerStyle="dotBackground"
          width="100%"
          height="288px"
          borderRadius={6}
          p="space24"
          gap="space24"
        >
          <PlaceholderTooltip
            title="Click here"
            description="Lorem ipsum dolor sit amet. Some more text here to be written"
          />
          <PlaceholderModal />
        </Flex>
      </Box>
    </Section>
  );
};
