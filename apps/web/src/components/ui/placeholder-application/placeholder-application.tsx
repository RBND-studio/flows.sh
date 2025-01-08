import { Box, Flex } from "@flows/styled-system/jsx";
import type { JSX } from "react";

import { PlaceholderSidebar } from "./placeholder-sidebar";

type Props = {
  bannerSlot?: JSX.Element;
  sidebarTooltipSlot?: JSX.Element;
  sidebarBannerSlot?: JSX.Element;
  helpSlot?: JSX.Element;
};

export const PlaceholderApplication = ({
  bannerSlot,
  sidebarTooltipSlot,
  sidebarBannerSlot,
  helpSlot,
}: Props): JSX.Element => {
  return (
    <Flex
      gap="space12"
      p="space12"
      background="pane.bg.secondary"
      maxWidth={1200}
      width="100%"
      height="100%"
      mdDown={{ flexDirection: "column" }}
      role="img"
    >
      <PlaceholderSidebar
        sidebarTooltipSlot={sidebarTooltipSlot}
        sidebarBannerSlot={sidebarBannerSlot}
      />
      <Flex
        flex={2}
        flexDirection="column"
        width="100%"
        height="100%"
        borderWidth="1px"
        borderColor="newBorder.neutral.muted"
        borderRadius="radius8"
        background="pane.bg.main"
        aria-hidden="true"
      >
        <Flex
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderBottomColor="newBorder.neutral.muted"
          py="6px"
          pl="10px"
          pr="6px"
        >
          <Flex width="100%" alignItems="center" gap="space8">
            <Box
              height={10}
              maxWidth={85}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
            />
            {helpSlot}
          </Flex>
          <Flex gap="space8">
            <Box
              height={20}
              width={20}
              backgroundColor="newBg.neutral.subtle"
              borderRadius="radius4"
            />
            <Box
              height={20}
              width={20}
              backgroundColor="newBg.neutral.subtle"
              borderRadius="radius4"
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" width="100%" height="100%" p="space8">
          {bannerSlot}
          <Flex height="100%" gap="space8">
            <Box
              width="100%"
              height="100%"
              backgroundColor="newBg.neutral.muted"
              borderRadius="radius4"
              borderWidth="1px"
              borderColor="newBorder.neutral.muted"
            />
            <Box
              width="100%"
              height="100%"
              backgroundColor="newBg.neutral.muted"
              borderRadius="radius4"
              borderWidth="1px"
              borderColor="newBorder.neutral.muted"
            />
            <Box
              width="100%"
              height="100%"
              backgroundColor="newBg.neutral.muted"
              borderRadius="radius4"
              borderWidth="1px"
              borderColor="newBorder.neutral.muted"
            />
            <Box
              width="100%"
              height="100%"
              backgroundColor="newBg.neutral.muted"
              borderRadius="radius4"
              borderWidth="1px"
              borderColor="newBorder.neutral.muted"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
