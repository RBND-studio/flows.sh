import { css } from "@flows/styled-system/css";
import {
  AllPurposePlatformSection,
  CutTheCostsSection,
  EasyToGetStartedSection,
  ExamplesSection,
  Hero,
  MadeToBeCustomizedSection,
  MainHeroIllustration,
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
      <MainHeroIllustration />
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
