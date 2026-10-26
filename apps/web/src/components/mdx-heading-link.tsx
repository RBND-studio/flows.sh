import { css, cx } from "@flows/styled-system/css";
import { styled } from "@flows/styled-system/jsx";
import { type Route } from "next";
import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";
import { Text, type TextProps } from "ui";
import { HeadingCopyButton } from "./ui/heading-copy-button";

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
      <Text
        css={{
          scrollMarginTop: "space80",
          display: "flex",
          color: "fg.neutral",
        }}
        {...textProps}
        asChild
      >
        <Link {...linkProps}>{children}</Link>
      </Text>
      <HeadingCopyButton
        css={{
          _groupHover: {
            opacity: 1,
          },
          opacity: 0,
        }}
        hash={textProps.id}
      />
    </Component>
  );
};
