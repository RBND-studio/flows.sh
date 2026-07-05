import { Section } from "components/ui/section";
import { FeatureSectionIntro } from "../feature-section-intro";
import { routes } from "routes";
import { Button, FancyIcon, Icon, Text } from "ui";
import { css } from "@flows/styled-system/css";
import { Block16, CreditCard16, Organization16, Question16, Rocket16, User16 } from "icons";
import { Flex } from "@flows/styled-system/jsx";
import { CyclingWord } from "./cycling-word";
import { links } from "lib/links";
import Link from "next/link";
import { MtuRender } from "./mtu-render";

const userAdjectives = ["onboarded", "engaged", "tracked", "surveyed"];

const pricingTiers = [
  {
    title: "Free",
    description: "No credit card needed",
    icon: Rocket16,
    link: (
      <a href={links.signUp} target="_blank" rel="noopener noreferrer">
        Get started for free
      </a>
    ),
    features: [
      {
        icon: User16,
        text: (
          <MtuRender
            text={
              <>
                Up to 250 <CyclingWord words={userAdjectives} /> users per month
              </>
            }
            description={
              <>
                Flows charges only for users who actually see an experience, we call them MTU
                (Monthly Tracked Users).
                <br />
                <br />
                On the Free plan, you can have up to 250 MTU per month but any number of users that
                visit your app.
              </>
            }
          />
        ),
      },
      {
        icon: Organization16,
        text: "Unlimited team members",
      },
      {
        icon: Block16,
        text: "Unlimited workflows",
      },
      {
        icon: Question16,
        text: "Community support",
      },
    ],
  },
  {
    title: "Pay-as-you-go",
    description: "Starts at $0.01 per MTU per month",
    icon: Organization16,
    link: <Link href={routes.pricing}>Find out more</Link>,
    note: "Everything in Free, plus:",
    features: [
      {
        icon: User16,
        text: (
          <MtuRender
            text={
              <>
                Unlimited <CyclingWord words={userAdjectives} /> users
              </>
            }
            description={
              <>
                Flows charges only for users who actually see an experience, we call them MTU
                (Monthly Tracked Users).
                <br />
                <br />
                On the Pay-as-you-go plan, you pay only for the amount of MTU you have each month,
                regardless of how many users visit your app.
              </>
            }
          />
        ),
      },
      {
        icon: CreditCard16,
        text: "Pay-as-you-go pricing",
      },
      {
        icon: Question16,
        text: "Priority support",
      },
    ],
  },
];

export const PricingSection = () => {
  return (
    <>
      <FeatureSectionIntro
        title={
          <>
            <span className={css({ color: "fg.neutral.subtle" })}>Pay only for</span>{" "}
            <CyclingWord words={userAdjectives} />{" "}
            <span className={css({ color: "fg.neutral.subtle" })}>users</span>
          </>
        }
        description="Stop paying for every user in your database. With Flows, you only pay for users who actually see an experience, making it the most cost efficient product adoption tool at any scale."
        link={routes.pricing}
        linkText="Explore Pricing"
        feature="Pricing"
        featureIcon={
          <FancyIcon
            color="gray"
            className={css({
              width: "24px",
              height: "24px",
            })}
          >
            <Icon icon={CreditCard16} color="inherit" />
          </FancyIcon>
        }
      />
      <Section
        sideBorders
        sideDots
        decorator="split"
        bottomBorder
        display="flex"
        px={{ base: "space8", md: "space40" }}
        pt={{ base: "space8", md: "space40" }}
      >
        <Flex
          w="100%"
          gap={{ base: "space8", md: "space24" }}
          overflow="hidden"
          flexDirection={{ base: "column", md: "row" }}
          pb={{ base: "space8", md: 0 }}
        >
          {pricingTiers.map((tier, index) => (
            <Flex
              key={tier.title}
              direction="column"
              borderTopWidth={1}
              borderLeftWidth={1}
              borderRightWidth={1}
              borderColor={index === 0 ? "border.neutral" : "border.neutral.strong"}
              shadow="antimetal"
              borderTopRadius="radius12"
              borderBottomRadius={{ base: "radius12", md: 0 }}
              bg="pane.bg.elevated"
              flex={1}
              p="space24"
            >
              <Text variant="titleL" mb="space2" as="h3">
                {tier.title}
              </Text>
              <Text variant="bodyM" mb="space24" color="fg.neutral.muted">
                {tier.description}
              </Text>
              <Button size="large" asChild variant={index === 0 ? "secondary" : "black"}>
                {tier.link}
              </Button>
              <Flex direction="column" gap="space6" as="ul" mt="space24">
                {tier.note && (
                  <Text variant="bodyM" fontWeight="600" mb="space2" as="li">
                    {tier.note}
                  </Text>
                )}
                {tier.features.map((feature, index) => (
                  <Flex key={index} gap="space8" alignItems="center" as="li">
                    <Icon icon={feature.icon} />
                    {typeof feature.text === "string" ? (
                      <Text variant="bodyM">{feature.text}</Text>
                    ) : (
                      feature.text
                    )}
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Section>
    </>
  );
};
