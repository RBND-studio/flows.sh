import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { GlossaryPostPreview } from "app/glossary/glossary-post-preview";
import { Section } from "components/ui/section";
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
      <Section
        sideBorders
        bottomBorder
        decorator="vertical"
        pt={{ base: "space40", md: "space80" }}
        px="space24"
        pb="space40"
      >
        <FancyIcon
          className={css({ mx: "auto", mb: "space24", width: "48px", height: "48px" })}
          color="blue"
        >
          <Icon icon={Book16} color="inherit" />
        </FancyIcon>
        <Text as="h1" variant="title4xl" textAlign="center" mb="space16" maxWidth={600} mx="auto">
          Product Adoption Glossary
        </Text>
        <Text textAlign="center" variant="bodyL" color="fg.neutral.muted" maxWidth={720} mx="auto">
          Clear and simple definitions of the terms every developer, designer, and product manager
          needs to know about product adoption and user onboarding.
        </Text>
      </Section>

      <Section sideBorders bottomBorder p={{ base: "space8", md: "space40" }}>
        <Box
          as="ul"
          borderWidth={1}
          borderColor="border.neutral.placeholder"
          borderRadius="radius12"
          overflow="hidden"
          bg="pane.bg.elevated"
          shadow="antimetal"
          mx="auto"
        >
          {allPosts.map((post) => (
            <GlossaryPostPreview key={post.slug} post={post} />
          ))}
        </Box>
      </Section>
    </>
  );
}
