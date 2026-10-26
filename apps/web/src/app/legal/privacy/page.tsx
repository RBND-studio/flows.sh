import { Flex } from "@flows/styled-system/jsx";
import { LegalLayout } from "components/legal-layout";
import { bulletCss, headingCss, paragraphCss, ulCss } from "components/ui/typography-css";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import type { ReactElement } from "react";
import { emails } from "shared";
import { Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Privacy Policy",
  description: `Exploring Flows’s legal documents? Let us know if we can help. Get in touch at ${emails.general}`,
});

const Page = (): ReactElement => {
  return (
    <LegalLayout>
      <Flex mb="space40" flexDirection="column" gap="space12" maxW="800px">
        <Text align="center" as="h1" variant="title4xl">
          Flows privacy policy
        </Text>
      </Flex>
      <Text css={paragraphCss} variant="bodyM">
        At Flows, we take your privacy seriously. Please read this Privacy Policy to learn how we
        treat your personal data. By using or accessing our Services in any manner, you acknowledge
        that you accept the practices and policies outlined below, and you hereby consent that we
        will collect, use and share your information as described in this Privacy Policy.
      </Text>

      <Text as="h2" css={headingCss} variant="titleXl">
        What this Privacy Policy Covers
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        This Privacy Policy covers how we treat Personal Data that we gather when you access or use
        our Services. “Personal Data” means any information that identifies or relates to a
        particular individual and also includes information referred to as “personally identifiable
        information” or “personal information” under applicable data privacy laws, rules or
        regulations. This Privacy Policy does not cover the practices of companies we don’t own or
        control or people we don’t manage.
      </Text>

      <Text as="h2" css={headingCss} variant="titleXl">
        As a visitor to flows.sh website
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        The privacy of our website visitors is important to us so we do not track any individual
        people.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We use{" "}
        <a href="https://plausible.io/" rel="noopener noreferrer" target="_blank">
          Plausible Analytics
        </a>{" "}
        to collect anonymous usage data for statistical purposes. The goal is to track overall
        trends not individual visitors. All the data is in aggregate only, no personal data is
        collected. Data collected includes referral sources, top pages, visit duration, information
        from the devices (device type, operating system, country and browser) used during the visit
        and more. You can see the full details in the{" "}
        <a href="https://plausible.io/data-policy" rel="noopener noreferrer" target="_blank">
          Plausible data policy
        </a>
        .
      </Text>

      <Text as="h2" css={headingCss} variant="titleXl">
        As a user of Flows Cloud (app.flows.sh)
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        Our guiding principle is to collect only what we need and that we will solely process this
        information to provide you with the service you signed up for. For that we collect:
      </Text>

      <ul className={ulCss}>
        <li className={bulletCss}>First and last name (if provided)</li>
        <li className={bulletCss}>Email</li>
        <li className={bulletCss}>Password</li>
      </ul>

      <Text css={paragraphCss} variant="bodyM">
        We use a select number of trusted third parties to help us provide the service. We only
        share information with them that is required for the services they provide.
      </Text>

      <Text as="h2" css={headingCss} variant="titleXl">
        Connecting AI tools (MCP server)
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        You can connect AI tools such as ChatGPT, Claude or Cursor to your Flows account through our
        MCP server. When you connect a tool, you sign in to Flows and approve its access. To keep
        the tool connected, we store:
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>
          The name and identifying details the tool provides about itself, such as its website
        </li>
        <li className={bulletCss}>
          Your approval: which tool you connected, the access you granted and when
        </li>
        <li className={bulletCss}>Access and refresh tokens that let the tool act as you</li>
      </ul>
      <Text css={paragraphCss} variant="bodyM">
        A connected tool acts as you and can only reach the organizations you are a member of. To
        answer your requests, our MCP server returns data from those organizations to the tool,
        which can include:
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>
          Your organizations, their environments, languages and settings
        </li>
        <li className={bulletCss}>Your workflows, their content, components and analytics</li>
        <li className={bulletCss}>
          Data about the users of your product that your app sends to Flows through the SDK: user
          IDs (which can be email addresses), user properties, workflow progress, events and survey
          answers
        </li>
      </ul>
      <Text css={paragraphCss} variant="bodyM">
        If the tool asks for it on the approval screen, it also receives the email address of your
        Flows account and whether you verified it, so it can tell which account you connected.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We return this data only to the tool you connected and only to complete the request it makes
        on your behalf. Once returned, the provider of that tool processes it under its own privacy
        policy and your agreement with that provider. You can disconnect a tool at any time on the
        MCP page in your Flows settings. It then can’t renew its access, and access it already has
        expires within 15 minutes. We keep the stored approval and tokens until you disconnect the
        tool or delete your account.
      </Text>

      <Text as="h2" css={headingCss} variant="titleXl">
        Sharing your information
      </Text>

      <Text css={paragraphCss} variant="bodyM">
        We use Loops.io to send all our emails. Transactional email and marketing emails. We have
        disabled link tracking and Loops only tracks open rates. See the{" "}
        <a href="https://loops.so/privacy" rel="noopener noreferrer" target="_blank">
          Loops.io privacy policy
        </a>{" "}
        for full details.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We use DigitalOcean to host our applications and databases. See the{" "}
        <a
          href="https://www.digitalocean.com/legal/privacy-policy"
          rel="noopener noreferrer"
          target="_blank"
        >
          DigitalOcean privacy policy
        </a>{" "}
        for full details.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We use Cloudflare for a global CDN, DNS, DDoS, and Captcha protection. See the{" "}
        <a
          href="https://www.cloudflare.com/privacypolicy/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cloudflare privacy policy
        </a>{" "}
        for full details.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We use Lemon Squeezy as a merchant in the middle for our payment processing. See the{" "}
        <a href="https://www.lemonsqueezy.com/privacy/" rel="noopener noreferrer" target="_blank">
          Lemon Squeezy privacy policy
        </a>{" "}
        for full details.
      </Text>

      <Text css={paragraphCss} variant="bodyM">
        We use Stripe for payment processing. See the{" "}
        <a href="https://stripe.com/privacy" rel="noopener noreferrer" target="_blank">
          Stripe privacy policy
        </a>{" "}
        for full details. (Note: Stripe is currently used only for organizations that were created
        after July 6th 2026. We are in the process of migrating all existing organizations to
        Stripe. Affected organizations will be notified via email.)
      </Text>

      <Text as="h2" css={headingCss} variant="titleXl">
        Retention of data
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We will retain your information as long as your account is active, as necessary to provide
        you with the services or as otherwise set forth in this policy.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We will also retain and use this information as necessary for the purposes set out in this
        policy and to the extent necessary to comply with our legal obligations, resolve disputes,
        enforce our agreements and protect our legal rights.
      </Text>

      <Text as="h2" css={headingCss} variant="titleXl">
        Changes and questions
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        We may update this policy as needed to comply with relevant regulations and reflect any new
        practices. Whenever we make a significant change to our policies, we will alert you to any
        such changes by placing a notice on the Flows website, by sending you an email and/or by
        some other means.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        Contact us at <strong>{emails.general}</strong> if you have any questions, comments, or
        concerns about this privacy policy, your data, or your rights with respect to your
        information.
      </Text>
      <Text css={paragraphCss} variant="bodyM">
        Last updated: October 22, 2026
      </Text>
    </LegalLayout>
  );
};

export default Page;
