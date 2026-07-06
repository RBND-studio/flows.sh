import { css } from "@flows/styled-system/css";
import { CtaBanner } from "components/cta-banner";
import { RiverItem } from "components/ui/river-item";
import { SignupClick } from "components/utils/signup-click";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";

import { SharedFeatures } from "../shared-features";
import { questions, riverFeatures } from "./content";
import { LogoSection } from "components/logos/logo-section";
import { SectionIntro } from "components/ui/section-intro";
import { FaqSection } from "components/faq-section";
import { routes } from "routes";
import { Hero } from "components/hero/hero";
import { BigDemoIllustration } from "components/main-illustration/big-demo-illustration";

export const metadata: Metadata = getWebMetadata({
  title: "User Onboarding",
  description:
    "Build engaging onboarding flows that guide users to value. Improve new user experience and drive activation while being on-brand.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={
          <>
            Create powerful
            <br />
            user onboarding
          </>
        }
        description="Build engaging onboarding flows that guide users to value. Improve new user experience and drive activation while being on-brand."
        actions={
          <SignupClick>
            <Button
              className={css({
                shadow: "neutralFocus",
              })}
              asChild
              size="large"
            >
              <a href={links.signUp}>Start onboarding for free</a>
            </Button>
          </SignupClick>
        }
      />

      <BigDemoIllustration />

      <LogoSection decorator="split" />

      <SectionIntro
        title="How Flows works for user onboarding"
        description="Power-up your user onboarding with flexible tools that help you create engaging experiences for your users."
        sideBorders
        bottomBorder
        decorator="vertical"
      />
      {riverFeatures.map((feature) => (
        <RiverItem key={feature.title} {...feature} />
      ))}

      <SharedFeatures />

      <FaqSection
        title="Frequently asked questions"
        questions={questions}
        pageUrl={routes.solutions.userOnboarding}
      />

      <CtaBanner />
    </>
  );
};

export default Page;
