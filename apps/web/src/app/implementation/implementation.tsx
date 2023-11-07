"use client";

import { css } from "@flows/styled-system/css";
import { Section } from "components/section";
import type { FC } from "react";
import React, { useState } from "react";
import { Text } from "ui";

import { Content } from "./content";
import { Switcher } from "./switcher";
import type { Variant } from "./variants";

export const Implementation: FC<{ variants: Variant[] }> = ({ variants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Section
      innerClassName={css({
        display: "flex",
        flexDirection: "column",
        gap: "space64",
        alignItems: "center",
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
        <Text align="center" as="h2" variant="title4xl">
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
        <Switcher
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          variants={variants}
        />
      </div>
      <Content currentIndex={currentIndex} variants={variants} />
    </Section>
  );
};
