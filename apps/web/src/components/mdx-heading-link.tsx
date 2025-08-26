"use client";

import { css, cx } from "@flows/styled-system/css";
import { styled } from "@flows/styled-system/jsx";
import { type Route } from "next";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { Text, type TextProps } from "ui";

import { HeadingCopyButton } from "./ui";

type HeadingLinkProps = {
  linkProps: LinkProps<Route>;
  textProps: TextProps;
  children: ReactNode;
  wrapperProps?: string;
  as: string;
};
export const HeadingLink = ({
  linkProps,
  textProps,
  wrapperProps,
  children,
  as,
}: HeadingLinkProps): ReactNode => {
  const pathname = usePathname();
  const path = `${pathname}#${textProps.id}`;
  const Component = styled[as];

  return (
    <Component
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
            color: "newFg.neutral",
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
    </Component>
  );
};
