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
import { UserFlowFull20 } from "icons";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";

import { ComparisonTable } from "../comparison-table";
import { FeaturesSection } from "../features-section";
import { userflowContent } from "./content";

export const metadata: Metadata = {
  title: userflowContent.pageTitle,
  description: userflowContent.description,
};

const Page = (): ReactElement => {
  return (
    <>
      <HorizontalHero
        title={userflowContent.heroTitle}
        description={userflowContent.description}
        eyebrow={
          <ComparisonLogos
            competitorLogo={
              <UserFlowFull20
                role="img"
                aria-label="Userflow logo"
                className={css({
                  height: "24px",
                  width: "auto",
                })}
              />
            }
          />
        }
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
        illustration={<SmallDemoIllustration />}
      />

      <ComparisonTable
        comparisons={userflowContent.comparisons}
        sectionTitle={userflowContent.comparisonTitle}
        competitorName={userflowContent.competitorName}
        competitorLogo={userflowContent.competitorLogo}
      />
      <FeaturesSection features={userflowContent.features} />
      <MoreSection />
      <CutTheCostsSection />

      <CtaBanner
        title="Make the switch today!"
        description="Build better product adoption experiences at a fraction of the price. Start migrating your flows from Userflow to Flows."
      />
    </>
  );
};

export default Page;
