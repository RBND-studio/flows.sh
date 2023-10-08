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
        padding: "6px 12px",
      },
      medium: {
        padding: "8px 12px",
      },
    },
    variant: {
      primary: {
        backgroundColor: "#e86339",
        color: "#fff",
        border: "1px solid #b63c16",
        _hover: {
          backgroundColor: "#b63c16",
        },
      },
      secondary: {
        backgroundColor: "#fff",
        color: "#161412",
        border: "1px solid #e86339",
        _hover: {
          backgroundColor: "##e8e7e3",
        },
      },
      black: {
        backgroundColor: "neutral.850",
        color: "neutral.0",
        _hover: {
          backgroundColor: "neutral.900",
        },
      },
    },
  },
});
