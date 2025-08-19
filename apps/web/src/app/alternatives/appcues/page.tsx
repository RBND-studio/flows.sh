import { css } from "@flows/styled-system/css";
import {
  ComparisonLogos,
  CutTheCostsSection,
  HorizontalHero,
  MoreSection,
  SmallDemoIllustration,
} from "components";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { AppcuesFull20 } from "icons";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";

import { ComparisonTable } from "../comparison-table";
import { FeaturesSection } from "../features-section";
import { appcuesContent } from "./content";

export const metadata: Metadata = {
  title: appcuesContent.pageTitle,
  description: appcuesContent.description,
};

const Page = (): ReactElement => {
  return (
    <>
      <HorizontalHero
        title={appcuesContent.heroTitle}
        description={appcuesContent.description}
        eyebrow={
          <ComparisonLogos
            competitorLogo={
              <AppcuesFull20
                role="img"
                aria-label="Appcues logo"
                className={css({
                  height: "24px",
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

      <ComparisonTable
        comparisons={appcuesContent.comparisons}
        sectionTitle={appcuesContent.comparisonTitle}
        competitorName={appcuesContent.competitorName}
        competitorLogo={appcuesContent.competitorLogo}
      />
      <FeaturesSection features={appcuesContent.features} />
      <MoreSection />
      <CutTheCostsSection />

      <CtaBanner
        title="Make the switch today!"
        description="Build better product adoption experiences at a fraction of the price. Start migrating your flows from Appcues to Flows."
      />
    </>
  );
};

export default Page;
