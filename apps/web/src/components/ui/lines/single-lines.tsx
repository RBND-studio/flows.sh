import { css, cx } from "@flows/styled-system/css";
import type { JSX } from "react";

export const TopLine = (): JSX.Element => {
  return (
    <>
      <div
        className={css({
          _before: {
            content: '""',
            position: "absolute",
            top: "-1px",
            width: "40px",
            right: "-40px",
            height: "1px",
            background: "newBorder.neutral.muted",
            lgDown: {
              width: "24px",
              right: "-24px",
            },
            mdDown: {
              display: "none",
              width: "0px",
              right: "-0px",
            },
          },
        })}
      />
      <div
        className={css({
          _before: {
            content: '""',
            position: "absolute",
            top: "-1px",
            width: "40px",
            left: "-40px",
            height: "1px",
            background: "newBorder.neutral.muted",
            lgDown: {
              width: "24px",
              left: "-24px",
            },
            mdDown: {
              display: "none",
              width: "0px",
              left: "-0px",
            },
          },
        })}
      />
    </>
  );
};

export const BottomLine = ({ className }: { className?: string }): JSX.Element => {
  return (
    <>
      <div
        className={cx(
          css({
            _before: {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              width: "40px",
              right: "-40px",
              height: "1px",
              background: "newBorder.neutral.muted",
              lgDown: {
                width: "24px",
                right: "-24px",
              },
              mdDown: {
                display: "none",
                width: "0px",
                right: "-0px",
              },
            },
          }),
          className,
        )}
      />
      <div
        className={cx(
          css({
            _before: {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              width: "40px",
              left: "-40px",
              height: "1px",
              background: "newBorder.neutral.muted",
              lgDown: {
                width: "24px",
                left: "-24px",
              },
              mdDown: {
                display: "none",
                width: "0px",
                left: "-0px",
              },
            },
          }),
          className,
        )}
      />
    </>
  );
};
