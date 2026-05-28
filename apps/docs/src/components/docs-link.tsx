import { css } from "@flows/styled-system/css";
import Link, { type LinkProps } from "fumadocs-core/link";
import { type JSX } from "react";

export const DocsLink = (props: LinkProps): JSX.Element => {
  return (
    <Link
      className={css({
        "&:not(:has(code))": {
          fontWeight: "600!",
          borderBottomWidth: "2px!",
          borderBottomColor: "newBorder.primary!",
          textDecoration: "none!",
          _hover: {
            borderBottomWidth: "3px!",
          },
        },
        "&:has(code)": {
          textDecoration: "underline",
          textDecorationColor: "newBorder.primary",
          textDecorationThickness: "1.5px",
          textUnderlineOffset: "3px",
        },
      })}
      {...props}
    />
  );
};
