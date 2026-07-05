import { Flex } from "@flows/styled-system/jsx";
import { CtaBanner } from "components/cta-banner";
import { Slot16 } from "icons";
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
        title="More than just Embeddedable components"
        description="Engage users, drive adoption and increase conversions with just a few lines of code. Ship custom product adoption experiences in days, not months."
        currentFeatureHref={routes.features.embeddableComponents}
      />

      <CtaBanner />
    </>
  );
}
