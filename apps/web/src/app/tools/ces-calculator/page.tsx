import { css } from "@flows/styled-system/css";
import { CalculatorPage } from "app/tools/calculator/calculator-page";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import Link from "next/link";
import { type JSX } from "react";
import { routes } from "routes";

import { CesCalculator } from "./calculator";
import { cesConfig } from "./config";

const TITLE = "CES calculator";
const DESCRIPTION =
  "Enter how many people picked each rating from 1 to 7 and get your Customer Effort Score, the share who found the flow easy, and where the friction sits.";

/** Kept under the ~155 character search result cut off, unlike the longer on-page DESCRIPTION. */
const META_DESCRIPTION =
  "Free CES calculator. Enter your 1 to 7 ratings and get your Customer Effort Score, the share who found the flow easy, and where friction sits.";

export const metadata: Metadata = getWebMetadata({
  title: `Free ${TITLE}`,
  description: META_DESCRIPTION,
});

export default function CesCalculatorPage(): JSX.Element {
  return (
    <CalculatorPage
      bands={cesConfig.bands}
      formatValue={cesConfig.formatValue}
      pageUrl={routes.cesCalculator}
      title={TITLE}
      description={DESCRIPTION}
      calculator={<CesCalculator />}
      explainer={{
        title: "How CES is calculated",
        intro:
          "Customer Effort Score measures how hard something was to do. People rate a flow they just finished on a 1 to 7 scale, and the score is the plain average of every answer. Higher means easier.",
        steps: [
          {
            title: "Ask at the end of a flow",
            description:
              "Setup, integration, billing changes, data import, permissions. Ask on the last step, while the effort is still fresh.",
          },
          {
            title: "Keep the polarity fixed",
            description:
              "Decide that 7 always means very easy, label both ends of the scale, and never flip it. Comparisons across surveys are worthless the moment the direction changes.",
          },
          {
            title: "Average every answer",
            description:
              "Add up all the ratings and divide by the number of responses. Unlike NPS and CSAT, no answer is thrown away, so a 4 pulls the score just as honestly as a 1.",
          },
        ],
        formula: {
          expression: "CES = sum of all ratings ÷ number of responses",
          note: "The share of people who rated the flow 5 or higher is worth reading next to the average, because one badly stuck group can hide behind a comfortable mean.",
        },
        footnote: (
          <>
            CES has the best track record of the four standard surveys at predicting whether someone
            keeps using a product, because people forget what delighted them and remember what was
            hard. See{" "}
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
            <Link className={linkCss} href={routes.csatCalculator}>
              CSAT
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
        title: "What is a good CES score?",
        intro:
          "On a 1 to 7 scale, most flows land between 5 and 6. What matters more than the absolute number is the same flow measured before and after you changed it, and the comments attached to the low scores.",
      }}
      faqTitle="CES questions, answered"
      faqs={FAQS}
      cta={{
        title: "Measure effort where it happens",
        description:
          "Flows drops a CES question at the end of any flow in your product and branches to a follow up question based on the answer.",
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
    title: "What is a Customer Effort Score?",
    content:
      "Customer Effort Score measures how much work it took someone to get something done. People rate a flow they just completed on a 1 to 7 scale, and the score is the average of those ratings.",
  },
  {
    title: "How do I calculate CES?",
    content:
      "Add up every rating and divide by the number of responses. If 166 people give ratings adding up to 842, your CES is 5.07 out of 7.",
  },
  {
    title: "Should 7 mean easy or hard?",
    content:
      "Either works as long as you never change it. This calculator treats 7 as very easy. Inconsistent polarity across surveys is the single most common way teams make their CES history useless.",
  },
  {
    title: "Is CES better than NPS?",
    content:
      "For a specific flow, yes. CES predicts continued use better than the other standard surveys and points at a step you can fix. It cannot tell you how people feel about your product overall, which is what NPS is for.",
  },
  {
    title: "Should I report the average or the share who found it easy?",
    content:
      "Report the average as the headline and keep the share nearby. The average moves smoothly enough to track over time, while the share tells you how many people are actually struggling.",
  },
  {
    title: "What follow up question should I ask?",
    content:
      "Ask what made it difficult, and show it only to people who gave a low rating. Those answers usually name the exact step to fix, which is the whole point of running CES rather than a satisfaction survey.",
  },
];
