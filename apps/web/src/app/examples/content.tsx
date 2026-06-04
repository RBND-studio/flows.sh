import { cardContent } from "./card/content";
import { embeddedTipsContent } from "./embedded-tips/content";
import { enterpriseUpsellContent } from "./enterprise-upsell/content";
import { featureAnnouncementContent } from "./feature-announcement/content";
import { featureHintContent } from "./feature-hint/content";
import { floatingChecklistContent } from "./floating-checklist/content";
import { gettingStartedDashboardContent } from "./getting-started-dashboard/content";
import { hintContent } from "./hint/content";
import { interactiveFeatureAnnouncementContent } from "./interactive-feature-announcement/content";
import { modalContent } from "./modal/content";
import { newFeatureContent } from "./new-feature-badge/content";
import { newFeatureCardContent } from "./new-feature-card/content";
import { onboardingHubContent } from "./onboarding-hub/content";
import { productHuntLaunchAnnouncementContent } from "./product-hunt-launch-announcement/content";
import { npsSurveyContent } from "./nps-survey/content";
import { surveyPopoverContent } from "./survey-popover/content";
import { tourContent } from "./tour/content";
import { pmfSurveyContent } from "./pmf-survey/content";
import { csatSurveyContent } from "./csat-survey/content";
import { cesSurveyContent } from "./ces-survey/content";
import { announcementBannerContent } from "./announcement-banner/content";
import { inAppChangelogContent } from "./in-app-changelog/content";
import { tooltipContent } from "./tooltip/content";
import { churnPreventionFlowContent } from "./churn-prevention-flow/content";
import { microsurveyContent } from "./microsurvey/content";
// --PLOP_NEW_EXAMPLE_IMPORT--
import { type ContentType } from "./types";

export const examplesContent: ContentType[] = [
  tourContent,
  floatingChecklistContent,
  tooltipContent,
  featureAnnouncementContent,
  featureHintContent,
  onboardingHubContent,
  gettingStartedDashboardContent,
  modalContent,
  interactiveFeatureAnnouncementContent,
  inAppChangelogContent,
  microsurveyContent,
  announcementBannerContent,
  npsSurveyContent,
  surveyPopoverContent,
  pmfSurveyContent,
  csatSurveyContent,
  cesSurveyContent,
  hintContent,
  embeddedTipsContent,
  newFeatureCardContent,
  newFeatureContent,
  enterpriseUpsellContent,
  cardContent,
  productHuntLaunchAnnouncementContent,
  churnPreventionFlowContent,
  // --PLOP_NEW_EXAMPLE_CONTENT--
];
