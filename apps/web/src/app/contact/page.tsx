import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import type { ReactElement } from "react";

import { MainCardsSection } from "./main-cards";
import { SecondaryCardsSection } from "./secondary-cards";
import { CtaBanner } from "components/cta-banner";
import { Hero } from "components/hero/hero";

export const metadata: Metadata = getWebMetadata({
  title: "Contact us",
  description: "Get in touch with Flows for demos, onboarding support, or product questions.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title="How can we help?"
        description="Get in touch with Flows for demos, onboarding support, or product questions."
        sideBorders
        bottomBorder
        decorator="vertical"
      />
      <MainCardsSection />
      <SecondaryCardsSection />
      <CtaBanner />
    </>
  );
};

export default Page;
