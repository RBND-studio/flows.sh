import { type ReactNode } from "react";

import { type ComparisonProps } from "./comparison-table";
import { type OtherDifferencesSectionType } from "./other-differences-section";

export type AlternativeContentType = {
  slug: string;
  seoTitle: string;
  title: string;
  description: string;
  competitor: {
    name: string;
    squareLogo: ReactNode;
    fullLogo: ReactNode;
  };
  summary: {
    competitorContent: ReactNode;
    flowsContent: ReactNode;
  };
  comparisonTitle: ReactNode;
  comparisons: ComparisonProps[];
  otherDifferences: OtherDifferencesSectionType["differences"];
  ctaBanner: {
    title: string;
    description: string;
  };
};
