import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { ZoomableImage } from "components/ui";
import { getWebMetadata } from "lib/get-metadata";
import { importBlogPost, scanBlogFiles } from "lib/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { Text } from "ui";

type Params = {
  slug: string;
};

interface PostProps {
  params: Promise<Params>;
}

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const post = await importBlogPost(`blog/${slug}.mdx`);

  if (!post) return notFound();

  return getWebMetadata({
    title: post.title,
    description: post.description,
    openGraphType: "article",
    pageCategory: "Blog",
    images: post.image
      ? [
          {
            url: post.image,
            alt: post.title,
          },
        ]
      : undefined,
  });
}

export async function generateStaticParams(): Promise<Params[]> {
  const blogFiles = await scanBlogFiles();

  return blogFiles.map((filename) => {
    const slug = filename.split(".")[0];
    return { slug };
  });
}

export default async function BlogDetailPage(props: PostProps): Promise<ReactElement> {
  const params = await props.params;
  const slug = params.slug;
  const post = await importBlogPost(`blog/${slug}.mdx`);

  if (!post) return notFound();

  const date = new Date(post.date);

  return (
    <article
      className={css({
        maxWidth: "720px",
        mx: "auto",
        px: "space24",
        my: "space40",
        md: {
          my: "space80",
        },
      })}
    >
      <Box mb="space48">
        <Text
          as="h1"
          className={css({
            mb: "space16",
          })}
          variant="title4xl"
        >
          {post.title}
        </Text>
        <Text as="p" variant="bodyL">
          {post.description}
        </Text>

        {post.image ? (
          <ZoomableImage
            alt={post.imageAlt ?? "Blog post cover image"}
            height={600}
            src={post.image}
            width={1200}
            priority
            className={css({
              borderRadius: "radius8",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "newBorder.neutral",
              mt: "space32",
            })}
          />
        ) : null}
        <Text className={css({ mt: "space16" })} color="newFg.neutral.subtle" variant="bodyM">
          <span>{post.author}</span>
          <span>{` • `}</span>
          <span>
            {date.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" })}
          </span>
        </Text>
      </Box>
      <post.Mdx />
    </article>
  );
}
