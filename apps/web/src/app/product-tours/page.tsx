import { Flex } from "@flows/styled-system/jsx";
import { CtaBanner } from "components/cta-banner";
import { Tour16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { routes } from "routes";
import { type Metadata } from "next";
import type { JSX } from "react";
import { Button, Icon, Text } from "ui";

import { FeaturesSection } from "./features-section";
import { MainIllustration } from "./main-illustration";
import { LogoSection } from "components/logos/logo-section";
import { SignupClick } from "components/utils/signup-click";
import { css } from "@flows/styled-system/css";
import { links } from "lib/links";
import { InstallWithAIButton } from "components/install-with-ai-button";
import { TrailFork } from "components/feature-landing-pages/trail-fork";
import { Hero } from "components/hero/hero";

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
        title="More than just Product tours"
        description="Engage users, drive adoption and increase conversions with just a few lines of code. Ship custom product adoption experiences in days, not months."
        currentFeatureHref={routes.features.productTours}
      />

      <CtaBanner />
    </>
  );
}
