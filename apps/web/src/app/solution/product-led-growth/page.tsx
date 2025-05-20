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
  title: "Product Led Growth – Flows",
  description:
    "Build engaging growth loops to drive company KPIs and increase the effectiveness of your sales, support and marketing efforts.",
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={
          <>
            Create growth loops
            <br />
            that drive revenue
          </>
        }
        description="Build engaging growth loops to drive company KPIs and increase the effectiveness of your sales, support and marketing efforts."
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

      <HeroIllustration defaultTab="Growth experiments" />

      <SectionIntro
        title="How Flows works for product-led growth"
        description="
        Leverage the power of Flows to build presonalized growth campaigns that drive user engagement and retention."
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
