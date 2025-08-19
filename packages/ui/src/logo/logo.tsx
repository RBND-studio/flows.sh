import { css, cx } from "@flows/styled-system/css";
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
} & React.SVGProps<SVGSVGElement>;

export const Logo = (props: Props): ReactNode => {
  const { type, color = "currentColor", size = 40, className, ...rest } = props;

  const LogoComponent = logoByType[type];

  return (
    <LogoComponent
      className={cx(
        css({
          color,
        }),
        className,
      )}
      height={size}
      {...rest}
    />
  );
};
