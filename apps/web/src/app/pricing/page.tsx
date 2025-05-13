import { Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { DOMAIN } from "lib";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Text } from "ui";

import { PricingCalculator } from "./pricing-calculator";
import { PricingFaq } from "./pricing-faq";
import { VolumeTable } from "./volume-table";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: "Pricing – Flows",
  description:
    "The better way to build product adoption. With pay-you-go pricing starting at $0/month.",
  openGraph: {
    type: "website",
    title: "Pricing – Flows",
    description:
      "The better way to build product adoption. With pay-you-go pricing starting at $0/month.",
    images: "/images/pricing-og.png",
    url: "/pricing",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing – Flows",
    description:
      "The better way to build product adoption. With pay-you-go pricing starting at $0/month.",
    images: "/images/pricing-og.png",
    creator: "@flows_sh",
  },
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        eyebrow={<Text variant="titleM">PRICING</Text>}
        title="Pay only for what you use"
        description="Flows offer a pay-you-go pricing that starts at $0/month with a generous free forever
            tier."
      />
      <PricingCalculator />
      <VolumeTable />
      <PricingFaq />
      <CtaBanner />
    </>
  );
};

export default Page;
