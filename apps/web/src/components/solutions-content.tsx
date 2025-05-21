import { routes } from "routes";

import { FeatureAdoptionViz } from "./homepage/all-purpose-platform-section/feature-adoption-viz";
import { PLGViz } from "./homepage/all-purpose-platform-section/plg-viz";
import { UserOnboardingViz } from "./homepage/all-purpose-platform-section/user-onboarding-viz";

export const solutionsContent = [
  {
    title: "User onboarding",
    description: "Build engaging onboarding flows that guide users to value and drive activation.",
    viz: <UserOnboardingViz />,
    linkUrl: routes.solutions.userOnboarding,
  },
  {
    title: "Feature adoption",
    description: "Support releases with engaging announcements, embeddable banners, and guides.",
    viz: <FeatureAdoptionViz />,
    linkUrl: routes.solutions.featureAdoption,
  },
  {
    title: "Product-led growth",
    description:
      "Build growth loops to drive KPIs and increase the effect of sales, support and marketing efforts.",
    viz: <PLGViz />,
    linkUrl: routes.solutions.productLedGrowth,
  },
];
