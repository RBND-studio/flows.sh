"use client";

import { css, cx } from "@flows/styled-system/css";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const path = `${pathname}#${textProps.id}`;
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
            opacity: 1,
          },
          opacity: 0,
        })}
        path={path}
      />
    </div>
  );
};
