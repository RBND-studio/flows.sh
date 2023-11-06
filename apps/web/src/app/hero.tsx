import { css } from "@flows/styled-system/css";
import { WaitlistForm } from "components/cta-banner/waitlist-form";
import { Section } from "components/section";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

export const Hero = (): ReactElement => {
  return (
    <Section
      background="transparent"
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
        position: "relative",

        bgGradient: "to-b!",
        gradientFrom: "transparent",
        gradientTo: "bg.muted",

        md: {
          paddingTop: "180px",
          paddingBottom: "200px",
        },
        "&:after": {
          content: "''",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1",
          backgroundImage: "url('/images/homepage/pattern.svg')",
          backgroundRepeat: "repeat-x",
        },
      })}
    >
      <Text align="center" as="h1" variant="title6xl">
        Onboarding for modern SaaS
      </Text>
      <Text align="center" color="muted" variant="bodyL">
        A better way to <b>onboard users</b> and drive <b>product adoption</b>.
      </Text>
      <WaitlistForm />
    </Section>
  );
};
