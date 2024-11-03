import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section } from "components/ui";
import { Button, Text } from "ui";

export const ImplementationExample = (): JSX.Element => {
  return (
    <>
      <Section>
        <Text mb="space12" variant="titleXl">
          Bring your own UI
        </Text>
        <Text maxWidth={528} mb="space32" variant="bodyL">
          Infinite customization. Just add your own UI components and use them in workflows to
          create a native user experience.
        </Text>
      </Section>
      <Section
        display="flex"
        width="100%"
        height={460}
        borderRightColor="newBorder.neutral"
        borderRightWidth="1px"
        borderLeftColor="newBorder.neutral"
        borderLeftWidth="1px"
        linesWrapper
      >
        <Box
          maxWidth={360}
          width="100%"
          borderRightColor="newBorder.neutral"
          borderRightWidth="1px"
        />
        <Flex width="100%" p="space12" layerStyle="dotBackground">
          <Box
            borderWidth="1px"
            borderColor="newBorder.neutral"
            borderRadius="radius12"
            shadow="newL1"
            overflow="hidden"
            width="100%"
          >
            <PlaceholderApplication
              bannerSlot={
                <Flex
                  p="space12"
                  flexDirection="column"
                  gap="2px"
                  backgroundColor="neutral.800"
                  borderRadius="radius4"
                  mb="space8"
                >
                  <Text color="white" variant="titleXs">
                    Acme Conf 2024
                  </Text>
                  <Flex gap="space8" alignItems="center">
                    <Text color="white" variant="bodyXs">
                      Less than one week left to get free virtual tickets to Acme Conf, our global
                      event.
                    </Text>
                    <Button type="button" variant="secondary" size="small">
                      Register
                    </Button>
                  </Flex>
                </Flex>
              }
            />
          </Box>
        </Flex>
      </Section>
    </>
  );
};
