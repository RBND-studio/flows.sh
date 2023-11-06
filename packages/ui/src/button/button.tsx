import { cva, cx } from "@flows/styled-system/css";
import { styled } from "@flows/styled-system/jsx";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * @defaultValue "medium"
   */
  size?: (typeof button.variantMap.size)[number];
  /**
   * @defaultValue "primary"
   */
  variant?: (typeof button.variantMap.variant)[number];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  asChild?: boolean;
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    size = "default",
    variant = "primary",
    children,
    startIcon,
    endIcon,
    asChild,
    disabled,
    loading,
    ...props
  },
  ref,
): JSX.Element {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      type={!asChild ? "button" : undefined}
      {...props}
      className={cx(button({ size, variant }), props.className)}
      disabled={disabled || loading}
      ref={ref}
    >
      {startIcon ? <Icon position="start">{startIcon}</Icon> : null}
      <Slottable>{children}</Slottable>
      {endIcon ? <Icon position="end">{endIcon}</Icon> : null}
    </Component>
  );
});

const Icon = styled("span", {
  base: {
    display: "inline-flex",
  },
  variants: {
    position: {
      start: {
        marginRight: 8,
      },
      end: {
        marginLeft: 8,
      },
    },
  },
});

const button = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: 8,
    transition: "80ms ease-in-out",
    boxShadow: "l1",
  },
  variants: {
    size: {
      default: {
        textStyle: "titleS",
        padding: "5px 11px",
      },
      large: {
        textStyle: "titleL",
        padding: "11px 23px",
      },
      small: {
        textStyle: "titleS",
        padding: "3px 7px",
      },
    },
    variant: {
      primary: {
        backgroundColor: "bg.primary",
        color: "text.onPrimary",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "bg.primary",
        _hover: {
          borderColor: "bg.primaryHover",
          backgroundColor: "bg.primaryHover",
        },
        _disabled: {
          backgroundColor: "bg.subtle",
          borderColor: "bg.subtle",
          color: "text.subtle",
          pointerEvents: "none",
          boxShadow: "none",
        },
      },
      secondary: {
        color: "text",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "border.primary",
        backgroundColor: "bg",
        _hover: {
          backgroundColor: "bg.hover",
        },
      },
      black: {
        backgroundColor: "bg.black",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "bg.black",
        color: "text.white",
        _hover: {
          borderColor: "bg.blackHover",
          backgroundColor: "bg.blackHover",
        },
      },
    },
  },
});
