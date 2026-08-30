import { css } from "@flows/styled-system/css";
import { BlogPostPreview } from "components/blog/blog-post-preview";
import { Section } from "components/ui/section";
import { SectionIntro } from "components/ui/section-intro";
import { type BlogPost, importAllBlogPosts } from "lib/mdx";
import { type ReactNode } from "react";

const SUGGESTION_COUNT = 3;

/**
 * Words that carry no topical meaning and would create noise in the relevance score.
 */
const STOP_WORDS = new Set([
  "and",
  "app",
  "are",
  "build",
  "can",
  "complete",
  "create",
  "flows",
  "for",
  "from",
  "guide",
  "how",
  "learn",
  "more",
  "not",
  "the",
  "them",
  "they",
  "this",
  "tutorial",
  "use",
  "using",
  "walk",
  "what",
  "when",
  "why",
  "with",
  "you",
  "your",
]);

const FIELD_WEIGHT = {
  slug: 3,
  title: 2,
  description: 1,
};

const tokenize = (value: string): string[] =>
  value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));

/**
 * Topical keywords of a post, each weighted by the most important field it appears in.
 */
const getKeywords = (post: BlogPost): Map<string, number> => {
  const keywords = new Map<string, number>();

  const add = (value: string, weight: number): void => {
    for (const word of tokenize(value)) {
      keywords.set(word, Math.max(keywords.get(word) ?? 0, weight));
    }
  };

  add(post.slug, FIELD_WEIGHT.slug);
  add(post.title, FIELD_WEIGHT.title);
  add(post.description, FIELD_WEIGHT.description);

  return keywords;
};

const getRelevance = (current: Map<string, number>, other: Map<string, number>): number => {
  let score = 0;
  for (const [word, weight] of current) {
    const otherWeight = other.get(word);
    if (otherWeight) score += weight * otherWeight;
  }
  return score;
};

type Props = {
  slug: string;
};

export const Suggestions = async ({ slug }: Props): Promise<ReactNode> => {
  const allPosts = await importAllBlogPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);
  if (currentIndex === -1) return null;

  const currentKeywords = getKeywords(allPosts[currentIndex]);

  /**
   * Posts published right after the current one come first when the relevance is equal. Series of
   * near identical posts (the per framework guides) score the same against each other, so without
   * this every one of them would suggest the same few newest posts and leave the rest without any
   * incoming links.
   */
  const distanceFromCurrent = (index: number): number =>
    (index - currentIndex + allPosts.length) % allPosts.length;

  const suggestions: BlogPost[] = allPosts
    .map((post, index) => ({
      post,
      index,
      score: getRelevance(currentKeywords, getKeywords(post)),
    }))
    .filter((entry) => entry.post.slug !== slug)
    .sort(
      (a, b) => b.score - a.score || distanceFromCurrent(a.index) - distanceFromCurrent(b.index),
    )
    .slice(0, SUGGESTION_COUNT)
    .map((entry) => entry.post);

  if (!suggestions.length) return null;

  return (
    <>
      <SectionIntro compact title="Keep reading" sideBorders />
      <Section
        px={{ base: "space16", md: "space40" }}
        pb={{ base: "space24", md: "space40" }}
        sideBorders
        bottomBorder
      >
        <ul
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: "space32",
          })}
        >
          {suggestions.map((post) => (
            <BlogPostPreview
              key={post.slug}
              title={post.title}
              description={post.description}
              imageAlt={post.imageAlt}
              image={post.image}
              slug={post.slug}
              headingLevel="h3"
            />
          ))}
        </ul>
      </Section>
    </>
  );
};
