import { cva, cx } from "@flows/styled-system/css";
import { type HTMLStyledProps, styled } from "@flows/styled-system/jsx";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

import { Spinner } from "../spinner";

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
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    asChild?: boolean;
    loading?: boolean;
    /**
     * @defaultValue "default"
     */
    shadow?: (typeof button.variantMap.shadow)[number];
  };

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    size = "default",
    variant = "black",
    shadow = "default",
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
  const Component = asChild ? Slot : styled.button;
  return (
    <Component
      type={!asChild ? "button" : undefined}
      {...props}
      className={cx(button({ size, variant, shadow }), props.className)}
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- nullish coalescing cannot be used here
      disabled={disabled || loading}
      ref={ref}
    >
      {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- nullish coalescing cannot be used here */}
      {startIcon || loading ? (
        <Icon size={size} position="start">
          {loading ? <Spinner color="inherit" size={16} /> : startIcon}
        </Icon>
      ) : null}
      <Slottable>{children}</Slottable>
      {endIcon ? (
        <Icon size={size} position="end">
          {endIcon}
        </Icon>
      ) : null}
    </Component>
  );
});

const Icon = styled("span", {
  base: {
    display: "inline-flex",
  },
  variants: {
    position: {
      // position removes the opposite margin that is set using size prop
      start: {
        marginLeft: 0,
      },
      end: {
        marginRight: 0,
      },
    },
    size: {
      small: {
        mx: 4,
      },
      default: {
        mx: 4,
      },
      medium: {
        mx: 8,
      },
      large: {
        mx: 8,
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
    textWrap: "nowrap",

    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "transparent",
    shadow: "l1",

    superFastEaseInOut: "all",

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
        textStyle: "titleS",
        padding: "1px 7px",
        height: 24,
        borderRadius: 6,
      },
      default: {
        textStyle: "titleS",
        padding: "5px 11px",
        height: 32,
      },
      medium: {
        textStyle: "titleS",
        padding: "7px 15px",
        height: 36,
      },
      large: {
        textStyle: "titleL",
        padding: "5px 15px",
        height: 40,
      },
    },
    variant: {
      primary: {
        backgroundColor: "bg.primary",
        borderColor: "bg.primary",
        color: "text.onPrimary",
        _hover: {
          backgroundColor: "bg.primaryHover",
          borderColor: "bg.primaryHover",
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
        backgroundColor: "bg.muted",
        borderColor: "border.strong",
        color: "text",
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
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "text",
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
        backgroundColor: "bg.muted",
        borderColor: "border.strong",
        color: "text.danger",
        _hover: {
          backgroundColor: "bg.dangerHover",
          borderColor: "bg.dangerHover",
          color: "text.onPrimary",
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
      // Used in select
      field: {
        backgroundColor: "newControl.bg",
        borderColor: "newControl.border",
        outline: "none",
        color: "newControl.fg",

        shadow: "none",
        textStyle: "bodyS",

        _hover: {
          borderColor: "newControl.border.hover",
        },
        // TODO: think if focus makes sense on select
        _focus: {
          borderColor: "newControl.border.selected",
          _hover: {
            borderColor: "newControl.border.selected",
          },
        },

        _disabled: {
          backgroundColor: "newControl.bg.disabled",
          borderColor: "newControl.border.disabled",
          color: "newControl.fg.disabled",
          pointerEvents: "none",
          boxShadow: "none",
        },
      },
    },
    shadow: {
      //TODO: think about highlight
      highlight: {
        boxShadow: "l3",
      },
      default: {},
    },
  },
});
