import { css, cx } from "@flows/styled-system/css";
import type { HTMLAttributes } from "react";

export function Button(props: HTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      type="button"
      {...props}
      className={cx(
        css({
          px: 8,
          py: 4,
          backgroundColor: "salmon",
          cursor: "pointer",
          borderRadius: 4,
          color: "white",
        }),
        props.className
      )}
    />
  );
}
