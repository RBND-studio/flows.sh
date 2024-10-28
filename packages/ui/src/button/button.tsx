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
  };

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    size = "default",
    variant = "black",
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
      className={cx(button({ size, variant }), props.className)}
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

    shadow: "none",

    superFastEaseInOut: "all",

    _disabled: {
      pointerEvents: "none",
      cursor: "default",
      _hover: {
        backgroundColor: "button.secondary.bg.disabled",
        borderColor: "button.secondary.border.disabled",
        color: "button.secondary.fg.disabled",
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
        backgroundColor: "button.primary.bg.rest",
        borderColor: "button.primary.border.rest",
        color: "button.primary.fg.rest",
        _hover: {
          backgroundColor: "button.primary.bg.hover",
          borderColor: "button.primary.border.hover",
        },
        _disabled: {
          backgroundColor: "button.primary.bg.disabled",
          borderColor: "button.primary.border.disabled",
          color: "button.primary.fg.disabled",
          pointerEvents: "none",
        },
        _active: {
          backgroundColor: "button.primary.bg.active",
          borderColor: "button.primary.border.active",
          shadow: "inset",
        },
      },
      secondary: {
        backgroundColor: "button.secondary.bg.rest",
        borderColor: "button.secondary.border.rest",
        color: "button.secondary.fg.rest",
        _hover: {
          backgroundColor: "button.secondary.bg.hover",
          borderColor: "button.secondary.border.hover",
        },
        _disabled: {
          backgroundColor: "button.secondary.bg.disabled",
          borderColor: "button.secondary.border.disabled",
          color: "button.secondary.fg.disabled",
          pointerEvents: "none",
        },
        _active: {
          backgroundColor: "button.secondary.bg.active",
          borderColor: "button.secondary.border.active",
        },
      },
      black: {
        backgroundColor: "button.black.bg.rest",
        borderColor: "button.black.border.rest",
        color: "button.black.fg.rest",
        _hover: {
          backgroundColor: "button.black.bg.hover",
          borderColor: "button.black.border.hover",
        },
        _disabled: {
          backgroundColor: "button.black.bg.disabled",
          borderColor: "button.black.border.disabled",
          color: "button.black.fg.disabled",
          pointerEvents: "none",
        },
        _active: {
          backgroundColor: "button.black.bg.active",
          borderColor: "button.black.border.active",
          shadow: "inset",
        },
      },
      ghost: {
        backgroundColor: "button.ghost.bg.rest",
        borderColor: "button.ghost.border.rest",
        color: "button.ghost.fg.rest",
        _hover: {
          backgroundColor: "button.ghost.bg.hover",
          borderColor: "button.ghost.border.hover",
        },
        _disabled: {
          backgroundColor: "button.ghost.bg.disabled",
          borderColor: "button.ghost.border.disabled",
          color: "button.ghost.fg.disabled",
          pointerEvents: "none",
        },
        _active: {
          backgroundColor: "button.ghost.bg.active",
          borderColor: "button.ghost.border.active",
        },
      },
      danger: {
        backgroundColor: "button.danger.bg.rest",
        borderColor: "button.danger.border.rest",
        color: "button.danger.fg.rest",
        _hover: {
          backgroundColor: "button.danger.bg.hover",
          borderColor: "button.danger.border.hover",
          color: "button.danger.fg.hover",
        },
        _disabled: {
          backgroundColor: "button.danger.bg.disabled",
          borderColor: "button.danger.border.disabled",
          color: "button.danger.fg.disabled",
          pointerEvents: "none",
        },
        _active: {
          backgroundColor: "button.danger.bg.active",
          borderColor: "button.danger.border.active",
          color: "button.danger.fg.active",
          shadow: "inset",
        },
      },
      // Used in select
      field: {
        backgroundColor: "newControl.bg",
        borderColor: "newControl.border",
        outline: "none",
        color: "newControl.fg",

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
        },
      },
    },
  },
});
