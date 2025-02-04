import { DocsImage } from "components/docs-image";
import { DocsLink } from "components/docs-link";
import { DocsTable } from "components/docs-table";
import { DocsTab, DocsTabs } from "components/docs-tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { source } from "lib/source";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";

type Params = { slug?: string[] };

export default async function Page(props: { params: Promise<Params> }): Promise<ReactNode> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const Mdx = page.data.body;

  return (
    <DocsPage
      // TODO: add this back after we release the new version
      // editOnGithub={{
      //   owner: "RBND-studio",
      //   repo: "flows.sh",
      //   sha: "main",
      //   path: `apps/docs/src/content/docs/${page.file.path}.mdx`,
      // }}
      toc={page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <Mdx
          components={{
            ...defaultMdxComponents,
            img: DocsImage,
            a: DocsLink,
            Tab: DocsTab,
            Tabs: DocsTabs,
            table: DocsTable,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

// eslint-disable-next-line @typescript-eslint/require-await -- needs to be async
export async function generateStaticParams(): Promise<Params[]> {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
