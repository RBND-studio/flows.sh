import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { AiDropdown } from "components/ai-dropdown";
import { CopyMarkdown } from "components/copy-markdown";
import { DocsImage } from "components/docs-image";
import { DocsLink } from "components/docs-link";
import { DocsTable } from "components/docs-table";
import { DocsTab, DocsTabs } from "components/docs-tabs";
import { H2, H3, H4 } from "components/docs-typography";
import { getGithubLastEdit } from "fumadocs-core/content/github";
import defaultMdxComponents from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  type DocsPageProps,
  DocsTitle,
} from "fumadocs-ui/page";
import { DOMAIN, GH_ACCESS_TOKEN, PRODUCTION } from "lib/constants";
import { links } from "lib/links";
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

  const githubOptions: DocsPageProps["editOnGithub"] = {
    owner: "RBND-studio",
    repo: "flows.sh",
    sha: "main",
    path: `apps/docs/src/content/${page.path}`,
  };
  const markdownUrl = (() => {
    const url = page.url === "/" ? "/index" : page.url;
    return `/docs${url}.mdx`;
  })();
  const githubUrl = `https://github.com/${githubOptions.owner}/${githubOptions.repo}/blob/${githubOptions.sha}/${githubOptions.path}`;

  const time = await getGithubLastEdit({
    ...githubOptions,
    token: `Bearer ${GH_ACCESS_TOKEN}`,
  });

  // Use pageTitle if available, otherwise fallback to title
  const pageTitle = page.data.pageTitle ?? page.data.title;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} lastUpdate={time ? time : undefined}>
      <DocsTitle>{pageTitle}</DocsTitle>
      <DocsDescription
        className={css({
          marginBottom: "space8!",
        })}
      >
        {page.data.description}
      </DocsDescription>
      <Box display="flex" borderBottomWidth="1px" paddingBottom="space24">
        <CopyMarkdown markdownUrl={markdownUrl} />
        <AiDropdown markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </Box>
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
  const isHomePage = page.url === "/";

  // Use pageTitle if available, otherwise fallback to title
  const pageTitle = page.data.pageTitle ?? page.data.title;

  return {
    metadataBase: new URL(`https://${DOMAIN}/docs`),
    title: `${pageTitle} – Flows Docs`,
    description: page.data.description,
    openGraph: {
      title: `${pageTitle} – Flows Docs`,
      description: page.data.description,
      url: "./",
      type: "article",
      locale: "en_US",
      siteName: "Flows",
      images: [
        {
          url: links.ogImage({ title: pageTitle, type: "Docs" }),
          width: 1200,
          height: 630,
          alt: pageTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.data.title} – Flows Docs`,
      description: page.data.description,
      images: [
        {
          url: links.ogImage({ title: pageTitle, type: "Docs" }),
          width: 1200,
          height: 630,
          alt: pageTitle,
          type: "image/png",
        },
      ],
      creator: "@flows_sh",
    },
    alternates: {
      // For some reason "./" adds a trailing slash to the /docs homepage URL, so we use "." there
      canonical: isHomePage ? "." : "./",
    },
    keywords: ["flows", "onboarding", "product adoption", "user onboarding", "user adoption"],
    robots: PRODUCTION ? undefined : "noindex,nofollow",
  };
}
