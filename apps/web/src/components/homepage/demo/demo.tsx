"use client";

import { Box } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section } from "components/ui";
import { type FC, useState } from "react";

import { tabs } from "./demo-data";
import { DemoTabs } from "./demo-tabs";

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
      <DemoTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* <Box
            background="bg"
            width="100%"
            max-height="530"
            borderRadius="radius12"
            borderColor="newBorder.neutral"
            borderWidth="1px"
            overflow="hidden"
            shadow="newL1"
          >
            {tabs.map((tab) => {
              const active = activeTab === tab.title;
              const hasImage = tab.imgLight && tab.imgDark;

              if (tab.videoUrl) {
                return (
                  <Box
                    position="relative"
                    width="100%"
                    height="0"
                    pb="56.15%"
                    key={tab.title}
                    display={active ? "block" : "none"}
                  >
                    <iframe
                      src={tab.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className={css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      })}
                    />
                  </Box>
                );
              }

              if (hasImage) {
                return (
                  <Box key={tab.title} display={active ? "block" : "none"}>
                    <ThemeImage
                      fetchPriority={active ? "high" : undefined}
                      srcDark={tab.imgDark}
                      srcLight={tab.imgLight}
                      alt={tab.title}
                      width={2844}
                      height={1605}
                    />
                  </Box>
                );
              }

              return null;
            })}
          </Box> */}
      <Box
        height={530}
        borderWidth="1px"
        borderColor="newBorder.neutral"
        borderRadius="radius12"
        shadow="newL1"
        overflow="hidden"
      >
        <PlaceholderApplication />
      </Box>
    </Section>
  );
};
