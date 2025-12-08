import { css } from "@flows/styled-system/css";
import { GlossaryPostPreview } from "app/glossary/glossary-post-preview";
import { Section } from "components/ui";
import { Book16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { importAllGlossaryPosts } from "lib/mdx";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { FancyIcon, Icon, Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Product Adoption Glossary",
  description:
    "Clear and simple definitions of the terms every developer, designer, and product manager needs to know about product adoption and user onboarding.",
});

export default async function GlossaryPage(): Promise<ReactNode> {
  const allPosts = await importAllGlossaryPosts();

  return (
    <>
      <Section maxWidth="720px!" mt={{ base: "space40", md: "space80" }}>
        <FancyIcon
          className={css({ mx: "auto", mb: "space24", width: "48px", height: "48px" })}
          color="blue"
        >
          <Icon icon={Book16} color="inherit" />
        </FancyIcon>
        <Text as="h1" variant="title4xl" textAlign="center" mb="space16" maxWidth={600} mx="auto">
          Product Adoption Glossary
        </Text>
        <Text textAlign="center" variant="bodyL" color="newFg.neutral.muted">
          Clear and simple definitions of the terms every developer, designer, and product manager
          needs to know about product adoption and user onboarding.
        </Text>
      </Section>

      <Section
        maxWidth="800px!"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        borderRadius="radius8"
        mt="space40"
        mb="space80"
        md={{ mt: "space80", mb: "space120" }}
        overflow="hidden"
        bg="pane.bg.elevated"
        shadow="antimetal"
      >
        <ul>
          {allPosts.map((post) => (
            <GlossaryPostPreview key={post.slug} post={post} />
          ))}
        </ul>
      </Section>
    </>
  );
}
