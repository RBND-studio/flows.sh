import { ChangelogItem } from "components/changelog/changelog-item";
import { importAllChangelogPosts } from "lib/mdx";
import { priorityCoverComponents } from "mdx-components";
import type { ReactElement } from "react";

export default async function ChangelogPage(): Promise<ReactElement> {
  const allReleases = await importAllChangelogPosts();

  return (
    <>
      {allReleases.map((release, index) => (
        <ChangelogItem
          key={release.slug}
          slug={release.slug}
          title={release.title}
          description={release.description}
          date={release.date}
          // Only the latest release is above the fold
          mdx={<release.Mdx components={index === 0 ? priorityCoverComponents : undefined} />}
        />
      ))}
    </>
  );
}
