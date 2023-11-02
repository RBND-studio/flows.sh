import { css } from "@flows/styled-system/css";
import { Section } from "components/section";
import Image from "next/image";
import type { FC } from "react";
import React from "react";
import { Text } from "ui";

import { Content } from "./content";

export const ModernPlatform: FC = () => {
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
          Modern onboarding platform
        </Text>
      </div>
      <Image alt="No code" height={1746} src="/images/homepage/modern-platform.png" width={3380} />
      <Content />
    </Section>
  );
};
