"use client";

import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section, Tabs } from "components/ui";
import { type FC, useState } from "react";

import { HeroIllustrationGlow, HeroIllustrationLine } from "./decorations";
import { HeroWaves } from "./hero-waves";
import { illustrationData as tabs } from "./illustration-data";

type Props = {
  defaultTab?: (typeof tabs)[number]["title"];
};

export const HeroIllustration: FC<Props> = ({ defaultTab }) => {
  const defaultTabTitle = defaultTab ?? tabs[0].title;
  const [activeTab, setActiveTab] = useState<string>(defaultTabTitle);
  const currentTab = tabs.find((tab) => tab.title === activeTab);

  return (
    <>
      <Section role="img">
        <Box
          aria-hidden="true"
          opacity={0}
          animation="bottomSlideIn 0.6s ease-out"
          animationDelay="0.3s"
          animationFillMode="forwards"
          height={320}
          borderWidth="1px"
          borderColor="newBorder.neutral.placeholder"
          background="special.glassMorph"
          backdropFilter="blur(4px)"
          borderRadius="radius24"
          position="relative"
          md={{
            mx: "space16",
            height: 400,
          }}
          p="space12"
          maskImage="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.953) 55.5%, rgba(0, 0, 0, 0.886) 61%, rgba(0, 0, 0, 0.816) 65.5%, rgba(0, 0, 0, 0.733) 69%, rgba(0, 0, 0, 0.647) 72.5%, rgba(0, 0, 0, 0.557) 75.5%, rgba(0, 0, 0, 0.467) 78%, rgba(0, 0, 0, 0.376) 80.5%, rgba(0, 0, 0, 0.29) 83%, rgba(0, 0, 0, 0.21) 85%, rgba(0, 0, 0, 0.14) 87.5%, rgba(0, 0, 0, 0.082) 90%, rgba(0, 0, 0, 0.04) 93%, rgba(0, 0, 0, 0.01) 96%, rgba(0, 0, 0, 0) 100%)"
        >
          <Box
            outlineStyle="solid"
            outlineWidth="1px"
            outlineColor="newBorder.neutral"
            borderRadius="radius12"
            height="100%"
            overflow="hidden"
          >
            {activeTab === "Growth experiments" ? currentTab?.element : null}
            <PlaceholderApplication
              sidebarTooltipSlot={activeTab === "User onboarding" ? currentTab?.element : undefined}
              bannerSlot={activeTab === "Product adoption" ? currentTab?.element : undefined}
              sidebarBannerSlot={activeTab === "In-app messaging" ? currentTab?.element : undefined}
              helpSlot={activeTab === "In-app help" ? currentTab?.element : undefined}
            />
          </Box>
          <HeroIllustrationLine />
        </Box>
        <HeroIllustrationGlow />
        <HeroWaves />
      </Section>
      <Flex
        width="100%"
        justifyContent="center"
        px="space24"
        mt="space24"
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
    </>
  );
};
