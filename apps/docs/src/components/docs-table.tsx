import { css, cx } from "@flows/styled-system/css";
import { type JSX, type TableHTMLAttributes } from "react";

export const DocsTable = (props: TableHTMLAttributes<HTMLTableElement>): JSX.Element => {
  return (
    <div
      className={cx(
        css({
          marginTop: "1.5em",
          marginBottom: "1.5em",
        }),
        "relative",
        "overflow-auto",
      )}
    >
      <table
        className={css({
          my: "0!",
        })}
        {...props}
      />
    </div>
  );
};
