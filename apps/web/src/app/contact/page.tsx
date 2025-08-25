import { Hero } from "components";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import type { ReactElement } from "react";

import { MainCardsSection } from "./main-cards";
import { SecondaryCardsSection } from "./secondary-cards";

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
      />
      <MainCardsSection />
      <SecondaryCardsSection />
    </>
  );
};

export default Page;
