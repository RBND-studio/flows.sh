import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

import { CarouselWaves } from "./carousel-waves";

export const FeatureAdoptionViz = (): ReactNode => {
  return (
    <Box
      h={240}
      overflow="hidden"
      role="img"
      pt="space24"
      px="space12"
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
        borderRadius="radius12"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        flexDirection="column"
        shadow="l2"
        background="pane.bg.elevated"
        aria-hidden="true"
        maxW={254}
        mx="auto"
      >
        <Chart />
        <Flex
          flexDirection="column"
          gap="space4"
          borderTopWidth={1}
          borderColor="newBorder.neutral.placeholder"
          px="space12"
          pt="space12"
          pb="space24"
        >
          <Text variant="titleXs">New feature: Analytics</Text>
          <Text variant="bodyXxs">
            Analyze traffic and user behavior in your app with our new analytics feature.
          </Text>
        </Flex>
      </Flex>
      <CarouselWaves />
    </Box>
  );
};

const CHART_BARS = Array.from({ length: 16 });

const Chart = (): ReactNode => {
  return (
    <Flex
      gap="space4"
      w="100%"
      h={132}
      pt="space12"
      px="space12"
      alignItems="flex-end"
      position="relative"
    >
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
            bg="dataViz.blue.fg"
            borderTopRadius="2px"
            style={{
              height: `${height}px`,
            }}
            zIndex={1}
          />
        );
      })}
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justifyContent="space-between"
        flexDirection="column"
        px="space12"
      >
        <Box width="100%" h={1} bg="transparent" />
        <Box width="100%" h={1} bg="newBorder.neutral.placeholder" />
        <Box width="100%" h={1} bg="newBorder.neutral.placeholder" />
        <Box width="100%" h={1} bg="newBorder.neutral.placeholder" />
        <Box width="100%" h={1} bg="newBorder.neutral.placeholder" />
        <Box width="100%" h={1} bg="transparent" />
      </Flex>
    </Flex>
  );
};
