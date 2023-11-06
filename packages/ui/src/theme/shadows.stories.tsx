import { css, cx } from "@flows/styled-system/css";
import type { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Tokens/Shadows",
};

export default meta;

const shadows = [
  "light1",
  "light2",
  "light3",
  "light4",
  "light5",
  "dark1",
  "dark2",
  "dark3",
  "dark4",
  "dark5",
];

const box = css({
  width: 80,
  height: 80,
  margin: 8,
  borderRadius: 8,
  backgroundColor: "bg",
});

export const Default = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        className={css({
          display: "flex",
          gap: "space24",
          padding: "space24",
          background: "bg",
        })}
      >
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[0],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[1],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[2],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[3],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[4],
            }),
          )}
        />
      </div>
      <div
        className={css({
          display: "flex",
          gap: "space24",
          padding: "space24",
          background: "neutral.850",
        })}
      >
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[5],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[6],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[7],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[8],
            }),
          )}
        />
        <div
          className={cx(
            box,
            css({
              boxShadow: shadows[9],
            }),
          )}
        />
      </div>
    </div>
  ),
};
