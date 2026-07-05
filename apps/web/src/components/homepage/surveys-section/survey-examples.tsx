import { Flex } from "@flows/styled-system/jsx";
import { Component16 } from "icons";
import { Text } from "ui";
import { SurveyFreeform, SurveyPopover, SurveyScale, SurveySelectOptions } from "./survey-popover";
import { css } from "@flows/styled-system/css";
import { FeatureBento } from "components/feature-bento/feature-bento";
import { Fragment } from "react";

export const SurveyExamples = () => {
  return (
    <>
      <FeatureBento
        icon={Component16}
        title="Flexible surveys"
        description="With multiple choice, number rating, text input, emoji reaction, and link options. Use a template or build from scratch."
        headingLevel="h3"
        visualWrapperClassName={css({
          maxHeight: 320,
        })}
        visual={
          <Flex
            h="100%"
            mx={{ base: "-space24", md: "-space40" }}
            role="img"
            aria-label="A carousel of survey examples, including Net Promoter Score, Customer Effort Score, Customer Satisfaction, Product/Market Fit, and User research."
          >
            <Flex
              gap="space16"
              flexShrink={0}
              className={css({
                animation: "teleprompter 30s linear infinite",
              })}
              flexDirection="column"
              transformOrigin="center center"
              pr="space16"
            >
              <Flex gap="space16" alignItems="flex-end">
                {[...surveyExamples, ...surveyExamples].map(({ title, component }, index) => (
                  <Flex flexDirection="column" key={index} flexShrink={0}>
                    <Text variant="bodyXxs" mt="space4" mb="space8" color="fg.neutral.muted">
                      {title}
                    </Text>
                    {component}
                  </Flex>
                ))}
              </Flex>
              <Flex
                gap="space16"
                alignItems="flex-end"
                aria-hidden="true"
                transform="scaleY(-1)"
                mt="space16"
                filter="blur(4px)"
                opacity={0.5}
              >
                {[...surveyExamples, ...surveyExamples].map(({ component }, index) => (
                  <Fragment key={index}>{component}</Fragment>
                ))}
              </Flex>
            </Flex>
          </Flex>
        }
      />
    </>
  );
};

const surveyExamples = [
  {
    title: "Net Promoter Score (NPS)",
    component: (
      <SurveyPopover title="How likely are you to recommend us to a friend or colleague?">
        <SurveyScale
          options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          topLabel="Not likely at all"
          bottomLabel="Extremely likely"
        />
      </SurveyPopover>
    ),
  },
  {
    title: "Customer Effort Score (CES)",
    component: (
      <SurveyPopover title="How easy was it to use our product?">
        <SurveyScale
          options={["😞", "😐", "😊", "😀", "😍"]}
          topLabel="Very difficult"
          bottomLabel="Very easy"
        />
      </SurveyPopover>
    ),
  },
  {
    title: "Customer Satisfaction (CSAT)",
    component: (
      <SurveyPopover title="How satisfied are you with our service?">
        <SurveyScale
          options={["😞", "😐", "😊", "😀", "😍"]}
          topLabel="Very dissatisfied"
          bottomLabel="Very satisfied"
        />
      </SurveyPopover>
    ),
  },
  {
    title: "Product/Market Fit (PMF)",
    component: (
      <SurveyPopover title="How would you feel if you could no longer use Acme?">
        <SurveySelectOptions
          options={["Not disappointed", "Slightly disappointed", "Very disappointed"]}
        />
      </SurveyPopover>
    ),
  },
  {
    title: "User research",
    component: (
      <SurveyPopover title="What could we do better?">
        <SurveyFreeform placeholder="Your feedback..." />
      </SurveyPopover>
    ),
  },
];
