import { Grid } from "@flows/styled-system/jsx";
import { ChangelogItem } from "components/changelog";
import { getWebMetadata } from "lib/get-metadata";
import { importAllChangelogPosts, importChangelogPost, scanChangelogFiles } from "lib/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";

import { ReleasePreview } from "./release-preview";

type Params = {
  slug: string;
};

interface ChangelogPageProps {
  params: Promise<Params>;
}

export async function generateMetadata(props: ChangelogPageProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const release = await importChangelogPost(`changelog/${slug}.mdx`);

  if (!release) return notFound();

  return getWebMetadata({
    title: release.title,
    description: release.description,
    pageCategory: "Changelog",
  });
}

export async function generateStaticParams(): Promise<Params[]> {
  const changelogFiles = await scanChangelogFiles();

  return changelogFiles.map((filename) => {
    const slug = filename.split(".")[0];
    return { slug };
  });
}

export default async function ChangelogDetailPage(
  props: ChangelogPageProps,
): Promise<ReactElement> {
  const params = await props.params;
  const slug = params.slug;
  const release = await importChangelogPost(`changelog/${slug}.mdx`);

  if (!release) return notFound();

  const allReleases = await importAllChangelogPosts();

  const currentReleaseIndex = allReleases.findIndex((r) => r.slug === release.slug);
  const nextRelease = currentReleaseIndex > 0 && allReleases.at(currentReleaseIndex - 1);
  const prevRelease = allReleases.at(currentReleaseIndex + 1);

  return (
    <>
      <ChangelogItem
        detail
        title={release.title}
        description={release.description}
        date={release.date}
        slug={slug}
        mdx={<release.Mdx />}
      />
      <Grid gap="space24" gridTemplateColumns="repeat(2, 1fr)" mt="space32">
        <div>{nextRelease ? <ReleasePreview variant="next" release={nextRelease} /> : null}</div>
        <div>{prevRelease ? <ReleasePreview variant="prev" release={prevRelease} /> : null}</div>
      </Grid>
    </>
  );
}
