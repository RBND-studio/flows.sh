import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { BigDemoIllustration, Hero } from "components";
import { CtaBanner } from "components/cta-banner";
import { FaqAccordion, Section, SectionIntro } from "components/ui";
import { SignupClick } from "components/utils/signup-click";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Button, Text } from "ui";

import { LogoSection } from "components/logos/logo-section";
import { DOMAIN } from "lib";
import type { FAQPage, WithContext } from "schema-dts";
import { SharedFeatures } from "../../solutions/shared-features";
import { technologyContent } from "../content";
import { TechnologyFeaturesSection } from "../technology-features-section";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = technologyContent.find((c) => c.slug === slug);

  if (!content) return notFound();

  return getWebMetadata({
    title: content.seoTitle,
    description: content.description,
  });
}

export default async function TechnologyDetailPage({ params }: Props): Promise<ReactNode> {
  const { slug } = await params;
  const content = technologyContent.find((c) => c.slug === slug);

  if (!content) return notFound();

  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.schemaContent ?? (typeof faq.content === "string" ? faq.content : undefined),
      },
    })),
    url: `https://${DOMAIN}/technology/${content.slug}`,
  };

  return (
    <>
      <Hero
        title={content.title}
        description={content.description}
        actions={
          <Flex gap="space12" flexDirection={{ base: "column", md: "row" }}>
            <SignupClick>
              <Button
                className={css({
                  shadow: "neutralFocus",
                })}
                asChild
                size="large"
              >
                <a href={links.signUp}>Get started for free</a>
              </Button>
            </SignupClick>
            <Button asChild size="large" variant="secondary">
              <Link href={routes.examples}>View live examples</Link>
            </Button>
          </Flex>
        }
      />

      <BigDemoIllustration />

      <LogoSection />

      <TechnologyFeaturesSection
        title={content.featuresIntro.title}
        description={content.featuresIntro.description}
      />

      <SharedFeatures />

      <SectionIntro
        title={
          <>
            Questions and <span className={css({ color: "newFg.neutral.subtle" })}>Answers</span>
          </>
        }
      />
      <Section maxWidth="640px!" mx="auto">
        {content.faqs.map((faq) => (
          <FaqAccordion headingLevel="h3" key={faq.title} title={faq.title}>
            <Text color="newFg.neutral.muted" variant="bodyL">
              {faq.content}
            </Text>
          </FaqAccordion>
        ))}
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <CtaBanner title={content.ctaBanner.title} description={content.ctaBanner.description} />
    </>
  );
}

export function generateStaticParams(): Params[] {
  return technologyContent.map((content) => ({ slug: content.slug }));
}
