import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import type { ReactElement, ReactNode, SVGProps } from "react";
import type { FancyIconColors } from "ui";
import { FancyIcon, Icon, Logo, Text } from "ui";

import { Brow } from "./brow";
import { Section } from "components/ui/section";
import { token } from "@flows/styled-system/tokens";
import type { Route } from "next";
import type { FooterGroup } from "./content";
import { footerGroups, socialLinks } from "./content";
import { SmartLink } from "components/ui/smart-link";
import { Dither } from "./dither";

export const Footer = (): ReactElement => {
  return (
    <footer
      className={css({
        backgroundImage: `radial-gradient(circle, ${token("colors.special.dotBg")} 1px, transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        backgroundPosition: "top",
        pb: "space16",
        position: "relative",
      })}
    >
      <Section
        sideBorders
        backgroundColor="pane.bg.web"
        borderBottomWidth={1}
        borderBottomColor="border.neutral"
      >
        <Flex
          flexDirection="column"
          gap={{ base: "space40", md: "space80" }}
          p={{ base: "space24", md: "space40" }}
          sm={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* 1st column */}
          <Flex flexDirection="column" gap="space40" flex={1}>
            <FooterGroupWrap group={footerGroups.product} />
            <FooterGroupWrap group={footerGroups.resources} />
            <FooterGroupWrap group={footerGroups.solutions} />
          </Flex>
          {/* 2nd column */}
          <Flex flexDirection="column" gap="space40" flex={1}>
            <FooterGroupWrap group={footerGroups.compare} />
            <FooterGroupWrap group={footerGroups.technologies} />
          </Flex>
          {/* 3rd column */}
          <Flex flexDirection="column" gap="space40" flex={1}>
            <FooterGroupWrap group={footerGroups.company} />
          </Flex>
          {/* 4th column */}
          <Flex
            flexDirection="column"
            alignItems={{ base: "flex-start", md: "flex-end" }}
            flex={1}
            maxWidth={{ base: "100%", md: "240px" }}
          >
            <Box display="inline-flex" alignItems="center" gap="space8" marginBottom="space24">
              <Logo type="type" size={20} />
            </Box>
            <Text
              color="fg.neutral.muted"
              mb="space12"
              maxWidth={{ base: "100%", md: "240px" }}
              textAlign={{ base: "left", md: "right" }}
            >
              The modern product adoption platform. Built in the 🇪🇺
            </Text>
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
                      color: "fg.neutral.subtle",
                      fastEaseInOut: "color",
                      "&:hover": {
                        color: "fg.neutral",
                      },
                    })}
                  >
                    <Icon icon={link.icon} color="inherit" />
                  </a>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Section>
      <Brow />
      <Dither />
    </footer>
  );
};

type FooterGroupProps = {
  group: FooterGroup;
};

const FooterGroupWrap = ({ group }: FooterGroupProps): ReactNode => {
  return (
    <Flex key={group.title} flexDirection="column" gap="space2">
      <Text className={css({ mb: "space4" })} weight="700" variant="bodyS">
        {group.title}
      </Text>
      {group.mainFeatures?.map((feature) => (
        <FooterLink
          key={feature.title}
          title={feature.title}
          href={feature.href}
          icon={feature.icon}
          color={feature.color as FancyIconColors}
        />
      ))}
      {group.links?.map((link) => (
        <FooterLink key={link.title} title={link.title} href={link.href} target={link.target} />
      ))}
    </Flex>
  );
};

type FooterLinkProps = {
  title: string;
  href: Route;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  color?: FancyIconColors;
  target?: string;
};

const FooterLink = ({ title, href, icon, color, target }: FooterLinkProps): ReactNode => {
  if (icon && color) {
    return (
      <SmartLink
        href={href}
        className={css({ display: "flex", alignItems: "center", gap: "space8" })}
      >
        <FancyIcon
          color={color}
          className={css({
            width: "22px",
            height: "22px",
            flexShrink: 0,
            borderRadius: "radius6!",
          })}
        >
          <Icon icon={icon} color="inherit" />
        </FancyIcon>
        <Text
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
          variant="bodyS"
          color="fg.neutral.muted"
        >
          {title}
        </Text>
      </SmartLink>
    );
  }

  return (
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
      variant="bodyS"
      color="fg.neutral.muted"
    >
      <SmartLink prefetch={false} href={href} target={target}>
        {title}
      </SmartLink>
    </Text>
  );
};
