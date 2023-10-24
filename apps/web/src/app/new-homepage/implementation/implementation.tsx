"use client";

import { css } from "@flows/styled-system/css";
import type { FC } from "react";
import React, { useState } from "react";
import { Text } from "ui";

import { Content } from "./content";
import { Switcher } from "./switcher";

export const Implementation: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className={css({
        width: "100%",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border",
        paddingX: "space24",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "space64",
          alignItems: "center",
          paddingY: "space120",
          maxWidth: "1100px",
          marginX: "auto",
        })}
      >
        <div
          className={css({
            maxWidth: "728px",
            marginX: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "space24",
            alignItems: "center",
          })}
        >
          <Text align="center" as="h2" variant="titleL">
            No-Code or In-Code
          </Text>
          <Text
            align="center"
            className={css({
              maxWidth: "542px",
            })}
            color="muted"
            variant="bodyL"
          >
            Prefer quick iteration detached from deploys or want to keep things stable? You can do
            both with Flows.
          </Text>
          <Switcher currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
        <Content currentIndex={currentIndex} />
      </div>
    </div>
  );
};
