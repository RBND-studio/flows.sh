import { routes } from "routes";

import { FeatureAdoptionViz } from "./homepage/all-purpose-platform-section/feature-adoption-viz";
import { PLGViz } from "./homepage/all-purpose-platform-section/plg-viz";
import { ProductMarketingViz } from "./homepage/all-purpose-platform-section/product-marketing-viz";
import { RevenueExpansionViz } from "./homepage/all-purpose-platform-section/revenue-expansion-viz";
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
  {
    title: "Revenue expansion",
    description: "Convert free trials into paying customers with in-app promotions and upsells.",
    viz: <RevenueExpansionViz />,
    linkUrl: routes.solutions.revenueExpansion,
  },
  {
    title: "Product marketing",
    description:
      "Launch in-app campaigns like announcements and product tours without engineering help.",
    viz: <ProductMarketingViz />,
    linkUrl: routes.solutions.productMarketing,
  },
];
