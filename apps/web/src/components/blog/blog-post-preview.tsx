import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { Post } from "contentlayer/generated";
import { ArrowRight16 } from "icons";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { routes } from "routes";
import { Text } from "ui";

type Props = {
  post: Post;
};

export const BlogPostPreview = ({ post }: Props): ReactElement => {
  const href = routes.blogPostDetail({ postId: post.slugAsParams });

  return (
    <li
      className={css({
        pt: "space40",
        pb: "space40",
        px: "space24",
      })}
      key={post.slug}
    >
      <Box maxWidth={720} mx="auto">
        {post.image ? (
          <Link href={href}>
            <Image
              // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- or is better here
              alt={post.imageAlt || "Blog post cover image"}
              className={css({
                borderRadius: "radius8",
                mb: "space16",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "border.strong",
              })}
              height={600}
              src={post.image}
              width={1200}
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </Link>
        ) : null}

        <Text
          as="h2"
          mb="space8"
          variant="titleXl"
          _hover={{ color: "newFg.primary" }}
          fastEaseInOut="color"
        >
          <Link href={href}>{post.title}</Link>
        </Text>
        <Text as="p" mb="space12" variant="bodyM" color="newFg.neutral.muted">
          {post.description}
        </Text>
        <Link
          className={css({
            textStyle: "titleL",
            color: "newFg.neutral",
            display: "flex",
            alignItems: "center",
            gap: "space4",
            _hover: {
              "& svg": {
                transform: "translateX(4px)",
              },
            },
            "& svg": {
              fastEaseInOut: "transform",
            },
          })}
          href={href}
        >
          Read more
          <ArrowRight16 />
        </Link>
      </Box>
    </li>
  );
};
