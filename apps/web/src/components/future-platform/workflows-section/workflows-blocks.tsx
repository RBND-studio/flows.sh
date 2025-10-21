"use client";

import { Box, Flex, Wrap } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { Component16 } from "icons";
import { type JSX, useState } from "react";
import { BlockIcon, Icon, Text } from "ui";

import { WorkflowsBlocksTabs } from "./workflows-blocks-tabs";

const tabs = [
  {
    title: "UI components",
    components: [
      {
        title: "Tooltip",
        icon: "tooltip",
        type: "component",
      },
      {
        title: "Modal",
        icon: "modal",
        type: "component",
      },
      {
        title: "Hint",
        icon: "hint",
        type: "component",
      },
      {
        title: "Banner",
        icon: "banner",
        type: "component",
      },
      {
        title: "Tour",
        icon: "tour",
        type: "tour",
      },
    ],
    extraComponent: (
      <Flex
        backgroundColor="newBg.neutral"
        shadow="newL1"
        borderRadius="radius8"
        py="10px"
        pr="12px"
        pl="10px"
        gap="space8"
        borderWidth="1px"
        borderColor="newBorder.neutral"
        alignItems="center"
        opacity={0}
        animation="fadeIn 0.4s ease-in-out"
        animationFillMode="forwards"
      >
        <Flex borderRadius="radius4" p="2px" backgroundColor="newBg.neutral.strong">
          <Icon icon={Component16} />
        </Flex>
        <Text weight="600">Custom component</Text>
      </Flex>
    ),
  },
  {
    title: "Workflow logic",
    components: [
      {
        title: "Start",
        icon: "start",
        type: "start",
      },
      {
        title: "Filter",
        icon: "filter",
        type: "filter",
      },
      {
        title: "End",
        icon: "end",
        type: "end",
      },
    ],
  },
];

export const WorkflowsBlocks = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  return (
    <Section
      display="flex"
      flexDirection="column"
      borderLeftColor="newBorder.neutral"
      borderLeftWidth="1px"
      borderRightColor="newBorder.neutral"
      borderRightWidth="1px"
      alignItems="center"
      md={{ flexDirection: "row" }}
    >
      <Box md={{ maxWidth: "320px" }} width="100%" px="space32" py="space32">
        <Text maxWidth={240} md={{ maxWidth: "unset" }} mb="space16" variant="titleXl" as="h3">
          Create complex workflows with blocks
        </Text>
        <WorkflowsBlocksTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Box>
      <Flex
        layerStyle="dotBackground"
        width="100%"
        height="280px"
        borderTopColor="newBorder.neutral"
        borderTopWidth="1px"
        alignItems="center"
        justifyContent="center"
        gap="space8"
        md={{
          borderTopWidth: 0,
          borderLeftColor: "newBorder.neutral",
          borderLeftWidth: "1px",
        }}
        role="img"
      >
        <Wrap aria-hidden="true" gap="space8" maxWidth={400} justifyContent="center">
          {tabs
            .find((tab) => tab.title === activeTab)
            ?.components.map((block) => (
              <Flex
                key={block.title}
                backgroundColor="newBg.neutral"
                shadow="newL1"
                borderRadius="radius8"
                py="10px"
                pr="12px"
                pl="10px"
                gap="space8"
                borderWidth="1px"
                borderColor="newBorder.neutral"
                alignItems="center"
                opacity={0}
                animation="fadeIn 0.4s ease-in-out"
                animationFillMode="forwards"
              >
                <BlockIcon blockType={block.type} blockIcon={block.icon} />
                <Text weight="600">{block.title}</Text>
              </Flex>
            ))}
          {tabs.find((tab) => tab.title === activeTab)?.extraComponent ?? null}
        </Wrap>
      </Flex>
    </Section>
  );
};
