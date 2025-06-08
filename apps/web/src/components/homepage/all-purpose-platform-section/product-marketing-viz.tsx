import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Close16, Upgrade16 } from "icons";
import { type ReactNode } from "react";
import { Button, Icon, IconButton, Text } from "ui";

import { CarouselWaves } from "./carousel-waves";

export const ProductMarketingViz = (): ReactNode => {
  return (
    <Box
      h={240}
      overflow="hidden"
      pt="space24"
      px="space12"
      bg="pane.bg.elevated"
      borderTopRadius="radius12"
      role="img"
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
        aria-hidden="true"
        p="space24"
        borderRadius="radius12"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        flexDirection="column"
        shadow="l2"
        background="pane.bg.elevated"
        maxW={254}
        mx="auto"
        alignItems="center"
        position="relative"
      >
        <Box
          p="space8"
          bg="newBg.primary.muted"
          borderRadius="radius8"
          borderWidth="1px"
          borderColor="newBorder.primary"
          shadow="focus"
          mb="space16"
        >
          <Icon color="newFg.primary" icon={Upgrade16} />
        </Box>
        <Text variant="titleS" align="center" mb="space4">
          Try Pro for 14 days
        </Text>
        <Text variant="bodyS" color="newFg.neutral.muted" align="center" mb="space16">
          Upgrade to Pro for a limited time and test our advanced features, no commitment required.
        </Text>
        <Button variant="secondary" size="small" asChild>
          <div
            className={css({
              pointerEvents: "none",
            })}
          >
            Start free trial
          </div>
        </Button>
        {/* eslint-disable-next-line no-restricted-syntax -- not needed */}
        <IconButton size="small" variant="ghost" asChild>
          <div
            className={css({
              position: "absolute",
              top: "space12",
              right: "space12",
              cursor: "default",
            })}
          >
            <Close16 />
          </div>
        </IconButton>
      </Flex>
      <CarouselWaves />
    </Box>
  );
};
