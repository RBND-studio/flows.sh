import { css, cva, cx } from "@flows/styled-system/css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check16 } from "icons";
import { forwardRef } from "react";

import { Icon } from "../icon";
import { Text } from "../text";

type Props = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  required?: boolean;
  defaultChecked?: boolean;
  label?: string;
  labelClassName?: string;
};

export const Checkbox = forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, Props>(
  function Checkbox({ className, label, labelClassName, ...props }, ref) {
    const check = (
      <CheckboxPrimitive.Root className={cx(checkbox({}), className)} ref={ref} {...props}>
        <CheckboxPrimitive.Indicator
          className={css({
            display: "grid",
            color: "text.onPrimary",
            height: "100%",
            position: "relative",
          })}
        >
          <Icon
            className={css({
              height: "16px",
              width: "16px",
              position: "absolute",
              top: -1,
              left: -1,
            })}
            color="inherit"
            icon={Check16}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    if (label !== undefined)
      return (
        <label
          className={cx(
            css({
              display: "inline-flex",
              alignItems: "center",
              gap: "space4",
              cursor: !props.disabled ? "pointer" : undefined,
              overflow: "hidden",
            }),
            labelClassName,
          )}
        >
          {check}
          <Text as="span">{label}</Text>
        </label>
      );

    return check;
  },
);

const checkbox = cva({
  base: {
    width: "16px",
    height: "16px",
    borderRadius: "radius4",
    backgroundColor: "bg",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "border.strong",
    cursor: "pointer",
    transitionDuration: "fast",
    transitionProperty: "all",
    transitionTimingFunction: "easeInOut",

    _hover: {
      backgroundColor: "bg.hover",
    },
    "&[data-state=checked]": {
      borderColor: "bg.primary",
      backgroundColor: "bg.primary",
      _hover: {
        backgroundColor: "bg.primaryHover",
        borderColor: "bg.primaryHover",
      },
    },
    _disabled: {
      backgroundColor: "bg.subtle",
      borderColor: "bg.subtle",
      cursor: "default",
      "&>span": {
        backgroundColor: "bg.subtle",
        color: "text.disabled",
      },
    },
  },
});
