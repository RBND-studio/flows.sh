import { Flex } from "@flows/styled-system/jsx";
import { Hero, TrailFork } from "components";
import { CtaBanner } from "components/cta-banner";
import { Tour16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import type { JSX } from "react";
import { Icon, Text } from "ui";

import { FeaturesSection } from "./features-section";
import { MainIllustration } from "./main-illustration";

export const metadata: Metadata = getWebMetadata({
  title: "Product Tours",
  description:
    "Easily build tours that guide, onboarding, support, and turn new signups into power users. While being on-brand.",
});

export default function ProductTour(): JSX.Element {
  return (
    <>
      <Hero
        eyebrow={
          <Flex gap="space8" alignItems="center">
            <Icon icon={Tour16} />
            <Text variant="titleM">Product tours</Text>
          </Flex>
        }
        title={
          <>
            Guide users to success
            <br />
            step-by-step
          </>
        }
        description="Easily build tours that guide, onboarding, support, and turn new signups into power users. While being on-brand."
      />

      <MainIllustration />

      <FeaturesSection />

      <TrailFork
        title="More than just Product tours"
        description="Engage users, drive adoption and increase conversions with just a few lines of code. Ship custom product adoption experiences in days, not months."
      />

      <CtaBanner />
    </>
  );
}
