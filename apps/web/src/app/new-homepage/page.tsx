import type { ReactElement } from "react";
import React from "react";

import Hero from "./hero";
import { Implementation } from "./implementation";
import { ModernPlatform } from "./modern-platform/modern-platform";

const Page = (): ReactElement => {
  return (
    <div>
      <Hero />
      <Implementation />
      <ModernPlatform />
    </div>
  );
};

export default Page;
