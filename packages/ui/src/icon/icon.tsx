import { css } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { type FC, forwardRef, type SVGProps } from "react";

type Props = {
  placeholderSize?: number;
  color?: SystemStyleObject["color"];
  icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
};

const DefaultIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg height={16} viewBox="0 0 16 16" width={16} {...props}>
    <circle cx={8} cy={8} fill="transparent" r={7} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);

export const Icon = forwardRef<SVGSVGElement, Props>(function Icon(
  { icon = DefaultIcon, color, placeholderSize, ...props },
  ref,
) {
  const Cmp = icon;
  const sizeProps =
    placeholderSize && icon === DefaultIcon
      ? { height: placeholderSize, width: placeholderSize }
      : {};

  return <Cmp className={css({ color: color ?? "icon" })} {...sizeProps} {...props} ref={ref} />;
});
