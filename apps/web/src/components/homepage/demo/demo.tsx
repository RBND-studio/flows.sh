"use client";

import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section, Tabs } from "components/ui";
import { type FC, useState } from "react";

import { tabs } from "./demo-data";

export const DemoSection: FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <Section
      p="space12"
      layerStyle="dotBackground"
      borderRightWidth="1px"
      borderRightColor="newBorder.neutral"
      borderLeftWidth="1px"
      borderLeftColor="newBorder.neutral"
      linesWrapper
    >
      <Flex width="100%" justifyContent="center">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Flex>

      <Box
        height={420}
        mt="space12"
        borderWidth="1px"
        borderColor="newBorder.neutral"
        borderRadius="radius12"
        shadow="newL1"
        overflow="hidden"
        position="relative"
        md={{ height: "530" }}
      >
        {activeTab === "Growth experiments"
          ? tabs.find((tab) => tab.title === activeTab)?.slideout
          : null}
        <PlaceholderApplication
          sidebarTooltipSlot={tabs.find((tab) => tab.title === activeTab)?.sidebarTooltipSlot}
          bannerSlot={tabs.find((tab) => tab.title === activeTab)?.bannerSlot}
          sidebarBannerSlot={tabs.find((tab) => tab.title === activeTab)?.sidebarBannerSlot}
          helpSlot={tabs.find((tab) => tab.title === activeTab)?.helpSlot}
        />
      </Box>
    </Section>
  );
};
