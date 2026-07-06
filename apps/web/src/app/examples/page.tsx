import { Grid } from "@flows/styled-system/jsx";
import { CtaBanner } from "components/cta-banner";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { routes } from "routes";

import { examplesContent } from "./content";
import { ExampleCard } from "./example-card";
import { Section } from "components/ui/section";
import { Hero } from "components/hero/hero";

export const metadata: Metadata = getWebMetadata({
  title: "Examples",
  description:
    "Learn what good product onboarding and education looks like and explore how Flows makes building it simple and easy.",
});

export default function ExamplePage(): ReactNode {
  return (
    <>
      <Hero
        title="Examples"
        description="Learn what good product onboarding and education looks like and explore how Flows makes building it simple and easy."
        sideBorders
        bottomBorder
        decorator="vertical"
      />
      <Section sideBorders bottomBorder pb="space40" p={{ base: "space8", md: "space40" }}>
        <Grid
          gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap="space20"
        >
          {examplesContent.map((example) => (
            <ExampleCard
              darkImage={example.images.dark}
              lightImage={example.images.light}
              key={example.title}
              alt={example.title}
              href={routes.exampleDetail(example.slug)}
              description={example.description}
              title={example.title}
              headingLevel="h2"
            />
          ))}
        </Grid>
      </Section>
      <CtaBanner />
    </>
  );
}
