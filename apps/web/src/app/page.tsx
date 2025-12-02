import { FlowsSlot } from "@flows/react";
import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import {
  AllPurposePlatformSection,
  BigDemoIllustration,
  CutTheCostsSection,
  EasyToGetStartedSection,
  ExamplesSection,
  Hero,
  MadeToBeCustomizedSection,
  MoreSection,
} from "components";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { Button } from "ui";

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        eyebrow={<FlowsSlot id="homepage-hero-eyebrow" placeholder={<Box height={32} />} />}
        title={
          <>
            The better way to build{" "}
            <br className={css({ display: { base: "none", md: "initial" } })} />
            product adoption
          </>
        }
        description="Flows is a fully customizable product adoption platform for modern companies building onboarding and user engagement experiences."
        actions={
          <SignupClick>
            <Button
              className={css({
                shadow: "neutralFocus",
              })}
              asChild
              size="large"
            >
              <a href={links.signUp}>Start building for free</a>
            </Button>
          </SignupClick>
        }
      />
      <BigDemoIllustration />
      <AllPurposePlatformSection />
      <EasyToGetStartedSection />
      <MadeToBeCustomizedSection />
      <MoreSection />
      <CutTheCostsSection />

      <ExamplesSection />
      <CtaBanner title="Get started today!" />
    </>
  );
};

export default Page;
