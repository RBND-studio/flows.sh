// cspell:words PITR

import { Flex } from "@flows/styled-system/jsx";
import { LegalLayout } from "components/legal-layout";
import { bulletCss, headingCss, paragraphCss, ulCss } from "components/ui/typography-css";
import { getWebMetadata } from "lib/get-metadata";
import { links } from "lib/links";
import { type Metadata } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import { routes } from "routes";
import { emails } from "shared";
import { Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Security overview",
  description: `Exploring Flows’s legal documents? Let us know if we can help. Get in touch at ${emails.general}`,
});

const Page = (): ReactElement => {
  return (
    <LegalLayout>
      <Flex mb="space40" flexDirection="column" gap="space12" maxW="800px">
        <Text align="center" as="h1" variant="title4xl">
          Flows security overview
        </Text>
      </Flex>
      <Text className={paragraphCss} variant="bodyM">
        At Flows, security is a top priority. We know you are placing trust in us and guarantee we
        will never compromise that. We strive to provide a secure and reliable service while
        maintaining rapid development.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Infrastructure and network security
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Physical Access Control
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Flows Platform is hosted exclusively on DigitalOcean servers located in the EU
        (Germany). DigitalOcean maintains both SOC 2/3 reports and ISO 27001 certification, which
        can be accessed via their{" "}
        <a
          href="https://www.digitalocean.com/trust/certification-reports"
          rel="noopener noreferrer"
          target="_blank"
        >
          certifications page
        </a>
        .
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Secondary self-hosted services that never handle any user or customer data are hosted on
        Hetzner servers located in the EU (services such as workflow example apps like{" "}
        <a href="https://card.examples.flows.sh/" target="_blank" rel="noopener">
          this one
        </a>
        ). Hetzner maintains ISO 27001 certification, which can be accessed via their{" "}
        <a
          href="https://docs.hetzner.com/general/others/certificates/"
          rel="noopener noreferrer"
          target="_blank"
        >
          certificates page
        </a>
        .
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Access Control
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows infrastructure can only be accessed by authorized personnel. Privileged access to
        Flows infrastructure is assigned in a Just-in-Time (JIT) fashion for a limited time and
        requires strong authentication. Each access request requires a business justification and
        management approval. All JIT access requests are audited.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Administration rights (including SSH, Database Access, and Infrastructure Configuration) are
        tightly controlled and restricted to a very small number of our team.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Business Continuity and Disaster Recovery
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Business Continuity
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        Flows performs daily backups of data with point-in-time recovery (PITR) capabilities.
        Backups are stored on DigitalOcean.
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        All backups are stored in encrypted form.
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        In case of platform-wide data loss, we can restore data from these backups.
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        We regularly test restoration of our infrastructure from these backups.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Disaster Recovery
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        Flows primarily serves traffic from a single geographic region. In the unlikely event of a
        prolonged regional outage, we maintain a documented procedure for provisioning our
        deployment environment in a separate region.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Data Flow
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Data Arriving from Customers and your Users
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        All customer data is sent to Flows via HTTPS using TLS 1.2 or above.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        All Flows systems are configured to reject connections using TLS versions below 1.2 or those
        using potentially insecure cipher suites.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        All requests into the system are logged and monitored.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Data Storage
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        All customer data is stored in encrypted form at rest using AES-256 encryption.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Access to stored data is tightly controlled and restricted to a very small number of our
        team.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Data Leaving the System
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows allows customers and their users to access the data stored in Flows through several
        methods, including:
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>
          Our web application, hosted at{" "}
          <a href="https://app.flows.sh" target="_blank" rel="noopener">
            app.flows.sh
          </a>
          .
        </li>
        <li className={bulletCss}>
          Our SDKs and API, which allow customer applications to load data from Flows on behalf of
          their users, hosted at{" "}
          <a href="https://api.flows-cloud.com" target="_blank" rel="noopener">
            api.flows-cloud.com
          </a>
          .
        </li>
      </ul>
      <Text className={paragraphCss} variant="bodyM">
        All of the methods we provide to our customers for accessing their data ensure encryption in
        transit using TLS 1.2 or above.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Secure Application Development Process
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows uses a Continuous Integration and Continuous Deployment model which means all of our
        code changes are committed to a source code repository, reviewed, tested, and shipped to our
        customers in a rapid sequence. Every source code change is tracked on GitHub.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Our rapid iteration development model significantly improves our response time to bugs,
        vulnerabilities, and security incidents.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Corporate Security
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        We believe that good security applies to our team as much as to our platform.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Malware Protection
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows maintains a comprehensive Malware Protection system backed by Apple Gatekeeper and
        XProtect.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Endpoint Security and Configuration
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        All endpoints use Full Disk Encryption, Screen Lock, Remote Wipe, and strong passwords.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Incident Response Policy
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows follows a CERN (Contain, Eradicate, Recover, and Notify) Security Incident Response
        Process.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Where a Security Incident affects the Confidentiality of customer data, Flows will contact
        the members of the organization.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows maintains a public status page at{" "}
        <a href="https://status.flows.sh" target="_blank" rel="noopener noreferrer">
          status.flows.sh
        </a>
        , which reports on operational issues and incidents.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Vendor Management
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows follows a rigorous Vendor Management process to ensure that all third-party services
        and vendors meet our security and compliance standards.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Vulnerability scanning
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows performs regular vulnerability scanning to identify and remediate potential security
        issues in our systems and applications.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        More information
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        To report a vulnerability via our Responsible Disclosure program, please{" "}
        <Link href={routes.responsibleDisclosure} target="_blank" rel="noopener">
          review our policy and submit a report here
        </Link>
        .
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        For further information on our standards please refer to our{" "}
        <Link href={routes.terms} target="_blank" rel="noopener">
          Terms of Service
        </Link>
        ,{" "}
        <Link href={routes.privacy} target="_blank" rel="noopener">
          Privacy Policy
        </Link>
        , and{" "}
        <a href={links.docs.home} target="_blank" rel="noopener">
          Docs
        </a>
        .
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        Last updated: May 1, 2026
      </Text>
    </LegalLayout>
  );
};

export default Page;
