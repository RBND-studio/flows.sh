import { css } from "@flows/styled-system/css";
import Link from "next/link";
import { type ReactElement } from "react";
import { Text } from "ui";

export const Heading = ({ children }): ReactElement => {
  return (
    <Text variant="titleXl" mb="space24" mt="space48" as="h2">
      {children}
    </Text>
  );
};

export const Heading2 = ({ children }): ReactElement => {
  return (
    <Text variant="titleL" mb="space16" mt="space32" as="h3">
      {children}
    </Text>
  );
};

export const Paragraph = ({ children }): ReactElement => {
  return (
    <Text mb="space24" variant="bodyL">
      {children}
    </Text>
  );
};

export const OrderedList = ({ children }): ReactElement => {
  return (
    <ol
      className={css({
        listStyle: "number",
        marginLeft: "space24",
        marginBottom: "space24",
        textStyle: "bodyL",
        "& li": {
          listStylePosition: "outside",
          marginBottom: "space8",
        },
      })}
    >
      {children}
    </ol>
  );
};

export const UnorderedList = ({ children }): ReactElement => {
  return (
    <ul
      className={css({
        listStyle: "disc",
        marginLeft: "space24",
        marginBottom: "space24",
        textStyle: "bodyL",
        "& li": {
          listStylePosition: "outside",
          marginBottom: "space8",
          marginTop: "space8",
        },
        "& ul": {
          marginBottom: 0,
        },
      })}
    >
      {children}
    </ul>
  );
};

export const InlineCode = ({ children }): ReactElement => {
  return (
    <Text
      as="span"
      variant="bodyM"
      fontFamily="monospace"
      py="space2"
      px="space6"
      bg="newBg.neutral.subtle"
      borderWidth="1px"
      borderColor="newBorder.neutral"
      borderRadius="radius4"
    >
      {children}
    </Text>
  );
};

type ParagraphLinkProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
};

export const ParagraphLink = ({ children, href, target }: ParagraphLinkProps): ReactElement => {
  return (
    <Text
      as="span"
      variant="bodyL"
      fontWeight="600"
      borderBottomWidth="2px"
      borderBottomColor="newBorder.primary"
      _hover={{ borderBottomWidth: "3px" }}
    >
      <Link target={target} href={href}>
        {children}
      </Link>
    </Text>
  );
};
