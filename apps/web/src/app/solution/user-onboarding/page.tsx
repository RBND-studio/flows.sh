import { css } from "@flows/styled-system/css";
import { DemoSection, Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { FaqAccordion, Section, SectionIntro } from "components/ui";
import { RiverItem } from "components/ui/river-item";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button, Text } from "ui";

import { SharedFeatures } from "../shared-features";
import { questions, riverFeatures } from "./content";

export const metadata: Metadata = {
  title: "User Onboarding",
  description:
    "Build engaging onboarding flows that guide users to value. Improve new user experience and drive activation while being on-brand.",
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={
          <>
            Create powerful
            <br />
            user onboarding
          </>
        }
        description="Build engaging onboarding flows that guide users to value. Improve new user experience and drive activation while being on-brand."
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
                <a href={links.signUp}>Start onboarding</a>
              </Button>
            </SignupClick>
            <Button variant="secondary" asChild size="large">
              <a href={links.docs.contact}>Talk to us</a>
            </Button>
          </>
        }
      />

      <DemoSection />

      <SectionIntro
        title="How Flows works for user onboarding"
        description="Power-up your user onboarding with flexible tools that help you create engaging experiences for your users."
        className={css({
          mb: "space80",
          md: { mb: "0" },
        })}
      />
      {riverFeatures.map((feature) => (
        <RiverItem key={feature.title} {...feature} />
      ))}

      <SharedFeatures />

      <SectionIntro
        title={
          <>
            Questions and <span className={css({ color: "newFg.neutral.subtle" })}>Answers</span>
          </>
        }
      />
      <Section maxWidth={640} mx="auto">
        {questions.map((question) => (
          <FaqAccordion key={question.title} title={question.title}>
            <Text color="muted" variant="bodyL">
              {question.content}
            </Text>
          </FaqAccordion>
        ))}
      </Section>
      <CtaBanner />
    </>
  );
};

export default Page;
