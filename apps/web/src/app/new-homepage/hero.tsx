import { css } from "@flows/styled-system/css";
import { WaitlistForm } from "components/cta-banner/waitlist-form";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

const Hero = (): ReactElement => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "space40",
        alignItems: "center",
        paddingTop: "180px",
        paddingBottom: "200px",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)",
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
        })}
      >
        <Text align="center" as="h1" variant="titleXxl">
          Onboarding for modern SaaS
        </Text>
        <Text align="center" color="muted" variant="bodyL">
          A better way to <b>onboard users</b> and drive <b>product adoption</b>.
        </Text>
      </div>
      <WaitlistForm />
    </div>
  );
};

export default Hero;
