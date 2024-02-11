import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { FeatureGrid } from "components/feature-grid";
import { Section } from "components/ui";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactElement } from "react";
import { Text } from "ui";

import { featuresData } from "./content";

export const metadata: Metadata = {
  metadataBase: new URL("https://flows.sh"),
  title: "Features – Flows",
  description:
    "The new standard for building user onboarding. Flows is the tool of choice for modern SaaS companies.",
  openGraph: {
    type: "website",
    title: "Features – Flows",
    description:
      "The new standard for building user onboarding. Flows is the tool of choice for modern SaaS companies.",
    images: "/images/features/features-og.png",
    url: "/features",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features – Flows",
    description:
      "The new standard for building user onboarding. Flows is the tool of choice for modern SaaS companies.",
    images: "/images/features/features-og.png",
    creator: "@flows_sh",
  },
  keywords: ["flows", "onboarding", "product adoption", "user onboarding", "user adoption"],
};

const Page = (): ReactElement => {
  return (
    <>
      <Section
        innerClassName={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "space24",
        })}
        outerClassName={css({
          backgroundImage: "radial-gradient(token(colors.special.dotBg) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        })}
      >
        <Box position="relative">
          <Image
            alt="Logo"
            className={css({
              zIndex: "2",
              position: "relative",
              background: "bg.muted",
              borderRadius: "20px",
            })}
            height={80}
            priority
            src="/images/logo/logo.svg"
            width={80}
          />
          <Box
            background="bg.primary"
            borderRadius="20px"
            filter="blur(16px)"
            height="80px"
            opacity="0.5"
            position="absolute"
            top="0"
            width="80px"
            zIndex="1"
          />
        </Box>
        <Flex flexDirection="column" gap="space12" maxW="800px">
          <Text align="center" as="h1" variant="title4xl">
            The new standard for building user onboarding
          </Text>
          <Text
            align="center"
            className={css({
              maxWidth: "600px",
              marginX: "auto",
            })}
            color="muted"
            variant="bodyL"
          >
            With its flexible approach, Flows unlock the potential of your product by providing the
            tools to build seamless onboarding experiences for your users. It is the tool of choice
            for modern SaaS companies.
          </Text>
        </Flex>
      </Section>
      {featuresData.map((section) => (
        <FeatureGrid key={section.title} {...section} />
      ))}
    </>
  );
};

export default Page;
