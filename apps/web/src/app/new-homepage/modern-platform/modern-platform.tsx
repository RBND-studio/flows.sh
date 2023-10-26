import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { FC } from "react";
import React from "react";
import { Text } from "ui";

import { Content } from "./content";

export const ModernPlatform: FC = () => {
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
            Modern onboarding platform
          </Text>
        </div>
        <Image
          alt="No code"
          height={560}
          src="https://via.placeholder.com/1100x560/e2e2e2/e2e2e2.png"
          width={1100}
        />
        <Content />
      </div>
    </div>
  );
};
