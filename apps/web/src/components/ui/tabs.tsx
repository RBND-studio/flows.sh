import { cva } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { type ReactElement, type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  activeTab: string;
  onTabChange?: (tab: string) => void;
  tabs: { title: string; icon?: ReactNode }[];
};

export const Tabs = ({ activeTab, onTabChange, tabs }: Props): ReactElement => {
  return (
    <Flex overflow="auto" gap="space8" scrollbar="hidden">
      {tabs.map((tab) => {
        const active = tab.title === activeTab;
        return (
          <button
            key={tab.title}
            type="button"
            {...(onTabChange && { onClick: () => onTabChange(tab.title) })}
            className={button({ variant: active ? "active" : "resting" })}
          >
            {tab.icon ? tab.icon : null}
            <Text weight="600" color="inherit" align="center">
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
    gap: "space4",
    paddingLeft: "6px",
    paddingRight: "8px",
    paddingY: "space4",
    alignItems: "center",
    transitionTimingFunction: "easeInOut",
    transitionDuration: "fast",
    borderRadius: "6px",
    textWrap: "nowrap",
    borderWidth: "1px",
    bg: "newBg.neutral",
  },
  variants: {
    variant: {
      resting: {
        borderColor: "newBorder.neutral.muted",
        color: "newFg.neutral.muted",
        _hover: {
          borderColor: "newBorder.neutral",
          color: "newFg.neutral",
        },
      },
      active: {
        borderColor: "newBorder.neutral",
        color: "newFg.neutral",
        bg: "newBg.neutral.subtle",
      },
    },
  },
});
