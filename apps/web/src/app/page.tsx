import {
  AnalyzeSection,
  BuilderSection,
  DeliverSection,
  FlowsAreBetterSection,
  Hero,
} from "components";
import type { Metadata } from "next";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "https://flows.sh" },
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero />
      <BuilderSection />
      <DeliverSection />
      <AnalyzeSection />
      <FlowsAreBetterSection />
    </>
  );
};

export default Page;
