import { cva, cx } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Slot } from "@radix-ui/react-slot";
import { type FC, type FocusEvent, forwardRef, type ReactNode, type SVGProps, useId } from "react";

import { Description } from "../description";
import { Icon } from "../icon";
import { Label } from "../label";

type Props = {
  /**
   * @defaultValue "medium"
   */
  size?: (typeof input.variantMap.size)[number];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  defaultValue?: string | number;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  required?: boolean;
  inputClassName?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  minLength?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  asChild?: boolean;
  children?: ReactNode;
  optional?: boolean;
  label?: ReactNode;
  labelClassName?: string;
  description?: ReactNode;
  descriptionClassName?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  error?: boolean;
  readOnly?: boolean;
  startIcon?: FC<SVGProps<SVGSVGElement>>;
  endIcon?: FC<SVGProps<SVGSVGElement>>;
  variant?: (typeof input.variantMap.variant)[number];
  style?: React.CSSProperties;
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  autoFocus?: boolean;
  "data-test"?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    label,
    size = "default",
    className,
    labelClassName,
    inputClassName,
    descriptionClassName,
    optional,
    asChild,
    description,
    error,
    startIcon,
    endIcon,
    disabled,
    variant = "default",
    ...props
  },
  ref,
) {
  const Comp = asChild ? Slot : "input";
  const id = useId();

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
      <Flex position="relative">
        {startIcon ? (
          <Icon
            color="newControl.fg.placeholder"
            className={startIconCva({ size })}
            icon={startIcon}
          />
        ) : null}
        <Comp
          className={cx(
            input({ size, startIcon: !!startIcon, endIcon: !!endIcon, variant, error }),
            inputClassName,
          )}
          ref={ref}
          {...props}
          id={props.id ?? id}
          disabled={disabled}
        />
        {endIcon ? (
          <Icon color="newControl.fg.placeholder" className={endIconCva({ size })} icon={endIcon} />
        ) : null}
      </Flex>
      {description !== undefined && (
        <Description
          disabled={disabled}
          className={descriptionClassName}
          color={error ? "danger" : "muted"}
        >
          {description}
        </Description>
      )}
    </Flex>
  );
});

const startIconCva = cva({
  base: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  variants: {
    size: {
      default: {
        left: "space8",
      },
      small: {
        left: "space4",
      },
    },
  },
});

const endIconCva = cva({
  base: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  variants: {
    size: {
      default: {
        right: "space8",
      },
      small: {
        right: "space4",
      },
    },
  },
});

const input = cva({
  base: {
    borderRadius: "radius8",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "newControl.border",
    backgroundColor: "newControl.bg",
    outline: "none",
    transitionProperty: "border-color, background-color, box-shadow",
    fastEaseInOut: "border-color, background-color, box-shadow",
    color: "newControl.fg",
    width: "100%",
    _invalid: {
      "&&": { borderColor: "newBorder.danger" },
    },
    _hover: {
      borderColor: "newControl.border.hover",
    },
    _focus: {
      borderColor: "newControl.border.selected",
      _hover: {
        borderColor: "newControl.border.selected",
      },
    },
    _disabled: {
      "&&": {
        backgroundColor: "newControl.bg.disabled",
        borderColor: "newControl.border.disabled",
        color: "newControl.fg.disabled",
      },
    },
  },
  variants: {
    variant: {
      default: {},
      inline: {
        borderColor: "transparent",
        backgroundColor: "transparent",
        mt: 0,
        mb: 0,
        _hover: {
          borderColor: "transparent",
          backgroundColor: "newControl.bg.hover", //TODO: hover is too strong in dark - check icon button ghost hover
        },
        _focus: {
          _hover: {
            backgroundColor: "newControl.bg",
          },
        },
      },
    },
    startIcon: {
      true: {
        pl: "space24",
      },
    },
    endIcon: {
      true: {
        pr: "space24",
      },
    },
    size: {
      // 32px height
      default: {
        px: "space8",
        py: "5px",
        textStyle: "bodyS",
        height: "32px",
        mt: "space4",
        mb: "space4",
      },
      // 24px height
      // for use in property panels
      small: {
        px: "space4",
        py: "space2",
        textStyle: "bodyS",
        borderRadius: "5px", //TODO: fix theme
        mt: "space2",
        mb: "space2",
      },
    },
    error: {
      true: {
        borderColor: "newControl.border.error",
        _hover: {
          borderColor: "newControl.border.error",
        },
      },
    },
  },
  compoundVariants: [
    {
      size: "small",
      startIcon: true,
      css: {
        pl: "space20",
      },
    },
    {
      size: "small",
      endIcon: true,
      css: {
        pr: "space20",
      },
    },
  ],
});
