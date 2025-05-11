import { Box, Flex } from "@flows/styled-system/jsx";
import { Check16, ChevronDown16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Text } from "ui";

import { CarouselWaves } from "./carousel-waves";

const items = [
  {
    title: "Sign up",
    icon: (
      <Flex borderRadius="100%" bg="newFg.success" flexShrink={0}>
        <Icon icon={Check16} color="newBg.neutral" />
      </Flex>
    ),
  },
  {
    title: "Create your first issue",
    icon: (
      <Box
        borderRadius="100%"
        borderWidth={1}
        borderColor="newBorder.neutral"
        height={16}
        width={16}
        flexShrink={0}
      />
    ),
  },
  {
    title: "Create a project",
    icon: (
      <Box
        borderRadius="100%"
        borderWidth={1}
        borderColor="newBorder.neutral"
        height={16}
        width={16}
        flexShrink={0}
      />
    ),
  },
  {
    title: "Invite team members",
    icon: (
      <Box
        borderRadius="100%"
        borderWidth={1}
        borderColor="newBorder.neutral"
        height={16}
        width={16}
        flexShrink={0}
      />
    ),
  },
];

export const UserOnboardingViz = (): ReactNode => {
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
        p="space16"
        borderRadius="radius12"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        flexDirection="column"
        gap="space8"
        shadow="l2"
        background="pane.bg.elevated"
        maxW={254}
        mx="auto"
      >
        <Text variant="titleS">Get started with Acme</Text>
        {items.map((item) => (
          <Flex
            borderWidth={1}
            borderRadius="radius8"
            borderColor="newBorder.neutral.muted"
            p={10}
            gap="space6"
            key={item.title}
          >
            {item.icon}
            <Text w="100%" variant="titleXs">
              {item.title}
            </Text>
            <Icon icon={ChevronDown16} color="newFg.neutral.subtle" />
          </Flex>
        ))}
      </Flex>
      <CarouselWaves />
    </Box>
  );
};
