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
import { FaqSection } from "components/faq-section";
import { routes } from "routes";
import { SectionIntro } from "components/ui/section-intro";
import { Hero } from "components/hero/hero";
import { BigDemoIllustration } from "components/main-illustration/big-demo-illustration";
import { InstallWithAIButton } from "components/install-with-ai-button";

export const metadata: Metadata = getWebMetadata({
  title: "In-app help",
  description:
    "Answer questions inside your product with contextual tooltips and guides, right on the screen where users get stuck.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        sideBorders="hide-bottom"
        title={
          <>
            Help your users
            <br />
            without sending them away
          </>
        }
        description="Answer questions inside your product with contextual tooltips and guides, right on the screen where users get stuck."
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
        title="How Flows helps with in-app help"
        description="Stop routing users to a help center that does not know where they are in your product. Use Flows to show contextual tooltips, guides, and help panels at the exact step where a user needs them."
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
        pageUrl={routes.solutions.inAppHelp}
      />

      <CtaBanner />
    </>
  );
};

export default Page;
