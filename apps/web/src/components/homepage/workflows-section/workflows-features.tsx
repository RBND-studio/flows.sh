import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, PlaceholderTooltip, Section } from "components/ui";
import { Text } from "ui";

export const WorkflowsFeatures = (): JSX.Element => {
  return (
    <Section display="flex" gap="space40" pt="space80" pb="space64">
      <Box width="100%">
        <Text mb="space12" variant="titleXl">
          Product tours
        </Text>
        <Text mb="space32" variant="bodyL">
          Guide users step-by-step through your features with tours.
        </Text>
        <Box
          borderColor="newBorder.neutral"
          borderWidth="1px"
          width="100%"
          height="288px"
          borderRadius={6}
          overflow="hidden"
        >
          <PlaceholderApplication
            sidebarTooltipSlot={
              <Box position="relative">
                <Box
                  height={24}
                  width={24}
                  backgroundColor="newBg.neutral"
                  borderWidth="1px"
                  borderColor="newBorder.primary"
                  borderRadius="radius4"
                  shadow="focus"
                />
                <Box width={176} pt="space4" position="absolute">
                  <PlaceholderTooltip
                    title="Get started"
                    description="Start by creating your first issue in the project."
                  />
                </Box>
              </Box>
            }
          />
        </Box>
      </Box>
      <Box width="100%">
        <Text mb="space12" variant="titleXl">
          Semi-permanent elements
        </Text>
        <Text mb="space32" variant="bodyL">
          Add promotions or teach users with temporary elements in your app.
        </Text>
        <Box
          borderColor="newBorder.neutral"
          borderWidth="1px"
          width="100%"
          height="288px"
          borderRadius={6}
          overflow="hidden"
        >
          <PlaceholderApplication
            bannerSlot={
              <Flex
                p="space12"
                flexDirection="column"
                gap="2px"
                backgroundColor="neutral.800"
                borderRadius="radius4"
                mb="space8"
              >
                <Text color="white" variant="titleXs">
                  Acme Conf 2024
                </Text>
                <Text color="white" variant="bodyXs">
                  Less than one week left to get free virtual tickets to Acme Conf, our global
                  event.
                </Text>
              </Flex>
            }
          />
        </Box>
      </Box>
    </Section>
  );
};
