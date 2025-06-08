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
  title: "Product Marketing – Flows",
  description:
    "Launch targeted in-app campaigns like announcements and product tours without engineering help.",
};

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={
          <>
            Create powerful in-app
            <br />
            messaging with impact
          </>
        }
        description="
Launch targeted in-app campaigns like announcements and product tours without engineering help.
        "
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
        title="How Flows works for product marketing"
        description="
        Leverage the power of Flows to create engaging in-app campaigns that drive user awareness and adoption of your features."
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
      <CtaBanner description="Build the product marketing experiences you've always wanted" />
    </>
  );
};

export default Page;
