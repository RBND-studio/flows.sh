import { type ReactNode } from "react";

import { type ComparisonProps } from "./comparison-table";

export type ComparisonContentType = {
  pageTitle: string;
  heroTitle: ReactNode;
  description: string;
  comparisonTitle: ReactNode;
  competitorName: string;
  competitorLogo: ReactNode;
  comparisons: ComparisonProps[];
};
