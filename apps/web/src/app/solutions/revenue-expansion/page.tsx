import { css } from "@flows/styled-system/css";
import { BigDemoIllustration, Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { FaqAccordion, Section, SectionIntro } from "components/ui";
import { RiverItem } from "components/ui/river-item";
import { SignupClick } from "components/utils/signup-click";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button, Text } from "ui";

import { SharedFeatures } from "../shared-features";
import { questions, riverFeatures } from "./content";

export const metadata: Metadata = getWebMetadata({
  title: "Revenue expansion",
  description:
    "Create strategic in-app promotions. With Flows, you can deliver the right message at the right time to drive conversion and account expansion.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Hero
        title={<>Convert free trials to paying customers</>}
        description="Create strategic in-app promotions. With Flows, you can deliver the right message at the right time to drive conversion and account expansion."
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

      <BigDemoIllustration />

      <SectionIntro
        title="How Flows works for revenue expansion"
        description="
        Boost your MRR with contextual upgrade campaigns. Create in-app modals, banners, and other upsell prompts that convert free trial users into paying customers.
        "
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
