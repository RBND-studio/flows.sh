import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { WaitlistForm } from "components/cta-banner/waitlist-form";
import { ThemeImage } from "components/theme-image";
import { Section } from "components/ui/section";
import type { ReactElement } from "react";
import { Text } from "ui";

export const Hero = (): ReactElement => {
  return (
    <Section
      background="transparent"
      innerClassName={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "space40",
      })}
      outerClassName={css({
        paddingTop: "120px",
        paddingBottom: "140px",
        position: "relative",

        overflow: "hidden",

        md: {
          paddingTop: "180px",
          paddingBottom: "200px",
        },
      })}
      sectionPadding="none"
    >
      <Flex flexDirection="column" gap="space12" maxW="728px">
        <Text align="center" as="h1" variant="title5xl">
          User onboarding for modern SaaS
        </Text>
        <Text align="center" color="muted" variant="bodyL">
          Flows let you build any onboarding you want.
          <br /> Guide users, increase feature adoption, and improve revenue.
        </Text>
      </Flex>
      <WaitlistForm />

      <ThemeImage
        alt="Flows hero"
        className={css({
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          maxWidth: "1440px",
        })}
        height={2160}
        srcDark="/images/homepage/hero-dark.png"
        srcLight="/images/homepage/hero-light.png"
        width={4320}
      />
    </Section>
  );
};
