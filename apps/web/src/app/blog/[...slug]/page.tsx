import { css } from "@flows/styled-system/css";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { Text } from "ui";

import { Mdx } from "../../../components";

interface PostProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = (params: PostProps["params"]): Promise<Post | undefined> => {
  const slug = params.slug.join("/");
  const postFromParams = allPosts.find((post) => post.slugAsParams === slug);

  if (!postFromParams) {
    null;
  }

  return Promise.resolve(postFromParams);
};

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// eslint-disable-next-line @typescript-eslint/require-await -- required for nextjs
export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps): Promise<ReactElement> {
  const post = await getPostFromParams(params);
  const date = post ? new Date(post.date) : new Date();

  if (!post) {
    notFound();
  }

  return (
    <article
      className={css({
        maxWidth: "720px",
        marginTop: "space48",
        marginX: "auto",
      })}
    >
      <div
        className={css({
          mb: "space48",
        })}
      >
        <Text
          as="h1"
          className={css({
            mb: "space16",
          })}
          variant="titleL"
        >
          {post.title}
        </Text>
        <Text as="p" variant="bodyL">
          {post.description}
        </Text>

        {post.image ? (
          <div className="">
            <Image
              alt={post.title}
              className={css({
                borderRadius: "radius12",
                mt: "space32",
              })}
              height={600}
              priority
              src={post.image}
              width={1200}
            />
          </div>
        ) : null}
        <Text className={css({ mt: "space16" })} color="subtle" variant="bodyM">
          <span>
            {date.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <span>{` • `}</span>
          <span>{post.readingTimeText}</span>
        </Text>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
}
