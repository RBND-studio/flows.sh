import { cva, cx } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

import type { SectionProps } from "./section";
import { Section } from "./section";

type Props = {
  title: ReactNode;
  description?: string;
  className?: string;
  compact?: boolean;
  actions?: ReactNode;
} & SectionProps;

export const SectionIntro = ({
  title,
  description,
  className,
  compact,
  actions,
  sideBorders,
  bottomBorder,
  decorator,
}: Props): ReactNode => {
  return (
    <Section
      className={cx(sectionIntroStyles({ compact }), className)}
      sideBorders={sideBorders}
      bottomBorder={bottomBorder}
      decorator={decorator}
    >
      <SectionIntroTextOnly title={title} description={description} />
      {actions ? (
        <Flex
          justifyContent="center"
          gap="space16"
          mt="space24"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          {actions}
        </Flex>
      ) : null}
    </Section>
  );
};

const sectionIntroStyles = cva({
  base: {
    py: { base: "space64", md: "space120" },
  },
  variants: {
    compact: {
      false: {},
      true: {
        pt: "space64",
        pb: "space32",
        md: {
          pt: "space80",
          pb: "56px",
        },
      },
    },
  },
});

type SectionIntroTextOnlyProps = {
  title: ReactNode;
  description?: string;
  className?: string;
};

export const SectionIntroTextOnly = ({
  title,
  description,
  className,
}: SectionIntroTextOnlyProps): ReactNode => {
  return (
    <Box w="100%" className={className}>
      <Text as="h2" variant="title3xl" align="center">
        {title}
      </Text>
      {description ? (
        <Text
          maxWidth={680}
          variant="bodyL"
          color="fg.neutral.muted"
          mx="auto"
          mt="space16"
          textWrap="balance"
          align="center"
        >
          {description}
        </Text>
      ) : null}
    </Box>
  );
};
