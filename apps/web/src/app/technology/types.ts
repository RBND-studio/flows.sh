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
  faqs: Array<{
    title: string;
    content: ReactNode;
    schemaContent?: string;
  }>;
  ctaBanner: {
    title: string;
    description: string;
  };
};
