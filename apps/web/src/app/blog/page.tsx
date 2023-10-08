import { BlogPostPreview } from "components/blog";
import { allPosts } from "contentlayer/generated";
import type { ReactElement } from "react";
import React from "react";

const Page = (): ReactElement => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPosts.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Page;
