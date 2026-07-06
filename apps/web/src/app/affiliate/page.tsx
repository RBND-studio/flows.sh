import { css } from "@flows/styled-system/css";

import { CtaBanner } from "components/cta-banner";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { Button, Text } from "ui";

import { AffiliateFaq } from "./affiliate-faq";
import { AffiliateStepsSection } from "./affiliate-steps-section";
import { Hero } from "components/hero/hero";
import { BigDemoIllustration } from "components/main-illustration/big-demo-illustration";

export const metadata: Metadata = getWebMetadata({
  title: "Affiliate",
  description:
    "Join the Flows Affiliate Program and earn 25% recurring commissions forever. Promote the best product adoption platform for modern companies building onboarding and user engagement experiences.",
});

export default function AffiliatePage(): ReactNode {
  return (
    <>
      <Hero
        eyebrow={<Text variant="titleM">AFFILIATE PROGRAM</Text>}
        title="Turn referrals into revenue"
        description="Partner with Flows and earn 25% recurring commission for every customer you refer."
        actions={
          <Button
            className={css({
              shadow: "neutralFocus",
            })}
            asChild
            size="large"
          >
            <a href={links.affiliatePortal}>Join our program</a>
          </Button>
        }
      />
      <BigDemoIllustration />
      <AffiliateStepsSection />
      <AffiliateFaq />
      <CtaBanner
        title="Start earning with Flows"
        description="Partner with Flows and earn 25% recurring commission."
        actions={
          <Button
            asChild
            size="large"
            variant="secondary"
            className={css({
              shadow: "neutralFocus",
            })}
          >
            <a href={links.affiliatePortal}>Join our program</a>
          </Button>
        }
      />
    </>
  );
}
