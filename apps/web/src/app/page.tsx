import { css } from "@flows/styled-system/css";
import { DemoSection, Hero, ImplementationSection, WorkflowsSection } from "components";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "ui";

export const metadata: Metadata = {
  alternates: { canonical: "https://flows.sh" },
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title="Build native product growth experiences, your way"
        description="Meet Flows, the flexible platform for building in-app experiences. Focus on your product,
        not creating one-off logic."
        actions={
          <>
            <SignupClick>
              <Button
                className={css({
                  shadow: "neutralFocus",
                })}
                asChild
                size="large"
              >
                <a href={links.signUp}>Start building</a>
              </Button>
            </SignupClick>
            <Button variant="secondary" asChild size="large">
              <a href={links.docs.contact}>Talk to us</a>
            </Button>
          </>
        }
      />
      <DemoSection />
      <WorkflowsSection />
      <ImplementationSection />
      <CtaBanner />
    </>
  );
};

export default Page;
