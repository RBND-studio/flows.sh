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
import { routes } from "routes";
import { FaqSection } from "components/faq-section";
import { Hero } from "components/hero/hero";
import { BigDemoIllustration } from "components/main-illustration/big-demo-illustration";

export const metadata: Metadata = getWebMetadata({
  title: "Revenue expansion",
  description:
    "Create strategic in-app promotions. With Flows, you can deliver the right message at the right time to drive conversion and account expansion.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={<>Convert free trials to paying customers</>}
        description="Create strategic in-app promotions. With Flows, you can deliver the right message at the right time to drive conversion and account expansion."
        actions={
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
        }
      />

      <BigDemoIllustration />

      <LogoSection decorator="split" />

      <SectionIntro
        title="How Flows works for revenue expansion"
        description="
        Boost your MRR with contextual upgrade campaigns. Create in-app modals, banners, and other upsell prompts that convert free trial users into paying customers."
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
        pageUrl={routes.solutions.revenueExpansion}
      />

      <CtaBanner />
    </>
  );
};

export default Page;
