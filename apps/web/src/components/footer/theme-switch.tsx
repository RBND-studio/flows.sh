"use client";

import { cva } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { useFirstRender } from "hooks";
import { Moon16, Sun16, System16 } from "icons";
import { useTheme } from "next-themes";
import { type FC, type ReactNode } from "react";

const options: {
  value: string;
  label: string;
  icon: ReactNode;
}[] = [
  { value: "system", label: "System", icon: <System16 /> },
  { value: "light", label: "Light", icon: <Sun16 /> },
  { value: "dark", label: "Dark", icon: <Moon16 /> },
];

export const ThemeSwitch: FC = () => {
  const firstRender = useFirstRender();
  const { theme, setTheme } = useTheme();

  return (
    <Flex
      borderWidth={1}
      borderColor="newBorder.neutral"
      bg="pane.bg.secondary"
      borderRadius="radius6"
      p="space2"
      gap="space6"
      mb="space16"
    >
      {options.map((option) => (
        <button
          key={option.value}
          aria-label={option.label}
          title={option.label}
          type="button"
          onClick={() => setTheme(option.value)}
          className={buttonStyles({ active: firstRender ? false : theme === option.value })}
        >
          {option.icon}
        </button>
      ))}
    </Flex>
  );
};

const buttonStyles = cva({
  base: {
    p: "3px",
    borderRadius: "radius4",
    cursor: "pointer",
    fastEaseInOut: "all",
    borderWidth: 1,
    borderColor: "transparent",
  },
  variants: {
    active: {
      true: {
        borderColor: "pane.border.elevated",
        backgroundColor: "pane.bg.elevated",
        shadow: "l1",
      },
      false: {
        _hover: {
          backgroundColor: "newBg.neutral.strong",
        },
      },
    },
  },
});
