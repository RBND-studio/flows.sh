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
      mt="space64"
    >
      <CostDescription />
      <PriceComparison />
    </Section>
  );
};
