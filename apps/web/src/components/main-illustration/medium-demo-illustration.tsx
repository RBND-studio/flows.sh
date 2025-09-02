"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section } from "components/ui";
import { type ReactNode, useEffect, useState } from "react";
import { Icon, Text } from "ui";

import { HeroIllustrationGlow, HeroIllustrationLine } from "./decorations";
import { demoTabsData } from "./demo-tabs-data";
import { HeroWaves } from "./hero-waves";

const ANIMATION_DURATION = 5000; // ms

export const MediumDemoIllustration = (): ReactNode => {
  const [tab, setTab] = useState(0);
  const [mouseInside, setMouseInside] = useState(false);

  // Change tab every 5 seconds
  useEffect(() => {
    // If the mouse is inside the application area, do not change the tab
    if (mouseInside) return;

    const interval = setInterval(() => {
      setTab((prev) => (prev + 1) % demoTabsData.length);
    }, ANIMATION_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, [tab, mouseInside]);

  return (
    <Section maxWidth="1200px!" role="img">
      <Box>
        <Box
          aria-hidden="true"
          opacity={0}
          animation="bottomSlideIn 0.6s ease-out"
          animationDelay="0.3s"
          animationFillMode="forwards"
          md={{
            mx: "space16",
            height: 560,
          }}
          height={400}
          p="space12"
          position="relative"
          borderRadius="radius24"
          borderWidth={1}
          borderColor="newBorder.neutral.placeholder"
          background="special.glassMorph"
          backdropFilter="blur(4px)"
          mb="space40"
          maskImage="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.953) 55.5%, rgba(0, 0, 0, 0.886) 61%, rgba(0, 0, 0, 0.816) 65.5%, rgba(0, 0, 0, 0.733) 69%, rgba(0, 0, 0, 0.647) 72.5%, rgba(0, 0, 0, 0.557) 75.5%, rgba(0, 0, 0, 0.467) 78%, rgba(0, 0, 0, 0.376) 80.5%, rgba(0, 0, 0, 0.29) 83%, rgba(0, 0, 0, 0.21) 85%, rgba(0, 0, 0, 0.14) 87.5%, rgba(0, 0, 0, 0.082) 90%, rgba(0, 0, 0, 0.04) 93%, rgba(0, 0, 0, 0.01) 96%, rgba(0, 0, 0, 0) 100%)"
        >
          <Flex
            flexDirection="column"
            borderRadius="radius12"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            overflow="hidden"
            height="100%"
          >
            <Flex
              background="newBg.neutral"
              alignItems="stretch"
              borderBottomWidth="1px"
              borderBottomColor="newBorder.neutral"
              md={{ display: "flex" }}
              display="none"
            >
              <Flex
                gap="space6"
                px="space12"
                borderRightWidth="1px"
                borderRightColor="newBorder.neutral"
                alignItems="center"
              >
                {/* 3 dots */}
                {[...Array(3)].map((_, index) => (
                  <Box
                    // eslint-disable-next-line react/no-array-index-key -- index is fine here
                    key={index}
                    height={8}
                    width={8}
                    borderRadius="50%"
                    backgroundColor="newBg.neutral.strong"
                  />
                ))}
              </Flex>
              {demoTabsData.map((tabItem, tabIndex) => (
                <button
                  type="button"
                  key={tabItem.label}
                  className={css({
                    display: "flex",
                    gap: "space6",
                    p: "space12",
                    borderRightWidth: "1px",
                    borderRightColor: "newBorder.neutral",
                    alignItems: "center",
                    cursor: "pointer",
                    position: "relative",
                    fastEaseInOut: "all",
                    _hover: { backgroundColor: "newBg.neutral.muted" },
                    color: tabIndex === tab ? "newFg.neutral" : "newFg.neutral.subtle",
                  })}
                  onClick={() => setTab(tabIndex)}
                >
                  {tabIndex === tab && !mouseInside && (
                    <Box
                      position="absolute"
                      left={0}
                      top={0}
                      bottom={0}
                      right={0}
                      backgroundColor="newBg.neutral.strong"
                      animation={`scaleX ${ANIMATION_DURATION}ms linear`}
                      opacity={0.2}
                      transform="scaleX(0)"
                      transformOrigin="left"
                    />
                  )}

                  <Icon color="inherit" icon={tabItem.icon} className={css({ zIndex: 1 })} />
                  <Text variant="bodyS" weight="600" zIndex={1} color="inherit">
                    {tabItem.label}
                  </Text>
                </button>
              ))}
            </Flex>
            <Box
              height="100%"
              overflow="hidden"
              opacity={0}
              animation="fadeIn 0.6s ease-out"
              animationDelay="0.6s"
              animationFillMode="forwards"
              onMouseEnter={() => setMouseInside(true)}
              onMouseLeave={() => setMouseInside(false)}
            >
              <PlaceholderApplication
                insideSlot={tab === 0 || tab === 2 ? demoTabsData[tab].element : undefined}
                sidebarTooltipSlot={tab === 1 ? demoTabsData[tab].element : undefined}
                bannerSlot={tab === 3 ? demoTabsData[tab].element : undefined}
                cardSlot={tab === 4 ? demoTabsData[tab].element : undefined}
              />
            </Box>
          </Flex>
          <HeroIllustrationLine />
        </Box>
      </Box>
      <HeroIllustrationGlow />
      <HeroWaves />
    </Section>
  );
};
