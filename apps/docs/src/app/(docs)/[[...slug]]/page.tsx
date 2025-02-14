import { DocsImage } from "components/docs-image";
import { DocsLink } from "components/docs-link";
import { DocsTable } from "components/docs-table";
import { DocsTab, DocsTabs } from "components/docs-tabs";
import { H2, H3, H4 } from "components/docs-typography";
import { getGithubLastEdit } from "fumadocs-core/server";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { GH_ACCESS_TOKEN } from "lib/constants";
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

  const time = await getGithubLastEdit({
    owner: "RBND-studio",
    repo: "flows.sh",
    sha: "main",
    path: `apps/docs/src/content/${page.file.path}`,
    token: `Bearer ${GH_ACCESS_TOKEN}`,
  });

  return (
    <DocsPage
      editOnGithub={{
        owner: "RBND-studio",
        repo: "flows.sh",
        sha: "main",
        path: `apps/docs/src/content/${page.file.path}`,
      }}
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={time ? time : undefined}
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
            h2: H2,
            h3: H3,
            h4: H4,
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
    title: `${page.data.title} – Flows Docs`,
    description: page.data.description,
    openGraph: {
      title: `${page.data.title} – Flows Docs`,
      description: page.data.description,
      type: "website",
      url: `https://flows.sh/docs/${params.slug?.join("/")}`,
      images: [{ url: "https://flows.sh/docs/og.png" }],
    },
    twitter: {
      title: `${page.data.title} – Flows Docs`,
      description: page.data.description,
      card: "summary_large_image",
      images: [{ url: "https://flows.sh/docs/og.png" }],
    },
  };
}
