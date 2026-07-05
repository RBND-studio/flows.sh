import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  illustration: ReactNode;
};

export const HorizontalHero = ({
  eyebrow,
  title,
  description,
  actions,
  illustration,
}: Props): ReactNode => {
  return (
    <Section
      display="flex"
      py="space64"
      gap="space24"
      md={{ py: "space160" }}
      mdDown={{ flexDirection: "column" }}
    >
      <Flex
        gap="space24"
        flexDirection="column"
        flex={1}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        {eyebrow ? <Box>{eyebrow}</Box> : null}

        <Flex
          flexDirection="column"
          gap="space24"
          alignItems={{ base: "center", md: "flex-start" }}
          mb={{ base: "space48", md: 0 }}
        >
          <Text as="h1" variant="title3xl" textAlign={{ base: "center", md: "left" }}>
            {title}
          </Text>
          <Text
            maxWidth="580px"
            color="fg.neutral.muted"
            variant="bodyL"
            textWrap="balance"
            textAlign={{ base: "center", md: "left" }}
          >
            {description}
          </Text>

          {actions ? (
            <Flex width="100%" justifyContent={{ base: "center", md: "flex-start" }}>
              {actions}
            </Flex>
          ) : null}
        </Flex>
      </Flex>
      {illustration}
    </Section>
  );
};
