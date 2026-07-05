import { css, cva, cx } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check16 } from "icons";
import type { FC, Ref } from "react";
import { type ReactNode, useId } from "react";

import { Icon } from "../icon";
import { Label } from "../label";

type Props = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  required?: boolean;
  defaultChecked?: boolean;
  label?: ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  id?: string;
  readOnly?: boolean;
  ref?: Ref<HTMLButtonElement>;
};

export const Checkbox: FC<Props> = ({
  className,
  label,
  labelClassName,
  inputClassName,
  disabled,
  readOnly,
  ref,
  ...props
}) => {
  const id = useId();

  const check = (
    <CheckboxPrimitive.Root
      className={cx(checkbox({}), inputClassName)}
      ref={ref}
      disabled={disabled}
      {...props}
      id={props.id ?? id}
      onCheckedChange={readOnly ? undefined : props.onCheckedChange}
    >
      <CheckboxPrimitive.Indicator
        className={css({
          display: "grid",
          color: "control.fg",
          height: "100%",
          position: "relative",
        })}
      >
        <Icon
          className={css({
            height: "16px",
            width: "16px",
            position: "absolute",
            top: 0,
            left: 0,
          })}
          color="inherit"
          icon={Check16}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  return (
    <Flex alignItems="center" className={className} gap="space4">
      {check}
      {label !== undefined ? (
        <Label className={labelClassName} disabled={disabled} htmlFor={props.id ?? id}>
          {label}
        </Label>
      ) : null}
    </Flex>
  );
};

const checkbox = cva({
  base: {
    width: "18px",
    height: "18px",
    borderRadius: "5px",
    backgroundColor: "control.bg",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "control.border",
    cursor: "pointer",
    fastEaseInOut: "all",
    flexShrink: 0,

    _hover: {
      borderColor: "control.border.hover",
    },
    _disabled: {
      backgroundColor: "control.bg.disabled",
      borderColor: "control.border.disabled",
      cursor: "default",
      pointerEvents: "none",

      _hover: {
        borderColor: "control.border.disabled",
      },

      "&>span": {
        backgroundColor: "control.bg.disabled",
        color: "control.fg.disabled",
      },
    },
  },
});
