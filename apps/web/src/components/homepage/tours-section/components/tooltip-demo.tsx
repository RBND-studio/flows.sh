import { Box, Flex } from "@flows/styled-system/jsx";
import { Close16 } from "icons";
import { Button, Icon, Text } from "ui";
import { ProgressDots } from "./progress-dots";
import { css } from "@flows/styled-system/css";

export const TooltipDemo = () => {
  return (
    <Box position="relative">
      <Box
        position="relative"
        bg="pane.bg.elevated"
        borderWidth={1}
        borderColor="border.neutral"
        borderRadius="radius12"
        p="space16"
        w="100%"
        maxW={280}
        shadow="antimetal"
        zIndex={2}
      >
        <Box position="absolute" top="space20" right="space20">
          <Icon icon={Close16} color="fg.neutral.muted" />
        </Box>

        <Text variant="titleM" mr="space24" mb="space2">
          Getting started
        </Text>
        <Text variant="bodyS" color="fg.neutral.muted">
          This is where you can find all your workflows. Click next to continue.
        </Text>

        <Flex
          mt="space16"
          justifyContent="space-between"
          alignItems="center"
          columnGap="space8"
          rowGap="space16"
          flexWrap="wrap"
        >
          <ProgressDots count={3} active={0} />
          <Flex gap="space8" flex={1} justifyContent="flex-end">
            <Button variant="secondary" size="small" asChild>
              <div
                className={css({
                  pointerEvents: "none",
                })}
              >
                Back
              </div>
            </Button>
            <Button variant="black" size="small" asChild>
              <div
                className={css({
                  pointerEvents: "none",
                })}
              >
                Next
              </div>
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* Arrow pointing down */}
      <Box position="absolute" bottom={-6} left="calc(50% - 8px)" w="16px" h="16px">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          transform="rotate(45deg)"
          borderRadius={3}
          bg="pane.bg.elevated"
          zIndex={2}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          transform="rotate(45deg)"
          borderRadius={3}
          outlineWidth={1}
          outlineColor="border.neutral"
          outlineStyle="solid"
          shadow="l2"
          bg="border.neutral"
        />
      </Box>
    </Box>
  );
};
