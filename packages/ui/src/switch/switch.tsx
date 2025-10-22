"use client";

import { cva } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import * as RadixSwitch from "@radix-ui/react-switch";
import { type FC, type ReactNode, useId } from "react";

import { Label } from "../label";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  label?: ReactNode;
  labelClassName?: string;
  className?: string;
};

export const Switch: FC<Props> = ({ onChange, className, label, labelClassName, ...props }) => {
  const id = useId();

  const switchRender = (
    <RadixSwitch.Root className={root()} onCheckedChange={onChange} {...props} id={props.id ?? id}>
      <RadixSwitch.SwitchThumb className={thumb()} />
    </RadixSwitch.Root>
  );

  return (
    <Flex alignItems="center" className={className} gap="space8">
      {switchRender}
      {label !== undefined ? (
        <Label className={labelClassName} htmlFor={props.id ?? id}>
          {label}
        </Label>
      ) : null}
    </Flex>
  );
};

const root = cva({
  base: {
    cursor: "pointer",
    width: 36,
    height: 20,
    borderRadius: 9999,
    position: "relative",
    fastEaseInOut: "background",
    bg: "newControl.bg.strong",
    _hover: {
      bg: "newControl.bg.strongHover",
    },
    "&[data-state='checked']": {
      bg: "newControl.bg.success",
      _hover: {
        bg: "newControl.bg.successHover",
      },
    },
    _disabled: {
      bg: "newControl.bg.disabled",
      pointerEvents: "none",
    },
  },
});

const thumb = cva({
  base: {
    display: "block",
    width: 16,
    height: 16,
    borderRadius: 9999,
    bg: "newBg.neutral",
    boxShadow: "l1",
    transitionDuration: "fast",
    transitionTimingFunction: "easeInOut",
    transform: "translateX(2px)",
    "&[data-state='checked']": {
      transform: "translateX(18px)",
    },
  },
});
