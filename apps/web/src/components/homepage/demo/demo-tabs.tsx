import { cva } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { type ReactElement } from "react";
import { Icon, Text } from "ui";

import { tabs } from "./demo-data";

type Props = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const DemoTabs = ({ activeTab, onTabChange }: Props): ReactElement => {
  return (
    <Flex overflow="auto" gap="space8" justifyContent="center" py="6px" mb="space12">
      {tabs.map((tab) => {
        const active = tab.title === activeTab;
        return (
          <button
            key={tab.title}
            type="button"
            onClick={() => onTabChange(tab.title)}
            className={button({ active })}
          >
            <Icon icon={tab.icon} />
            <Text weight="600" color="muted" align="center">
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
    background: "newBg.neutral",
    borderColor: "newBorder.neutral.muted",
    borderWidth: "1px",
    _hover: {
      bg: "bg.hover",
    },
  },
  variants: {
    active: {
      true: {
        bg: "bg.subtle",
        borderColor: "newBorder.neutral",
      },
    },
  },
});
