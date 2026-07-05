import { FlowsSlot } from "@flows/react";
import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
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
import type { ReactElement } from "react";
import { Button } from "ui";
import { Hero } from "components/hero/hero";
import { BigDemoIllustration } from "components/main-illustration/big-demo-illustration";

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        sideBorders="hide-bottom"
        eyebrow={<FlowsSlot id="homepage-hero-eyebrow" placeholder={<Box height={32} />} />}
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
