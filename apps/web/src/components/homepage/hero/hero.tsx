import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { type ReactElement, type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  title: ReactNode;
  description: string;
  actions?: ReactNode;
};

export const Hero = ({ title, description, actions }: Props): ReactElement => {
  return (
    <Section
      display="flex"
      flexDirection="column"
      gap="space24"
      py="space40"
      md={{ py: "space80" }}
      alignItems="center"
    >
      <Text as="h1" variant="title4xl" animation="topSlideIn 0.6s ease-out" align="center">
        {title}
      </Text>
      <Text
        maxWidth="580px"
        opacity={0}
        animation="topSlideIn 0.6s ease-out"
        animationDelay="0.3s"
        animationFillMode="forwards"
        color="muted"
        variant="bodyL"
        align="center"
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
    </Section>
  );
};
