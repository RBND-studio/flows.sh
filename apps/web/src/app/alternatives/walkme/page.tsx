import { css } from "@flows/styled-system/css";
import { ComparisonLogos, HorizontalHero, SmallDemoIllustration } from "components";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { WalkMe20, WalkMeFull20 } from "icons";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";

import { ComparisonTableV2 } from "../comparison-table-v2";
import { OtherDifferencesSection } from "../other-differences-section";
import { SummarySection } from "../summary-section";

export const metadata: Metadata = {
  title: "Flows vs WalkMe",
  description:
    "Flows is the WalkMe alternative for modern companies who want to build better product adoption at a fraction of the price.",
};

const Page = (): ReactElement => {
  return (
    <>
      <HorizontalHero
        title={
          <>
            The free alternative
            <br />
            to WalkMe
          </>
        }
        description="Flows is the WalkMe alternative for modern companies who want to build better product adoption at a fraction of the price."
        eyebrow={
          <ComparisonLogos
            competitorLogo={
              <WalkMeFull20
                role="img"
                aria-label="WalkMe logo"
                className={css({
                  height: "28px",
                  width: "auto",
                })}
              />
            }
          />
        }
        illustration={<SmallDemoIllustration />}
        actions={
          <SignupClick>
            <Button
              className={css({
                shadow: "neutralFocus",
              })}
              asChild
              size="large"
            >
              <a href={links.signUp}>Get started for free</a>
            </Button>
          </SignupClick>
        }
      />

      <SummarySection
        competitorContent="WalkMe is a well-known digital adoption platform, primarily focused on large enterprises. While it offers a range of features including in-app guidance, analytics, and user segmentation, this complexity can be overwhelming for many users. WalkMe’s focus on enterprise results in non-transparent pricing and requiring a demo to even get started."
        flowsContent="Flows is a modern alternative to WalkMe, crafted with care by a team that prioritizes control and transparency. With Flows you get the power to create product adoption experiences that live within your product and are fully customizable for a fraction of the price. Flows is designed for the modern product team, offering a headless CMS like experience that both developers and non-technical users will love."
      />

      <ComparisonTableV2
        comparisons={[
          {
            title: "Onboarding basics",
            competitor: true,
            flows: true,
            description:
              "Both services have basic onboarding features like tooltips, modals and product tours, although Flows focuses on offering full control over the user experience.",
          },
          {
            title: "Embeddable components",
            competitor: false,
            flows: true,
            description:
              "With Flows you can embed components directly into your product, allowing for a more seamless user experience.",
          },
          {
            title: "Free plan",
            competitor: false,
            flows: true,
            description:
              "Flows offers a free plan with 250 monthly active users no strings attached. WalkMe does not have a free plan or public pricing.",
          },
          {
            title: "Custom components",
            competitor: false,
            flows: true,
            description:
              "Flows allows you to use your design system and plug-in components directly from your codebase.",
          },
          {
            title: "Localization",
            competitor: true,
            flows: true,
            description:
              "Both services support localization, allowing you to serve a global audience.",
          },
          {
            title: "Resilient against ad blockers",
            competitor: false,
            flows: true,
            description:
              "Flows is bundled with your product, making it resilient against script blockers and ad blockers.",
          },
          {
            title: "Transparent pricing",
            competitor: false,
            flows: true,
            description:
              "Flows offers transparent usage-based pricing with no hidden fees, while WalkMe requires a demo to get started and does not provide public pricing.",
          },
        ]}
        competitorLogo={<WalkMe20 />}
        competitorName="WalkMe"
        sectionTitle="Flows vs WalkMe"
      />

      <OtherDifferencesSection
        differences={[
          {
            title: "Part of your product",
            competitorDescription:
              "With WalkMe you are forced to use their templates, limiting the experience you can build and making it obvious that the components aren’t part of your product. The components are not the same as the ones used in your product, they don’t fully match your brand, and just feel off. Every time your UI or design system changes, you have to manually update WalkMe components to stay in sync.",
            flowsDescription:
              "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don’t get in the way.",
          },
          {
            title: "Built for developers too",
            competitorDescription:
              "WalkMe focuses on providing a no-code solution for non-technical users, but this often comes at the cost of developer experience. Their platform can be hard to integrate with modern tech stacks and inflexible when it comes to customization.",
            flowsDescription:
              "Developers aren’t an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
          },
          {
            title: "Customer support",
            competitorDescription:
              "While WalkMe offers a variety of support options you pay for these in their hefty platform fees.",
            flowsDescription:
              "Flows is a small company built and run by a team that cares deeply about your success. Whether you’re on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
          },
          {
            title: "Pricing",
            competitorDescription:
              "WalkMe doesn’t list prices publicly and requires you to book a demo just to find out if it fits your budget. Their pricing model is built for large enterprises and can include charges per seat, per flow, or even per feature, making it unpredictable and often expensive.",
            flowsDescription:
              "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
          },
        ]}
      />

      <CtaBanner
        title="Make the switch today!"
        description="Build better product adoption experiences at a fraction of the price. Start migrating your flows from WalkMe to Flows."
      />
    </>
  );
};

export default Page;
