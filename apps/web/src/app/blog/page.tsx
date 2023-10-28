import { css } from "@flows/styled-system/css";
import { BlogPostPreview } from "components/blog";
import { allPosts } from "contentlayer/generated";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

const Page = (): ReactElement => {
  return (
    <div
      className={css({
        maxWidth: "720px",
        marginX: "auto",
      })}
    >
      <Text as="h1" variant="titleL">
        Blog
      </Text>
      <ul>
        {allPosts.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Page;
