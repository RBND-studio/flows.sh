import { css } from "@flows/styled-system/css";
import { CalculatorPage } from "app/tools/calculator/calculator-page";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import Link from "next/link";
import { type JSX } from "react";
import { routes } from "routes";

import { CsatCalculator } from "./calculator";
import { csatConfig } from "./config";

const TITLE = "CSAT calculator";
const DESCRIPTION =
  "Enter how many people picked each rating from 1 to 5 and get your customer satisfaction score, your average rating, and the split between satisfied, neutral, and unsatisfied responses.";

/** Kept under the ~155 character search result cut off, unlike the longer on-page DESCRIPTION. */
const META_DESCRIPTION =
  "Free CSAT calculator. Enter your 1 to 5 ratings and get your customer satisfaction score, your average rating, and the satisfied share.";

export const metadata: Metadata = getWebMetadata({
  title: `Free ${TITLE}`,
  description: META_DESCRIPTION,
});

export default function CsatCalculatorPage(): JSX.Element {
  return (
    <CalculatorPage
      bands={csatConfig.bands}
      formatValue={csatConfig.formatValue}
      pageUrl={routes.csatCalculator}
      title={TITLE}
      description={DESCRIPTION}
      calculator={<CsatCalculator />}
      explainer={{
        title: "How CSAT is calculated",
        intro:
          "Customer satisfaction score measures one interaction, not your product as a whole. People rate the experience they just had, usually from 1 to 5, and the score is the share of them who picked one of the top two ratings.",
        steps: [
          {
            title: "Ask right after the interaction",
            description:
              "A support conversation closing, an export finishing, an integration connecting. Ask while people still remember the specific thing you are asking about.",
          },
          {
            title: "Count the top two ratings",
            description:
              "Ratings of 4 and 5 count as satisfied. A 3 is neutral, and 1 and 2 are unsatisfied. Only the satisfied responses feed the score.",
          },
          {
            title: "Divide by all responses",
            description:
              "Satisfied responses divided by total responses, times 100. Neutral answers dilute the result rather than counting against it.",
          },
        ],
        formula: {
          expression: "CSAT = satisfied responses ÷ total responses × 100",
          note: "The average rating is worth watching next to the score, because two surveys can share a CSAT of 80 percent while one has a wall of 5s and the other has a wall of 4s.",
        },
        footnote: (
          <>
            CSAT is the easiest of the four standard surveys to act on, because the scope is narrow
            enough that a low score points somewhere specific. See{" "}
            <Link
              className={linkCss}
              href={routes.blogPostDetail({ postId: "in-app-surveys-guide" })}
            >
              how to create in-app surveys
            </Link>{" "}
            for how it compares with{" "}
            <Link className={linkCss} href={routes.npsCalculator}>
              NPS
            </Link>
            ,{" "}
            <Link className={linkCss} href={routes.cesCalculator}>
              CES
            </Link>
            , and{" "}
            <Link className={linkCss} href={routes.pmfCalculator}>
              PMF
            </Link>
            .
          </>
        ),
      }}
      benchmarks={{
        title: "What is a good CSAT score?",
        intro:
          "Most teams land somewhere between 70 and 85 percent. The number depends heavily on what you are measuring, so compare a flow against its own history rather than against someone else's support benchmark.",
      }}
      faqTitle="CSAT questions, answered"
      faqs={FAQS}
      cta={{
        title: "Ask for CSAT at the right moment",
        description:
          "Flows triggers a survey on the action that just happened, so you measure the interaction while people still remember it.",
      }}
    />
  );
}

const linkCss = css({
  color: "fg.primary",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
});

const FAQS = [
  {
    title: "What is a CSAT score?",
    content:
      "Customer satisfaction score is the percentage of people who rated a specific interaction positively. It is measured per interaction, such as a support conversation or a setup flow, rather than across your whole product.",
  },
  {
    title: "How do I calculate CSAT?",
    content:
      "Count the responses that picked one of the top two ratings, divide by the total number of responses, and multiply by 100. If 151 of 180 people rated the interaction 4 or 5, your CSAT is 83.9 percent.",
  },
  {
    title: "Should I use a 1 to 5 or a 1 to 10 scale?",
    content:
      "A 1 to 5 scale is the common default and the one this calculator uses. Whichever you pick, keep it identical across every CSAT survey you run, because a score from one scale cannot be compared with a score from another.",
  },
  {
    title: "Does the average rating matter more than the score?",
    content:
      "They answer different questions. The score tells you how many people were satisfied, and the average tells you how strongly. Read them together, because a score can hold steady while the average quietly slides from 5s to 4s.",
  },
  {
    title: "What is the difference between CSAT and NPS?",
    content:
      "CSAT measures one interaction right after it happens and points at something specific you can fix. NPS measures the overall relationship over time and is too broad to evaluate a single feature or conversation.",
  },
  {
    title: "How often should I ask for CSAT?",
    content:
      "Pick the two or three interactions that actually matter and survey those. Asking after every event is the fastest way to train people to dismiss your surveys, and your frequency cap should be shared across every survey type you run.",
  },
];
