"use client";

import { css, cx } from "@flows/styled-system/css";
import * as RadixSelect from "@radix-ui/react-select";
import { CaretDown16, Check16 } from "icons";
import type { ComponentProps } from "react";

import { Button } from "../button";
import { Icon } from "../icon";
import { Text } from "../text";

type Props<T extends string> = {
  value?: T;
  defaultValue?: T;
  options: readonly { value: T; label?: string }[];
  buttonClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: T) => void;
  buttonSize?: ComponentProps<typeof Button>["size"];
  description?: string;
  labelClassName?: string;
};

export function Select<T extends string>({
  options,
  buttonClassName,
  description,
  placeholder,
  labelClassName,
  buttonSize = "small",
  label,
  onChange,
  ...props
}: Props<T>): JSX.Element {
  const currentOption = options.find((opt) => opt.value === (props.value ?? props.defaultValue));

  const selectRender = (
    <RadixSelect.Root {...props} onValueChange={onChange}>
      <RadixSelect.Trigger asChild>
        <Button
          className={cx(
            css({
              textStyle: "bodyS",
              position: "relative",
              shadow: "none",
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
          size={buttonSize}
          variant="grey"
        >
          <RadixSelect.Value placeholder={placeholder}>
            {currentOption?.label ?? currentOption?.value}
          </RadixSelect.Value>
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

  if (label === undefined) return selectRender;

  return (
    <label className={cx(css({ display: "flex", flexDirection: "column" }), labelClassName)}>
      <Text as="span" className={css({ mb: "space4", display: "block" })}>
        {label}
      </Text>
      {selectRender}
      {description ? (
        <Text className={css({ mt: "space4" })} color="subtle" variant="bodyXs">
          {description}
        </Text>
      ) : null}
    </label>
  );
}
