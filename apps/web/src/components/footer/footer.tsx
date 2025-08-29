import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { SmartLink } from "components/ui";
import { GitHub16, Slack16, Twitter16, YouTube16 } from "icons";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { routes } from "routes";
import { Icon, Logo, Text } from "ui";

import { ThemeSwitch } from "./theme-switch";

interface FooterGroup {
  title: string;
  links: {
    title: string;
    href: string;
    target?: string;
  }[];
}

const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: [
      {
        title: "Product tours",
        href: routes.features.productTours,
      },
      {
        title: "Embeddable components",
        href: routes.features.embeddableComponents,
      },
      {
        title: "Custom UI components",
        href: routes.features.customComponents,
      },
      {
        title: "Pricing",
        href: routes.pricing,
      },
      {
        title: "Changelog",
        href: routes.changelog,
      },
      {
        title: "Examples",
        href: routes.examples,
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        title: "User onboarding",
        href: routes.solutions.userOnboarding,
      },
      {
        title: "Feature adoption",
        href: routes.solutions.featureAdoption,
      },
      {
        title: "Product-led growth",
        href: routes.solutions.productLedGrowth,
      },
      {
        title: "Revenue expansion",
        href: routes.solutions.revenueExpansion,
      },
      {
        title: "Product marketing",
        href: routes.solutions.productMarketing,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: routes.blog,
      },
      {
        title: "Docs",
        href: links.docs.home,
      },
      {
        title: "Contact",
        href: routes.contact,
      },
      {
        title: "Affiliate",
        href: routes.affiliate,
      },
      {
        title: "Github",
        href: links.rbndGithub,
        target: "_blank",
      },
      {
        title: "Status",
        href: links.status,
        target: "_blank",
      },
    ],
  },
  {
    title: "Compare",
    links: [
      {
        title: "Flows vs other tools",
        href: routes.blogPostDetail({ postId: "flows-vs-other-tools" }),
      },
      {
        title: "Appcues",
        href: routes.alternatives.appcues,
      },
      {
        title: "Chameleon",
        href: routes.alternatives.chameleon,
      },
      {
        title: "Userflow",
        href: routes.alternatives.userflow,
      },
      {
        title: "WalkMe",
        href: routes.alternatives.walkme,
      },
    ],
  },
  {
    title: "Other",
    links: [
      { title: "About", href: routes.about },
      { title: "Privacy", href: routes.privacy },
      { title: "Terms", href: routes.terms },
      { title: "Cookies", href: routes.cookies },
      { title: "DPA", href: routes.dpa },
    ],
  },
];

const socialLinks = [
  {
    icon: Twitter16,
    href: links.twitter,
    label: "X (Twitter)",
  },
  {
    icon: Slack16,
    href: links.slack,
    label: "Slack community",
  },
  {
    icon: GitHub16,
    href: links.rbndGithub,
    label: "GitHub",
  },
  {
    icon: YouTube16,
    href: links.youtube,
    label: "YouTube",
  },
];

export const Footer = (): ReactElement => {
  return (
    <footer
      className={css({
        paddingX: "space24",
        position: "relative",
      })}
    >
      <Flex
        flexDirection="column"
        gap="space40"
        maxWidth="1024px"
        mx="auto"
        py="space40"
        sm={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Flex flexDirection="column" alignItems="flex-start">
          <Box display="inline-flex" alignItems="center" gap="space8" marginBottom="space24">
            <Logo type="type" size={20} />
          </Box>
          <Box marginBottom="space40">
            <Flex gap="space12">
              {socialLinks.map((link) => {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      color: "newFg.neutral.subtle",
                      fastEaseInOut: "color",
                      "&:hover": {
                        color: "newFg.neutral",
                      },
                    })}
                  >
                    <Icon icon={link.icon} color="inherit" />
                  </a>
                );
              })}
            </Flex>
          </Box>
          <ThemeSwitch />
          <Text color="newFg.neutral.subtle" variant="bodyS">
            © 2025{" "}
            <a
              target="_blank"
              href={links.rbnd}
              rel="noopener"
              className={css({ fontWeight: "600", _hover: { textDecoration: "underline" } })}
            >
              RBND studio s.r.o.
            </a>
          </Text>
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          alignItems="flex-start"
          width="100%"
          gap="0"
          rowGap="space48"
          sm={{
            gap: "space48",
            width: "auto",
            flexDirection: "row",
          }}
        >
          {footerGroups.map((group) => (
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              key={group.title}
              width="50%"
              sm={{
                width: "auto",
              }}
            >
              <Text className={css({ mb: "space4" })} weight="700" variant="bodyS">
                {group.title}
              </Text>
              {group.links.map((link) => (
                <Text
                  asChild
                  className={css({
                    display: "flex",
                    gap: "space4",
                    padding: "space8 ",
                    mx: "-space8 ",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    sm: {
                      padding: "space4",
                      mx: "-space4",
                    },
                  })}
                  key={link.href}
                  variant="bodyS"
                  color="newFg.neutral.muted"
                >
                  <SmartLink href={link.href} target={link.target}>
                    {link.title}
                  </SmartLink>
                </Text>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};
