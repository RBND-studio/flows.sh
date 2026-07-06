import { Box, Flex } from "@flows/styled-system/jsx";
import type { SectionBaseProps } from "components/ui/section";
import { Section } from "components/ui/section";
import { type ReactElement, type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  eyebrow?: ReactNode;
} & SectionBaseProps;

export const Hero = ({
  title,
  description,
  actions,
  eyebrow,
  sideBorders,
  bottomBorder,
  decorator,
}: Props): ReactElement => {
  return (
    <Section
      display="flex"
      flexDirection="column"
      gap="space16"
      py="space40"
      md={{ py: "space80" }}
      alignItems="center"
      sideBorders={sideBorders}
      bottomBorder={bottomBorder}
      decorator={decorator}
      px="space20"
    >
      <Box>{eyebrow}</Box>
      <Flex flexDirection="column" gap="space24" alignItems="center">
        <Text as="h1" variant="title5xl" align="center">
          {title}
        </Text>
        <Text
          maxWidth="680px"
          color="fg.neutral.muted"
          variant="bodyL"
          align="center"
          textWrap="balance"
        >
          {description}
        </Text>
        {actions ? (
          <Flex justifyContent="center" gap="space12" width="100%" flexWrap="wrap">
            {actions}
          </Flex>
        ) : null}
      </Flex>
    </Section>
  );
};
