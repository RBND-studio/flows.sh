import { Flex } from "@flows/styled-system/jsx";
import { Hero, TrailFork } from "components";
import { CtaBanner } from "components/cta-banner";
import { Component16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import type { JSX } from "react";
import { Icon, Text } from "ui";

import { FeaturesSection } from "./features-section";
import { MainIllustration } from "./main-illustration";

export const metadata: Metadata = getWebMetadata({
  title: "Custom UI components",
  description:
    "Leverage our APIs and your design system for full control. Build your own components and create a native experience.",
});

export default function ProductTour(): JSX.Element {
  return (
    <>
      <Hero
        eyebrow={
          <Flex gap="space8" alignItems="center">
            <Icon icon={Component16} />
            <Text variant="titleM">Custom UI components</Text>
          </Flex>
        }
        title={
          <>
            Headless product
            <br />
            adoption platform
          </>
        }
        description="Leverage our APIs and your design system for full control. Build your own components and create a native experience."
      />

      <MainIllustration />

      <FeaturesSection />

      <TrailFork
        title="More than just Custom UI components"
        description="Engage users, drive adoption and increase conversions with just a few lines of code. Ship custom product adoption experiences in days, not months."
      />

      <CtaBanner />
    </>
  );
}
