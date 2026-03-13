import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { SmartLink } from "components/ui";
import { GitHub16, LinkedIn16, Slack16, Twitter16, YouTube16 } from "icons";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { routes } from "routes";
import { Icon, Logo, Text } from "ui";

import { StatusBadge } from "./status-badge";
import { ThemeSwitch } from "./theme-switch";

interface FooterGroup {
  title: string;
  links: {
    title: string;
    href: string;
    target?: string;
  }[];
}

type FooterGroupColumn = FooterGroup[];

const footerGroups: FooterGroupColumn[] = [
  [
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
      title: "Technologies",
      links: [
        { title: "Next.js", href: routes.technologyDetail("nextjs-user-onboarding") },
        { title: "React", href: routes.technologyDetail("react-user-onboarding") },
        { title: "Angular", href: routes.technologyDetail("angular-user-onboarding") },
        { title: "Vue", href: routes.technologyDetail("vue-user-onboarding") },
        { title: "Svelte", href: routes.technologyDetail("svelte-user-onboarding") },
        { title: "Solid", href: routes.technologyDetail("solid-user-onboarding") },
        { title: "JavaScript", href: routes.technologyDetail("javascript-user-onboarding") },
      ],
    },
  ],
  [
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
          title: "Glossary",
          href: routes.glossary,
        },
        {
          title: "GitHub",
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
          href: routes.alternativeDetail("appcues"),
        },
        {
          title: "Chameleon",
          href: routes.alternativeDetail("chameleon"),
        },
        {
          title: "Userflow",
          href: routes.alternativeDetail("userflow"),
        },
        {
          title: "WalkMe",
          href: routes.alternativeDetail("walkme"),
        },
        {
          title: "Usetiful",
          href: routes.alternativeDetail("usetiful"),
        },
        {
          title: "Driver.js",
          href: routes.alternativeDetail("driverjs"),
        },
        {
          title: "Others",
          href: routes.alternatives,
        },
      ],
    },
  ],
  [
    {
      title: "Company",
      links: [
        { title: "About", href: routes.about },
        { title: "Privacy", href: routes.privacy },
        { title: "Terms", href: routes.terms },
        { title: "Cookies", href: routes.cookies },
        { title: "DPA", href: routes.dpa },
      ],
    },
  ],
];

const socialLinks = [
  {
    icon: LinkedIn16,
    href: links.linkedin,
    label: "LinkedIn",
  },
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
        gap={{ base: "space40", md: "space80" }}
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
          <Text color="newFg.neutral.muted" mb="space12" maxWidth={260}>
            The modern product adoption platform. Built in the 🇪🇺.
          </Text>
          <StatusBadge />
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
            © {new Date().getFullYear()}{" "}
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
          flex={1}
          justifyContent="space-between"
          rowGap="space24"
          columnGap={{ base: 0, md: "space16" }}
          sm={{
            gap: "space48",
            width: "auto",
            flexDirection: "row",
          }}
        >
          {footerGroups.map((column, index) => (
            <Flex flexDirection="column" alignItems="flex-start" key={index} gap="space24">
              {column.map((footerGroup) => (
                <Flex key={footerGroup.title} flexDirection="column">
                  <Text className={css({ mb: "space4" })} weight="700" variant="bodyS">
                    {footerGroup.title}
                  </Text>
                  {footerGroup.links.map((link) => (
                    <Text
                      asChild
                      className={css({
                        display: "flex",
                        gap: "space4",
                        padding: "space6",
                        mx: "-space6",
                        width: "fit-content",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      })}
                      key={link.href}
                      variant="bodyS"
                      color="newFg.neutral.muted"
                    >
                      <SmartLink prefetch={false} href={link.href} target={link.target}>
                        {link.title}
                      </SmartLink>
                    </Text>
                  ))}
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};
