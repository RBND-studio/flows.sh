import { css } from "@flows/styled-system/css";
import { Section } from "components/ui/section";
import type { FC } from "react";
import { Text } from "ui";

import { Content } from "./content";

export const FlowsAreBetterSection: FC = () => {
  return (
    <Section
      innerClassName={css({
        display: "flex",
        flexDirection: "column",
        gap: "space40",
        alignItems: "center",
      })}
      sectionPadding="small"
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
        <Text align="center" as="h2" variant="title3xl">
          How are Flows better?
        </Text>
      </div>
      <Content />
    </Section>
  );
};
