import { cva } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { type FC, type ReactElement, type SVGProps } from "react";
import { Icon, Text } from "ui";

type Props = {
  activeTab: string;
  onTabChange?: (tab: string) => void;
  tabs: { title: string; icon: FC<SVGProps<SVGSVGElement>> }[];
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
    textWrap: "nowrap",
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
