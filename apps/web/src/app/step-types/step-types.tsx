import { css } from "@flows/styled-system/css";
import { Section } from "components/section";
import type { FC } from "react";
import React from "react";
import { Text } from "ui";

import { Content } from "./content";

export const StepTypes: FC = () => {
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
        <Text align="center" as="h2" variant="titleL">
          Advanced flow steps
        </Text>
        <Text
          align="center"
          className={css({
            maxWidth: "542px",
          })}
          color="muted"
          variant="bodyL"
        >
          Apart form the basics like tooltips and modals, Flows offers a range of advanced steps
          that allow you to craft better flows.
        </Text>
      </div>
      <Content />
    </Section>
  );
};
