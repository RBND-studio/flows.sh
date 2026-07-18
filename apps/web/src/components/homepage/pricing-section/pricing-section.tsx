import { FeatureSectionIntro } from "../feature-section-intro";
import { routes } from "routes";
import { FancyIcon, Icon } from "ui";
import { css } from "@flows/styled-system/css";
import { CreditCard16 } from "icons";
import { CyclingWord, userAdjectives } from "components/ui/cycling-word";
import { PricingCardsSection } from "components/pricing/pricing-cards-section";

export const PricingSection = () => {
  return (
    <>
      <FeatureSectionIntro
        title={
          <>
            <span className={css({ color: "fg.neutral.subtle" })}>Pay only for</span>{" "}
            <CyclingWord words={userAdjectives} />{" "}
            <span className={css({ color: "fg.neutral.subtle" })}>users</span>
          </>
        }
        description="Stop paying for every user in your database. With Flows, you only pay for users who actually see an experience, making it the most cost efficient product adoption tool at any scale."
        link={routes.pricing}
        hideBottom
        linkText="Explore Pricing"
        feature="Pricing"
        featureIcon={
          <FancyIcon
            color="gray"
            className={css({
              width: "24px",
              height: "24px",
            })}
          >
            <Icon icon={CreditCard16} color="inherit" />
          </FancyIcon>
        }
      />
      <PricingCardsSection embed />
    </>
  );
};
