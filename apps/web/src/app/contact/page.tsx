import { Hero } from "components";
import { DOMAIN } from "lib";
import type { Metadata } from "next";
import type { ReactElement } from "react";

import { MainCardsSection } from "./main-cards";
import { SecondaryCardsSection } from "./secondary-cards";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: "Contact us – Flows",
  description: "Get in touch with Flows for demos, onboarding support, or product questions.",
  openGraph: {
    type: "website",
    title: "Contact us – Flows",
    description: "Get in touch with Flows for demos, onboarding support, or product questions.",
    images: "/images/contact-og.png",
    url: "/contact",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact us – Flows",
    description: "Get in touch with Flows for demos, onboarding support, or product questions.",
    images: "/images/contact-og.png",
    creator: "@flows_sh",
  },
};

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
