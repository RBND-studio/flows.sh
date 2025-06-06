import { css } from "@flows/styled-system/css";
import { CutTheCostsSection, Hero, HeroIllustration, MoreSection } from "components";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { Appcues20 } from "icons";
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
      <Hero
        title={appcuesContent.heroTitle}
        description={appcuesContent.description}
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
      <HeroIllustration />

      <ComparisonTable
        comparisons={appcuesContent.comparisons}
        sectionTitle={appcuesContent.comparisonTitle}
        competitorName={appcuesContent.competitorName}
        competitorLogo={<Appcues20 />}
      />
      <FeaturesSection />
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
