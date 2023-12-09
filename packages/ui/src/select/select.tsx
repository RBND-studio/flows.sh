"use client";

import { css, cx } from "@flows/styled-system/css";
import * as RadixSelect from "@radix-ui/react-select";
import { CaretDown16, Check16 } from "icons";
import type { FC } from "react";

import { Button } from "../button";
import { Icon } from "../icon";
import { Text } from "../text";

type Props = {
  value?: string;
  options: { value: string; label?: string }[];
  buttonClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  asInput?: boolean;
  onChange?: (value: string) => void;
};

export const Select: FC<Props> = ({ value, options, buttonClassName, placeholder, onChange }) => {
  return (
    <RadixSelect.Root onValueChange={onChange} value={value}>
      <RadixSelect.Trigger asChild>
        <Button
          className={cx(
            css({
              position: "relative",
              "&>:last-child": {
                flex: 1,
                justifyContent: "flex-end",
              },
            }),
            buttonClassName,
          )}
          endIcon={
            <RadixSelect.Icon asChild>
              <Icon icon={CaretDown16} />
            </RadixSelect.Icon>
          }
          size="small"
          variant="grey"
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
                  outline: "none",
                })}
                key={option.value}
                value={option.value}
              >
                <span className={css({ width: 16 })}>
                  <RadixSelect.ItemIndicator>
                    <Icon icon={Check16} />
                  </RadixSelect.ItemIndicator>
                </span>

                <RadixSelect.ItemText asChild>
                  <Text>{option.label ?? option.value}</Text>
                </RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
