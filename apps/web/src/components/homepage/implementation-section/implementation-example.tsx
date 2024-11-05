"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Section, Tabs } from "components/ui";
import { Banner16, Close16, Paintbrush16 } from "icons";
import { type FC, type ReactNode, useState } from "react";
import { Button, Checkbox, Icon, Input, Text } from "ui";

type Props = {
  codeExample: ReactNode;
};

export const ImplementationExample: FC<Props> = ({ codeExample }) => {
  const [title, setTitle] = useState("Acme Conf 2024");
  const [description, setDescription] = useState(
    "Less than one week left to get free virtual tickets to Acme Conf, our global event.",
  );
  const [buttonLabel, setButtonLabel] = useState("Register ");
  const [buttonLink, setButtonLink] = useState("https://youtu.be/dQw4w9WgXcQ");
  const [hideClose, setHideClose] = useState(false);

  const tabs = [
    {
      title: "Your code",
      icon: Paintbrush16,
      element: codeExample,
    },
    {
      title: "Flows workflow",
      icon: Paintbrush16,
      element: (
        <Box>
          <Flex
            borderBottomWidth="1px"
            borderBottomColor="newBorder.neutral"
            px="space16"
            py="space12"
            gap="space8"
            alignItems="center"
            width="100%"
          >
            <Flex
              borderRadius="radius4"
              p="6px"
              backgroundColor="blockIcon.component.bg"
              color="blockIcon.component.fg"
            >
              <Icon icon={Banner16} color="inherit" />
            </Flex>
            <Text weight="550">Banner</Text>
          </Flex>
          <Flex flexDirection="column" py="space12" px="space16" gap="space12">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Email"
              className={css({
                width: "100%",
              })}
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label="Description"
              className={css({
                width: "100%",
              })}
            />
            <Input
              value={buttonLabel}
              onChange={(e) => setButtonLabel(e.target.value)}
              label="Button label"
              className={css({
                width: "100%",
              })}
            />
            <Input
              value={buttonLink}
              onChange={(e) => setButtonLink(e.target.value)}
              label="Button link"
              className={css({
                width: "100%",
              })}
            />
            <Checkbox
              label="Hide close button"
              checked={hideClose}
              onCheckedChange={setHideClose}
            />
          </Flex>
        </Box>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].title);
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
        borderRightColor="newBorder.neutral"
        borderRightWidth="1px"
        borderLeftColor="newBorder.neutral"
        borderLeftWidth="1px"
        linesWrapper
        flexDirection="column"
        md={{ flexDirection: "row", height: "460px" }}
      >
        <Box
          maxWidth={360}
          width="100%"
          borderBottomColor="newBorder.neutral"
          borderBottomWidth="1px"
          md={{
            borderRightColor: "newBorder.neutral",
            borderRightWidth: "1px",
            borderBottomWidth: 0,
          }}
        >
          <Box
            px="space12"
            py="space8"
            borderBottomWidth="1px"
            borderBottomColor="newBorder.neutral"
          >
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
          </Box>
          {tabs.map((tab) => {
            const active = activeTab === tab.title;
            return (
              <Box key={tab.title} display={active ? "unset" : "none"} overflow="auto" height={400}>
                {tab.element}
              </Box>
            );
          })}
        </Box>
        <Flex width="100%" p="space12" layerStyle="dotBackground">
          <Box
            borderWidth="1px"
            borderColor="newBorder.neutral"
            borderRadius="radius12"
            shadow="newL1"
            overflow="hidden"
            width="100%"
            height="400px"
            md={{ height: "unset" }}
          >
            <PlaceholderApplication
              bannerSlot={
                <Flex
                  p="space12"
                  flexDirection="column"
                  gap="space4"
                  backgroundColor="neutral.800"
                  borderRadius="radius4"
                  mb="space8"
                >
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text color="white" variant="titleXs">
                      {title}
                    </Text>
                    {!hideClose && (
                      <Icon className={css({ cursor: "pointer" })} icon={Close16} color="white" />
                    )}
                  </Flex>
                  <Flex gap="space8" justifyContent="space-between" alignItems="center">
                    <Text wordBreak="break-word" color="white" variant="bodyXs">
                      {description}
                    </Text>
                    <Button asChild variant="secondary" size="small">
                      <a href={buttonLink} target="_blank" rel="noopener">
                        {buttonLabel}
                      </a>
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
