import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ComparisonLogos, HorizontalHero, SmallDemoIllustration } from "components";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Button, Text } from "ui";

import { ComparisonTable } from "../comparison-table";
import { alternativesContent } from "../content";
import { OtherDifferencesSection } from "../other-differences-section";
import { SummarySection } from "../summary-section";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = alternativesContent.find((c) => c.slug === slug);

  if (!content) return notFound();

  return getWebMetadata({
    title: `The best ${content.seoTitle}`,
    description: content.description,
  });
}

export default async function AlternativeDetailPage({ params }: Props): Promise<ReactNode> {
  const { slug } = await params;
  const content = alternativesContent.find((c) => c.slug === slug);

  if (!content) return notFound();

  return (
    <>
      <HorizontalHero
        title={content.title}
        description={content.description}
        eyebrow={<ComparisonLogos competitorLogo={content.competitor.fullLogo} />}
        illustration={<SmallDemoIllustration />}
        actions={
          <Flex flexDirection="column" gap="space24" alignItems="center">
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
            <Text variant="bodyXs" color="newFg.neutral.muted">
              No credit card required. No commitment. Quick setup.
            </Text>
          </Flex>
        }
      />
      <SummarySection {...content.summary} />
      <ComparisonTable
        competitorLogo={content.competitor.squareLogo}
        competitorName={content.competitor.name}
        sectionTitle={content.comparisonTitle}
        comparisons={content.comparisons}
      />
      <OtherDifferencesSection differences={content.otherDifferences} />
      <CtaBanner title={content.ctaBanner.title} description={content.ctaBanner.description} />
    </>
  );
}

export function generateStaticParams(): Params[] {
  return alternativesContent.map((content) => ({ slug: content.slug }));
}
