import { css, cx } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { forwardRef, type ReactNode } from "react";

import { Text } from "../text";
import { Tooltip } from "../tooltip/tooltip";

type Props = {
  children?: ReactNode;
  optional?: boolean;
  className?: string;
  /**
   * Style overrides, merged with the label styles so they win without `!`
   */
  css?: SystemStyleObject;
  htmlFor?: string;
  tooltip?: ReactNode;
  disabled?: boolean;
};

export const Label = forwardRef<HTMLLabelElement, Props>(function Label(
  { children, optional, className, css: cssProp, tooltip, disabled, ...props },
  ref,
) {
  const labelRender = (
    <label
      className={cx(
        css(
          {
            textStyle: "bodyXs",
            color: disabled ? "control.fg.disabled" : "control.fg",
            fontWeight: "550",
          },
          cssProp,
        ),
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      {optional ? (
        <Text
          as="span"
          css={{ ml: "space4" }}
          color={disabled ? "control.fg.disabled" : "fg.neutral.subtle"}
          variant="bodyXxs"
        >
          (optional)
        </Text>
      ) : null}
    </label>
  );

  if (!tooltip) return labelRender;

  return (
    <Tooltip trigger={labelRender} hasUnderline>
      {tooltip}
    </Tooltip>
  );
});
