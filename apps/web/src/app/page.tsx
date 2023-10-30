import type { Metadata } from "next";
import type { ReactElement } from "react";
import React from "react";

import { Hero } from "./hero";
import { Implementation } from "./implementation";
import { ModernPlatform } from "./modern-platform/modern-platform";
import { StepTypes } from "./step-types/step-types";

export const metadata: Metadata = {
  alternates: { canonical: "https://flows.sh" },
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero />
      <Implementation />
      <StepTypes />
      <ModernPlatform />
    </>
  );
};

export default Page;
