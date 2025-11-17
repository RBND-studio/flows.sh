import { ChangelogItem } from "components/changelog";
import { importAllChangelogPosts } from "lib/mdx";
import type { ReactElement } from "react";

export default async function ChangelogPage(): Promise<ReactElement> {
  const allReleases = await importAllChangelogPosts();

  return (
    <>
      {allReleases.map((release) => (
        <ChangelogItem
          key={release.slug}
          slug={release.slug}
          title={release.title}
          description={release.description}
          date={release.date}
          mdx={<release.Mdx />}
        />
      ))}
    </>
  );
}
