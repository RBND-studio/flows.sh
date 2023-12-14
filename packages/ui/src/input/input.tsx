import { css, cva, cx } from "@flows/styled-system/css";
import { type FocusEvent, forwardRef, type ReactNode } from "react";

import { Text } from "../text";

type Props = {
  label?: ReactNode;
  /**
   * @defaultValue "medium"
   */
  size?: (typeof input.variantMap.size)[number];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
  labelClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  minLength?: number;
  fullWidth?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    label,
    size = "default",
    labelClassName,
    wrapperClassName,
    inputClassName,
    fullWidth,
    ...props
  },
  ref,
) {
  const inputRender = (
    <span className={cx(inputWrapper(), wrapperClassName)}>
      <input className={cx(input({ size, fullWidth }), inputClassName)} ref={ref} {...props} />
    </span>
  );

  if (label === undefined) return inputRender;

  return (
    <label className={labelClassName}>
      <Text as="span" className={css({ mb: "space4", display: "block" })}>
        {label}
      </Text>
      {inputRender}
    </label>
  );
});

const inputWrapper = cva({
  base: {
    display: "block",
  },
});

const input = cva({
  base: {
    borderRadius: "radius8",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "border.strong",
    backgroundColor: "bg.muted",
    outline: "none",
    transitionDuration: "fast",
    transitionTimingFunction: "easeInOut",
    transitionProperty: "all",
    color: "text",
    _hover: {
      borderColor: "border.primary",
      backgroundColor: "bg",
    },
    _focus: {
      borderColor: "border.primary",
      backgroundColor: "bg",
      boxShadow: "focus",
    },
  },
  variants: {
    size: {
      large: {
        px: "space16",
        py: "space12",
        textStyle: "bodyL",
      },
      medium: {
        px: "space12",
        py: "space8",
        textStyle: "bodyM",
      },
      default: {
        px: "space8",
        py: "5px",
        textStyle: "bodyS",
        height: "32px",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});
