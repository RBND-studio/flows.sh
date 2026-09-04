import { css } from "@flows/styled-system/css";
import { CalculatorPage } from "app/tools/calculator/calculator-page";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import Link from "next/link";
import { type JSX } from "react";
import { routes } from "routes";

import { PmfCalculator } from "./calculator";
import { pmfConfig } from "./config";

const TITLE = "PMF survey calculator";
const DESCRIPTION =
  "Enter how many people said they would be very, somewhat, or not disappointed to lose your product, and see where you land against the 40 percent product market fit threshold.";

/** Kept under the ~155 character search result cut off, unlike the longer on-page DESCRIPTION. */
const META_DESCRIPTION =
  "Free product market fit survey calculator. Enter your very, somewhat, and not disappointed counts and see where you land against the 40 percent line.";

export const metadata: Metadata = getWebMetadata({
  title: `Free ${TITLE}`,
  description: META_DESCRIPTION,
});

export default function PmfCalculatorPage(): JSX.Element {
  return (
    <CalculatorPage
      bands={pmfConfig.bands}
      formatValue={pmfConfig.formatValue}
      pageUrl={routes.pmfCalculator}
      title={TITLE}
      description={DESCRIPTION}
      calculator={<PmfCalculator />}
      explainer={{
        title: "How the PMF score is calculated",
        intro:
          "The product market fit survey asks one question: how would you feel if you could no longer use this product? People pick one of three answers, and the score is the share who said they would be very disappointed.",
        steps: [
          {
            title: "Ask people with real experience",
            description:
              "Gate the survey on usage rather than on signup date. Someone who never got the product working cannot give you a meaningful answer.",
          },
          {
            title: "Count the very disappointed",
            description:
              "Only the top answer counts. Somewhat disappointed is a genuinely different signal, and lumping the two together inflates the score into something you cannot act on.",
          },
          {
            title: "Split the result by segment",
            description:
              "Run the same maths for each segment separately. The aggregate number is a vanity metric, and the segment that answered very disappointed is the one to build and sell to.",
          },
        ],
        formula: {
          expression: "PMF score = very disappointed ÷ total responses × 100",
          note: "The convention is that 40 percent or more indicates product market fit. Treat that threshold loosely, because it comes from one specific context and was never meant as a universal law.",
        },
        footnote: (
          <>
            Always add the follow up question asking what the main benefit is, since those answers
            are your positioning written by the people paying you. See{" "}
            <Link
              className={linkCss}
              href={routes.blogPostDetail({ postId: "in-app-surveys-guide" })}
            >
              how to create in-app surveys
            </Link>{" "}
            for how PMF compares with{" "}
            <Link className={linkCss} href={routes.npsCalculator}>
              NPS
            </Link>
            ,{" "}
            <Link className={linkCss} href={routes.csatCalculator}>
              CSAT
            </Link>
            , and{" "}
            <Link className={linkCss} href={routes.cesCalculator}>
              CES
            </Link>
            .
          </>
        ),
      }}
      benchmarks={{
        title: "What counts as product market fit?",
        intro:
          "The 40 percent line is a rule of thumb, not a threshold your product crosses once. A segmented score of 55 percent among the users you actually want beats an aggregate 40 percent across everyone who ever signed up.",
      }}
      faqTitle="PMF questions, answered"
      faqs={FAQS}
      cta={{
        title: "Run the PMF survey on the users who matter",
        description:
          "Flows targets the survey at people who have actually used the product, so the answers come from experience rather than from a signup form.",
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
    title: "What is the product market fit survey?",
    content:
      "It is a single question asking how people would feel if they could no longer use your product, with three answers: very disappointed, somewhat disappointed, or not disappointed. The score is the percentage who picked the first one.",
  },
  {
    title: "How do I calculate a PMF score?",
    content:
      "Divide the number of very disappointed responses by your total responses and multiply by 100. If 81 of 200 people said very disappointed, your score is 40.5 percent.",
  },
  {
    title: "Why is 40 percent the threshold?",
    content:
      "It comes from Sean Ellis, who noticed that companies above roughly 40 percent tended to keep growing while those below it stalled. It is a useful signal from one specific context, not a law, so treat a 37 and a 43 as roughly the same answer.",
  },
  {
    title: "Should somewhat disappointed count towards the score?",
    content:
      "No. Somewhat disappointed means people have alternatives they are willing to use, which is a different situation from depending on you. Their comments are still worth reading, because they often name the one thing that would move them up.",
  },
  {
    title: "How many responses do I need?",
    content:
      "Around 100 responses per segment is the usual guidance. Below that the percentage swings too much to compare between segments, which is where most of the value in this survey sits.",
  },
  {
    title: "When should I run it?",
    content:
      "After people have used the product enough to have an opinion, and most usefully at earlier stages or when you are moving into a new market or user type. Asking someone who signed up yesterday tells you nothing.",
  },
];
