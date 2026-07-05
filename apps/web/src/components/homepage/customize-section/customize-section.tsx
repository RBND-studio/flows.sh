import { Section } from "components/ui/section";
import { FancyIcon, Icon } from "ui";
import { Code16 } from "icons";
import { css } from "@flows/styled-system/css";
import { FeatureSectionIntro } from "../feature-section-intro";
import { routes } from "routes";
import { CustomizationFeatures } from "./customization-features";

export const CustomizeSection = () => {
  return (
    <>
      <FeatureSectionIntro
        title="Full control over every pixel"
        description="Our headless architecture lets you customize every part of your adoption experience without worrying about complex user states."
        link={routes.features.customComponents}
        linkText="Discover what’s possible"
        feature="Customization"
        featureIcon={
          <FancyIcon
            color="gray"
            className={css({
              width: "24px",
              height: "24px",
            })}
          >
            <Icon icon={Code16} color="inherit" />
          </FancyIcon>
        }
      />
      <Section bottomBorder sideBorders decorator="split" sideDots>
        <CustomizationFeatures />
      </Section>
    </>
  );
};
