import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { links } from "lib/links";
import Link from "next/link";
import { routes } from "routes";
import { FREE_LIMIT, pricingTiers } from "shared";

import type { Question } from "components/faq-section";
import { CustomUIComponentsIllustration } from "components/ui/illustrations/custom-ui-components-illustration";
import { FilterWorkflowExample } from "components/homepage/surveys-section/filter-workflow-example";
import { SurveyAnalyticsExample } from "components/homepage/surveys-section/survey-analytics-example";
import { SurveyPopover, SurveyScale } from "components/homepage/surveys-section/survey-popover";

export const riverFeatures = [
  {
    title: "Ask inside your product",
    description:
      "Run NPS, CSAT, CES, PMF, and custom surveys where the user already is. No redirect to a form, no email that gets ignored, no lost context.",
    visual: (
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        py="space40"
        layerStyle="dotBackground"
      >
        <SurveyPopover title="How likely are you to recommend us?">
          <SurveyScale
            options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            topLabel="Not likely"
            bottomLabel="Very likely"
          />
        </SurveyPopover>
      </Flex>
    ),
  },
  {
    title: "Ask at the moment the answer means something",
    description:
      "Target surveys by user property, page, element, or where the user has reached in a workflow. Ask about onboarding right after onboarding, not three weeks later.",
    visual: (
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        py="space40"
        layerStyle="dotBackground"
      >
        <FilterWorkflowExample />
      </Flex>
    ),
  },
  {
    title: "Rendered by your own components",
    description:
      "Use the Survey Popover that ships with Flows to start, then swap in your own component when you want the survey to look like the rest of your product. Same survey, your design system.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    title: "Results you can act on",
    description:
      "Every survey block reports how many users saw it, how many completed it, and a breakdown for each question. Export the raw responses as CSV whenever you need them.",
    visual: (
      <Flex width="100%" height="100%" alignItems="flex-end" justifyContent="center" pt="space40">
        <Box width="100%" maxWidth={420}>
          <SurveyAnalyticsExample />
        </Box>
      </Flex>
    ),
  },
];

export const questions: Question[] = [
  {
    title: "What kinds of surveys can I run with Flows?",
    content: (
      <>
        Flows supports NPS, CSAT, CES, PMF, and any custom survey you want to build. Each survey is
        made of one or more questions, and you can mix five question types in a single survey:
        freeform text, rating (numbers, stars, or emojis, including the 0 to 10 NPS scale), single
        choice, multiple choice, and link. Questions can be marked optional and reordered by
        dragging.
      </>
    ),
    schemaText:
      "Flows supports NPS, CSAT, CES, PMF, and any custom survey you want to build. Each survey is made of one or more questions, and you can mix five question types in a single survey: freeform text, rating (numbers, stars, or emojis, including the 0 to 10 NPS scale), single choice, multiple choice, and link. Questions can be marked optional and reordered by dragging.",
  },
  {
    title: "How is this different from a standalone survey tool?",
    content: (
      <>
        A standalone survey tool asks its question blind. It does not know whether the user finished
        onboarding, upgraded last week, or hit an error two minutes ago. In Flows a survey is a
        block inside a{" "}
        <Link className={css({ textDecoration: "underline" })} href={routes.features.workflows}>
          workflow
        </Link>
        , so it can be placed at an exact point in the user journey.
      </>
    ),
    schemaText:
      "A standalone survey tool asks its question blind. It does not know whether the user finished onboarding, upgraded last week, or hit an error two minutes ago. In Flows a survey is a block inside a workflow, so it can be placed at an exact point in the user journey.",
  },
  {
    title: "Can I make the survey look like my product?",
    content: (
      <>
        Yes. Flows ships with a built-in Survey Popover that works out of the box, and you can
        replace it with{" "}
        <Link
          className={css({ textDecoration: "underline" })}
          href={links.docs.blocks.components.custom}
        >
          your own component
        </Link>{" "}
        at any point. Flows handles the questions, the logic, the state, and the analytics. Your
        component handles the pixels.
      </>
    ),
    schemaText:
      "Yes. Flows ships with a built-in Survey Popover that works out of the box, and you can replace it with your own component at any point. Flows handles the questions, the logic, the state, and the analytics. Your component handles the pixels.",
  },
  {
    title: "Where do the responses go?",
    content: (
      <>
        Every survey block has an analytics tab showing how many users saw the survey, how many
        completed it, and a breakdown for each question. Rating questions include distribution
        charts with average, median, and standard deviation. All raw responses can be exported as
        CSV.
      </>
    ),
    schemaText:
      "Every survey block has an analytics tab showing how many users saw the survey, how many completed it, and a breakdown for each question. Rating questions include distribution charts with average, median, and standard deviation. All raw responses can be exported as CSV.",
  },
  {
    title: "How much does it cost?",
    content: (
      <>
        Surveys are part of Flows, not a paid extra. Flows is free for up to {FREE_LIMIT} monthly
        tracked users (MTUs), and paid plans start at ${pricingTiers.tier1.price} per MTU with
        volume discounts as you grow. See the{" "}
        <Link className={css({ textDecoration: "underline" })} href={routes.pricing}>
          pricing page
        </Link>{" "}
        for the full breakdown.
      </>
    ),
    schemaText: `Surveys are part of Flows, not a paid extra. Flows is free for up to ${FREE_LIMIT} monthly tracked users (MTUs), and paid plans start at $${pricingTiers.tier1.price} per MTU with volume discounts as you grow.`,
  },
];
