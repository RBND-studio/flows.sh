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
  title: "Product Marketing",
  description:
    "Launch targeted in-app campaigns like announcements and product tours without engineering help.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={
          <>
            Create powerful in-app
            <br />
            messaging with impact
          </>
        }
        description="
Launch targeted in-app campaigns like announcements and product tours without engineering help.
        "
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
        title="How Flows works for product marketing"
        description="Leverage the power of Flows to create engaging in-app campaigns that drive user awareness and adoption of your features."
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
        pageUrl={routes.solutions.productMarketing}
      />

      <CtaBanner description="Build the product marketing experiences you've always wanted" />
    </>
  );
};

export default Page;
