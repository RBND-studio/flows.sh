import { Flex } from "@flows/styled-system/jsx";
import { Hero, TrailFork } from "components";
import { CtaBanner } from "components/cta-banner";
import { LogoSection } from "components/logos/logo-section";
import { Survey16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { routes } from "routes";
import { type Metadata } from "next";
import type { JSX } from "react";
import { Icon, Text } from "ui";

import { FeaturesSection } from "./features-section";
import { MainIllustration } from "./main-illustration";

export const metadata: Metadata = getWebMetadata({
  title: "Surveys",
  description:
    "Build NPS, CSAT, PMF, and custom surveys that run inside your product. Get real feedback from real users at the right moment.",
});

export default function Surveys(): JSX.Element {
  return (
    <>
      <Hero
        eyebrow={
          <Flex gap="space8" alignItems="center">
            <Icon icon={Survey16} />
            <Text variant="titleM">Surveys</Text>
          </Flex>
        }
        title={
          <>
            Collect user feedback
            <br />
            that drives decisions
          </>
        }
        description="Build NPS, CSAT, PMF, and custom surveys that run inside your product. Get real feedback from real users at the right moment."
      />

      <MainIllustration />

      <LogoSection />

      <FeaturesSection />

      <TrailFork
        title="More than just Surveys"
        description="Engage users, drive adoption and increase conversions with just a few lines of code. Ship custom product adoption experiences in days, not months."
        currentFeatureHref={routes.features.surveys}
      />

      <CtaBanner />
    </>
  );
}
