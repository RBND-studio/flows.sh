"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section, Tabs } from "components/ui";
import { type FC, useState } from "react";

import { tabs } from "./demo-data";

type Props = {
  defaultTab?: (typeof tabs)[number]["title"];
};

export const DemoSection: FC<Props> = ({ defaultTab }) => {
  const defaultTabTitle = defaultTab ?? tabs[0].title;
  const [activeTab, setActiveTab] = useState<string>(defaultTabTitle);
  const currentTab = tabs.find((tab) => tab.title === activeTab);

  return (
    <>
      <Flex
        width="100%"
        justifyContent="center"
        px="space24"
        mb="space24"
        position="relative"
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
          {activeTab === "Growth experiments" ? currentTab?.element : null}
          <PlaceholderApplication
            sidebarTooltipSlot={activeTab === "User onboarding" ? currentTab?.element : undefined}
            bannerSlot={activeTab === "Product adoption" ? currentTab?.element : undefined}
            sidebarBannerSlot={activeTab === "In-app messaging" ? currentTab?.element : undefined}
            helpSlot={activeTab === "In-app help" ? currentTab?.element : undefined}
          />
        </Box>
      </Section>
    </>
  );
};
