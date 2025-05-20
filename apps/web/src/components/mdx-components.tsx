import { css } from "@flows/styled-system/css";
import { HeadingLink } from "components/mdx-heading-link";
import { isValidUrl } from "lib/is-valid-url";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";
import type { HTMLProps, ReactElement } from "react";
import { Text, type TextProps } from "ui";
import { CodeHighlight } from "ui/server";

const mdxComponents = {
  Image: (props: HTMLProps<HTMLImageElement>) => (
    <Image
      alt={props.alt ?? "Blog post cover image"}
      className={css({
        borderRadius: "radius8",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "newBorder.neutral",
        mb: "space24",
      })}
      height={Number(props.height)}
      src={props.src ?? ""}
      width={Number(props.width)}
      sizes="(max-width: 768px) 100vw, 896px"
    />
  ),
  h1: (props: TextProps) => {
    if (props.id) {
      return (
        <HeadingLink
          linkProps={{ href: `#${props.id}` }}
          as="h1"
          textProps={{
            variant: "title2xl",
            ...props,
          }}
          wrapperProps={css({
            mt: "space48",
            mb: "space24",
          })}
        >
          {props.children}
        </HeadingLink>
      );
    }
    return (
      <Text
        as="h1"
        className={css({
          mt: "space48",
          mb: "space24",
        })}
        variant="title2xl"
        {...props}
      />
    );
  },
  h2: (props: TextProps) => {
    if (props.id) {
      return (
        <HeadingLink
          as="h2"
          linkProps={{ href: `#${props.id}` }}
          textProps={{
            variant: "titleXl",
            ...props,
          }}
          wrapperProps={css({
            mt: "space48",
            mb: "space24",
          })}
        >
          {props.children}
        </HeadingLink>
      );
    }
    return (
      <Text
        as="h2"
        className={css({
          mt: "space48",
          mb: "space24",
        })}
        variant="titleXl"
        {...props}
      />
    );
  },
  h3: (props: TextProps) => {
    if (props.id) {
      return (
        <HeadingLink
          as="h3"
          linkProps={{ href: `#${props.id}` }}
          textProps={{
            variant: "titleL",
            ...props,
          }}
          wrapperProps={css({
            mt: "space32",
            mb: "space16",
          })}
        >
          {props.children}
        </HeadingLink>
      );
    }
    return (
      <Text
        as="h3"
        className={css({
          mt: "space32",
          mb: "space16",
        })}
        variant="titleL"
        {...props}
      />
    );
  },
  h4: (props: TextProps) => {
    if (props.id) {
      return (
        <HeadingLink
          linkProps={{ href: `#${props.id}` }}
          as="h4"
          textProps={{
            variant: "titleM",
            ...props,
          }}
          wrapperProps={css({
            mt: "space24",
            mb: "space16",
          })}
        >
          {props.children}
        </HeadingLink>
      );
    }
    return (
      <Text
        as="h4"
        className={css({
          mt: "space24",
          mb: "space16",
        })}
        variant="titleM"
        {...props}
      />
    );
  },
  p: (props) => (
    <Text
      as="p"
      className={css({
        mb: "space24",
        "& code": {
          backgroundColor: "newBg.neutral.subtle",
          color: "newFg.neutral",
          paddingX: "space4",
          paddingY: "2px",
          borderRadius: "radius4",
          textStyle: "bodyM",
          fontFamily: "monospace",
        },
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
        marginLeft: "space16",
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
        marginLeft: "space16",
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
      className={css({ listStylePosition: "outside", marginBottom: "space8" })}
    />
  ),

  blockquote: (props) => (
    <Text
      as="blockquote"
      className={css({
        mt: "space24",
        mb: "space16",
        pl: "space24",
        borderLeftWidth: "2px",
        borderColor: "newBorder.primary",
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
        borderTopColor: "newBorder.neutral.strong",
      })}
      {...props}
    />
  ),

  a: ({ href, children, ...rest }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call -- because fuck vercel eslint
    const source: string = href.toString();

    if (isValidUrl(source)) {
      return (
        <a
          className={css({
            fontWeight: "600",
            borderBottomWidth: "2px",
            borderBottomColor: "newBorder.primary",
            _hover: {
              borderBottomWidth: "3px",
            },
          })}
          href={source}
          rel="noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        {...rest}
        className={css({
          fontWeight: "600",
          borderBottomWidth: "2px",
          borderBottomColor: "newBorder.primary",
          _hover: {
            borderBottomWidth: "3px",
          },
        })}
      >
        {children}
      </Link>
    );
  },
  pre: (props) => (
    <CodeHighlight
      codeClassName={css({
        fontSize: "13px",
      })}
      {...props}
    />
  ),
  CodeHighlight,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps): ReactElement {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
