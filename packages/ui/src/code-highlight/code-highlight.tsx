import { css, cx } from "@flows/styled-system/css";
import { Code } from "bright";
import type { FC, ReactNode } from "react";

import { fileIcons } from "./file-icons";
import { tabs } from "./tabs";

type Props = {
  children: ReactNode;
  className?: string;
  codeClassName?: string;
  lineNumbers?: boolean;
  lang?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- extensions type is not exported from bright
  extensions?: any[];
};

export const CodeHighlight: FC<Props> = ({ lineNumbers = true, ...props }) => {
  return (
    <Code
      lang={props.lang}
      extensions={[fileIcons, tabs]}
      theme={{ dark: "github-dark-dimmed", light: "github-light", lightSelector: ".light" }}
      {...props}
      className={cx(
        css({
          position: "relative",
          borderRadius: "radius8!",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          display: "flex",
          flexDirection: "column",
          "& pre": {
            py: "space12!",
            flex: 1,
            scrollbarWidth: "thin",
            scrollbarColor: "var(--colors-pane-fg-scroll) transparent",
          },
          "&:hover .copy-button": {
            opacity: 1,
          },
        }),
        props.className,
      )}
      codeClassName={cx(
        css({
          fontFamily: `SF Mono,Segoe UI Mono,Roboto Mono,Ubuntu Mono,Menlo,Consolas,Courier,"monospace"`,
          fontSize: "12px",
          borderRadius: "radius8",
        }),
        props.codeClassName,
      )}
      lineNumbers={lineNumbers}
      titleClassName={css({
        "--tab-top-border": "transparent",
      })}
    />
  );
};
