import { css } from "@flows/styled-system/css";
import { BlogPostPreview } from "components/blog";
import { Section } from "components/ui";
import { allPosts } from "contentlayer/generated";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Blog",
  description:
    "Flows blog with news, guides and development updates. Stay up to date with the latest news from Flows and learn more about product adoption.",
});

const Page = (): ReactElement => {
  return (
    <>
      <Section maxWidth="720px!">
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
            <BlogPostPreview
              key={post.slug}
              title={post.title}
              description={post.description}
              imageAlt={post.imageAlt}
              image={post.image}
              slug={post.slug}
              slugAsParams={post.slugAsParams}
            />
          ))}
      </ul>
    </>
  );
};

export default Page;
