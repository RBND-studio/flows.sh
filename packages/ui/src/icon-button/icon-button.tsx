import { css, cva, cx } from "@flows/styled-system/css";
import { type HTMLStyledProps, styled } from "@flows/styled-system/jsx";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, type FC, forwardRef, type JSX, memo, useMemo } from "react";

import { Spinner } from "../spinner";
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
    tooltip?: string;
    tooltipSide?: TooltipSide;
    icon?: FC<React.SVGProps<SVGSVGElement>>;
  };

export const IconButton = memo(
  forwardRef<HTMLButtonElement, Props>(function IconButton(
    {
      size = "default",
      variant = "black",
      tooltip,
      asChild,
      disabled,
      tooltipSide = "bottom",
      loading,
      icon: Icon,
      children: _children,
      ...props
    },
    ref,
  ): JSX.Element {
    const Component = asChild ? Slot : styled.button;
    const children = useMemo(() => {
      if (Icon) return <Icon />;
      return _children;
    }, [Icon, _children]);

    const buttonRender = useMemo(
      () => (
        <Component
          aria-label={tooltip}
          type={!asChild ? "button" : undefined}
          {...props}
          className={cx(button({ size, variant }), props.className)}
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- nullish coalescing cannot be used here
          disabled={disabled || loading}
          data-loading={loading ? "" : undefined}
          aria-busy={loading}
          ref={ref}
        >
          {loading ? (
            <Spinner
              className={css({
                position: "absolute",
                visibility: "visible!",
              })}
              color="inherit"
              size={16}
            />
          ) : null}
          <Slottable>{children}</Slottable>
        </Component>
      ),
      [Component, asChild, children, disabled, loading, props, ref, size, tooltip, variant],
    );

    if (!tooltip) return buttonRender;

    return (
      <Tooltip side={tooltipSide} content={tooltip} delayDuration={800} trigger={buttonRender} />
    );
  }),
);

const button = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textWrap: "nowrap",
    flexShrink: 0,

    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "transparent",

    shadow: "none",

    superFastEaseInOut: "all",

    _loading: {
      "& > *": {
        visibility: "hidden",
      },
    },

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
    },
  },
});
