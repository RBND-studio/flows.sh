import { css } from "@flows/styled-system/css";
import { Section } from "components/section";
import type { FC } from "react";
import { Text } from "ui";

import { Content } from "./content";

export const AnalyzeSection: FC = () => {
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
      <Text align="center" as="h2" variant="title3xl">
        Analyze, optimize, fix
      </Text>
      <Content />
    </Section>
  );
};
