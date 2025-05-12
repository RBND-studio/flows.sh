import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { FaqAccordion, Section, SmartLink } from "components/ui";
import { links } from "lib/links";
import { type ReactElement } from "react";
import { formatNumberWithThousandSeparator, pricingTiers } from "shared";
import { Text } from "ui";

const questions = [
  {
    title: "How are MTUs (monthly tracked users) calculated?",
    content: (
      <>
        We count an MTU as a unique user that has experienced a Flows workflow in the current
        billing cycle. We don’t count users that have only entered a workflow but haven’t
        experienced it.
        <br />
        <br />
        If user experiences a workflow multiple times in a month, they are only counted once. And if
        that user doesn’t experience a workflow in the next month, they are not counted in your
        usage for that month.
        <br />
        <br />
        Experiencing a workflow means that at least one component block has been rendered to the
        user.{" "}
        <SmartLink underline target="_blank" href={links.docs.organization.howWeCountMTus}>
          Learn more
        </SmartLink>
      </>
    ),
  },
  {
    title: "How does the pricing work?",
    content:
      "Flows offers volume based pricing, the more MTUs you have the less you pay. Every month you will be billed based on the number of your MTUs. To get an estimate of your monthly cost, use our pricing calculator above.",
  },
  {
    title: "How do you calculate a month?",
    content:
      "Free tier resets on the first day of the month. Paid plans billing cycle starts on the day of the month that you subscribe. For example, if you subscribe on the 15th, your billing cycle will start on the 15th of every month.",
  },
  {
    title: "Do you offer a free tier?",
    content: `Yes, we offer a free tier for the first ${formatNumberWithThousandSeparator(
      pricingTiers.free.flowsRange[1],
    )} MTUs. No credit card required. When you exceed the free tier, you will need to upgrade to a pay as you go plan starting at $${
      pricingTiers.tier1.price
    } per MTU.`,
  },
  {
    title: "Do you offer discounts for startups?",
    content: (
      <>
        Yes, we offer discounts for startups. Please reach out to us at{" "}
        <a
          className={css({
            color: "newFg.primary",
            textDecoration: "underline",
          })}
          href="mailto:hello@flows.sh"
        >
          hello@flows.sh
        </a>
      </>
    ),
  },
  {
    title: "Will you help us switch to Flows?",
    content:
      "We will. We're happy to assist you with moving your existing onboarding to Flows. When transitioning to Flows from another tool, we offer free usage to cover the transition period and avoid double billing.",
  },
];

export const PricingFaq = (): ReactElement => {
  return (
    <Section pt="space80" pb="space40" md={{ pt: "space120", pb: "space80" }} maxWidth="640px!">
      <Text
        className={css({
          marginBottom: "space24",
        })}
        variant="title2xl"
        align="center"
        as="h2"
      >
        FAQs
      </Text>

      <Box>
        {questions.map((item) => (
          <FaqAccordion headingLevel="h3" key={item.title} title={item.title}>
            <Text color="newFg.neutral.muted" variant="bodyL">
              {item.content}
            </Text>
          </FaqAccordion>
        ))}
      </Box>
    </Section>
  );
};
