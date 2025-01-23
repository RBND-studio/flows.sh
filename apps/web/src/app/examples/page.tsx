import { Flex } from "@flows/styled-system/jsx";
import { Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { Section } from "components/ui";
import { Modal16, Tooltip16 } from "icons";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { routes } from "routes";

import { content as cardContent } from "./card/content";
import { ExampleCard } from "./example-card";
import { content as hintContent } from "./hint/content";
import { content as tourContent } from "./tour/content";

export const metadata: Metadata = {
  title: "Examples – Flows",
  description:
    "Learn what good product onboarding and education looks like and explore how Flows makes building it simple and easy.",
};

const examples = [
  {
    title: cardContent.title,
    description: cardContent.description,
    href: routes.example.card,
    icon: Modal16,
  },
  {
    title: tourContent.title,
    description: tourContent.description,
    href: routes.example.tour,
    icon: Tooltip16,
  },
  {
    title: hintContent.title,
    description: hintContent.description,
    href: routes.example.hint,
    icon: Tooltip16,
  },
];

export default function ExamplePage(): ReactNode {
  return (
    <>
      <Hero
        title="Examples"
        description="Learn what good product onboarding and education looks like and explore how Flows makes building it simple and easy."
      />
      <Section>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          gap="space12"
          flexDirection="column"
          md={{ flexDirection: "row" }}
        >
          {examples.map((example) => (
            <ExampleCard key={example.title} {...example} />
          ))}
        </Flex>
      </Section>
      <CtaBanner />
    </>
  );
}
