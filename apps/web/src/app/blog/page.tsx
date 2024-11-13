import { css } from "@flows/styled-system/css";
import { BlogPostPreview } from "components/blog";
import { Section } from "components/ui";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

export const metadata: Metadata = {
  title: "Blog - Flows",
};

const Page = (): ReactElement => {
  return (
    <>
      <Section maxWidth="720px">
        <Text as="h1" variant="title4xl" mt="space40" md={{ mt: "space80" }}>
          Blog
        </Text>
      </Section>
      <ul
        className={css({
          mb: "space40",
          md: {
            mb: "space80",
          },
        })}
      >
        {[...allPosts]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((post) => (
            <BlogPostPreview key={post.slug} post={post} />
          ))}
      </ul>
    </>
  );
};

export default Page;
