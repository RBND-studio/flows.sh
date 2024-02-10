import { css } from "@flows/styled-system/css";
import { Section } from "components/ui/section";
import Image from "next/image";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

import { WaitlistForm } from "./waitlist-form";

export const CtaBanner = (): ReactElement => {
  return (
    <Section
      background="bg"
      innerClassName={css({
        display: "flex",
        flexDirection: "column",
        gap: "space24",
        alignItems: "center",
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
        <Text align="center" as="h2" variant="title3xl">
          Join Flows waitlist today
        </Text>
        <Text align="center" variant="bodyM">
          Be the first one to know about our beta launch.
        </Text>
      </div>
      <WaitlistForm />
    </Section>
  );
};
