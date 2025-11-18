import { Section, SectionIntro } from "components/ui";
import { type ReactNode } from "react";

import { BasicsSection } from "./basics-section";
import { Steps } from "./steps";

export const EasyToGetStartedSection = (): ReactNode => {
  return (
    <>
      <SectionIntro
        title="Easy to get started"
        description="You don’t need to be a developer to start building your product adoption experiences with Flows. Publish your first onboarding in minutes."
      />

      <Section>
        <BasicsSection />
        <Steps />
      </Section>
    </>
  );
};
