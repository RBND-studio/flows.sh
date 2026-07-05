import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { links } from "lib/links";
import Link from "next/link";
import type { JSX } from "react";
import { routes } from "routes";
import { Text } from "ui";

export default function About(): JSX.Element {
  const textLink = css({
    textDecoration: "underline",
  });

  return (
    <>
      <Section bottomBorder sideBorders decorator="vertical">
        <Text
          variant="title4xl"
          as="h1"
          align="center"
          pt="space40"
          pb="space40"
          md={{ pt: "space80", pb: "space64" }}
        >
          Flows is reinventing the way people learn software
        </Text>
      </Section>
      <Section bottomBorder sideBorders decorator="split" sideDots>
        <Box
          maxWidth={720}
          py={{ base: "space24", md: "space40" }}
          px={{ base: "space24", md: "space40" }}
          mx="auto"
          backgroundColor="pane.bg.elevated"
          borderLeftWidth={{ base: 0, md: 1 }}
          borderRightWidth={{ base: 0, md: 1 }}
          borderColor="border.neutral"
        >
          <Text variant="titleXl" align="center" mb="space24">
            Principles we use to build Flows
          </Text>
          <Text variant="titleL" mb="space4">
            Speed
          </Text>
          <Text mb="space24" variant="bodyM" color="fg.neutral.muted">
            Flows should be easy to create and deploy. There shouldn’t be any unnecessary dead time
            before an onboarding flow shows up to the user after a page loads.
          </Text>
          <Text variant="titleL" mb="space4">
            Flexibility
          </Text>
          <Text mb="space24" variant="bodyM" color="fg.neutral.muted">
            There shouldn’t be any limits to what you can do with Flows. You should be able to
            create any experience you can imagine.
          </Text>
          <Text variant="titleL" mb="space4">
            Reliability
          </Text>
          <Text mb="space24" variant="bodyM" color="fg.neutral.muted">
            Flows should work every time. They should be robust and resilient to any changes in the
            underlying product.
          </Text>
          <Text variant="titleL" mb="space4">
            Design
          </Text>
          <Text mb="space32" variant="bodyM" color="fg.neutral.muted">
            Flows should have superior UX with beautiful UI. They should be a pleasure to create and
            a joy to experience
          </Text>
          <Text color="fg.neutral.subtle" align="center">
            Learn more about why we created Flows in our blog post{" "}
            <Link className={textLink} href={routes.blogPostDetail({ postId: "announcing-flows" })}>
              Announcing Flows
            </Link>
          </Text>
        </Box>
      </Section>
      <Section py="space80" bottomBorder sideBorders>
        <Text maxWidth={720} mx="auto" variant="bodyM" align="center" color="fg.neutral.muted">
          Flows is made by{" "}
          <a target="_blank" className={textLink} href={links.rbnd} rel="noopener">
            RBND studio
          </a>
          . A small team of developers and designers who love creating tools for product people.
          Some of our other projects are{" "}
          <a href="https://atmos.style" className={textLink} target="_blank" rel="noopener">
            Atmos
          </a>{" "}
          and{" "}
          <a href="https://fig-stats.com" className={textLink} target="_blank" rel="noopener">
            Fig Stats
          </a>
        </Text>
      </Section>
    </>
  );
}
