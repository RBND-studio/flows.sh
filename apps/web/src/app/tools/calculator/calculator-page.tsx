import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { CtaBanner } from "components/cta-banner";
import { FaqSection } from "components/faq-section";
import { Section } from "components/ui/section";
import { type JSX } from "react";
import { Text } from "ui";

import { ToolHeader } from "../tool-header";
import type { CalculatorPageContent } from "./types";

export const CalculatorPage = ({
  bands,
  formatValue,
  pageUrl,
  title,
  description,
  calculator,
  explainer,
  benchmarks,
  faqTitle,
  faqs,
  cta,
}: CalculatorPageContent): JSX.Element => {
  return (
    <>
      <ToolHeader title={title} description={description} />

      <Section
        sideBorders
        bottomBorder
        py={{ base: "space24", md: "space40" }}
        px={{ base: "space24", md: "space40" }}
      >
        {calculator}
      </Section>

      <Section
        sideBorders
        bottomBorder
        decorator="vertical"
        py={{ base: "space40", md: "space64" }}
        px={{ base: "space24", md: "space40" }}
      >
        <Text variant="title2xl" as="h2" mb="space12">
          {explainer.title}
        </Text>
        <Text variant="bodyL" color="fg.neutral.muted" maxWidth={720} mb="space32">
          {explainer.intro}
        </Text>

        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="space16"
          mb="space32"
        >
          {explainer.steps.map((step, index) => (
            <Box
              key={step.title}
              borderWidth={1}
              borderColor="border.neutral.placeholder"
              borderRadius="radius12"
              padding="space20"
              bg="pane.bg.elevated"
            >
              <Text variant="bodyXxs" color="fg.neutral.subtle" mb="space6">
                STEP {index + 1}
              </Text>
              <Text variant="titleM" as="h3" mb="space6">
                {step.title}
              </Text>
              <Text variant="bodyS" color="fg.neutral.muted">
                {step.description}
              </Text>
            </Box>
          ))}
        </Grid>

        <Flex
          flexDirection="column"
          alignItems="center"
          gap="space8"
          borderWidth={1}
          borderColor="border.neutral.placeholder"
          borderRadius="radius12"
          bg="bg.neutral.muted"
          padding={{ base: "space20", md: "space32" }}
        >
          <Text variant="bodyS" color="fg.neutral.subtle">
            The formula
          </Text>
          <Text variant="titleXl" as="p" align="center" textWrap="balance">
            {explainer.formula.expression}
          </Text>
          <Text variant="bodyM" color="fg.neutral.muted" align="center" textWrap="balance">
            {explainer.formula.note}
          </Text>
        </Flex>

        <Text
          variant="bodyS"
          color="fg.neutral.muted"
          mt="space24"
          maxWidth={840}
          mx="auto"
          textAlign="center"
          textWrap="balance"
        >
          {explainer.footnote}
        </Text>
      </Section>

      <Section
        sideBorders
        bottomBorder
        py={{ base: "space40", md: "space64" }}
        px={{ base: "space24", md: "space40" }}
      >
        <Text variant="title2xl" as="h2" mb="space12">
          {benchmarks.title}
        </Text>
        <Text variant="bodyL" color="fg.neutral.muted" maxWidth={720} mb="space32">
          {benchmarks.intro}
        </Text>

        <Box
          borderWidth={1}
          borderColor="border.neutral.placeholder"
          borderRadius="radius12"
          overflow="hidden"
        >
          {bands.map((band) => (
            <Flex
              key={band.label}
              alignItems={{ base: "flex-start", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              gap={{ base: "space4", sm: "space16" }}
              padding="space16"
              borderTopWidth={1}
              borderTopColor="border.neutral"
              _first={{ borderTopWidth: 0 }}
              bg="pane.bg.elevated"
            >
              <Flex alignItems="center" gap="space8" width={{ base: "auto", sm: "180px" }}>
                <Box
                  width="8px"
                  height="8px"
                  borderRadius="radius100"
                  flexShrink={0}
                  style={{ backgroundColor: band.color }}
                />
                <Text variant="titleM" as="h3">
                  {band.label}
                </Text>
              </Flex>
              <Text
                variant="bodyS"
                color="fg.neutral.muted"
                width={{ base: "auto", sm: "150px" }}
                fontVariantNumeric="tabular-nums"
              >
                From {formatValue(band.from)} to {formatValue(band.to)}
              </Text>
              <Text variant="bodyS" color="fg.neutral.muted" flex={1}>
                {band.description}
              </Text>
            </Flex>
          ))}
        </Box>
      </Section>

      <FaqSection questions={faqs} title={faqTitle} pageUrl={pageUrl} />

      <CtaBanner title={cta.title} description={cta.description} />
    </>
  );
};
