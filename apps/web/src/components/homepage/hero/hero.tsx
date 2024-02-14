import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { WaitlistForm } from "components/cta-banner/waitlist-form";
import { ThemeImage } from "components/theme-image";
import { Section } from "components/ui/section";
import type { ReactElement } from "react";
import { Text } from "ui";

import heroDarkImg from "./hero-dark.webp";
import heroLightImg from "./hero-light.webp";
import heroMobileDarkImg from "./hero-mobile-dark.webp";
import heroMobileLightImg from "./hero-mobile-light.webp";

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
          Flows lets you build any onboarding you want. Guide users, increase feature adoption, and
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
          fetchPriority="high"
          height={2160}
          placeholder="blur"
          srcDark={heroDarkImg}
          srcLight={heroLightImg}
          sizes="100wv"
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
          fetchPriority="high"
          height={471}
          placeholder="blur"
          srcDark={heroMobileDarkImg}
          srcLight={heroMobileLightImg}
          width={780}
        />
      </Box>
    </Section>
  );
};
