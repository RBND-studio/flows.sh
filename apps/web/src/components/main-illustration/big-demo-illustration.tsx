"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode, useEffect, useState } from "react";
import { Icon, Text } from "ui";

import { demoTabsData } from "./demo-tabs-data";
import { Section } from "components/ui/section";
import { NewHeroIllustrationGlow, NewHeroIllustrationLine } from "./decorations";

import { PlaceholderApplication } from "components/ui/placeholder-application/placeholder-application";
import { Dither } from "./dither";

const ANIMATION_DURATION = 5000; // ms

export const BigDemoIllustration = (): ReactNode => {
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
    <>
      <Section
        role="img"
        aria-label="Illustration of a demo application with multiple tabs and interactive elements"
      >
        <Box
          p={{ base: "0", md: "space40" }}
          position="relative"
          bg={{ base: "none", md: { _light: "neutral.25", _dark: "neutral.950" } }}
          overflow={{ base: "unset", md: "hidden" }}
          borderWidth={{ base: 0, md: 1 }}
          borderColor="border.neutral"
          borderRadius={{ base: 0, md: "radius24" }}
        >
          <Box
            aria-hidden="true"
            height={{ base: 480, md: 600 }}
            position="relative"
            zIndex={1}
            transition="margin 640ms ease-in-out"
            className={css({
              "&[data-is-in-viewport]": {
                mx: { base: 0, md: "space40" },
              },
            })}
          >
            <Flex
              flexDirection="column"
              borderRadius="radius12"
              borderWidth="1px"
              borderColor="border.neutral"
              overflow="hidden"
              height="100%"
              bg="bg.neutral"
              shadow="antimetal"
            >
              <Flex
                background="bg.neutral"
                alignItems="stretch"
                borderBottomWidth="1px"
                borderBottomColor="border.neutral"
                md={{ display: "flex" }}
                display="none"
              >
                <Flex
                  gap="space6"
                  px="space12"
                  borderRightWidth="1px"
                  borderRightColor="border.neutral"
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
                      backgroundColor="bg.neutral.strong"
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
                      borderRightColor: "border.neutral",
                      alignItems: "center",
                      cursor: "pointer",
                      position: "relative",
                      fastEaseInOut: "all",
                      _hover: { backgroundColor: "bg.neutral.muted" },
                      color: tabIndex === tab ? "fg.neutral" : "fg.neutral.subtle",
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
                        backgroundColor="bg.neutral.strong"
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
                onMouseEnter={() => setMouseInside(true)}
                onMouseLeave={() => setMouseInside(false)}
              >
                <PlaceholderApplication
                  insideSlot={
                    tab === 0 || tab === 2 || tab === 5 ? demoTabsData[tab].element : undefined
                  }
                  sidebarTooltipSlot={tab === 1 ? demoTabsData[tab].element : undefined}
                  bannerSlot={tab === 3 ? demoTabsData[tab].element : undefined}
                  cardSlot={tab === 4 ? demoTabsData[tab].element : undefined}
                />
              </Box>
            </Flex>
          </Box>
          <Box
            aria-hidden="true"
            background={{ base: "#000", _dark: "#fff" }}
            width="100%"
            borderRadius="100%"
            height={400}
            filter="blur(60px)"
            opacity={{ base: 0.2, _dark: 0.5 }}
            position="absolute"
            bottom={-400}
            left="50%"
            transform="translateX(-50%)"
            display={{ base: "none", md: "block" }}
          />
          <Box
            aria-hidden="true"
            w="100%"
            h="100%"
            mixBlendMode="overlay"
            opacity={{ base: 0.3, _dark: 1 }}
            // cspell:disable-next-line
            backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            display={{ base: "none", md: "block" }}
          />
        </Box>

        <NewHeroIllustrationLine />
        <NewHeroIllustrationLine className={css({ bottom: -1, top: "unset!" })} />
        <NewHeroIllustrationGlow />
      </Section>
      <Dither />
    </>
  );
};
