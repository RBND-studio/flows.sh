"use client";

import { cva } from "@flows/styled-system/css";
import * as RadixSwitch from "@radix-ui/react-switch";
import type { FC } from "react";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export const Switch: FC<Props> = ({ onChange, ...props }) => {
  return (
    <RadixSwitch.Root className={root()} onCheckedChange={onChange} {...props}>
      <RadixSwitch.SwitchThumb className={thumb()} />
    </RadixSwitch.Root>
  );
};

const root = cva({
  base: {
    width: 36,
    height: 20,
    borderRadius: 9999,
    position: "relative",
    transitionDuration: "fast",
    transitionTimingFunction: "easeInOut",
    bg: "bg.strong",
    _hover: {
      bg: "bg.strongHover",
    },
    "&[data-state='checked']": {
      bg: "bg.success",
      _hover: {
        bg: "bg.successHover",
      },
    },
  },
});

const thumb = cva({
  base: {
    display: "block",
    width: 16,
    height: 16,
    borderRadius: 9999,
    bg: "bg",
    transitionDuration: "fast",
    transitionTimingFunction: "easeInOut",
    transform: "translateX(2px)",
    "&[data-state='checked']": {
      transform: "translateX(18px)",
    },
  },
});
