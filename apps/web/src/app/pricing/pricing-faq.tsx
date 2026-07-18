import { css } from "@flows/styled-system/css";
import { FaqSection } from "components/faq-section";
import { SmartLink } from "components/ui/smart-link";
import { links } from "lib/links";
import { type ReactElement } from "react";
import { routes } from "routes";
import {
  emails,
  formatNumberWithThousandSeparator,
  FREE_LIMIT,
  newPricingTiers,
  PRO_FLAT_FEE,
  PRO_INCLUDED_MTU,
} from "shared";
import { Text } from "ui";

const tierUpTo = (index: number): number => newPricingTiers[index].up_to;
const tierUnitPrice = (index: number): number =>
  Number(newPricingTiers[index].unit_amount_decimal) / 100;

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
        user or they have entered a paid block type (e.g. Delay block).{" "}
        <SmartLink underline target="_blank" href={links.docs.organization.howWeCountMTus}>
          Learn more
        </SmartLink>
      </>
    ),
    schemaText:
      "We count an MTU as a unique user that has experienced a Flows workflow in the current billing cycle. We don’t count users that have only entered a workflow but haven’t experienced it. If user experiences a workflow multiple times in a month, they are only counted once. And if that user doesn’t experience a workflow in the next month, they are not counted in your usage for that month. Experiencing a workflow means that at least one component block has been rendered to the user or they have entered a paid block type (e.g. Delay block).",
  },
  {
    title: "How does the pricing work?",
    content: `Flows offers volume based pricing, the more MTUs you have the less you pay. The Pro plan has a flat fee of $${PRO_FLAT_FEE} per month and includes ${PRO_INCLUDED_MTU} MTUs. If you exceed the included MTUs, you will be charged extra for each additional MTU. To get an estimate of your monthly cost, use our pricing calculator above.`,
  },
  {
    title: "What are the unit costs?",
    content: (
      <ul
        className={css({
          listStyleType: "disc",
          pl: "space16",
          listStylePosition: "inside",
        })}
      >
        <Text as="li" color="fg.neutral.muted" variant="bodyL">
          First {PRO_INCLUDED_MTU} MTUs: Included in the Pro plan flat fee of ${PRO_FLAT_FEE} per
          month
        </Text>
        <Text as="li" color="fg.neutral.muted" variant="bodyL">
          {tierUpTo(0) + 1} - {tierUpTo(1)} MTUs: ${tierUnitPrice(1)} per MTU
        </Text>
        <Text as="li" color="fg.neutral.muted" variant="bodyL">
          {tierUpTo(1) + 1} - {tierUpTo(2)} MTUs: ${tierUnitPrice(2)} per MTU
        </Text>
        <Text as="li" color="fg.neutral.muted" variant="bodyL">
          {tierUpTo(2) + 1} - {tierUpTo(3)} MTUs: ${tierUnitPrice(3)} per MTU
        </Text>
        <Text as="li" color="fg.neutral.muted" variant="bodyL">
          {tierUpTo(3) + 1} - {tierUpTo(4)} MTUs: ${tierUnitPrice(4)} per MTU
        </Text>
        <Text as="li" color="fg.neutral.muted" variant="bodyL">
          +{tierUpTo(4)} MTUs: ${tierUnitPrice(5)} per MTU
        </Text>
      </ul>
    ),
    skipTextWrap: true,
    schemaText: `First ${PRO_INCLUDED_MTU} MTUs: Included in the Pro plan flat fee of $${PRO_FLAT_FEE} per month. ${tierUpTo(0) + 1} - ${tierUpTo(1)} MTUs: $${tierUnitPrice(1)} per MTU. ${tierUpTo(1) + 1} - ${tierUpTo(2)} MTUs: $${tierUnitPrice(2)} per MTU. ${tierUpTo(2) + 1} - ${tierUpTo(3)} MTUs: $${tierUnitPrice(3)} per MTU. ${tierUpTo(3) + 1} - ${tierUpTo(4)} MTUs: $${tierUnitPrice(4)} per MTU. +${tierUpTo(4)} MTUs: $${tierUnitPrice(5)} per MTU.`,
  },
  {
    title: "What is the billing cycle and how am I charged?",
    content:
      "Flows uses a monthly billing cycle. Free tier resets on the first day of the month. Paid plans billing cycle starts on the day of the month that you subscribe. At the end of each billing cycle, you will be charged for the flat fee of the plan, plus any additional MTUs you have in that month.",
  },
  {
    title: "What if I exceed my plan's included MTUs?",
    content:
      "If you exceed your plan's included MTUs, you will be charged for the additional MTUs at the unit price for your plan. You can view the unit prices above or use our pricing calculator to estimate your monthly cost.",
  },
  {
    title: "Do you offer a free tier?",
    content: `Yes, we offer a free tier for the first ${formatNumberWithThousandSeparator(
      FREE_LIMIT,
    )} MTUs. No credit card required. When you exceed the free tier, you will need to upgrade to the Pro plan starting at $${PRO_FLAT_FEE}.`,
  },

  {
    title: "Do you offer discounts for startups?",
    content: (
      <>
        Yes, we offer discounts for startups. Please reach out to us at{" "}
        <a
          className={css({
            color: "fg.primary",
            textDecoration: "underline",
          })}
          href={`mailto:${emails.general}`}
        >
          {emails.general}
        </a>
      </>
    ),
    schemaText: `Yes, we offer discounts for startups. Please reach out to us at ${emails.general}.`,
  },
  {
    title: "Will you help us switch to Flows?",
    content:
      "We will. We're happy to assist you with moving your existing onboarding to Flows. When transitioning to Flows from another tool, we offer free usage to cover the transition period and avoid double billing.",
  },
  {
    title: "Do you offer refunds?",
    content:
      "Refunds are available on paid plans only if there is no usage during the billing cycle.",
  },
  {
    title: "Is Flows a cost-effective alternative to Appcues and Walkme?",
    content:
      "Yes. Flows is built as a powerful but affordable alternative to Appcues, Walkme, Pendo, Usetiful, Chameleon, and similar platforms offering product adoption tools.",
  },
  {
    title: "Are there any hidden fees in Flows pricing?",
    content:
      "No. Flows pricing is transparent and predicable. You only pay for your plan and any additional MTUs you have in a month. No setup costs or hidden fees.",
  },
];

export const PricingFaq = (): ReactElement => {
  return (
    <FaqSection questions={questions} title="Frequently asked questions" pageUrl={routes.pricing} />
  );
};
