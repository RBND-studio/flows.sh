import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { FaqAccordion, Section, SectionIntro, SmartLink } from "components/ui";
import { links } from "lib/links";
import Link from "next/link";
import { type ReactElement } from "react";
import { routes } from "routes";
import { Button, Text } from "ui";

const bulletCss = css({
  marginLeft: "space24",
  mb: "space8",
  textStyle: "bodyL",
  color: "newFg.neutral.muted",
});

const questions = [
  {
    title: "What counts as a qualified referral?",
    content: (
      <>
        <Text color="newFg.neutral.muted" variant="bodyL" mb="space8">
          Your referral is only valid when:
        </Text>
        <ul
          className={css({
            listStylePosition: "outside",
            listStyle: "disc",
          })}
        >
          <li className={bulletCss}>
            A user that signed up through your link creates or joins an organization that is not
            already associated with another affiliate partner.
          </li>
          <li className={bulletCss}>
            The organization that is associated with your affiliate link subscribes to a paid plan.
          </li>
          <li className={bulletCss}>
            The organization is a new customer and not an existing customer.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Is there a limit to how many users I can refer?",
    content: (
      <Text color="newFg.neutral.muted" variant="bodyL">
        There is no limit to the number of users you can refer. The more you refer, the more you can
        earn.
      </Text>
    ),
  },
  {
    title: "What happens if a referral cancels their subscription?",
    content: (
      <Text color="newFg.neutral.muted" variant="bodyL">
        If a referral cancels their subscription, you will no longer receive commission for that
        organization. However, if they re-subscribe, you will start receiving commission again.
      </Text>
    ),
  },
  {
    title: "What is the commission structure?",
    content: (
      <Text color="newFg.neutral.muted" variant="bodyL">
        Simple, you earn 25% of the monthly subscription fee for every organization you refer for
        the duration of their subscription. For example, if you refer an organization that pays $100
        per month, you will earn $25 per month for as long as they remain a customer.
      </Text>
    ),
  },
  {
    title: "What are the payout minimums?",
    content: (
      <Text color="newFg.neutral.muted" variant="bodyL">
        We require a minimum balance of $10.00 before processing an affiliate payout.
      </Text>
    ),
  },
  {
    title: "What types of promotional materials are provided?",
    content: (
      <Text color="newFg.neutral.muted" variant="bodyL">
        You will get access to our brand package with logos and banners that you can use to promote
        your affiliate link. If there are any other materials you need, please reach out to us and
        we will do our best to provide them.
      </Text>
    ),
  },
  {
    title: "Are there any restrictions on how I can promote my affiliate link?",
    content: (
      <Text color="newFg.neutral.muted" variant="bodyL">
        Yes, you are not allowed to promote your affiliate link through spam, unsolicited emails, or
        any other unethical means. You are also not allowed to use your affiliate link in any paid
        advertising campaigns (such as Google Ads, AdWords, Facebook Ads, Instagram Ads, LinkedIn
        Ads or any similar tool) without prior approval from us. If you are found to be in violation
        of these terms, your affiliate account may be terminated and any commissions earned may be
        forfeited.
      </Text>
    ),
  },
  {
    title: "How do I sign up?",
    content: (
      <Text color="newFg.neutral.muted" variant="bodyL">
        The Lemon Squeezy affiliate hub hosts our affiliate program.{" "}
        <SmartLink target="_blank" href={links.affiliate} underline>
          Create a Lemon Squeezy account
        </SmartLink>
        and join our program.
      </Text>
    ),
  },
];

export const AffiliateFaq = (): ReactElement => {
  return (
    <>
      <SectionIntro
        title={
          <>
            Questions and <span className={css({ color: "newFg.neutral.subtle" })}>Answers</span>
          </>
        }
      />
      <Section maxWidth="640px!" mx="auto">
        {questions.map((question) => (
          <FaqAccordion headingLevel="h3" key={question.title} title={question.title}>
            <Box>{question.content}</Box>
          </FaqAccordion>
        ))}
        <Flex w="100%" justifyContent="center" mt="space32">
          <Button asChild variant="secondary" size="large">
            <Link href={routes.affiliateTerms}>See full terms</Link>
          </Button>
        </Flex>
      </Section>
    </>
  );
};
