import { type ReactNode } from "react";
import { routes } from "routes";

import { examplesContent } from "./content";
import { ExampleCard } from "./example-card";
import { type ContentType } from "./types";
import { Section } from "components/ui/section";
import { SectionIntro } from "components/ui/section-intro";

type Props = {
  slug: string;
};

export const Suggestions = ({ slug }: Props): ReactNode => {
  const currentIndex = examplesContent.findIndex((c) => c.slug === slug);
  const suggestions: ContentType[] = [];

  // Find the previous and next examples
  for (let i = 1; i <= 3; i++) {
    const prevIndex = (currentIndex - i + examplesContent.length) % examplesContent.length;
    const nextIndex = (currentIndex + i) % examplesContent.length;
    suggestions.push(examplesContent[prevIndex], examplesContent[nextIndex]);
  }

  // Remove duplicates and the current example
  const uniqueSuggestions: ContentType[] = Array.from(new Set(suggestions))
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  const suggestionItems = uniqueSuggestions.map((content) => ({
    title: content.title,
    description: content.description,
    href: routes.exampleDetail(content.slug),
    lightImage: content.images.light,
    darkImage: content.images.dark,
    alt: content.title,
  }));

  return (
    <>
      <SectionIntro title="Explore more examples" sideBorders bottomBorder decorator="vertical" />
      <Section
        display="grid"
        gridTemplateColumns="1fr"
        md={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        gap="space12"
        sideBorders
        bottomBorder
        p={{ base: "space8", md: "space40" }}
      >
        {suggestionItems.map((item) => (
          <ExampleCard headingLevel="h3" key={item.title} {...item} />
        ))}
      </Section>
    </>
  );
};
