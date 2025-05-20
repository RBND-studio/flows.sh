import { css } from "@flows/styled-system/css";
import { Section, SectionIntro } from "components/ui";
import Link from "next/link";
import { type ReactElement } from "react";
import { routes } from "routes";
import { Button } from "ui";

import { ExampleCardsGrid } from "./example-cards-grid";

export const ExamplesSection = (): ReactElement => {
  return (
    <>
      <SectionIntro
        title={
          <>
            Build anything
            <br />
            with Flows
          </>
        }
        description="Learn how to do almost anything in Flows, from simple onboarding checklists to complex
          onboarding solutions."
        actions={
          <Button variant="secondary" asChild size="large">
            <Link className={css({ zIndex: 50 })} href={routes.examples}>
              View all examples
            </Link>
          </Button>
        }
      />

      <Section>
        <ExampleCardsGrid />
      </Section>
    </>
  );
};
