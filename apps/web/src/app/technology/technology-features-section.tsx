import {
  DoubleFeatureBento,
  FeatureBento,
  FeatureBentoWrapper,
  HorizontalBentoSeparator,
} from "components/feature-bento/feature-bento";
import { AnalyticsIllustration } from "components/feature-landing-pages/analytics-illustration";
import { ComponentsIllustration } from "components/feature-landing-pages/components-illustration";
import { CustomUIComponentsIllustration } from "components/ui/illustrations/custom-ui-components-illustration";
import { EmbeddableComponentsIllustrations } from "components/ui/illustrations/embeddable-components-illustration";
import { SectionIntro } from "components/ui/section-intro";
import { Component16, Filter16, Graph16, Language16, Slot16, Tour16 } from "icons";
import { type ReactNode } from "react";

type Props = {
  title: string;
  description: string;
};

const featuresContent = [
  {
    icon: Tour16,
    title: "Product tours.",
    description:
      "Guide users step-by-step through your product with tooltips, modals, and hints that feel native to your app.",
    visual: <ComponentsIllustration />,
  },
  {
    icon: Slot16,
    title: "Embeddable components.",
    description:
      "Embed interactive content directly inside your app layout: checklists, empty states, and contextual guides without floating overlays.",
    visual: <EmbeddableComponentsIllustrations />,
  },
  {
    icon: Component16,
    title: "Custom components.",
    description:
      "Use your own design system and component library to build adoption experiences that match your product's look and feel exactly.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    icon: Language16,
    title: "Localization.",
    description: "Deliver workflow content in any language to reach a global user base.",
  },
  {
    icon: Filter16,
    title: "User targeting.",
    description:
      "Target specific users or segments with AND/OR logic to show the right experience to the right person.",
  },
  {
    icon: Graph16,
    title: "Analytics.",
    description:
      "Track workflow performance with built-in analytics. Measure completion rates, drop-off, and engagement across all your adoption experiences.",
    visual: <AnalyticsIllustration />,
  },
];

export const TechnologyFeaturesSection = ({ title, description }: Props): ReactNode => {
  return (
    <>
      <SectionIntro
        sideBorders
        bottomBorder
        decorator="vertical"
        title={title}
        description={description}
      />

      <FeatureBentoWrapper>
        <DoubleFeatureBento firstFeature={featuresContent[0]} secondFeature={featuresContent[1]} />
        <HorizontalBentoSeparator />
        <FeatureBento {...featuresContent[2]} />
        <HorizontalBentoSeparator />
        <DoubleFeatureBento firstFeature={featuresContent[3]} secondFeature={featuresContent[4]} />
        <HorizontalBentoSeparator />
        <FeatureBento {...featuresContent[5]} />
      </FeatureBentoWrapper>
    </>
  );
};
