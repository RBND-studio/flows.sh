import { cva, cx } from "@flows/styled-system/css";
import { styled } from "@flows/styled-system/jsx";
import { Slot, Slottable } from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
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
};

export function Button({
  size = "medium",
  variant = "primary",
  children,
  startIcon,
  endIcon,
  asChild,
  ...props
}: Props): JSX.Element {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      type={!asChild ? "button" : undefined}
      {...props}
      className={cx(button({ size, variant }), props.className)}
    >
      {startIcon ? <Icon position="start">{startIcon}</Icon> : null}
      <Slottable>{children}</Slottable>
      {endIcon ? <Icon position="end">{endIcon}</Icon> : null}
    </Component>
  );
}

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
    cursor: "pointer",
    borderRadius: 8,
    transition: "80ms ease-in-out",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  variants: {
    size: {
      small: {
        textStyle: "subtitleS",
        padding: "5px 11px",
      },
      medium: {
        textStyle: "subtitleL",
        padding: "11px 23px",
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
          backgroundColor: "bg.primaryHover",
        },
      },
      secondary: {
        color: "text",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "border.primary",
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
          backgroundColor: "bg.blackHover",
        },
      },
    },
  },
});
