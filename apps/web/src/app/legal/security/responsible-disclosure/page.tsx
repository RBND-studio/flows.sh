// cspell:words PITR

import { Flex } from "@flows/styled-system/jsx";
import { LegalLayout } from "components/legal-layout";
import { bulletCss, headingCss, paragraphCss, ulCss } from "components/ui/typography-css";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import type { ReactElement } from "react";
import { emails } from "shared";
import { Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Responsible Disclosure",
  description: `Exploring Flows’s legal documents? Let us know if we can help. Get in touch at ${emails.general}`,
});

const Page = (): ReactElement => {
  return (
    <LegalLayout>
      <Flex mb="space40" flexDirection="column" gap="space12" maxW="800px">
        <Text align="center" as="h1" variant="title4xl">
          Responsible Disclosure
        </Text>
      </Flex>
      <Text className={paragraphCss} variant="bodyM">
        At Flows, we care deeply about the safety and security of our customers' data. We greatly
        value reports from our community that help us detect vulnerabilities in our product and
        services.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        How to report an issue
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        If you have discovered an issue or vulnerability that is in-scope (see below), please send
        an email to <a href={`mailto:${emails.security}`}>{emails.security}</a> with the following
        details.
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>A summary of the vulnerability and potential impact</li>
        <li className={bulletCss}>Steps to reproduce the issue, including screenshots</li>
        <li className={bulletCss}>
          Details of your environment including OS, browser, and device details
        </li>
        <li className={bulletCss}>
          If possible, proof-of-concept code to exploit the vulnerability
        </li>
      </ul>
      <Text className={paragraphCss} variant="bodyM">
        Upon receiving your email, our team will conduct an investigation. We will update you on our
        progress, and may request further details, or re-testing if needed.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        All original reports will be considered, and bounties may be issued at our sole discretion.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        In scope
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>https://flows.sh</li>
        <li className={bulletCss}>https://app.flows.sh</li>
        <li className={bulletCss}>https://api.flows-cloud.com</li>
        <li className={bulletCss}>Flows SDKs</li>
        <li className={bulletCss}>
          Vulnerabilities which apply to customers' implementations. Do not attempt to reproduce or
          exploit these vulnerabilities on customer implementations without express permission and
          communication from the customer and Flows teams.
        </li>
      </ul>

      <Text as="h2" className={headingCss} variant="titleXl">
        Out of scope
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>Automated scanning</li>
        <li className={bulletCss}>Social engineering, particularly involving Flows employees</li>
        <li className={bulletCss}>Missing or insufficient rate limiting</li>
        <li className={bulletCss}>
          Missing headers in responses, except in cases where material harm or exploitation is
          evident
        </li>
        <li className={bulletCss}>Brute force attacks</li>
        <li className={bulletCss}>DDoS attacks</li>
        <li className={bulletCss}>Clickjacking on pages with no sensitive actions</li>
        <li className={bulletCss}>Theoretical attacks without proof of exploitability</li>
        <li className={bulletCss}>Attacks requiring physical access to a victim's device</li>
        <li className={bulletCss}>
          Attacks requiring intercepting of a valid user's network traffic
        </li>
        <li className={bulletCss}>Denial of service attacks</li>
      </ul>

      <Text as="h2" className={headingCss} variant="titleXl">
        We kindly ask you
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>
          Test the vulnerability on your own account. If testing on another account, make sure to
          have requested explicit permission
        </li>
        <li className={bulletCss}>Do not copy or destroy production data</li>
        <li className={bulletCss}>
          Do not engage in activities that will cause downtime for our services
        </li>
        <li className={bulletCss}>
          Avoid violations of our privacy policies, terms of service, and other data privacy
          regulation
        </li>
        <li className={bulletCss}>
          Do not make the vulnerability public before reporting it to us via the procedures above,
          and giving us enough time to properly address the issue
        </li>
      </ul>

      <Text as="h2" className={headingCss} variant="titleXl">
        Report Format
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>
          Reports must be made to <a href={`mailto:${emails.security}`}>{emails.security}</a>
        </li>
        <li className={bulletCss}>
          Reports must include a summary of the vulnerability and potential impact, including a
          calculated CVSS score and how you arrived at that score
        </li>
        <li className={bulletCss}>
          Reports must include steps to reproduce the issue, including screenshots. Video-only
          recordings are insufficient
        </li>
        <li className={bulletCss}>
          Reports must include details of your environment including OS, browser, and device details
        </li>
        <li className={bulletCss}>
          Reports must include proof-of-concept code or any payloads used to exploit the
          vulnerability
        </li>
      </ul>

      <Text as="h2" className={headingCss} variant="titleXl">
        Risk Assessment and Bounties
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>
          Risk assessment and bounties will be determined on a case-by-case basis by our security
          team, leveraging the CVSS v3 and v4 scoring system with internal knowledge of our systems
          to accurately inform the assessment
        </li>
        <li className={bulletCss}>
          Previous bounty amounts, from Flows or other bug bounty programs, are not to be considered
          as precedent when determining bounty amounts
        </li>
        <li className={bulletCss}>
          Bounty amounts and payments, if any, are determined at our sole discretion, and will be
          communicated to you via email
        </li>
      </ul>

      <Text className={paragraphCss} variant="bodyM">
        Happy hacking, from the Flows Team
      </Text>
    </LegalLayout>
  );
};

export default Page;
