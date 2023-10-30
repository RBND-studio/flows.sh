import type { Metadata } from "next";
import type { ReactElement } from "react";
import React from "react";

import { DemoFlows } from "./demo-flows";
import { Hero } from "./hero";
import { Implementation } from "./implementation";
import { ModernPlatform } from "./modern-platform/modern-platform";
import { StepTypes } from "./step-types/step-types";

export const metadata: Metadata = {
  alternates: { canonical: "https://flows.sh" },
};

const Page = (): ReactElement => {
  return (
    <DemoFlows>
      <Hero />
      <Implementation />
      <StepTypes />
      <ModernPlatform />
    </DemoFlows>
  );
};

export default Page;
