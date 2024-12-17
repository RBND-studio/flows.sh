import { DemoSection, Hero, ImplementationSection, WorkflowsSection } from "components";
import { CtaBanner } from "components/cta-banner";
import type { Metadata } from "next";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "https://flows.sh" },
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero />
      <DemoSection />
      <WorkflowsSection />
      <ImplementationSection />
      <CtaBanner />
    </>
  );
};

export default Page;
