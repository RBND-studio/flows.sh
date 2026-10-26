import { css, cx } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { type CSSProperties, type FC, forwardRef, type SVGProps } from "react";

type Props = {
  color?: SystemStyleObject["color"];
  icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
  style?: CSSProperties;
};

export const Icon = forwardRef<SVGSVGElement, Props>(function Icon(
  { icon, color, className, css: cssProp, ...props },
  ref,
) {
  const Cmp = icon;

  return (
    <Cmp
      {...props}
      className={cx(css({ color: color ?? "fg.neutral.muted", flexShrink: 0 }, cssProp), className)}
      ref={ref}
    />
  );
});
