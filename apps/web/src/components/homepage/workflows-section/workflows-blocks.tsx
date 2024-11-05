"use client";

import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { useState } from "react";
import { Text } from "ui";

import { WorkflowsBlocksTabs } from "./workflows-blocks-tabs";

const tabs = [{ title: "UI components" }, { title: "Workflow logic" }];

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
      linesWrapper
      md={{ flexDirection: "row" }}
    >
      <Box md={{ maxWidth: "320px" }} width="100%" px="space32" py="space24">
        <Text maxWidth={240} md={{ maxWidth: "unset" }} mb="space16" variant="titleXl">
          Create complex workflows with blocks
        </Text>
        <WorkflowsBlocksTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Box>
      <Box
        layerStyle="dotBackground"
        width="100%"
        height="280px"
        borderTopColor="newBorder.neutral"
        borderTopWidth="1px"
        md={{
          borderTopWidth: 0,
          borderLeftColor: "newBorder.neutral",
          borderLeftWidth: "1px",
        }}
      />
    </Section>
  );
};
