"use client";

import { css, cva, cx } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import * as RadixSelect from "@radix-ui/react-select";
import { CaretDown16, Check16 } from "icons";
import { type JSX, memo, type ReactNode, useId, useMemo } from "react";

import { Button } from "../button";
import { Description } from "../description";
import { Icon } from "../icon";
import { Label } from "../label";
import { Spinner } from "../spinner";
import { Text } from "../text";
import { Tooltip } from "../tooltip/tooltip";

export type SelectProps<T extends string = string> = {
  value?: T;
  defaultValue?: T;
  options: readonly {
    startIcon?: ReactNode;
    value: T | null;
    label?: ReactNode;
    disabled?: boolean;
    disabledReason?: string;
    description?: string;
  }[];
  loading?: boolean;
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
  noOptionsEmptyState?: string;
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
  loading,
  readOnly,
  "aria-label": ariaLabel,
  autoFocus,
  "data-test": dataTest,
  noOptionsEmptyState,
  ...props
}: SelectProps<T>): JSX.Element {
  const id = useId();
  const currentOption = useMemo(
    () => options.find((opt) => opt.value === (props.value ?? props.defaultValue)),
    [options, props.defaultValue, props.value],
  );

  const endIcon = loading ? (
    <Spinner size={16} />
  ) : (
    <RadixSelect.Icon asChild>
      <Icon color={disabled ? "newControl.fg.disabled" : "newControl.fg"} icon={CaretDown16} />
    </RadixSelect.Icon>
  );
  const buttonText = loading
    ? "Loading.."
    : (currentOption?.label ?? currentOption?.value ?? placeholder);

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
          startIcon={currentOption?.startIcon}
          endIcon={endIcon}
          size={size}
          variant="field"
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- nullish coalescing cannot be used here
          data-placeholder={loading || buttonText === placeholder ? true : undefined}
        >
          <span
            className={css({
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            {buttonText}
          </span>
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
              <ItemWithTooltip
                disabled={option.disabled}
                disabledReason={option.disabledReason}
                key={option.value}
              >
                <RadixSelect.Item
                  className={cx(
                    css({
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "space8",
                      px: "space8",
                      py: "space4",
                      borderRadius: "5px",
                      cursor: "default",
                      outline: "none",
                      "&[data-state=checked]": {
                        backgroundColor: "newControl.bg.selected",
                        _hover: { backgroundColor: "newControl.bg.selected" },
                      },
                      "&[data-highlighted]": { backgroundColor: "newControl.bg.hover" },
                      "&[data-disabled]": {
                        color: "newControl.fg.disabled",
                        _hover: {
                          backgroundColor: "unset",
                        },
                      },
                      "&:hover": { backgroundColor: "newControl.bg.hover" },
                    }),
                    "group",
                  )}
                  disabled={option.disabled}
                  value={option.value as string}
                >
                  <Flex gap="space4" alignItems="flex-start">
                    <Box mt="space2" aria-hidden="true">
                      {option.startIcon}
                    </Box>
                    <Flex flexDirection="column">
                      <RadixSelect.ItemText asChild>
                        <Text color="inherit">{option.label ?? option.value}</Text>
                      </RadixSelect.ItemText>
                      <Text
                        color={option.disabled ? "newControl.fg.disabled" : "newFg.neutral.muted"}
                        variant="bodyXs"
                        maxWidth="240px"
                      >
                        {option.description}
                      </Text>
                    </Flex>
                  </Flex>

                  <RadixSelect.ItemIndicator>
                    <Icon color="newControl.fg.selected" icon={Check16} />
                  </RadixSelect.ItemIndicator>
                </RadixSelect.Item>
              </ItemWithTooltip>
            ))}
            {options.length === 0 ? (
              <Box px="space8" py="space4">
                <Text color="newControl.fg.disabled">
                  {noOptionsEmptyState ?? "No options available"}
                </Text>
              </Box>
            ) : null}
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

const ItemWithTooltip = ({
  children,
  disabledReason,
  disabled,
}: {
  children: ReactNode;
  disabledReason?: string;
  disabled?: boolean;
}): JSX.Element => {
  if (disabled && disabledReason) {
    return <Tooltip side="left" content={disabledReason} trigger={children} />;
  }
  return <>{children}</>;
};
