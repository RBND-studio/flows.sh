import { CtaBanner } from "components/cta-banner";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Text } from "ui";

import { PricingCalculator } from "./pricing-calculator";
import { PricingFaq } from "./pricing-faq";
import { LogoSection } from "components/logos/logo-section";
import { css } from "@flows/styled-system/css";
import { Hero } from "components/hero/hero";

export const metadata: Metadata = getWebMetadata({
  title: "Pricing",
  description:
    "The better way to build product adoption. With pay-as-you-go pricing starting at $0/month.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        eyebrow={<Text variant="titleM">PRICING</Text>}
        title="Pay only for what you use"
        description="Flows offers pay-as-you-go pricing that starts at $0/month with a generous free forever tier."
        bottomBorder
        sideBorders
        decorator="vertical"
      />
      <PricingCalculator />
      <LogoSection
        decorator="split"
        sideBorders
        className={css({
          mt: "space80",
        })}
      />
      <PricingFaq />
      <CtaBanner />
    </>
  );
};

export default Page;
