"use client";

import { css, cx } from "@flows/styled-system/css";
import * as RadixSelect from "@radix-ui/react-select";
import { ArrowRight16, Close16 } from "icons";
import type { FC } from "react";

import { Button } from "../button";
import { Icon } from "../icon";

type Props = {
  value?: string;
  options: { value: string; label?: string }[];
  buttonClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  asInput?: boolean;
  onChange?: (value: string) => void;
};

export const Select: FC<Props> = ({ value, options, buttonClassName, placeholder }) => {
  return (
    <RadixSelect.Root value={value}>
      <RadixSelect.Trigger asChild>
        <Button
          className={cx(css({ position: "relative" }), buttonClassName)}
          endIcon={
            <RadixSelect.Icon asChild>
              <Icon icon={ArrowRight16} />
            </RadixSelect.Icon>
          }
          size="small"
          variant="secondary"
        >
          <RadixSelect.Value placeholder={placeholder} />
        </Button>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className={css({
            backgroundColor: "bg",
            borderRadius: "radius8",
            boxShadow: "l2",
            p: "space4",
            position: "relative",
            zIndex: 50,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "border.strong",
            "&[data-state=open]": {
              animationName: "enter",
              animationDuration: "120ms",
            },
            "&[data-state=closed]": {
              animationName: "exit",
              animationDuration: "120ms",
            },
            minWidth: "200px",
          })}
          position="popper"
          sideOffset={4}
        >
          <RadixSelect.Viewport>
            {options.map((option) => (
              <RadixSelect.Item
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "space8",
                  px: "space8",
                  py: "space4",
                  borderRadius: "radius4",
                  cursor: "default",
                  _hover: { backgroundColor: "bg.hover" },
                })}
                key={option.value}
                value={option.value}
              >
                <span className={css({ width: 16 })}>
                  <RadixSelect.ItemIndicator>
                    <Icon icon={Close16} />
                  </RadixSelect.ItemIndicator>
                </span>
                <RadixSelect.ItemText>{option.label ?? option.value}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
