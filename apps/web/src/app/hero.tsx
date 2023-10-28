import { css } from "@flows/styled-system/css";
import { WaitlistForm } from "components/cta-banner/waitlist-form";
import { Section } from "components/section";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

const Hero = (): ReactElement => {
  return (
    <Section
      defaultPadding={false}
      innerClassName={css({
        maxWidth: "728px!",
        marginX: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "space24",
      })}
      outerClassName={css({
        paddingTop: "120px",
        paddingBottom: "140px",

        bgGradient: "to-b",
        gradientFrom: "bg",
        gradientTo: "bg.muted",

        md: {
          paddingTop: "180px",
          paddingBottom: "200px",
        },
      })}
    >
      <Text align="center" as="h1" variant="titleXxl">
        Onboarding for modern SaaS
      </Text>
      <Text align="center" color="muted" variant="bodyL">
        A better way to <b>onboard users</b> and drive <b>product adoption</b>.
      </Text>
      <WaitlistForm />
    </Section>
  );
};

export default Hero;
