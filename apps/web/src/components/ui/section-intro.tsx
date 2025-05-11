import { cva, cx } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

import { Section } from "./section";

type Props = {
  title: ReactNode;
  description?: string;
  className?: string;
  compact?: boolean;
  actions?: ReactNode;
};

export const SectionIntro = ({
  title,
  description,
  className,
  compact,
  actions,
}: Props): ReactNode => {
  return (
    <Section className={cx(sectionIntroStyles({ compact }), className)}>
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
    mt: "space80",
    mb: "space40",
    md: {
      mt: "space160",
      mb: "space64",
    },
  },
  variants: {
    compact: {
      false: {},
      true: {
        mt: "space64",
        mb: "space32",
        md: {
          mt: "space80",
          mb: "56px",
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
          color="muted"
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
