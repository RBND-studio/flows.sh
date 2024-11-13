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

const getPostFromParams = (params: PostProps["params"]): Post | undefined => {
  const slug = params.slug.join("/");
  const postFromParams = allPosts.find((post) => post.slugAsParams === slug);

  if (!postFromParams) {
    null;
  }

  return postFromParams;
};

export function generateMetadata({ params }: PostProps): Metadata {
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Flows Blog`,
    description: post.description,
    openGraph: {
      type: "article",
      title: `${post.title} | Flows Blog`,
      description: post.description,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- or is better here
      images: post.image || "/og.png",
      locale: "en_US",
      url: `/blog/${params.slug.join("/")}`,
    },
    twitter: {
      title: `${post.title} | Flows Blog`,
      description: post.description,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- or is better here
      images: post.image || "/og.png",
    },
  };
}

export function generateStaticParams(): PostProps["params"][] {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function PostPage({ params }: PostProps): ReactElement {
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
          variant="title4xl"
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
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "border.strong",
              })}
              height={600}
              priority
              src={post.image}
              width={1200}
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        ) : null}
        <Text className={css({ mt: "space16" })} color="subtle" variant="bodyM">
          <span>{post.author}</span>
          <span>{` • `}</span>
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
