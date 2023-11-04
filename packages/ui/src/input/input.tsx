import { cva, cx } from "@flows/styled-system/css";
import type { FC, FocusEvent, ReactNode } from "react";

type Props = {
  label?: ReactNode;
  /**
   * @defaultValue "medium"
   */
  size?: (typeof input.variantMap.size)[number];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
  labelClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({
  label,
  size = "medium",
  labelClassName,
  wrapperClassName,
  inputClassName,
  ...props
}) => {
  return (
    <label className={labelClassName}>
      {label}
      <div className={cx(inputWrapper(), wrapperClassName)}>
        <input className={cx(input({ size }), inputClassName)} {...props} />
      </div>
    </label>
  );
};

const inputWrapper = cva({
  base: {},
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
    },
  },
});
