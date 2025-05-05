import { css, cva, cx } from "@flows/styled-system/css";
import { ExternalLink16 } from "icons";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  href: string;
  children?: ReactNode;
  target?: string;
  color?: string;
  underline?: boolean;
};

export const SmartLink: FC<Props> = ({ underline, ...props }) => {
  if (props.href.startsWith("http"))
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

  return <Link {...props} />;
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
