"use client";

import { css, cva, cx } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import * as RadixSelect from "@radix-ui/react-select";
import { CaretDown16, Check16 } from "icons";
import { type JSX, memo, type ReactNode, useId, useMemo } from "react";

import { Button } from "../button";
import { Description } from "../description";
import { Icon } from "../icon";
import { Label } from "../label";
import { Text } from "../text";

type Props<T extends string> = {
  value?: T;
  defaultValue?: T;
  options: readonly { value: T; label?: ReactNode }[];
  onChange?: (value: T) => void;
  className?: string;
  buttonClassName?: string;
  placeholder?: string;
  size?: "default" | "small";
  optional?: boolean;
  label?: string;
  labelClassName?: string;
  description?: string;
  descriptionClassName?: string;
  id?: string;
  ["aria-label"]?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  "data-test"?: string;
};

export const Select = memo(SelectInner) as typeof SelectInner;
function SelectInner<T extends string>({
  options,
  className,
  buttonClassName,
  description,
  descriptionClassName,
  placeholder,
  label,
  labelClassName,
  size = "default",
  onChange,
  optional,
  disabled,
  readOnly,
  "aria-label": ariaLabel,
  autoFocus,
  "data-test": dataTest,
  ...props
}: Props<T>): JSX.Element {
  const id = useId();
  const currentOption = useMemo(
    () => options.find((opt) => opt.value === (props.value ?? props.defaultValue)),
    [options, props.defaultValue, props.value],
  );

  const selectRender = (
    <RadixSelect.Root
      disabled={disabled}
      {...props}
      onValueChange={onChange}
      open={readOnly ? false : undefined}
    >
      <RadixSelect.Trigger asChild id={props.id ?? id}>
        <Button
          // eslint-disable-next-line jsx-a11y/no-autofocus -- can be helpful for some usecases
          autoFocus={autoFocus}
          aria-label={ariaLabel}
          data-test={dataTest}
          className={cx(
            css({
              position: "relative",
              "&[data-placeholder]": {
                color: "newControl.fg.placeholder",
              },
              "&>:last-child": {
                flex: 1,
                justifyContent: "flex-end",
              },
            }),
            buttonClassName,
            button({ size }),
          )}
          endIcon={
            <RadixSelect.Icon asChild>
              <Icon
                color={disabled ? "newControl.fg.disabled" : "newControl.fg"}
                icon={CaretDown16}
              />
            </RadixSelect.Icon>
          }
          size={size}
          variant="field"
        >
          {currentOption?.label ?? currentOption?.value ?? placeholder}
        </Button>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className={css({
            backgroundColor: "pane.bg.elevated",
            borderRadius: "radius8",
            shadow: "newL2",
            p: "space4",
            position: "relative",
            zIndex: 50,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "pane.border.elevated",
            maxHeight: "min(500px, var(--radix-select-content-available-height))",
            "&[data-state=open]": {
              animationName: "enter",
              animationDuration: "120ms",
            },
            "&[data-state=closed]": {
              animationName: "exit",
              animationDuration: "120ms",
            },
            minW: "var(--radix-select-trigger-width)",
          })}
          position="popper"
          sideOffset={4}
        >
          <RadixSelect.Viewport
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              scrollbarWidth: "thin!",
            })}
            style={{
              scrollbarColor: `${token.var("colors.pane.fg.scroll")} transparent`,
            }}
          >
            {options.map((option) => (
              <RadixSelect.Item
                className={cx(
                  css({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "space8",
                    px: "space8",
                    py: "space4",
                    borderRadius: "5px", // TODO: fix theme
                    cursor: "default",
                    outline: "none",
                    "&[data-state=checked]": {
                      backgroundColor: "newControl.bg.selected",
                      _hover: { backgroundColor: "newControl.bg.selected" },
                    },
                    "&[data-highlighted]": { backgroundColor: "newControl.bg.hover" },
                    "&:hover": { backgroundColor: "newControl.bg.hover" },
                  }),
                  "group",
                )}
                key={option.value}
                value={option.value}
              >
                <RadixSelect.ItemText asChild>
                  <Text>{option.label ?? option.value}</Text>
                </RadixSelect.ItemText>

                <RadixSelect.ItemIndicator>
                  <Icon color="newControl.fg.selected" icon={Check16} />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );

  return (
    <Flex className={className} flexDir="column">
      {label !== undefined ? (
        <Label
          className={labelClassName}
          disabled={disabled}
          htmlFor={props.id ?? id}
          optional={optional}
        >
          {label}
        </Label>
      ) : null}
      {selectRender}
      {description !== undefined && (
        <Description disabled={disabled} className={descriptionClassName}>
          {description}
        </Description>
      )}
    </Flex>
  );
}

const button = cva({
  variants: {
    size: {
      default: {
        mt: "space4",
        mb: "space4",
      },
      small: {
        mt: "space2",
        mb: "space2",
      },
    },
  },
});
