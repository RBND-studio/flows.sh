import { cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactElement } from "react";
import { Text } from "ui";

type Props = {
  activeTab: string;
  onTabChange?: (tab: string) => void;
  tabs: { title: string }[];
};

export const WorkflowsBlocksTabs = ({ activeTab, onTabChange, tabs }: Props): ReactElement => {
  return (
    <Flex flexDirection="column" gap="space8">
      {tabs.map((tab) => {
        const active = tab.title === activeTab;
        return (
          <button
            type="button"
            className={button({ active })}
            key={tab.title}
            {...(onTabChange && { onClick: () => onTabChange(tab.title) })}
          >
            <Box borderRadius={2} width={4} h={20} backgroundColor="newBg.neutral.strong" />
            <Text weight="600" color="inherit">
              {tab.title}
            </Text>
          </button>
        );
      })}
    </Flex>
  );
};

const button = cva({
  base: {
    cursor: "pointer",
    display: "flex",
    gap: "space12",
    alignItems: "center",
    fastEaseInOut: "all",
  },
  variants: {
    active: {
      true: {
        "& > div": {
          backgroundColor: "newBg.primary",
        },
        color: "newFg.neutral",
      },
      false: {
        color: "newFg.neutral.subtle",
        _hover: {
          color: "newFg.neutral.muted",
        },
      },
    },
  },
});
