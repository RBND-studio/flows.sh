import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

import { WaitlistForm } from "./waitlist-form";

export const CtaBanner = (): ReactElement => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "space24",
        alignItems: "center",
        paddingY: "120px",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border",
      })}
    >
      <Image alt="Logo" height={72} src="/images/logo/logo.svg" width={72} />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "space8",
          alignItems: "center",
        })}
      >
        <Text variant="titleM">Join Flows waitlist today</Text>
        <Text variant="bodyM">Be the first one to know about our beta launch.</Text>
      </div>
      <WaitlistForm />
    </div>
  );
};
