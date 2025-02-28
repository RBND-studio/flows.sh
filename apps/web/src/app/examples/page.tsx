import { Grid } from "@flows/styled-system/jsx";
import { Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { Section } from "components/ui";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { routes } from "routes";

import { examplesContent } from "./content";
import { ExampleCard } from "./example-card";

export const metadata: Metadata = {
  title: "Examples – Flows",
  description:
    "Learn what good product onboarding and education looks like and explore how Flows makes building it simple and easy.",
};

export default function ExamplePage(): ReactNode {
  return (
    <>
      <Hero
        title="Examples"
        description="Learn what good product onboarding and education looks like and explore how Flows makes building it simple and easy."
      />
      <Section>
        <Grid
          gridTemplateColumns="1fr"
          sm={{ gridTemplateColumns: "1fr 1fr" }}
          md={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          width="100%"
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
