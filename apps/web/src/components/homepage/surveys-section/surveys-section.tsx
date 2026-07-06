import { FancyIcon, Icon } from "ui";
import { SurveyExamples } from "./survey-examples";
import { surveyFeaturesContent } from "./features";
import { Survey16 } from "icons";
import { css } from "@flows/styled-system/css";
import { FeatureSectionIntro } from "../feature-section-intro";
import { routes } from "routes";
import {
  DoubleFeatureBento,
  FeatureBentoWrapper,
  HorizontalBentoSeparator,
} from "components/feature-bento/feature-bento";

export const SurveysSection = () => {
  return (
    <>
      <FeatureSectionIntro
        title="Collect user feedback that drives decisions"
        description="Run NPS, CSAT, PMF, and custom surveys inside your product. Target the right users, collect responses in context, and act on real feedback."
        link={routes.features.surveys}
        linkText="Discover Surveys"
        feature="Surveys"
        featureIcon={
          <FancyIcon
            className={css({
              width: "24px",
              height: "24px",
              backgroundColor: "dataViz.darkTeal.fg",
            })}
          >
            <Icon icon={Survey16} color="inherit" />
          </FancyIcon>
        }
      />

      <FeatureBentoWrapper>
        <SurveyExamples />
        <HorizontalBentoSeparator />
        <DoubleFeatureBento
          firstFeature={surveyFeaturesContent[0]}
          secondFeature={surveyFeaturesContent[1]}
        />
      </FeatureBentoWrapper>
    </>
  );
};
