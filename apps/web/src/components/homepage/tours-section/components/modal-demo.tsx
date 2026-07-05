import { Box, Flex } from "@flows/styled-system/jsx";
import { Close16 } from "icons";
import { Button, Icon, Text } from "ui";
import { ProgressDots } from "./progress-dots";
import { css } from "@flows/styled-system/css";

export const ModalDemo = () => {
  return (
    <Box
      position="relative"
      bg="pane.bg.elevated"
      borderWidth={1}
      borderColor="border.neutral"
      borderRadius="radius16"
      p="space20"
      w="100%"
      shadow="antimetal"
      height="fit-content"
    >
      <Box position="absolute" top="space20" right="space20">
        <Icon icon={Close16} color="fg.neutral.muted" />
      </Box>

      <Text variant="titleM" textAlign="center" mr="space24" mb="space2">
        Welcome to Acme!
      </Text>
      <Text variant="bodyS" color="fg.neutral.muted" textAlign="center">
        Let's take a quick tour to help you get the most out of our platform.
      </Text>

      <Box mt="space20">
        <ProgressDots count={3} active={0} justify="center" />
      </Box>

      <Flex mt="space20" gap="space12" flexWrap="wrap-reverse">
        <Button variant="secondary" flex={1} asChild>
          <div
            className={css({
              pointerEvents: "none",
            })}
          >
            Maybe later
          </div>
        </Button>
        <Button variant="black" flex={1} asChild>
          <div
            className={css({
              pointerEvents: "none",
            })}
          >
            Get started
          </div>
        </Button>
      </Flex>
    </Box>
  );
};
