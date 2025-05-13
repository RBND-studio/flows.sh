import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { type ReactElement, type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  eyebrow?: ReactNode;
};

export const Hero = ({ title, description, actions, eyebrow }: Props): ReactElement => {
  return (
    <Section
      display="flex"
      flexDirection="column"
      gap="space8"
      py="space40"
      md={{ py: "space80" }}
      alignItems="center"
    >
      {eyebrow}
      <Flex flexDirection="column" gap="space24" alignItems="center">
        <Text as="h1" variant="title5xl" animation="topSlideIn 0.6s ease-out" align="center">
          {title}
        </Text>
        <Text
          maxWidth="580px"
          opacity={0}
          animation="topSlideIn 0.6s ease-out"
          animationDelay="0.3s"
          animationFillMode="forwards"
          color="newFg.neutral.muted"
          variant="bodyL"
          align="center"
          textWrap="balance"
        >
          {description}
        </Text>
        {actions ? (
          <Flex
            justifyContent="center"
            gap="space12"
            width="100%"
            opacity={0}
            animation="topSlideIn 0.6s ease-out"
            animationDelay="0.6s"
            animationFillMode="forwards"
          >
            {actions}
          </Flex>
        ) : null}
      </Flex>
    </Section>
  );
};
