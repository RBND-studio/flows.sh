import type { Question } from "components/faq-section";
import { type ReactNode } from "react";

export type TechnologyContentType = {
  slug: string;
  seoTitle: string;
  title: ReactNode;
  description: string;
  framework: {
    name: string;
  };
  featuresIntro: {
    title: string;
    description: string;
  };
  faqs: Question[];
  ctaBanner: {
    title: string;
    description: string;
  };
};
