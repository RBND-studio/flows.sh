import { FancyIcon, Icon } from "ui";
import { tourFeaturesContent } from "./features";
import { Tour16 } from "icons";
import { css } from "@flows/styled-system/css";
import { FeatureSectionIntro } from "../feature-section-intro";
import { routes } from "routes";
import { TourComponents } from "./tour-components";
import {
  DoubleFeatureBento,
  FeatureBentoWrapper,
  HorizontalBentoSeparator,
} from "components/feature-bento/feature-bento";

export const ToursSection = () => {
  return (
    <>
      <FeatureSectionIntro
        title="Guide users to success, step-by-step"
        description="Build product tours that onboard new users, highlight features, and turn signups into active users."
        link={routes.features.productTours}
        linkText="Discover Product Tours"
        feature="Product Tours"
        featureIcon={
          <FancyIcon
            className={css({
              width: "24px",
              height: "24px",
              backgroundColor: "dataViz.purple.fg",
            })}
          >
            <Icon icon={Tour16} color="inherit" />
          </FancyIcon>
        }
      />
      <FeatureBentoWrapper>
        <TourComponents />
        <HorizontalBentoSeparator />
        <DoubleFeatureBento
          firstFeature={tourFeaturesContent[0]}
          secondFeature={tourFeaturesContent[1]}
        />
      </FeatureBentoWrapper>
    </>
  );
};
