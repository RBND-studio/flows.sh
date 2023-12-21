import { css, cva, cx } from "@flows/styled-system/css";
import { Slot } from "@radix-ui/react-slot";
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
  width?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  asChild?: boolean;
  children?: ReactNode;
  description?: ReactNode;
  descriptionClassName?: string;
  disabled?: boolean;
  fullClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    label,
    size = "default",
    labelClassName,
    wrapperClassName,
    inputClassName,
    fullClassName,
    width,
    descriptionClassName,
    asChild,
    description,
    ...props
  },
  ref,
) {
  const Comp = asChild ? Slot : "input";

  const inputRender = (
    <span className={cx(inputWrapper(), wrapperClassName)}>
      <Comp
        className={cx(input({ size }), inputClassName)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: fix this
        ref={ref as any}
        {...props}
      />
    </span>
  );

  if (label === undefined) return inputRender;

  return (
    <div
      className={cx(
        css({
          maxWidth: width,
        }),
        fullClassName,
      )}
    >
      <label className={labelClassName}>
        <Text as="span" className={css({ mb: "space4", display: "block" })}>
          {label}
        </Text>
        {inputRender}
      </label>
      <Text
        className={cx(css({ mt: "space4" }), descriptionClassName)}
        color="subtle"
        variant="bodyXs"
      >
        {description}
      </Text>
    </div>
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
    transitionProperty: "border-color, background-color, box-shadow",
    color: "text",
    width: "100%",
    _hover: {
      borderColor: "border.primary",
      backgroundColor: "bg",
    },
    _focus: {
      borderColor: "border.primary",
      backgroundColor: "bg",
      boxShadow: "focus",
    },
    _disabled: {
      "&&": {
        backgroundColor: "bg.strong",
        borderColor: "border.strong",
        color: "text.disabled",
      },
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
  },
});
