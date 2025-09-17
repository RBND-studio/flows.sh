import { Mdx } from "components";
import { ChangelogItem } from "components/changelog";
import { allReleases } from "contentlayer/generated";
import type { ReactElement } from "react";

const Page = (): ReactElement => {
  return (
    <>
      {[...allReleases]
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((release) => (
          <ChangelogItem
            key={release.slug}
            title={release.title}
            description={release.description}
            slug={release.slug}
            slugAsParams={release.slugAsParams}
            date={release.date}
            mdx={<Mdx code={release.body.code} />}
          />
        ))}
    </>
  );
};

export default Page;
