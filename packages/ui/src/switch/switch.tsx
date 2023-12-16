import { cva } from "@flows/styled-system/css";
import * as RadixSwitch from "@radix-ui/react-switch";
import type { FC } from "react";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Switch: FC<Props> = ({ checked, onChange }) => {
  return (
    <RadixSwitch.Root checked={checked} className={root({ checked })} onCheckedChange={onChange}>
      <RadixSwitch.SwitchThumb className={thumb({ checked })} />
    </RadixSwitch.Root>
  );
};

const root = cva({
  base: {
    width: 32,
    height: 20,
    borderRadius: 9999,
    position: "relative",
    transitionDuration: "fast",
    transitionTimingFunction: "easeInOut",
    bg: "bg.subtle",
    _hover: {
      bg: "bg.subtleHover",
    },
    "&[data-state='checked']": {
      bg: "bg.primary",
      _hover: {
        bg: "bg.primaryHover",
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
      transform: "translateX(14px)",
    },
  },
});
