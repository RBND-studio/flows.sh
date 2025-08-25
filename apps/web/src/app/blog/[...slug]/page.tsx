import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { ZoomableImage } from "components/ui";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { Text } from "ui";

import { Mdx } from "../../../components";

type Params = {
  slug: string[];
};

interface PostProps {
  params: Promise<Params>;
}

const getPostFromParams = (params: Params): Post | undefined => {
  const slug = params.slug.join("/");
  const postFromParams = allPosts.find((post) => post.slugAsParams === slug);

  if (!postFromParams) {
    null;
  }

  return postFromParams;
};

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const params = await props.params;
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

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

export function generateStaticParams(): Params[] {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage(props: PostProps): Promise<ReactElement> {
  const params = await props.params;
  const post = getPostFromParams(params);
  const date = post ? new Date(post.date) : new Date();

  if (!post) return notFound();

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
          <span>{` • `}</span>
          <span>{post.readingTimeText}</span>
        </Text>
      </Box>
      <Mdx code={post.body.code} />
    </article>
  );
}
