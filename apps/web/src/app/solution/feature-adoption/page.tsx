import { css } from "@flows/styled-system/css";
import { Hero, HeroIllustration } from "components";
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
  title: "Feature Adoption – Flows",
  description:
    "Support releases with engaging announcements, embeddable banners, and guides. Nudge users to try new features and get the most out of your product.",
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title="Improve feature adoption"
        description="Support releases with engaging announcements, embeddable banners, and guides. Nudge users to try new features and get the most out of your product."
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
      <HeroIllustration defaultTab="Product adoption" />

      <SectionIntro
        title="How Flows helps with feature adoption"
        description="Stop adding additional temporary code to your application to announce new features. Use Flows to create temporary banners, tooltips, and guides to help users discover and adopt new features."
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
      <Section maxWidth="640px!" mx="auto">
        {questions.map((question) => (
          <FaqAccordion headingLevel="h3" key={question.title} title={question.title}>
            <Text color="newFg.neutral.muted" variant="bodyL">
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
