import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { EndLine, NewLine, NewLineDecorator } from "components/ui";
import React, { type ReactNode } from "react";
import { Text } from "ui";

import { ProgressBar } from "./progress-bar";

type Props = {
  name: string;
  monthlyPrice: number;
  logo: ReactNode;
  maxPrice: number;
  isCompetitor: boolean;
};

export const ToolComparison = ({
  name,
  monthlyPrice,
  logo,
  maxPrice,
  isCompetitor,
}: Props): ReactNode => {
  return (
    <>
      <Flex
        mb={{
          base: "space16",
          md: 0,
        }}
      >
        <EndLine
          className={css({
            height: "unset!",
            display: {
              base: "none",
              md: "block",
            },
          })}
          side="bottom"
          gradient={false}
        />
        <Flex className={ToolComparisonWrapperCss({ competitor: isCompetitor })}>
          <Flex w="100%" justifyContent="space-between" alignItems="center" gap="space8">
            <Flex gap="space8" alignItems="center">
              {logo}
              <Text
                variant="titleM"
                className={ToolComparisonTextCss({ competitor: isCompetitor })}
              >
                {name}
              </Text>
            </Flex>
            <Text className={ToolComparisonTextCss({ competitor: isCompetitor })}>
              ${monthlyPrice} / month
            </Text>
          </Flex>
          <ProgressBar primary={!isCompetitor} percentage={(monthlyPrice / maxPrice) * 100} />
        </Flex>
        <EndLine
          className={css({
            height: "unset!",
            display: {
              base: "none",
              md: "block",
            },
          })}
          side="bottom"
          gradient={false}
        />
      </Flex>
      <Box
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator />
      </Box>
    </>
  );
};

const ToolComparisonWrapperCss = cva({
  base: {
    borderRadius: "radius12",
    px: "space16",
    py: "space12",
    flexDirection: "column",
    w: "100%",
    gap: "space12",
  },
  variants: {
    competitor: {
      true: {},
      false: {
        pb: "space20",
        bg: "linear-gradient(120deg, #3685EC, #327CDA)",
        _dark: {
          bg: "linear-gradient(120deg, #539EFF, #6AABFF)",
        },
      },
    },
  },
});

const ToolComparisonTextCss = cva({
  base: {
    color: "newFg.neutral",
  },
  variants: {
    competitor: {
      true: {},
      false: {
        color: "newFg.neutral.onPrimary",
      },
    },
  },
});
