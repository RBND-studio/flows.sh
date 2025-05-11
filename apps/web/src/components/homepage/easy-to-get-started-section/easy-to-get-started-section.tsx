import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { EndLine, Section, SectionIntroTextOnly } from "components/ui";
import { type ReactNode } from "react";

import { BasicsSection } from "./basics-section";
import { Steps } from "./steps";

export const EasyToGetStartedSection = (): ReactNode => {
  return (
    <>
      <Section>
        <Flex>
          <IntroLine />
          <SectionIntroTextOnly
            title="Easy to get started"
            description="You don’t need to be a developer to start building your product adoption experiences with Flows. Publish your first onboarding in minutes."
            className={css({
              mb: "space32",
            })}
          />
          <IntroLine />
        </Flex>
      </Section>

      <Section>
        <BasicsSection />
        <Steps />
      </Section>
    </>
  );
};

const IntroLine = (): ReactNode => {
  return (
    <EndLine
      className={css({
        height: "unset!",
        display: {
          base: "none",
          sm: "block",
        },
      })}
      side="bottom"
    />
  );
};
