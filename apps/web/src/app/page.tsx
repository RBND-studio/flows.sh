import { css } from "@flows/styled-system/css";
import { CtaBanner } from "components/cta-banner";
import { BuildAnythingSection } from "components/homepage/build-anything-section";
import { CustomizeSection } from "components/homepage/customize-section";
import { HomeFaqSection } from "components/homepage/faq-section";
import { InstallWithAIButton } from "components/install-with-ai-button";
import { PricingSection } from "components/homepage/pricing-section";
import { ProductAdoptionSuiteSection } from "components/homepage/product-adoption-suite-section";
import { SurveysSection } from "components/homepage/surveys-section";
import { ToursSection } from "components/homepage/tours-section";
import { WorkflowsSection } from "components/homepage/workflows-section";

import { LogoSection } from "components/logos/logo-section";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { Route } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";
import { Hero } from "components/hero/hero";
import { HeroCallout } from "components/ui/hero-callout";
import { BigDemoIllustration } from "components/main-illustration/big-demo-illustration";
import { routes } from "routes";

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        sideBorders="hide-bottom"
        eyebrow={
          <HeroCallout
            title="Flows MCP is live! Build workflows with your AI agent"
            link={routes.changelogReleaseDetail({ releaseId: "2026-10-01-mcp-server" }) as Route}
          />
        }
        title={
          <>
            Build product adoption{" "}
            <br className={css({ display: { base: "none", md: "initial" } })} />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 775,
              }}
            >
              your way
            </span>
          </>
        }
        description="Break free from duct tape and rigid components. Flows is product adoption infrastructure that lets modern teams build anything, no-code or all-code."
        actions={
          <>
            <SignupClick>
              <Button asChild size="large">
                <a href={links.signUp}>Get started for free</a>
              </Button>
            </SignupClick>
            <InstallWithAIButton />
          </>
        }
      />
      <BigDemoIllustration />
      <LogoSection />
      <BuildAnythingSection />
      <ProductAdoptionSuiteSection />
      <ToursSection />
      <WorkflowsSection />
      <SurveysSection />
      <CustomizeSection />
      <PricingSection />
      <HomeFaqSection />

      <CtaBanner
        title="Turn beginners into power users"
        description="Flows is the only product adoption platform that lets you build anything. Sign up today and have your first experience live in under 30 minutes."
      />
    </>
  );
};

export default Page;
