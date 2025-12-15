import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ArrowLeft16 } from "icons";
import { getWebMetadata } from "lib/get-metadata";
import { importGlossaryPost, scanGlossaryFiles } from "lib/mdx";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Text } from "ui";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const post = await importGlossaryPost(`glossary/${slug}.mdx`);

  if (!post) return notFound();

  return getWebMetadata({
    title: post.title,
    description: post.description,
    openGraphType: "article",
    pageCategory: "Product Adoption Glossary",
  });
}

export async function generateStaticParams(): Promise<Params[]> {
  const glossaryFiles = await scanGlossaryFiles();

  return glossaryFiles.map((filename) => {
    const slug = filename.split(".")[0];
    return { slug };
  });
}

export default async function GlossaryPostPage(props: Props): Promise<ReactNode> {
  const params = await props.params;
  const slug = params.slug;
  const post = await importGlossaryPost(`glossary/${slug}.mdx`);

  if (!post) return notFound();

  return (
    <Box maxWidth={720} mx="auto" my={{ base: "space40", md: "space80" }}>
      <Flex
        alignItems="center"
        flexDirection="column"
        mb="space120"
        pb="space64"
        position="relative"
        bg="pane.bg.secondary"
      >
        <Link
          className={css({
            textStyle: "bodyXs",
            color: "newFg.neutral.muted",
            display: "flex",
            alignItems: "center",
            gap: "space4",
            width: "fit-content",
            mb: "space12",
            textTransform: "uppercase",
            _hover: {
              "& svg": {
                transform: "translateX(-4px)",
              },
            },
            "& svg": {
              fastEaseInOut: "transform",
            },
          })}
          href={routes.glossary}
        >
          <ArrowLeft16 />
          Glossary Index
        </Link>

        <Text
          as="h1"
          className={css({
            mb: "space16",
          })}
          variant="title4xl"
          textAlign="center"
        >
          {post.title}
        </Text>
        <Text
          as="p"
          variant="bodyL"
          textAlign="center"
          textWrap="balance"
          color="newFg.neutral.muted"
        >
          {post.description}
        </Text>
        <Line />
        <Glow />
      </Flex>

      <post.Mdx />
    </Box>
  );
}

const Glow = (): ReactNode => {
  // Box in a box to have better control over the opacity when theming
  return (
    <Box
      aria-hidden="true"
      position="absolute"
      bottom="0px"
      left="50%"
      transform="translateX(-50%)"
      height={48}
      zIndex={-1}
      width="75%"
    >
      <Box
        aria-hidden="true"
        background="#067EFD"
        width="100%"
        borderRadius="100%"
        height={48}
        filter="blur(48px)"
        opacity={0.4}
        _dark={{
          opacity: 0.7,
        }}
      />
    </Box>
  );
};

const Line = (): ReactNode => {
  return (
    <Box
      aria-hidden="true"
      h={1}
      w="90%"
      left="50%"
      bottom={-1}
      zIndex={10}
      position="absolute"
      background="linear-gradient(90deg, transparent, #067EFD 50%, transparent)"
      transform="translateX(-50%)"
    />
  );
};
