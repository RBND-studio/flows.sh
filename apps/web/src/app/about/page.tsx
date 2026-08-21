// cspell:words ondra vojta filip david

import { css } from "@flows/styled-system/css";
import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { links } from "lib/links";
import type { JSX } from "react";
import { Text } from "ui";

import ondraPng from "./ondra.png";
import vojtaPng from "./vojta.png";
import filipPng from "./filip.png";
import davidPng from "./david.png";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebMetadata } from "lib/get-metadata";

const team = [
  {
    name: "Ondrej Pesicka",
    role: "Founder",
    photo: ondraPng,
  },
  {
    name: "Vojtech Vidra",
    role: "Founder",
    photo: vojtaPng,
  },
  {
    name: "Filip Sima",
    role: "GTM",
    photo: filipPng,
  },
  {
    name: "David Pesicka",
    role: "Engineering",
    photo: davidPng,
  },
];

export const metadata: Metadata = getWebMetadata({
  title: "About us: The team building Flows",
  description:
    "Learn more about the team building Flows, our mission, and how we're creating a product adoption platform for modern software companies.",
});

export default function About(): JSX.Element {
  const textLink = css({
    textDecoration: "underline",
  });

  return (
    <>
      <Section bottomBorder sideBorders decorator="vertical">
        <Text
          variant="title4xl"
          as="h1"
          align="center"
          pt="space40"
          pb="space40"
          md={{ pt: "space80", pb: "space64" }}
        >
          About us
        </Text>
      </Section>
      <Section
        pt={{ base: "space24", md: "space120" }}
        pb={{ base: "space40", md: "space120" }}
        sideBorders
        px="space20"
      >
        <Box maxWidth={720} mx="auto">
          <Text variant="bodyM" mb="space16">
            Hey there. We're the team behind Flows.
          </Text>
          <Text variant="bodyM" mb="space16">
            We're building a product adoption platform for software companies. Product adoption
            tools have been around for years, and somehow they all deliver the same generic
            experience.
          </Text>
          <Text variant="bodyM" mb="space16">
            From day one, we wanted Flows to be different. More flexible, more powerful, and a
            platform you actually enjoy using rather than one you tolerate.
          </Text>
          <Text variant="bodyM" mb="space16">
            We believe tools should empower you and get out of your way, not limit you with rigid
            templates, features locked behind a paywall, and constant nudges to upgrade. Good tools
            should be generous and grow with you. That's why Flows is free for teams starting out
            and stays affordable as you grow.
          </Text>
          <Text variant="bodyM" mb="space16">
            We're a small, independent team in the Czech Republic, bootstrapped and funded entirely
            by our customers. That gives us the freedom to build the product the way we want. We
            care about the long term, and about building something opinionated, focused, and
            sustainable.
          </Text>
          <Text variant="bodyM" mb="space16">
            Flows is our take on what product adoption should be. We hope you enjoy using it as much
            as we enjoy building it.
          </Text>
          <Text variant="bodyM" mb="space16">
            – The Flows team
          </Text>
        </Box>
      </Section>
      <Section sideBorders pb={{ base: "space24", md: "space120" }} px="space20" bottomBorder>
        <Grid
          gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          gap="space24"
          maxWidth={720}
          mx="auto"
          pb={{ base: "space24", md: "space64" }}
        >
          {team.map((member) => (
            <Flex key={member.name} direction="column">
              <Image
                src={member.photo}
                alt={member.name}
                quality={100}
                className={css({
                  borderRadius: "radius8",
                  mb: "space12",
                })}
              />
              <Text variant="titleS">{member.name}</Text>
              <Text variant="bodyXs" color="fg.neutral.muted">
                {member.role}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Text maxWidth={720} mx="auto" variant="bodyXs" align="center" color="fg.neutral.muted">
          Flows is made by{" "}
          <a target="_blank" className={textLink} href={links.rbnd} rel="noopener">
            RBND studio
          </a>
          . Some of our other projects are{" "}
          <a href="https://atmos.style" className={textLink} target="_blank" rel="noopener">
            Atmos
          </a>{" "}
          and{" "}
          <a href="https://fig-stats.com" className={textLink} target="_blank" rel="noopener">
            Fig Stats
          </a>
        </Text>
      </Section>
    </>
  );
}
