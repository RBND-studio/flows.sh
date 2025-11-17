import { Section } from "components/ui";
import { type ReactNode } from "react";

import { CostDescription } from "./cost-description";
import { PriceComparison } from "./price-comparison";

export const CutTheCostsSection = (): ReactNode => {
  return (
    <Section
      display={{
        base: "block",
        md: "flex",
      }}
      alignItems="stretch"
      mt={{
        base: "space80",
        md: "space160",
      }}
    >
      <CostDescription />
      <PriceComparison />
    </Section>
  );
};
