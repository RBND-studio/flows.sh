import { css, cva } from "@flows/styled-system/css";
import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { ExternalLink16, NextJS32, Nuxt32, React32 } from "icons";
import { links } from "lib/links";
import { type FC, type JSX, type SVGProps } from "react";
import { Icon, Text } from "ui";

const templates: TemplateCardProps[] = [
  {
    title: "NextJS",
    icon: NextJS32,
    backgroundColor: "nextjs",
    link: links.sdk.nextTemplate,
  },
  {
    title: "React",
    icon: React32,
    backgroundColor: "react",
    link: links.sdk.reactTemplate,
  },
  {
    title: "Nuxt",
    icon: Nuxt32,
    backgroundColor: "vue",
    link: links.sdk.nuxtTemplate,
  },
];

export const ImplementationTemplateCards = (): JSX.Element => {
  return (
    <Section>
      <Grid
        width="100%"
        gap="space12"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        mdDown={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {templates.map((template) => (
          <TemplateCard key={template.title} {...template} />
        ))}
        {/* Placeholder box until we add another template */}
        <Box
          height="100%"
          width="100%"
          borderWidth="2px"
          borderColor="newBorder.neutral.muted"
          borderRadius="radius8"
          borderStyle="dashed"
        />
      </Grid>
    </Section>
  );
};

type TemplateCardProps = {
  icon: FC<SVGProps<SVGSVGElement>>;
  backgroundColor: (typeof background.variantMap.variant)[number];
  title: string;
  link: string;
};

const TemplateCard = ({ icon, backgroundColor, title, link }: TemplateCardProps): JSX.Element => {
  return (
    <a
      className={css({
        flexDirection: "column",
        shadow: "newL1",
        borderRadius: "radius8",
        borderWidth: "1px",
        borderColor: "newBorder.neutral",
        background: "pane.bg.elevated",
        overflow: "hidden",
        fastEaseInOut: "all",
        _hover: {
          shadow: "newL2",
          borderColor: "newBorder.neutral.strong",
        },
      })}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Flex
        py="space40"
        justifyContent="center"
        alignItems="center"
        className={background({ variant: backgroundColor })}
      >
        <Icon icon={icon} color="inherit" />
      </Flex>
      <Flex p="12" gap="space4" flexDirection="column">
        <Text weight="600">{title}</Text>
        <Flex color="newFg.neutral.subtle" gap={2}>
          <Text variant="bodyXs" color="inherit">
            View template
          </Text>
          <Icon color="inherit" icon={ExternalLink16} />
        </Flex>
      </Flex>
    </a>
  );
};

const background = cva({
  base: {},
  variants: {
    variant: {
      nextjs: {
        backgroundColor: "hsl(214, 10%, 97%)",
        _dark: {
          backgroundColor: "hsl(214, 15%, 14%)",
        },
      },
      react: {
        color: "#149ECA",
        backgroundColor: "hsl(195, 100%, 97%)",
        _dark: {
          backgroundColor: "hsl(195, 80%, 9%)",
        },
      },
      vue: {
        color: "#00dc80",
        backgroundColor: "hsl(155, 100%, 97%)",
        _dark: {
          backgroundColor: "hsl(155, 80%, 9%)",
        },
      },
    },
  },
});
