import { Flex } from "@flows/styled-system/jsx";
import { CtaBanner } from "components/cta-banner";
import { LogoSection } from "components/logos/logo-section";
import { Block16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { routes } from "routes";
import { type Metadata } from "next";
import type { JSX } from "react";
import { Button, Icon, Text } from "ui";

import { FeaturesSection } from "./features-section";
import { MainIllustration } from "./main-illustration";
import { SignupClick } from "components/utils/signup-click";
import { css } from "@flows/styled-system/css";
import { links } from "lib/links";
import { InstallWithAIButton } from "components/install-with-ai-button";
import { TrailFork } from "components/feature-landing-pages/trail-fork";
import { Hero } from "components/hero/hero";

export const metadata: Metadata = getWebMetadata({
  title: "Workflows",
  description:
    "Build multi-step user journeys that branch by behavior, plan, or role. Automate what happens at every step with a visual drag-and-drop editor.",
});

export default function Workflows(): JSX.Element {
  return (
    <>
      <Hero
        eyebrow={
          <Flex gap="space8" alignItems="center">
            <Icon icon={Block16} />
            <Text variant="titleM">Workflows</Text>
          </Flex>
        }
        title={
          <>
            Automate every step
            <br />
            of the user journey
          </>
        }
        description="Build multi-step experiences that react to what users actually do. Branch by role, plan, or behavior, and control exactly who sees what, and when."
        actions={
          <>
            <SignupClick>
              <Button
                className={css({
                  shadow: "neutralFocus",
                })}
                asChild
                size="large"
              >
                <a href={links.signUp}>Get started for free</a>
              </Button>
            </SignupClick>
            <InstallWithAIButton />
          </>
        }
      />

      <MainIllustration />

      <LogoSection decorator="split" />

      <FeaturesSection />

      <TrailFork
        title="More than just Workflows"
        description="Engage users, drive adoption and increase conversions with just a few lines of code. Ship custom product adoption experiences in days, not months."
        currentFeatureHref={routes.features.workflows}
      />

      <CtaBanner />
    </>
  );
}
