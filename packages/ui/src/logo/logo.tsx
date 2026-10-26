import { css, cx } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { type ReactNode } from "react";

import { LogoMarkSvg } from "./logo-mark";
import { LogoPillSvg } from "./logo-pill";
import { LogoTypeSvg } from "./logo-type";

const logoByType = {
  mark: LogoMarkSvg,
  type: LogoTypeSvg,
  pill: LogoPillSvg,
} as const;

type Props = {
  type: keyof typeof logoByType;
  color?: string;
  size?: number;
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
} & React.SVGProps<SVGSVGElement>;

export const Logo = (props: Props): ReactNode => {
  const { type, color = "currentColor", size = 40, className, css: cssProp, ...rest } = props;

  const LogoComponent = logoByType[type];

  return (
    <LogoComponent
      className={cx(
        css(
          {
            color,
          },
          cssProp,
        ),
        className,
      )}
      height={size}
      {...rest}
    />
  );
};
