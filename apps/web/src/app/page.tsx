import { AnalyzeSection, BuilderSection, DeliverSection } from "components/homepage";
import { FlowsAreBetterSection } from "components/homepage/flows-are-better";
import type { Metadata } from "next";
import type { ReactElement } from "react";

import { Hero } from "./hero";

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
