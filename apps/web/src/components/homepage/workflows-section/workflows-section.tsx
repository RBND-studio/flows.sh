import { Section } from "components/ui/section";
import { FancyIcon, Icon } from "ui";
import { Block16 } from "icons";
import { css } from "@flows/styled-system/css";
import { FeatureSectionIntro } from "../feature-section-intro";
import { routes } from "routes";
import { WorkflowFeatures } from "./workflow-features";

export const WorkflowsSection = () => {
  return (
    <>
      <FeatureSectionIntro
        title="Automate what happens at every step of the journey"
        description="Build multi-step experiences that react to what users actually do. Branch by role, plan, or behavior, and control exactly who sees what, and when."
        link={routes.features.workflows}
        linkText="Discover Workflows"
        feature="Workflows"
        featureIcon={
          <FancyIcon
            className={css({
              width: "24px",
              height: "24px",
              backgroundColor: "dataViz.blue.fg",
            })}
          >
            <Icon icon={Block16} color="inherit" />
          </FancyIcon>
        }
      />
      <Section bottomBorder sideBorders decorator="split" sideDots>
        <WorkflowFeatures />
      </Section>
    </>
  );
};
