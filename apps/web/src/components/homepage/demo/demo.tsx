"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section, Tabs } from "components/ui";
import { type FC, useState } from "react";

import { tabs } from "./demo-data";

export const DemoSection: FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  const currentTab = tabs.find((tab) => tab.title === activeTab);

  return (
    <>
      <Flex
        width="100%"
        justifyContent="center"
        px="space24"
        mb="space24"
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          top: 0,
          right: "20px",
          width: "40px",
          background: "linear-gradient(270deg, token(colors.pane.bg), transparent)",
          md: { display: "none" },
        }}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Flex>
      <Section
        linesWrapper
        linesWrapperClassName={css({
          layerStyle: "dotBackground",
        })}
      >
        <Box
          height={420}
          outlineStyle="solid"
          outlineWidth="1px"
          outlineColor="newBorder.neutral"
          borderRadius="radius12"
          shadow="solid"
          overflow="hidden"
          position="relative"
          lg={{ height: "560" }}
          md={{ height: "480" }}
        >
          {activeTab === "Growth experiments" ? currentTab?.slideout : null}
          <PlaceholderApplication
            sidebarTooltipSlot={currentTab?.sidebarTooltipSlot}
            bannerSlot={currentTab?.bannerSlot}
            sidebarBannerSlot={currentTab?.sidebarBannerSlot}
            helpSlot={currentTab?.helpSlot}
          />
        </Box>
      </Section>
    </>
  );
};
