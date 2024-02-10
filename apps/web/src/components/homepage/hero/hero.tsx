import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
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
        paddingTop: "100px",
        paddingBottom: "160px",
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
        <Text
          align="center"
          className={css({
            maxWidth: "560px",
            marginX: "auto",
          })}
          color="muted"
          variant="bodyL"
        >
          Flows let you build any onboarding you want. Guide users, increase feature adoption, and
          improve revenue.
        </Text>
      </Flex>
      <WaitlistForm />
      <Box
        display="unset"
        mdDown={{
          display: "none",
        }}
      >
        <ThemeImage
          alt=""
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
      </Box>
      <Box
        display="none"
        mdDown={{
          display: "unset",
        }}
      >
        <ThemeImage
          alt=""
          className={css({
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "-1",
            maxWidth: "780px",
          })}
          height={471}
          srcDark="/images/homepage/hero-mobile-dark.png"
          srcLight="/images/homepage/hero-mobile-light.png"
          width={780}
        />
      </Box>
    </Section>
  );
};
