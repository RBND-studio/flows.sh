import { css } from "@flows/styled-system/css";
import { CutTheCostsSection, Hero, HeroIllustration, MoreSection } from "components";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";

import { ComparisonTable } from "../comparison-table";
import { FeaturesSection } from "../features-section";
import { chameleonContent } from "./content";

export const metadata: Metadata = {
  title: chameleonContent.pageTitle,
  description: chameleonContent.description,
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={chameleonContent.heroTitle}
        description={chameleonContent.description}
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
        comparisons={chameleonContent.comparisons}
        sectionTitle={chameleonContent.comparisonTitle}
        competitorName={chameleonContent.competitorName}
        competitorLogo={chameleonContent.competitorLogo}
      />
      <FeaturesSection features={chameleonContent.features} />
      <MoreSection />
      <CutTheCostsSection />

      <CtaBanner
        title="Make the switch today!"
        description="Build better product adoption experiences at a fraction of the price. Start migrating your flows from Chameleon to Flows."
      />
    </>
  );
};

export default Page;
