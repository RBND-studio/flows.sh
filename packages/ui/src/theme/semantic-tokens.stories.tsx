/* eslint-disable @typescript-eslint/no-unsafe-argument -- storybook */
import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import type { Meta } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";

import { Text } from "../text";
import { semanticTokens } from "./semantic-tokens";

const meta: Meta = {
  title: "Tokens/Semantic Tokens",
};

export default meta;

const box = css({
  width: 64,
  height: 64,
  margin: 8,
  borderRadius: 100,
});

export const Default = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      {Object.keys(semanticTokens.colors).map((key) => (
        <Fragment key={key}>
          <Text variant="titleXs">{key}</Text>
          <div
            key={key}
            className={css({
              display: "flex",
              gap: "space8",
              padding: "space24",
              background: `bg.${key}`,
              flexWrap: "wrap",
            })}
          >
            {/* @ts-expect-error - storybook */}
            {Object.keys(semanticTokens.colors[key]).map((color) => (
              <Box
                width={88}
                display="flex"
                alignItems="center"
                padding="space8"
                flexDirection="column"
                gap="space8"
                key={color}
              >
                <div
                  className={cx(box)}
                  style={{
                    // @ts-expect-error - storybook
                    backgroundColor: token.var(`colors.${key}.${color}`),
                  }}
                />
                <Text variant="bodyXs">{color}</Text>
              </Box>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  ),
};
