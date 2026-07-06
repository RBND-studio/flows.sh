"use client";

import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode, useEffect, useState } from "react";

import { demoTabsData } from "./demo-tabs-data";
import { PlaceholderApplication } from "components/ui/placeholder-application/placeholder-application";

export const SmallDemoIllustration = (): ReactNode => {
  const [tab, setTab] = useState(0);

  // Change tab every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTab((prev) => (prev + 1) % demoTabsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      aria-hidden="true"
      flex={{ base: "unset", md: 1 }}
      height={380}
      p="space8"
      position="relative"
      borderRadius="radius16"
      borderWidth={1}
      borderColor="border.neutral.placeholder"
      background="special.glassMorph"
      backdropFilter="blur(4px)"
      mb="space40"
    >
      <Flex
        flexDirection="column"
        borderRadius="radius8"
        borderWidth="1px"
        borderColor="border.neutral"
        overflow="hidden"
        height="100%"
      >
        <Box height="100%" overflow="hidden">
          <PlaceholderApplication
            small
            insideSlot={tab === 0 || tab === 2 || tab === 5 ? demoTabsData[tab].element : undefined}
            sidebarTooltipSlot={tab === 1 ? demoTabsData[tab].element : undefined}
            bannerSlot={tab === 3 ? demoTabsData[tab].element : undefined}
            cardSlot={tab === 4 ? demoTabsData[tab].element : undefined}
          />
        </Box>
      </Flex>
      <Box
        aria-hidden="true"
        position="absolute"
        background="#067EFD"
        width="70%"
        top="0"
        left="0"
        height="70%"
        transform="translate(15%, 15%)"
        borderRadius="100%"
        zIndex={-1}
        filter="blur(80px)"
      />
    </Box>
  );
};
