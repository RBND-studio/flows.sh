import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

export const HintDemo = () => {
  return (
    <Flex flexShrink={0} alignItems="center" flexDirection="column" gap="space12">
      {/* Hint tooltip */}
      <Box
        position="relative"
        bg="pane.bg.elevated"
        borderWidth={1}
        borderColor="border.neutral"
        borderRadius="radius12"
        p="space16"
        w="100%"
        shadow="antimetal"
      >
        <Text variant="titleM" mb="space2">
          What's new
        </Text>
        <Text variant="bodyS" color="fg.neutral.muted">
          We've added a new dashboard with better analytics to help you track your progress.
        </Text>
        <Flex mt="space16">
          <Button variant="black" size="small" asChild>
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

      {/* Hotspot */}
      <Box
        w="16px"
        h="16px"
        borderRadius="radius100"
        bg="button.black.bg.rest"
        cursor="pointer"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius="radius100"
          bg="button.black.bg.rest"
          className={css({ animation: "ping 2s cubic-bezier(0,0,.2,1) infinite" })}
        />
      </Box>
    </Flex>
  );
};
