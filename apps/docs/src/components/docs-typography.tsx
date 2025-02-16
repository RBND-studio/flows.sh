import { css } from "@flows/styled-system/css";
import { Heading } from "fumadocs-ui/components/heading";
import { type HTMLAttributes, type JSX } from "react";

export const H2 = (props: HTMLAttributes<HTMLHeadingElement>): JSX.Element => {
  return (
    <Heading
      as="h2"
      className={css({
        textStyle: "titleXl!",
        mt: "space64!",
        mb: "space16!",
      })}
      {...props}
    />
  );
};

export const H3 = (props: HTMLAttributes<HTMLHeadingElement>): JSX.Element => {
  return (
    <Heading
      as="h3"
      className={css({
        textStyle: "titleL!",
        mt: "space48!",
        mb: "space16!",
      })}
      {...props}
    />
  );
};

export const H4 = (props: HTMLAttributes<HTMLHeadingElement>): JSX.Element => {
  return (
    <Heading
      as="h4"
      className={css({
        textStyle: "titleM!",
        mt: "space32!",
        mb: "space16!",
      })}
      {...props}
    />
  );
};
