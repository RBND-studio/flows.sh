import { css } from "@flows/styled-system/css";

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

export const BottomLine = (): JSX.Element => {
  return (
    <>
      <div
        className={css({
          _before: {
            content: '""',
            position: "absolute",
            bottom: "-1px",
            width: "40px",
            right: "-40px",
            height: "1px",
            background: "newBorder.neutral.muted",
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
            background: "newBorder.neutral.muted",
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
