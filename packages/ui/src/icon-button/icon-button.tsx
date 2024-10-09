import { cva, cx } from "@flows/styled-system/css";
import { type HTMLStyledProps, styled } from "@flows/styled-system/jsx";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

import { Tooltip, type TooltipSide } from "../tooltip/tooltip";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLStyledProps<"button"> & {
    /**
     * @defaultValue "medium"
     */
    size?: (typeof button.variantMap.size)[number];
    /**
     * @defaultValue "primary"
     */
    variant?: (typeof button.variantMap.variant)[number];
    asChild?: boolean;
    loading?: boolean;
    /**
     * @defaultValue "default"
     */
    shadow?: (typeof button.variantMap.shadow)[number];
    tooltip?: string;
    tooltipSide?: TooltipSide;
  };

export const IconButton = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    size = "default",
    variant = "black",
    shadow = "default",
    children,
    tooltip,
    asChild,
    disabled,
    tooltipSide = "bottom",
    ...props
  },
  ref,
): JSX.Element {
  const Component = asChild ? Slot : styled.button;

  const buttonRender = (
    <Component
      aria-label={tooltip}
      type={!asChild ? "button" : undefined}
      {...props}
      className={cx(button({ size, variant, shadow }), props.className)}
      disabled={disabled}
      ref={ref}
    >
      <Slottable>
        <Icon>{children}</Icon>
      </Slottable>
    </Component>
  );

  if (!tooltip) return buttonRender;

  return (
    <Tooltip side={tooltipSide} content={tooltip} delayDuration={800} trigger={buttonRender} />
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
    superFastEaseInOut: "all",
    shadow: "l1",
    textWrap: "nowrap",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "transparent",
    flexShrink: 0,
    _disabled: {
      pointerEvents: "none",
      cursor: "default",
      _hover: {
        backgroundColor: "bg.subtle",
        borderColor: "bg.subtle",
        color: "text.subtle",
      },
    },
  },
  variants: {
    size: {
      small: {
        width: 24,
        height: 24,
        borderRadius: 6,
      },
      default: {
        width: 32,
        height: 32,
      },
      medium: {
        width: 36,
        height: 36,
      },
      large: {
        width: 40,
        height: 40,
      },
    },
    variant: {
      primary: {
        backgroundColor: "bg.primary",
        color: "text.onPrimary",

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
        _active: {
          backgroundColor: "bg.primaryActive",
          borderColor: "bg.primaryActive",
        },
      },
      secondary: {
        color: "text",

        borderColor: "border.strong",
        backgroundColor: "bg.muted",
        _hover: {
          backgroundColor: "bg.hover",
        },
        _disabled: {
          backgroundColor: "bg.subtle",
          borderColor: "bg.subtle",
          color: "text.subtle",
          pointerEvents: "none",
          boxShadow: "none",
        },
        _active: {
          backgroundColor: "bg.active",
        },
      },
      black: {
        backgroundColor: "bg.black",

        borderColor: "bg.black",
        color: "text.onBlack",
        _hover: {
          borderColor: "bg.blackHover",
          backgroundColor: "bg.blackHover",
        },
        _disabled: {
          backgroundColor: "bg.subtle",
          borderColor: "bg.subtle",
          color: "text.subtle",
          pointerEvents: "none",
          boxShadow: "none",
        },
        _active: {
          backgroundColor: "bg.blackActive",
          borderColor: "bg.blackActive",
        },
      },
      ghost: {
        color: "text",
        backgroundColor: "transparent",
        borderColor: "transparent",
        shadow: "none",
        _hover: {
          backgroundColor: "bg.hover",
          shadow: "none",
        },
        _disabled: {
          color: "text.subtle",
          pointerEvents: "none",
          boxShadow: "none",
        },
        _active: {
          backgroundColor: "bg.active",
        },
      },
      danger: {
        color: "text.danger",
        backgroundColor: "bg.muted",
        borderColor: "border.strong",
        _hover: {
          backgroundColor: "bg.dangerHover",
          color: "text.onPrimary",
          borderColor: "bg.dangerHover",
        },
        _disabled: {
          backgroundColor: "bg.subtle",
          borderColor: "bg.subtle",
          color: "text.subtle",
          pointerEvents: "none",
          boxShadow: "none",
        },
        _active: {
          backgroundColor: "bg.dangerActive",
          borderColor: "bg.dangerActive",
        },
      },
    },
    shadow: {
      highlight: {
        boxShadow: "l3",
      },
      default: {},
    },
  },
});
