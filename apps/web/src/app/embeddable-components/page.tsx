import { Flex } from "@flows/styled-system/jsx";
import { Hero, TrailFork } from "components";
import { CtaBanner } from "components/cta-banner";
import { Slot16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import type { JSX } from "react";
import { Icon, Text } from "ui";

import { FeaturesSection } from "./features-section";
import { MainIllustration } from "./main-illustration";

export const metadata: Metadata = getWebMetadata({
  title: "Embeddable components",
  description:
    "Render inline components inside your app for in context guidance without frustrating users or interrupting them with popups.",
});

export default function ProductTour(): JSX.Element {
  return (
    <>
      <Hero
        eyebrow={
          <Flex gap="space8" alignItems="center">
            <Icon icon={Slot16} />
            <Text variant="titleM">Embeddable components</Text>
          </Flex>
        }
        title="Embed interactive content inside your product"
        description="Render inline components inside your app for in context guidance without frustrating users or interrupting them with popups."
      />

      <MainIllustration />

      <FeaturesSection />

      <TrailFork
        title="More than just Embeddedable components"
        description="Engage users, drive adoption and increase conversions with just a few lines of code. Ship custom product adoption experiences in days, not months."
      />

      <CtaBanner />
    </>
  );
}
