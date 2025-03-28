import { Flex } from "@flows/styled-system/jsx";
import { cardContent } from "app/examples/card/content";
import { embeddedTipsContent } from "app/examples/embedded-tips/content";
import { enterpriseUpsellContent } from "app/examples/enterprise-upsell/content";
import { ExampleCard } from "app/examples/example-card";
import { floatingChecklistContent } from "app/examples/floating-checklist/content";
import { hintContent } from "app/examples/hint/content";
import { interactiveFeatureAnnouncementContent } from "app/examples/interactive-feature-announcement/content";
import { newFeatureCardContent } from "app/examples/new-feature-card/content";
import { tourContent } from "app/examples/tour/content";
import { Section } from "components/ui";
import Link from "next/link";
import { type ReactElement } from "react";
import { routes } from "routes";
import { Button, Text } from "ui";

const examples = {
  firstRow: [enterpriseUpsellContent, tourContent],
  secondRow: [floatingChecklistContent, cardContent],
  thirdRow: [embeddedTipsContent, hintContent],
  fourthRow: [newFeatureCardContent, interactiveFeatureAnnouncementContent],
};

export const ExamplesSection = (): ReactElement => {
  return (
    <>
      <Section
        display="flex"
        alignItems="center"
        flexDirection="column"
        mt="space80"
        mb="space40"
        md={{ mt: "space140", mb: "space64" }}
      >
        <Text as="h2" variant="title3xl" align="center">
          Build anything
          <br />
          with Flows
        </Text>

        <Text
          maxWidth={440}
          variant="bodyL"
          color="muted"
          mx="auto"
          mb="space24"
          mt="space16"
          align="center"
        >
          Learn how to do almost anything in Flows, from simple onboarding checklists to complex
          onboarding solutions.
        </Text>
        <Button variant="secondary" asChild size="large">
          <Link href={routes.examples}>View all examples</Link>
        </Button>
      </Section>
      <Section mb="space120">
        <Flex
          gap="space16"
          lg={{
            gap: "space32",
          }}
          md={{
            mt: -136,
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
      </Section>
    </>
  );
};
