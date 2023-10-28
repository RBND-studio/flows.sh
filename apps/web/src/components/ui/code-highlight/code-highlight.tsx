import { css } from "@flows/styled-system/css";
import { Code } from "bright";
import type { FC, ReactNode } from "react";

import { fileIcons } from "./file-icons";
import { tabs } from "./tabs";

type Props = {
  children: ReactNode;
};

export const CodeHighlight: FC<Props> = (props) => {
  return (
    <Code
      extensions={[fileIcons, tabs]}
      theme="github-dark-dimmed"
      {...props}
      className={css({
        borderRadius: "radius12!",
      })}
      codeClassName={css({
        fontFamily: `SF Mono,Segoe UI Mono,Roboto Mono,Ubuntu Mono,Menlo,Consolas,Courier,"monospace"`,
        fontSize: "14px",
        borderRadius: "radius16",
      })}
      lineNumbers
      titleClassName={css({
        "--tab-top-border": "transparent",
      })}
    />
  );
};
