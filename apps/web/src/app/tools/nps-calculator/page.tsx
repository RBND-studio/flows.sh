import { css } from "@flows/styled-system/css";
import { CalculatorPage } from "app/tools/calculator/calculator-page";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import Link from "next/link";
import { type JSX } from "react";
import { routes } from "routes";

import { NpsCalculator } from "./calculator";
import { npsConfig } from "./config";

const TITLE = "NPS calculator";
const DESCRIPTION =
  "Enter how many people gave each score from 0 to 10 and get your Net Promoter Score, your promoter, passive, and detractor split, and a breakdown of every response.";

/** Kept under the ~155 character search result cut off, unlike the longer on-page DESCRIPTION. */
const META_DESCRIPTION =
  "Free NPS calculator. Enter your 0 to 10 survey scores and get your Net Promoter Score, plus the promoter, passive, and detractor split.";

export const metadata: Metadata = getWebMetadata({
  title: `Free ${TITLE}`,
  description: META_DESCRIPTION,
});

export default function NpsCalculatorPage(): JSX.Element {
  return (
    <CalculatorPage
      bands={npsConfig.bands}
      formatValue={npsConfig.formatValue}
      pageUrl={routes.npsCalculator}
      title={TITLE}
      description={DESCRIPTION}
      calculator={<NpsCalculator />}
      explainer={{
        title: "How NPS is calculated",
        intro:
          "Net Promoter Score comes from one question: how likely are you to recommend us to a friend or colleague, on a scale from 0 to 10. Every answer falls into one of three groups, and the score is the gap between the two ends.",
        steps: [
          {
            title: "Sort every response",
            description:
              "Scores of 9 and 10 are promoters, 7 and 8 are passives, and everything from 0 to 6 is a detractor.",
          },
          {
            title: "Turn the groups into percentages",
            description:
              "Divide the promoters and the detractors by your total number of responses. Partial answers and skipped surveys do not count.",
          },
          {
            title: "Subtract detractors from promoters",
            description:
              "The result is a whole number between negative 100 and positive 100. It is a score, not a percentage, so never write it with a percent sign.",
          },
        ],
        formula: {
          expression: "NPS = % promoters minus % detractors",
          note: "Passives count towards your total responses but never towards the score itself, which is why 100 responses split evenly across all three groups still leaves you close to zero.",
        },
        footnote: (
          <>
            Once you have a number, the harder part is collecting it well. Read{" "}
            <Link
              className={linkCss}
              href={routes.blogPostDetail({ postId: "nps-survey-in-product" })}
            >
              how to run NPS inside your product without annoying anyone
            </Link>{" "}
            for when to ask, who to ask, and what to do with the answers, or compare NPS with{" "}
            <Link className={linkCss} href={routes.csatCalculator}>
              CSAT
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
        title: "What is a good NPS score?",
        intro:
          "Anything above zero means you have more promoters than detractors. Beyond that, the number only really means something next to your own last measurement, because benchmarks swing hard between industries.",
      }}
      faqTitle="NPS questions, answered"
      faqs={FAQS}
      cta={{
        title: "Run your NPS survey inside your product",
        description:
          "Flows lets you ship an in-app NPS survey, target the right users, and collect responses without waiting on an engineering sprint.",
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
    title: "What is a Net Promoter Score?",
    content:
      "Net Promoter Score is a single number that summarises how likely your customers are to recommend you. It comes from one question answered on a 0 to 10 scale, and it ranges from negative 100 to positive 100.",
  },
  {
    title: "How do I calculate NPS by hand?",
    content:
      "Count how many responses landed in each group, divide the promoters and the detractors by the total number of responses, then subtract the detractor percentage from the promoter percentage. A survey with 60 percent promoters and 15 percent detractors scores 45.",
  },
  {
    title: "Why do passives not affect the score?",
    content:
      "Passives sit in the middle by design. They still count towards your total, which dilutes both percentages, but they never add or subtract directly. That is why a large passive group pulls any score towards zero.",
  },
  {
    title: "How many responses do I need?",
    content:
      "Aim for at least a few hundred responses before you read anything into a change. Below that, a handful of detractors can swing the score by ten points and you will end up chasing noise.",
  },
  {
    title: "How often should I run an NPS survey?",
    content:
      "Quarterly is a good default for most products, with each user seeing the survey at most once or twice a year. Running it constantly trains people to dismiss it and gives you a trend line made of survey fatigue.",
  },
  {
    title: "Is NPS a percentage?",
    content:
      "No. It is calculated from two percentages, but the result is a plain score. Writing it as 45 percent is a common mistake and makes it look like something it is not.",
  },
];
