import { Grid } from "@flows/styled-system/jsx";
import { Mdx } from "components";
import { ChangelogItem } from "components/changelog";
import type { Release } from "contentlayer/generated";
import { allReleases } from "contentlayer/generated";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";

import { ReleasePreview } from "./release-preview";

type Params = {
  slug: string[];
};

interface ReleaseProps {
  params: Promise<Params>;
}

const getReleaseFromParams = (params: Params): Release | undefined => {
  const slug = params.slug.join("/");
  const releaseFromParams = allReleases.find((release) => release.slugAsParams === slug);

  if (!releaseFromParams) {
    null;
  }

  return releaseFromParams;
};

export async function generateMetadata(props: ReleaseProps): Promise<Metadata> {
  const params = await props.params;
  const release = getReleaseFromParams(params);

  if (!release) {
    return {};
  }

  return getWebMetadata({
    title: release.title,
    description: release.description,
    pageCategory: "Changelog",
  });
}

export function generateStaticParams(): Params[] {
  return allReleases.map((release) => ({
    slug: release.slugAsParams.split("/"),
  }));
}

export default async function ReleasePage(props: ReleaseProps): Promise<ReactElement> {
  const params = await props.params;
  const release = getReleaseFromParams(params);

  if (!release) return notFound();

  const currentReleaseIndex = allReleases.findIndex((r) => r._id === release._id);
  const prevRelease = currentReleaseIndex > 0 && allReleases.at(currentReleaseIndex - 1);
  const nextRelease = allReleases.at(currentReleaseIndex + 1);

  return (
    <>
      <ChangelogItem
        detail
        title={release.title}
        description={release.description}
        slug={release.slug}
        slugAsParams={release.slugAsParams}
        date={release.date}
        mdx={<Mdx code={release.body.code} />}
      />
      <Grid gap="space24" gridTemplateColumns="repeat(2, 1fr)" mt="space32">
        <div>{nextRelease ? <ReleasePreview variant="next" release={nextRelease} /> : null}</div>
        <div>{prevRelease ? <ReleasePreview variant="prev" release={prevRelease} /> : null}</div>
      </Grid>
    </>
  );
}
