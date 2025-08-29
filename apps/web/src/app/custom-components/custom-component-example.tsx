"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication, Tabs } from "components/ui";
import { Banner16, Close16, Code16 } from "icons";
import Image from "next/image";
import { type FC, type ReactNode, useState } from "react";
import { Button, Checkbox, Icon, Input, Logo, Text } from "ui";

import bannerBg from "./banner-bg.jpg";

type Props = {
  codeExample: ReactNode;
};

export const CustomComponentExample: FC<Props> = ({ codeExample }) => {
  const [title, setTitle] = useState("Acme Conf 2026");
  const [description, setDescription] = useState(
    "Less than one week left to get free virtual tickets to Acme Conf, our global event.",
  );
  const [buttonLabel, setButtonLabel] = useState("Register ");
  const [buttonLink, setButtonLink] = useState("https://youtu.be/dQw4w9WgXcQ");
  const [hideClose, setHideClose] = useState(false);

  const tabs = [
    {
      title: "Your code",
      icon: <Icon icon={Code16} color="inherit" />,
      element: codeExample,
    },
    {
      title: "Flows editor",
      icon: <Logo type="pill" size={16} color="inherit" />,
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
              inputClassName={css({
                height: "48px!",
              })}
              asChild
            >
              <textarea rows={3} />
            </Input>
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
    <Flex height="100%" flexDirection={{ base: "column", md: "row" }}>
      <Box
        width="100%"
        backgroundColor="newBg.neutral"
        borderBottomColor="newBorder.neutral"
        borderBottomWidth="1px"
        md={{
          maxWidth: "360px",
          borderRightColor: "newBorder.neutral",
          borderRightWidth: "1px",
          borderBottomWidth: 0,
        }}
      >
        <Box px="space12" py="space8" borderBottomWidth="1px" borderBottomColor="newBorder.neutral">
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
      <Flex flexDirection="column" width="100%" height="100%">
        <Flex
          gap="space12"
          px="space8"
          py="space8"
          backgroundColor="newBg.neutral"
          borderBottomWidth="1px"
          borderBottomColor="newBorder.neutral"
          justifyContent="space-between"
          alignItems="center"
          flexShrink={0}
          h={45}
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
              color="newFg.neutral.muted"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              https://your-cool-app.com
            </Text>
          </Flex>
          <Box width={44} />
        </Flex>

        <Box width="100%" height={{ base: "400px", md: "100%" }}>
          <PlaceholderApplication
            bannerSlot={
              <Box borderRadius="radius4" position="relative" mb="space8">
                <Image
                  className={css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                    opacity: 0.4,
                    borderRadius: "radius4",
                  })}
                  src={bannerBg}
                  alt="Banner background"
                />
                <Flex
                  backgroundColor="newBg.neutral"
                  p="space12"
                  flexDirection="column"
                  gap="space4"
                  borderRadius="radius4"
                >
                  <Flex zIndex={1} alignItems="center" justifyContent="space-between">
                    <Text variant="titleXs">{title}</Text>
                    {!hideClose && <Icon className={css({ cursor: "pointer" })} icon={Close16} />}
                  </Flex>
                  <Flex zIndex={1} gap="space8" justifyContent="space-between" alignItems="center">
                    <Text wordBreak="break-word" variant="bodyXs">
                      {description}
                    </Text>
                    {/* Button is rendered as div to prevent taking focus and messing with aria-hidden */}
                    <Button asChild variant="secondary" size="small">
                      <div>{buttonLabel}</div>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            }
          />
        </Box>
      </Flex>
    </Flex>
  );
};
