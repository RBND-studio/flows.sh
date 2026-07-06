import type { ReactElement } from "react";
import { Section } from "./ui/section";
import { Text } from "ui";
import { Box } from "@flows/styled-system/jsx";
import { FaqAccordion } from "./ui/faq-accordion";
import { DOMAIN } from "lib/constants";

export type Question = {
  title: string;
  content: string | ReactElement;
  skipTextWrap?: boolean;
  schemaText?: string;
};

type Props = {
  title: string;
  pageUrl: string;
  questions: Question[];
  bottomAction?: ReactElement;
};

export const FaqSection = ({ title, questions, pageUrl, bottomAction }: Props): ReactElement => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.schemaText ?? q.content,
      },
    })),
    url: `https://${DOMAIN}${pageUrl}`,
  };

  return (
    <>
      <Section
        bottomBorder
        decorator="split"
        sideBorders
        pt={{ base: "space40", md: "space80" }}
        pb={{ base: "space8", md: "space40" }}
        px={{ base: "space24", md: "space40" }}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap="space24"
        display="flex"
      >
        <Text variant="title2xl" mb="space12" as="h2" maxWidth={260} w="100%">
          {title}
        </Text>
        <Box maxWidth={620}>
          {questions.map((item) => (
            <FaqAccordion headingLevel="h3" key={item.title} title={item.title}>
              {!item.skipTextWrap ? (
                <Text color="fg.neutral.muted" variant="bodyL">
                  {item.content}
                </Text>
              ) : (
                <>{item.content}</>
              )}
            </FaqAccordion>
          ))}
          {bottomAction}
        </Box>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
};
