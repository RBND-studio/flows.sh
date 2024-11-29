import { Flex } from "@flows/styled-system/jsx";
import React from "react";

import { PlaceholderSidebar } from "./placeholder-sidebar";

type Props = {
  sidebarTooltipSlot?: JSX.Element;
  sidebarBannerSlot?: JSX.Element;

  children?: React.ReactNode;
};

export const PlaceholderApplication = ({
  sidebarTooltipSlot,
  sidebarBannerSlot,

  children,
}: Props): JSX.Element => {
  return (
    <Flex
      gap="space12"
      p="space12"
      background="pane.bg.secondary"
      maxWidth={1000}
      width="100%"
      height="100%"
      mdDown={{ flexDirection: "column" }}
      role="img"
      layerStyle="card"
    >
      <PlaceholderSidebar
        sidebarTooltipSlot={sidebarTooltipSlot}
        sidebarBannerSlot={sidebarBannerSlot}
      />
      {children}
    </Flex>
  );
};
