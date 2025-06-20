import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section, Waves } from "components/ui";
import { ArrowRight16, Email16, Question16, System16 } from "icons";
import { links } from "lib/links";
import { type ReactNode } from "react";
import { emails } from "shared";
import { Icon, Text } from "ui";

const mainCards = [
  {
    icon: System16,
    title: "Talk to the team",
    description: "Schedule a call with our team to discuss your needs and how we can help.",
    component: (
      <a
        className={css({
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          gap: "space8",
          color: "newFg.neutral",
          mt: "space6",
          _hover: {
            color: "newFg.neutral.muted",
          },
        })}
        href={links.scheduleCall}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text variant="bodyM" color="inherit">
          Schedule a call
        </Text>
        <Icon icon={ArrowRight16} color="inherit" />
      </a>
    ),
  },
  {
    icon: Question16,
    title: "Help & support",
    description: "Ask product questions, report problems, or leave feedback.",
    component: (
      <a
        href={`mailto:${emails.support}`}
        target="_blank"
        rel="noopener noreferrer"
        className={css({
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          gap: "space8",
          color: "newFg.neutral",
          mt: "space6",
          _hover: {
            color: "newFg.neutral.muted",
          },
        })}
      >
        <Icon icon={Email16} color="inherit" />
        <Text variant="bodyM" color="inherit">
          {emails.support}
        </Text>
      </a>
    ),
  },
];

export const MainCardsSection = (): ReactNode => {
  return (
    <Section
      mb="space80"
      wavesElement={
        <Waves
          planeWidth={20}
          lineCountWidth={200}
          cameraPosition={{
            x: 0,
            y: 2,
            z: 6,
          }}
          className={css({
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: -1,
            height: "100%",
            width: "100%",
          })}
        />
      }
    >
      <Flex
        gap="space24"
        direction={{ base: "column", sm: "row" }}
        mx={{
          base: 0,
          md: "space64",
        }}
      >
        {mainCards.map((card) => (
          <Flex
            key={card.title}
            flex="1"
            direction="column"
            p="space32"
            borderWidth="1px"
            borderColor="newBorder.neutral.placeholder"
            bg="pane.bg.elevated"
            borderRadius="radius12"
            shadow="antimetal"
            alignItems="flex-start"
          >
            <Flex gap="space8" alignItems="center" mb="space12">
              <Icon icon={card.icon} color="newFg.neutral" />
              <Text as="h2" variant="titleL">
                {card.title}
              </Text>
            </Flex>
            <Text mb="space16" color="newFg.neutral.muted" variant="bodyM">
              {card.description}
            </Text>
            {card.component}
          </Flex>
        ))}
      </Flex>
    </Section>
  );
};
