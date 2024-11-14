import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import Link from "next/link";
import { routes } from "routes";
import { links } from "shared";
import { Text } from "ui";

export default function About(): JSX.Element {
  const textLink = css({
    textDecoration: "underline",
  });

  return (
    <>
      <Section>
        <Text
          variant="title4xl"
          as="h1"
          align="center"
          pt="space40"
          pb="space40"
          md={{ pt: "space80", pb: "space64" }}
        >
          Flows is reinventing the way users learn software
        </Text>
      </Section>
      <Section maxWidth="720px!" linesWrapper>
        <Box
          borderLeftWidth="1px"
          borderLeftColor="newBorder.neutral"
          borderRightWidth="1px"
          borderRightColor="newBorder.neutral"
          p="space12"
          layerStyle="dotBackground"
          md={{
            p: "space24",
          }}
        >
          <Box
            py="24"
            px="space24"
            backgroundColor="pane.bg.elevated"
            borderColor="pane.border.elevated"
            borderWidth="1px"
            borderRadius="radius8"
            shadow="newL1"
            md={{
              py: "space32",
              px: "space40",
            }}
          >
            <Text variant="titleXl" align="center" mb="space24">
              Principles we use to build Flows
            </Text>
            <Text variant="titleL" mb="space4">
              Speed
            </Text>
            <Text mb="space24" variant="bodyM" color="muted">
              Flows should be easy to create and deploy. There shouldn’t be any unnecessary dead
              time before an onboarding flow shows up to the user after a page loads.
            </Text>
            <Text variant="titleL" mb="space4">
              Flexibility
            </Text>
            <Text mb="space24" variant="bodyM" color="muted">
              There shouldn’t be any limits to what you can do with Flows. You should be able to
              create any experience you can imagine.
            </Text>
            <Text variant="titleL" mb="space4">
              Reliability
            </Text>
            <Text mb="space24" variant="bodyM" color="muted">
              Flows should work every time. They should be robust and resilient to any changes in
              the underlying product.
            </Text>
            <Text variant="titleL" mb="space4">
              Design
            </Text>
            <Text mb="space32" variant="bodyM" color="muted">
              Flows should have superior UX with beautiful UI. They should be a pleasure to create
              and a joy to experience
            </Text>
            <Text color="subtle" align="center">
              Learn more about why we created Flows in our blog post{" "}
              <Link
                className={textLink}
                href={routes.blogPostDetail({ postId: "announcing-flows" })}
              >
                Announcing Flows
              </Link>
            </Text>
          </Box>
        </Box>
      </Section>
      <Section maxWidth="720px!" py="space80">
        <Text mb="space24" variant="bodyM" align="center" color="muted">
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
