import { css } from "@flows/styled-system/css";
import { BlogPostPreview } from "components/blog/blog-post-preview";
import { Section } from "components/ui/section";
import { getWebMetadata } from "lib/get-metadata";
import { importAllBlogPosts } from "lib/mdx";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Blog",
  description:
    "Flows blog with news, guides and development updates. Stay up to date with the latest news from Flows and learn more about product adoption.",
});

export default async function BlogPage(): Promise<ReactElement> {
  const allPosts = await importAllBlogPosts();

  return (
    <>
      <Section
        sideBorders
        pt={{ base: "space40", md: "space80" }}
        pb={{ base: "space32", md: "space64" }}
        px={{ base: "space24", md: "space40" }}
        bottomBorder
        decorator="vertical"
      >
        <Text as="h1" variant="title4xl">
          Blog
        </Text>
      </Section>
      <Section p={{ base: "space8", md: "space40" }} sideBorders bottomBorder>
        <ul
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: "space32",
          })}
        >
          {allPosts.map((post) => (
            <BlogPostPreview
              key={post.slug}
              title={post.title}
              description={post.description}
              imageAlt={post.imageAlt}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </ul>
      </Section>
    </>
  );
}
