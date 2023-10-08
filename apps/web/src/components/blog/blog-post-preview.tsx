import type { Post } from "contentlayer/generated";
import type { ReactElement } from "react";
import React from "react";

type Props = {
  post: Post;
};

export const BlogPostPreview = ({ post }: Props): ReactElement => {
  return (
    <li key={post.slug}>
      <a href={`/blog/${post.slugAsParams}`}>
        {post.title} - {post.slugAsParams}
      </a>
    </li>
  );
};
