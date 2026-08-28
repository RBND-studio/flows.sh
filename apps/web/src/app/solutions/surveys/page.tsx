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
import { InstallWithAIButton } from "components/install-with-ai-button";

export const metadata: Metadata = getWebMetadata({
  title: "User feedback surveys",
  description:
    "Run NPS, CSAT, CES, and PMF surveys inside your product, at the point in the journey where the answer means something. Rendered by your own components.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        sideBorders="hide-bottom"
        title={
          <>
            Ask your users
            <br />
            while they are still here
          </>
        }
        description="Run NPS, CSAT, CES, and PMF surveys inside your product, at the point in the journey where the answer means something. Rendered by your own components."
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

      <BigDemoIllustration />

      <LogoSection decorator="split" />

      <SectionIntro
        title="How Flows works for surveys inside your product"
        description="A survey in Flows is a block in a workflow, so it knows exactly where the user is and what the rest of the journey should do with the answer."
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
        pageUrl={routes.solutions.surveys}
      />

      <CtaBanner />
    </>
  );
};

export default Page;
