import { CtaBanner } from "components/cta-banner";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";

import { examplesContent } from "../content";
import { Embed } from "../embed";
import { ExampleHeader } from "../example-header";
import { Readme } from "../readme";
import { Suggestions } from "../suggestions";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = examplesContent.find((c) => c.slug === slug);

  if (!content) return notFound();

  return getWebMetadata({
    title: content.title,
    description: content.description,
    pageCategory: "Example",
  });
}

export default async function ExampleDetailPage({ params }: Props): Promise<ReactNode> {
  const { slug } = await params;
  const content = examplesContent.find((c) => c.slug === slug);

  if (!content) return notFound();

  return (
    <>
      <ExampleHeader title={content.title} description={content.description} />
      <Embed {...content.embed} />
      <Readme readme={content.readme} sidebar={content.sidebar} />
      <Suggestions slug={content.slug} />
      <CtaBanner />
    </>
  );
}

export function generateStaticParams(): Params[] {
  return examplesContent.map((content) => ({ slug: content.slug }));
}
