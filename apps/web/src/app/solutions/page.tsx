import { Grid } from "@flows/styled-system/jsx";
import { Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { Section } from "components/ui";
import { type Metadata } from "next";
import { type ReactNode } from "react";

import { solutionsContent } from "../../components/solutions-content";
import { SolutionCard } from "./solution-card";

export const metadata: Metadata = {
  title: "Solutions – Flows",
  description: "Flows is the all-in-one solution for product onboarding, education, and adoption.",
};

export default function SolutionsPage(): ReactNode {
  return (
    <>
      <Hero
        title="All-purpose adoption platform"
        description="Flows is the all-in-one solution for product onboarding, education, and adoption."
      />
      <Section>
        <Grid
          gridTemplateColumns="1fr"
          sm={{ gridTemplateColumns: "1fr 1fr" }}
          md={{
            gridTemplateColumns: "1fr 1fr 1fr",
            mx: "space32",
          }}
          gap="space20"
        >
          {solutionsContent.map((solution) => (
            <SolutionCard
              description={solution.description}
              key={solution.title}
              title={solution.title}
              viz={solution.viz}
              linkUrl={solution.linkUrl}
            />
          ))}
        </Grid>
      </Section>
      <CtaBanner />
    </>
  );
}
