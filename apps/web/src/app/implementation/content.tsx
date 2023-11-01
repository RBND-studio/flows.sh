import { css } from "@flows/styled-system/css";
import type { FC } from "react";
import React from "react";
import { Text } from "ui";

import type { Variant } from "./variants";

type Props = {
  currentIndex: number;
  variants: Variant[];
};

export const Content: FC<Props> = ({ currentIndex, variants }) => {
  return (
    <>
      {variants.map((item, i) => {
        return (
          <div
            className={css({
              gap: "space40",
              justifyContent: "space-between",
              width: "100%",
              display: currentIndex === i ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
              md: {
                gap: "space40",
                alignItems: "unset",
                flexDirection: "row",
              },
            })}
            key={item.name}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "space24",
                maxWidth: "444px",
                width: "100%",
                justifyContent: "center",
              })}
            >
              {item.items.map((variantItem) => {
                return (
                  <div
                    className={css({
                      display: "flex",
                      flexDirection: "column",
                      gap: "space4",
                    })}
                    key={variantItem.title}
                  >
                    <Text as="h4" variant="subtitleL">
                      {variantItem.title}
                    </Text>
                    <Text color="muted" variant="bodyM">
                      {variantItem.description}
                    </Text>
                  </div>
                );
              })}
            </div>
            <div className={css({ flex: 1 })}>{item.visual}</div>
          </div>
        );
      })}
    </>
  );
};
