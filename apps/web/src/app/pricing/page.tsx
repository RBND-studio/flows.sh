import { CtaBanner } from "components/cta-banner";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import type { ReactElement } from "react";

import { PricingFaq } from "./pricing-faq";
import { Hero } from "components/hero/hero";
import { ComparisonTable } from "./comparison-table";
import { LogoSection } from "components/logos/logo-section";
import { VolumeTable } from "./volume-table";
import { PricingCardsSection } from "components/pricing/pricing-cards-section";

export const metadata: Metadata = getWebMetadata({
  title: "Pricing",
  description:
    "The better way to build product adoption. With pay-as-you-go pricing starting at $0/month.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title="Pricing"
        description="Flows offers pay-as-you-go pricing that starts at $30/month with a free forever tier."
        sideBorders="hide-bottom"
      />

      <PricingCardsSection />

      <ComparisonTable />
      <LogoSection decorator="split" />
      <VolumeTable />

      <PricingFaq />
      <CtaBanner />
    </>
  );
};

export default Page;
