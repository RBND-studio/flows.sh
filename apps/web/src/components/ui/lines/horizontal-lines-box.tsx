import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { JSX } from "react";

export const HorizontalLinesBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <Box
      borderTopColor="newBorder.neutral"
      borderTopWidth="1px"
      borderBottomColor="newBorder.neutral"
      borderBottomWidth="1px"
      position="relative"
      className={className}
    >
      {children}
      <div
        className={css({
          _before: {
            content: '""',

            position: "absolute",
            top: "-1px",
            width: "40px",
            right: "-40px",
            height: "1px",
            backgroundImage: "linear-gradient(90deg, token(colors.newBorder.neutral), transparent)",
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
            backgroundImage:
              "linear-gradient(270deg, token(colors.newBorder.neutral), transparent)",
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
      <div
        className={css({
          _before: {
            content: '""',

            position: "absolute",
            bottom: "-1px",
            width: "40px",
            right: "-40px",
            height: "1px",
            backgroundImage: "linear-gradient(90deg, token(colors.newBorder.neutral), transparent)",
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
            bottom: "-1px",
            width: "40px",
            left: "-40px",
            height: "1px",
            backgroundImage:
              "linear-gradient(270deg, token(colors.newBorder.neutral), transparent)",
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
    </Box>
  );
};
