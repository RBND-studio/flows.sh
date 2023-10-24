import type { ReactElement } from "react";
import React from "react";

import Hero from "./hero";
import { Implementation } from "./implementation";

const Page = (): ReactElement => {
  return (
    <div>
      <Hero />
      <Implementation />
    </div>
  );
};

export default Page;
