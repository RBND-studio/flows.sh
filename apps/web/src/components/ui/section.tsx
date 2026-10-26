import { css, cva, cx } from "@flows/styled-system/css";
import { Box, Flex, splitCssProps } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import type { HTMLStyledProps, SystemStyleObject } from "@flows/styled-system/types";
import { type HTMLAttributes, type JSX } from "react";
import { Decorator } from "./section/decorator";
import type { DecoratorType } from "./section/decorator";

export type SectionBaseProps = {
  outerClassName?: string;
  /** Style overrides for the outer wrapper, merged with its own styles so they win without `!` */
  outerCss?: SystemStyleObject;
  bottomBorder?: boolean;
  topBorder?: boolean;
  sideBorders?: boolean | "hide-top" | "hide-bottom";
  sideDots?: boolean;
  decorator?: DecoratorType;
};

export type SectionProps = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> &
  SectionBaseProps & {
    /** Style overrides, merged with the component's own styles so they win without `!` */
    css?: SystemStyleObject;
  };

export const Section = ({
  children,
  outerClassName,
  outerCss,
  css: cssProp,
  bottomBorder,
  topBorder,
  sideBorders,
  sideDots,
  decorator,
  ...props
}: SectionProps): JSX.Element => {
  // Style props are merged with the inner wrapper's own styles below, so they win over them
  const [styleProps, elementProps] = splitCssProps(props);

  return (
    <div
      className={cx(
        css(
          {
            width: "100%",
            paddingX: "space24",
            position: "relative",
          },
          outerWrapperStyles.raw({ bottomBorder, topBorder, sideDots }),
          outerCss,
        ),
        outerClassName,
      )}
    >
      <Box
        {...elementProps}
        className={cx(
          css(
            {
              maxWidth: "1080px",
              marginX: "auto",
              position: "relative",
            },
            innerWrapperStyles.raw({ sideBorders, sideDots }),
            styleProps,
            cssProp,
          ),
          elementProps.className,
        )}
      >
        {children}
        {decorator && (
          <Flex
            justifyContent="space-between"
            position="absolute"
            bottom={0}
            left={-16}
            right={-16}
            pointerEvents="none"
            zIndex={1}
            h={0}
            alignItems="center"
          >
            <Decorator type={decorator} />
            <Decorator type={decorator} className={css({ transform: "scaleX(-1)" })} />
          </Flex>
        )}
      </Box>
    </div>
  );
};

const outerWrapperStyles = cva({
  base: {},
  variants: {
    bottomBorder: {
      true: {
        borderBottomWidth: 1,
        borderBottomColor: "border.neutral",
      },
    },
    topBorder: {
      true: {
        borderTopWidth: 1,
        borderTopColor: "border.neutral",
      },
    },
    sideDots: {
      true: {
        backgroundImage: `radial-gradient(circle, ${token("colors.special.dotBg")} 1px, transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        backgroundPosition: "top",
      },
    },
  },
});

const innerWrapperStyles = cva({
  base: {},
  variants: {
    sideBorders: {
      true: {
        borderLeftWidth: 1,
        borderLeftColor: "border.neutral",
        borderRightWidth: 1,
        borderRightColor: "border.neutral",
      },
      "hide-top": {
        borderLeftWidth: 1,
        borderLeftStyle: "solid",
        borderRightWidth: 1,
        borderRightStyle: "solid",
        borderImage: `linear-gradient(to bottom, transparent, ${token("colors.border.neutral")} 75%) 1`,
      },
      "hide-bottom": {
        borderLeftWidth: 1,
        borderLeftStyle: "solid",
        borderRightWidth: 1,
        borderRightStyle: "solid",
        borderImage: `linear-gradient(to top, transparent, ${token("colors.border.neutral")} 75%) 1`,
      },
    },
    sideDots: {
      true: {
        background: "pane.bg.web",
      },
    },
  },
});
