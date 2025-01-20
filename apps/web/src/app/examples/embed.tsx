import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { type FC } from "react";
import { Text } from "ui";

export type EmbedProps = {
  src: string;
  title: string;
};

export const Embed: FC<EmbedProps> = ({ src, title }) => {
  return (
    <Section
      linesWrapper
      linesWrapperClassName={css({
        layerStyle: "dotBackground",
      })}
    >
      <Flex
        borderWidth="1px"
        borderColor="newBorder.neutral.strong"
        borderRadius="radius8"
        overflow="hidden"
        shadow="solid"
        flexDirection="column"
        backgroundColor="newBg"
      >
        <Flex
          gap="space12"
          px="space8"
          py="space8"
          backgroundColor="newBg.neutral.muted"
          borderBottomWidth="1px"
          borderBottomColor="newBorder.neutral"
          justifyContent="space-between"
          alignItems="center"
          md={{
            px: "space16",
          }}
        >
          <Flex gap="space4">
            <Box borderRadius="50%" width={12} height={12} backgroundColor="newBg.neutral.strong" />
            <Box borderRadius="50%" width={12} height={12} backgroundColor="newBg.neutral.strong" />
            <Box borderRadius="50%" width={12} height={12} backgroundColor="newBg.neutral.strong" />
          </Flex>
          <Flex
            py="space2"
            px="space16"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            borderRadius="radius6"
            maxWidth={480}
            width="100%"
            justifyContent="center"
            overflow="hidden"
          >
            <Text
              variant="bodyS"
              color="muted"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {title}
            </Text>
          </Flex>
          <Box width={44} />
        </Flex>
        <iframe title={title} src={src} width="100%" height={520} />
      </Flex>
    </Section>
  );
};
