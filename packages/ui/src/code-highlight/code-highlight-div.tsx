import { css, cx } from "@flows/styled-system/css";
import type { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  lineNumbers?: boolean;
};

export const CodeHighlightDiv: FC<Props> = ({ className, lineNumbers = true, ...props }) => {
  return (
    <div
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",

          "& pre": {
            overflow: "auto",
            py: "space12!",
            flex: 1,
            scrollbarWidth: "thin",
            scrollbarColor: "var(--colors-pane-fg-scroll) transparent",
          },

          "& code": {
            minWidth: "fit-content",
            display: "block",
            fontFamily: "mono",
            fontSize: "12px",
            borderRadius: "radius8",
            counterReset: "step",
            counterIncrement: "step 0",
          },
          "& .line": {
            px: "space12",
          },
          "& code .line::before": lineNumbers
            ? {
                content: "counter(step)",
                counterIncrement: "step",
                width: "1rem",

                marginRight: "space12",
                display: "inline-block",
                textAlign: "right",
                color: "fg.neutral.subtle",
              }
            : undefined,
        }),
        className,
      )}
      {...props}
    />
  );
};

export const CodeHighlightWrapper: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cx(
        css({
          position: "relative",
          overflow: "hidden",
          borderRadius: "radius8!",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "border.neutral",
          my: "space16",
          "&:hover .copy-button": {
            opacity: 1,
          },
        }),
        className,
      )}
    >
      {children}
    </div>
  );
};
