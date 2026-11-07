import { css, cva, cx } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { ExternalLink16 } from "icons";
import { type Route } from "next";
import Link, { type LinkProps } from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  href: string;
  children?: ReactNode;
  target?: string;
  underline?: boolean;
  prefetch?: LinkProps<Route>["prefetch"];
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
  /** Internal link component, the root layout passes the one from `components/utils/layout-client` */
  linkComponent?: typeof Link;
};

export const SmartLink: FC<Props> = ({
  underline,
  prefetch,
  className,
  css: cssProp,
  linkComponent: LinkComponent = Link,
  ...props
}) => {
  if (props.href.startsWith("http"))
    return (
      <a
        rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        className={cx(css(linkClassname.raw({ underline }), cssProp), className)}
        {...props}
      >
        {props.children}
        {props.target === "_blank" && <ExternalLink16 />}
      </a>
    );

  return (
    <LinkComponent
      className={cssProp ? cx(css(cssProp), className) : className}
      {...props}
      prefetch={prefetch}
      href={props.href as Route}
    />
  );
};

const linkClassname = cva({
  base: {
    display: "inline-flex",
    gap: "space4",
    _hover: { textDecoration: "underline" },
  },
  variants: {
    underline: {
      true: { textDecoration: "underline" },
    },
  },
});
