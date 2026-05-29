import { Flex } from "@flows/styled-system/jsx";
import { announcementBannerContent } from "app/examples/announcement-banner/content";
import { ExampleCard } from "app/examples/example-card";
import { featureAnnouncementContent } from "app/examples/feature-announcement/content";
import { featureHintContent } from "app/examples/feature-hint/content";
import { floatingChecklistContent } from "app/examples/floating-checklist/content";
import { gettingStartedDashboardContent } from "app/examples/getting-started-dashboard/content";
import { hintContent } from "app/examples/hint/content";
import { inAppChangelogContent } from "app/examples/in-app-changelog/content";
import { interactiveFeatureAnnouncementContent } from "app/examples/interactive-feature-announcement/content";
import { modalContent } from "app/examples/modal/content";
import { npsSurveyContent } from "app/examples/nps-survey/content";
import { onboardingHubContent } from "app/examples/onboarding-hub/content";
import { tourContent } from "app/examples/tour/content";
import { type ReactElement } from "react";
import { routes } from "routes";

const examples = {
  firstRow: [tourContent, inAppChangelogContent, npsSurveyContent],
  secondRow: [floatingChecklistContent, featureAnnouncementContent, featureHintContent],
  thirdRow: [onboardingHubContent, modalContent, announcementBannerContent],
  fourthRow: [gettingStartedDashboardContent, interactiveFeatureAnnouncementContent, hintContent],
};

export const ExampleCardsGrid = (): ReactElement => {
  return (
    <Flex
      gap="space16"
      lg={{
        gap: "space32",
      }}
      md={{
        mt: -120,
        mx: "space16",
      }}
    >
      <Flex
        gap="space16"
        flexDirection="column"
        md={{
          flexDirection: "row",
        }}
        lg={{
          gap: "space32",
        }}
      >
        <Flex
          flexDirection="column"
          mt={40}
          gap="space16"
          lg={{
            gap: "space32",
          }}
        >
          {examples.firstRow.map((example) => (
            <ExampleCard
              darkImage={example.images.dark}
              lightImage={example.images.light}
              key={example.title}
              alt={example.title}
              href={routes.exampleDetail(example.slug)}
              description={example.description}
              title={example.title}
              headingLevel="h3"
            />
          ))}
        </Flex>
        <Flex
          flexDirection="column"
          md={{ mt: 158 }}
          gap="space16"
          lg={{
            gap: "space32",
          }}
        >
          {examples.secondRow.map((example) => (
            <ExampleCard
              darkImage={example.images.dark}
              lightImage={example.images.light}
              key={example.title}
              alt={example.title}
              href={routes.exampleDetail(example.slug)}
              description={example.description}
              title={example.title}
              headingLevel="h3"
            />
          ))}
        </Flex>
      </Flex>
      <Flex
        gap="space16"
        lg={{
          gap: "space32",
        }}
        flexDirection="column"
        md={{
          flexDirection: "row",
        }}
      >
        <Flex
          flexDirection="column"
          md={{ mt: 136 }}
          gap="space16"
          lg={{
            gap: "space32",
          }}
        >
          {examples.thirdRow.map((example) => (
            <ExampleCard
              darkImage={example.images.dark}
              lightImage={example.images.light}
              key={example.title}
              alt={example.title}
              href={routes.exampleDetail(example.slug)}
              description={example.description}
              title={example.title}
              headingLevel="h3"
            />
          ))}
        </Flex>
        <Flex
          flexDirection="column"
          gap="space16"
          lg={{
            gap: "space32",
          }}
        >
          {examples.fourthRow.map((example) => (
            <ExampleCard
              darkImage={example.images.dark}
              lightImage={example.images.light}
              key={example.title}
              alt={example.title}
              href={routes.exampleDetail(example.slug)}
              description={example.description}
              title={example.title}
              headingLevel="h3"
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
