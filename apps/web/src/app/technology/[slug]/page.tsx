import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { CtaBanner } from "components/cta-banner";
import { SignupClick } from "components/utils/signup-click";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Button } from "ui";

import { LogoSection } from "components/logos/logo-section";
import { SharedFeatures } from "../../solutions/shared-features";
import { technologyContent } from "../content";
import { TechnologyFeaturesSection } from "../technology-features-section";
import { FaqSection } from "components/faq-section";
import { Hero } from "components/hero/hero";
import { BigDemoIllustration } from "components/main-illustration/big-demo-illustration";

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

      <FaqSection
        questions={content.faqs}
        title="Frequently asked questions"
        pageUrl={`/technology/${content.slug}`}
      />

      <CtaBanner title={content.ctaBanner.title} description={content.ctaBanner.description} />
    </>
  );
}

export function generateStaticParams(): Params[] {
  return technologyContent.map((content) => ({ slug: content.slug }));
}
