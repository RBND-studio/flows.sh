import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

export const EarnViz = (): ReactNode => {
  return (
    <Box
      h={240}
      maxW={320}
      mx="auto"
      overflow="hidden"
      role="img"
      w="100%"
      pt="space24"
      bg="pane.bg.elevated"
      borderTopRadius="radius12"
      position="relative"
      maskImage="linear-gradient(
               rgb(0, 0, 0) 70%,
               rgba(0, 0, 0, 0.886) 76.6%,
               rgba(0, 0, 0, 0.733) 81.4%, 
               rgba(0, 0, 0, 0.557) 85.3%,
               rgba(0, 0, 0, 0.376) 88.3%,
               rgba(0, 0, 0, 0.21) 91%, 
               rgba(0, 0, 0, 0.082) 94%, 
               rgba(0, 0, 0, 0.01) 97.6%,
               rgba(0, 0, 0, 0) 100%)"
    >
      <Flex
        w="100%"
        p="space16"
        borderRadius="radius8"
        borderWidth="1px"
        borderColor="newBorder.neutral"
        shadow="l2"
        flexDirection="column"
        gap="space8"
        pb="space24"
        bg="pane.bg"
      >
        <Text variant="titleS">Earnings</Text>
        <Text variant="bodyXs" color="newFg.neutral.muted" mb="space24">
          $2,579.48
        </Text>

        <Chart />
        <Flex justifyContent="space-between" alignItems="center">
          <Text variant="bodyXxs" color="newFg.neutral.subtle">
            Jan 2025
          </Text>
          <Text variant="bodyXxs" color="newFg.neutral.subtle">
            Dec 2025
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const CHART_BARS = Array.from({ length: 12 });

const Chart = (): ReactNode => {
  return (
    <Flex gap="space4" w="100%" h={80} pt="space12" alignItems="flex-end" position="relative">
      {CHART_BARS.map((_, i) => {
        // Create a feature adoption curve pattern
        const normalizedPosition = i / 14;
        // Use a modified sigmoid function for an adoption curve
        const baseHeight = 20 + 90 / (1 + Math.exp(-10 * (normalizedPosition - 0.5)));
        // Add some small variations
        const variance = Math.sin(i * 0.8) * 8;
        const height = Math.round(Math.min(120, Math.max(10, baseHeight + variance)));

        return (
          <Box
            // eslint-disable-next-line react/no-array-index-key -- nothing better to use
            key={i}
            width="100%"
            bg="dataViz.green.fg"
            borderTopRadius="4px"
            style={{
              height: `${height}px`,
            }}
            zIndex={1}
          />
        );
      })}
    </Flex>
  );
};
