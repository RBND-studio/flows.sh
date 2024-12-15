import { css, cva } from "@flows/styled-system/css";
import { Flex, Grid } from "@flows/styled-system/jsx";
import { ExternalLink16, NextJS32, React32 } from "icons";
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
];

export const ImplementationTemplateCards = (): JSX.Element => {
  return (
    <Grid width="100%" gap="space12" gridTemplateColumns="1fr 1fr">
      {templates.map((template) => (
        <TemplateCard key={template.title} {...template} />
      ))}
    </Grid>
  );
};

type TemplateCardProps = {
  icon: FC<SVGProps<SVGSVGElement>>;
  backgroundColor: "nextjs" | "react";
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
        backgroundColor: "newBg.neutral.strong",
      },
      react: {
        color: "#149ECA",
        backgroundColor: "newBg.primary.muted",
      },
    },
  },
});
