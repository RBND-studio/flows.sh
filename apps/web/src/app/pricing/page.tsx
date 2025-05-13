import { css } from "@flows/styled-system/css";
import { Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { SmartLink } from "components/ui";
import { DOMAIN } from "lib";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";

import { PricingCalculator } from "./pricing-calculator";
import { PricingFaq } from "./pricing-faq";
import { VolumeTable } from "./volume-table";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: "Pricing – Flows",
  description:
    "The better way to build product adoption. With volume pricing starting at $0/month.",
  openGraph: {
    type: "website",
    title: "Pricing – Flows",
    description:
      "The better way to build product adoption. With volume pricing starting at $0/month.",
    images: "/images/pricing-og.png",
    url: "/pricing",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing – Flows",
    description:
      "The better way to build product adoption. With volume pricing starting at $0/month.",
    images: "/images/pricing-og.png",
    creator: "@flows_sh",
  },
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title="Pricing"
        description="Flows offer a usage-based pricing that starts at $0/month with a generous free forever
            tier."
        actions={
          <Button className={css({ shadow: "neutralFocus" })} asChild size="large">
            <SmartLink href={links.signUp}>Sign up for free</SmartLink>
          </Button>
        }
      />
      <PricingCalculator />
      <VolumeTable />
      <PricingFaq />
      <CtaBanner />
    </>
  );
};

export default Page;
