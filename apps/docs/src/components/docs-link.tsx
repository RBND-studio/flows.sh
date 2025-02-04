import { css } from "@flows/styled-system/css";
import Link, { type LinkProps } from "fumadocs-core/link";
import { type JSX } from "react";

export const DocsLink = (props: LinkProps): JSX.Element => {
  return (
    <Link
      className={css({
        fontWeight: "600!",
        borderBottomWidth: "2px!",
        borderBottomColor: "newBorder.primary!",
        textDecoration: "none!",
        _hover: {
          opacity: "1!",
          borderBottomWidth: "3px!",
        },
      })}
      {...props}
    />
  );
};
