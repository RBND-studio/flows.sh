import { Filter16, Graph16 } from "icons";
import { FilterWorkflowExample } from "./filter-workflow-example";
import { SurveyAnalyticsExample } from "./survey-analytics-example";
import type { FeatureBentoProps } from "components/feature-bento/feature-bento";

export const surveyFeaturesContent: FeatureBentoProps[] = [
  {
    icon: Filter16,
    title: "Targeted surveys",
    description: "Ask only the right users or companies by targeting their property or behavior.",
    visual: <FilterWorkflowExample />,
    headingLevel: "h3",
  },
  {
    icon: Graph16,
    title: "Analyze responses",
    description:
      "Inspect right in Flows or export data into your warehouse for deeper analysis alongside your other metrics.",
    visual: <SurveyAnalyticsExample />,
    headingLevel: "h3",
  },
];
