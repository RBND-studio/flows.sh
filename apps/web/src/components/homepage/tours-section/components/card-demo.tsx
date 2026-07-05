import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Close16 } from "icons";
import { Button, Icon, Text } from "ui";

export const CardDemo = () => {
  return (
    <Box
      position="relative"
      bg="pane.bg.elevated"
      borderWidth={1}
      borderColor="border.neutral"
      borderRadius="radius12"
      p="space20"
      w="100%"
      shadow="l1"
      flexShrink={0}
      height="fit-content"
    >
      <Box position="absolute" top="space20" right="space20">
        <Icon icon={Close16} color="fg.neutral.muted" />
      </Box>

      <Text variant="titleM" mr="space24" mb="space2">
        Connect your tools
      </Text>
      <Text variant="bodyS" color="fg.neutral.muted">
        Integrate with your existing tools to streamline your workflow.
      </Text>

      <Flex gap="space8" flex={1} justifyContent="flex-start" mt="space16">
        <Button variant="black" size="small" asChild>
          <div
            className={css({
              pointerEvents: "none",
            })}
          >
            Connect
          </div>
        </Button>
        <Button variant="secondary" size="small" asChild>
          <div
            className={css({
              pointerEvents: "none",
            })}
          >
            Learn more
          </div>
        </Button>
      </Flex>
    </Box>
  );
};
