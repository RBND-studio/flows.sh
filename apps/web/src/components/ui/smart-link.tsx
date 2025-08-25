import { css, cva, cx } from "@flows/styled-system/css";
import { ExternalLink16 } from "icons";
import { type Route } from "next";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  href: string;
  children?: ReactNode;
  target?: string;
  color?: string;
  underline?: boolean;
};

export const SmartLink: FC<Props> = ({ underline, href, ...props }) => {
  if (href.startsWith("http"))
    return (
      <a
        rel={props.target === "_blank" ? "noopener" : undefined}
        className={cx(
          css({
            color: props.color ?? "inherit",
          }),
          linkClassname({ underline }),
        )}
        {...props}
      >
        {props.children}
        {props.target === "_blank" && <ExternalLink16 />}
      </a>
    );

  return <Link {...props} href={href as Route} />;
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
