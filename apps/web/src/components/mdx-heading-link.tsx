import { css, cx } from "@flows/styled-system/css";
import { headers } from "next/headers";
import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";
import { Text, type TextProps } from "ui";

import { HeadingCopyButton } from "./ui";

type HeadingLinkProps = {
  linkProps: LinkProps;
  textProps: TextProps;
  children: ReactNode;
  wrapperProps?: string;
};
export const HeadingLink = ({
  linkProps,
  textProps,
  wrapperProps,
  children,
}: HeadingLinkProps): ReactNode => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") ?? "";
  const link = `${fullUrl}#${textProps.id}`;
  return (
    <div
      className={cx(
        css({
          display: "flex",
          alignItems: "center",
          gap: "space8",
          width: "fit-content",
        }),
        wrapperProps,
        "group",
      )}
    >
      <Text {...textProps} asChild>
        <Link
          {...linkProps}
          className={css({
            scrollMarginTop: "space80",
            display: "flex",
            color: "text.onPrimary",
          })}
        >
          {children}
        </Link>
      </Text>
      <HeadingCopyButton
        className={css({
          _groupHover: {
            display: "flex",
          },
          display: "none",
        })}
        link={link}
      />
    </div>
  );
};
