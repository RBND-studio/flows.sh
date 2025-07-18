import { Box, Flex } from "@flows/styled-system/jsx";
import { Addon16, ArrowRight16, Upgrade16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Text } from "ui";

import { CarouselWaves } from "./carousel-waves";

export const RevenueExpansionViz = (): ReactNode => {
  return (
    <Box
      h={240}
      overflow="hidden"
      pt="space24"
      px="space12"
      role="img"
      bg="pane.bg.elevated"
      position="relative"
      borderTopRadius="radius12"
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
        justifyContent="center"
        alignItems="center"
        position="relative"
        aria-hidden="true"
        mx="auto"
        gap="space6"
        height="100%"
        zIndex={1}
      >
        <Flex
          p="space6"
          borderWidth="1px"
          borderColor="newBorder.neutral"
          borderRadius="radius8"
          bg="newBg.neutral"
        >
          <Text variant="titleXs">Free trial</Text>
        </Flex>
        <Icon icon={ArrowRight16} color="newFg.neutral.muted" />
        <Flex p="1px" bg="linear-gradient(45deg, #25A8FF, #3FFF95)" borderRadius="9px">
          <Flex
            p="space8"
            borderRadius="radius8"
            bg="newBg.neutral"
            gap="space6"
            alignItems="center"
          >
            <Icon icon={Upgrade16} />
            <Text variant="titleXs">Pro plan</Text>
          </Flex>
        </Flex>
        <Icon icon={ArrowRight16} color="newFg.neutral.muted" />
        <Flex p="1px" bg="linear-gradient(45deg, #FF3FB6, #FF3425)" borderRadius="9px">
          <Flex
            p="space8"
            borderRadius="radius8"
            bg="newBg.neutral"
            gap="space6"
            alignItems="center"
          >
            <Icon icon={Addon16} />
            <Text variant="titleXs">Add-ons</Text>
          </Flex>
        </Flex>
      </Flex>
      <Background />
      <CarouselWaves />
    </Box>
  );
};

const Background = (): ReactNode => (
  <Box position="absolute" top="0" left="0" width="100%" height="100%">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 326 240"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <g clipPath="url(#clip0_4632_5336)">
        <path
          d="M326.5 24C255.7 183.2 83 190.5 0 190.5L-100.5 153L-115.5 371L390 413.5L406.5 30.5C409.333 -38 397.3 -135.2 326.5 24Z"
          fill="#8B929B"
          fillOpacity="0.15"
          stroke="url(#paint0_linear_4632_5336)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4632_5336"
          x1="415.777"
          y1="441.816"
          x2="-195.522"
          y2="291.474"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3FB6" />
          <stop offset="1" stopColor="#FF3425" />
        </linearGradient>
        <clipPath id="clip0_4632_5336">
          <rect width="326" height="240" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </Box>
);
