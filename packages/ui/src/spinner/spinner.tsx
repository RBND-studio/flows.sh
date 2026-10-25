import { css, cva, cx } from "@flows/styled-system/css";
import { type SystemStyleObject } from "@flows/styled-system/types";
import { Spinner20 } from "icons";
import { forwardRef } from "react";

import { Icon } from "../icon";

type Props = {
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
  color?: SystemStyleObject["color"];
  size?: number;
};

export const Spinner = forwardRef<HTMLDivElement, Props>(function Spinner(
  { className, css: cssProp, color, size, ...props },
  ref,
) {
  return (
    <div {...props} className={cx(css(spinner.raw(), cssProp), className)} ref={ref}>
      {/* size is a runtime number, so it goes in inline styles: Panda can't extract it from css() */}
      <Icon
        style={size ? { width: size, height: size } : undefined}
        color={color ?? "fg.primary"}
        icon={Spinner20}
      />
    </div>
  );
});

const spinner = cva({
  base: {
    animation: "rotate 1100ms infinite linear",
  },
});
