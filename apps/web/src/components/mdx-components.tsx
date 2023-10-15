import { css } from "@flows/styled-system/css";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { HTMLProps, ReactElement } from "react";
import { Text } from "ui";

const mdxComponents = {
  Image: (props: HTMLProps<HTMLImageElement>) => (
    <Image
      alt={props.alt || "Blog post cover image"}
      className={css({
        borderRadius: "radius12",
        mb: "space24",
      })}
      height={Number(props.height)}
      src={props.src ?? ""}
      width={Number(props.width)}
    />
  ),
  h1: (props) => (
    <Text
      as="h2"
      className={css({
        mt: "space48",
        mb: "space24",
      })}
      variant="titleS"
      {...props}
    />
  ),
  h2: (props) => (
    <Text
      as="h3"
      className={css({
        mt: "space24",
        mb: "space16",
      })}
      variant="titleXs"
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      as="h4"
      className={css({
        mt: "space24",
        mb: "space16",
      })}
      variant="subtitleL"
      {...props}
    />
  ),
  h4: (props) => (
    <Text
      as="h5"
      className={css({
        mt: "space24",
        mb: "space16",
      })}
      variant="subtitleM"
      {...props}
    />
  ),
  p: (props) => (
    <Text
      as="p"
      className={css({
        mb: "space24",
      })}
      variant="bodyL"
      {...props}
    />
  ),
  ul: (props) => (
    <Text
      as="ul"
      className={css({
        listStyle: "disc",
        marginBottom: "space24",
        "& ul": {
          paddingLeft: "space32",
        },
        "& > li": {
          "&::marker": {
            textStyle: "bodyS",
          },
        },
      })}
      variant="bodyL"
      {...props}
    />
  ),
  ol: (props) => (
    <Text
      as="ol"
      className={css({
        listStyle: "number",
      })}
      variant="bodyL"
      {...props}
    />
  ),
  li: (props) => (
    <Text
      as="li"
      variant="bodyL"
      {...props}
      className={css({ listStylePosition: "inside", marginBottom: "space8" })}
    />
  ),

  blockquote: (props) => (
    <Text
      as="blockquote"
      className={css({
        mt: "space24",
        mb: "space16",
        pl: "space24",
        borderLeft: "2px solid",
        borderColor: "border.primary",
      })}
      variant="bodyL"
      {...props}
    />
  ),

  hr: (props) => (
    <hr
      className={css({
        my: "space48",
        border: "none",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border.strong",
      })}
      {...props}
    />
  ),

  //TODO: replace this with a component that uses either <Link> or <a> depending on whether the href is internal or external
  a: ({ href, children, ...rest }) => (
    <a
      className={css({
        color: "text.primary",
        textDecoration: "underline",
      })}
      href={href}
      {...rest}
    >
      {children || href}
    </a>
  ),

  //TODO: add code component with syntax highlighting
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps): ReactElement {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
