import { css } from "@flows/styled-system/css";
import { Flex, Grid } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { Email16, ExternalLink16 } from "icons";
import { links } from "lib/links";
import Link from "next/link";
import { type ReactNode } from "react";
import { emails } from "shared";
import { Icon, Text } from "ui";

const styles = css({
  textStyle: "bodyM",
  color: "newFg.neutral",
  display: "inline-flex",
  gap: "space4",
  _hover: {
    color: "newFg.neutral.muted",
  },
});

const cards = [
  {
    title: "Join the community",
    description:
      "Connect with other users, share your experiences, and get help from the Flows team.",
    component: (
      <Link href={links.slack} target="_blank" rel="noopener noreferrer" className={styles}>
        Join Slack <Icon icon={ExternalLink16} color="inherit" />
      </Link>
    ),
  },
  {
    title: "General communication",
    description: "For other inquiries, please get in touch with us via email.",
    component: (
      <a
        href={`mailto:${emails.general}`}
        target="_blank"
        rel="noopener noreferrer"
        className={css({
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          gap: "space8",
          color: "newFg.neutral",
          _hover: {
            color: "newFg.neutral.muted",
          },
        })}
      >
        <Icon icon={Email16} color="inherit" />
        <Text variant="bodyM" color="inherit">
          {emails.general}
        </Text>
      </a>
    ),
  },
  {
    title: "Documentation",
    description: "Get an overview of Flows features and how to use them.",
    component: (
      <a href={links.docs.home} target="_blank" rel="noopener noreferrer" className={styles}>
        Flows docs <Icon icon={ExternalLink16} color="inherit" />
      </a>
    ),
  },
  {
    title: "GitHub",
    description:
      "Check out our GitHub repositories to contribute, report issues, or explore the codebase.",
    component: (
      <a href={links.rbndGithub} target="_blank" rel="noopener noreferrer" className={styles}>
        Flows GitHub <Icon icon={ExternalLink16} color="inherit" />
      </a>
    ),
  },
];

export const SecondaryCardsSection = (): ReactNode => {
  return (
    <Section
      mb="space120"
      outerClassName={css({
        borderBottomWidth: "1px",
        borderBottomColor: "newBorder.neutral.muted",
      })}
    >
      <Grid
        gap="space24"
        gridTemplateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
        }}
        mx={{
          base: 0,
          md: "space64",
        }}
      >
        {cards.map((card) => (
          <Flex key={card.title} direction="column" flex="1" p="space24" alignItems="flex-start">
            <Text as="h2" variant="titleL" mb="space8">
              {card.title}
            </Text>
            <Text mb="space12" color="newFg.neutral.muted" variant="bodyM" textWrap="balance">
              {card.description}
            </Text>
            {card.component}
          </Flex>
        ))}
      </Grid>
    </Section>
  );
};
