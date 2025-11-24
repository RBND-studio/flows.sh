import { Flex } from "@flows/styled-system/jsx";
import { bulletCss, headingCss, olCss, paragraphCss, Section, SmartLink } from "components/ui";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import type { ReactElement } from "react";
import { routes } from "routes";
import { emails } from "shared";
import { Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Terms of Service",
  description: `Exploring Flows’s legal documents? Let us know if we can help. Get in touch at ${emails.general}`,
});

const Page = (): ReactElement => {
  return (
    <Section maxWidth="580px!" py="space40" md={{ py: "space80" }}>
      <Flex mb="space40" flexDirection="column" gap="space12" maxW="800px">
        <Text align="center" as="h1" variant="title4xl">
          Flows terms of service
        </Text>
      </Flex>

      <Text className={paragraphCss} variant="bodyM" fontWeight="600">
        We’re updating our Terms of Service, effective January 1, 2026. You can see the old version{" "}
        <a
          href="https://github.com/RBND-studio/flows.sh/blob/28c239dc379b0a1147b19e8be8479fdeb0d5b499/apps/web/src/app/legal/terms/page.tsx"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>
        .
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        Thank you for using Flows!
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        When we say ”company”, “we”, “our”, “us”, ”service” or ”services” in this document, we are
        referring to Flows or RBND studio s.r.o. (the company behind Flows).
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We may update these Terms of Service in the future. Whenever we make a significant change to
        our policies, we will also announce them to you via the email address on record.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        When you use our service, now or in the future, you are agreeing to the latest Terms of
        Service. That’s true for any of our existing and future products and all features that we
        add to our service over time. There may be times where we do not exercise or enforce any
        right or provision of the Terms of Service; in doing so, we are not waiving that right or
        provision. These terms do contain a limitation of our liability.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Account terms
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You are responsible for maintaining the security of your account and password. Flows cannot
        and will not be liable for any loss or damage from your failure to comply with this security
        obligation.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You are responsible for any activity that occurs under your account (even by others who have
        their own logins under your account).
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You may not use our service for any illegal purpose or to violate any laws in your
        jurisdiction.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You must provide your legal full name and a valid email address in order to complete the
        sign up process.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You must be a human. Accounts registered by bots or other automated methods are not
        permitted.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Payment, refunds, upgrading and downgrading terms
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        For our free plan, we explain the terms on our{" "}
        <SmartLink href={routes.pricing}>pricing page</SmartLink>. We do not ask you for your credit
        card and — just like for customers who pay for our services — we do not sell your data.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        If you are upgrading from a free plan to a paid plan, your billing cycle starts on the day
        of upgrade, and we will charge you at the end of the billing period for the usage you
        generate each billing period.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Paying customers are billed automatically via the payment method you provide to us.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You will never be charged extra. There are no surprise fees and your card will never be
        charged unexpectedly.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You can upgrade or downgrade at any time within your account settings. Downgrading your plan
        may cause the loss of features or capacity of your account. Flows does not accept any
        liability for such loss.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Our payment process is conducted by our payment processor Lemon Squeezy. Lemon Squeezy
        provides customer service inquiries and handles returns. All fees are inclusive of all
        taxes, levies, or duties imposed by taxing authorities. Lemon Squeezy will collect those
        taxes on behalf of taxing authority and remit those taxes to taxing authorities. See the{" "}
        <a href="https://www.lemonsqueezy.com/terms" rel="noopener noreferrer" target="_blank">
          Lemon Squeezy’s Terms of Use
        </a>{" "}
        for details.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Fees paid hereunder are non-refundable.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Cancellation and termination
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You are solely responsible for properly canceling your account. An email to cancel your
        account is not considered cancellation. We provide a simple no-questions-asked cancellation
        link.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We reserve the right to suspend or terminate your account and refuse any and all current or
        future use of the service for any reason at any time. Such termination of the service will
        result in the deactivation or deletion of your account or your access to your account. Flows
        reserves the right to refuse service to anyone for any reason at any time.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Verbal, physical, written or other abuse (including threats of abuse or retribution) of any
        service customer, company employee or officer may result in immediate account termination.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Modifications to the service and prices
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We reserve the right at any time and from time to time to modify or discontinue, temporarily
        or permanently, any part of the service with or without notice.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Sometimes we change the pricing structure for our products. When we do that, we tend to
        exempt existing customers from those changes. However, we may choose to change the prices
        for existing customers. If we do so, we will give at least 30 days notice and will notify
        you via the email address on record. We may also post a notice about changes on our blog or
        the affected services themselves.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows shall not be liable to you or to any third-party for any modification, price change,
        suspension or discontinuance of the service.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Content ownership, copyright and trademark
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You are solely responsible for any content and other material that you submit, publish,
        transmit, email, or display on, through, or with the service.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We claim no intellectual property rights over the material you provide to the service. All
        data remains yours.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You may provide us with feedback, suggestions, and ideas about the service. You agree that
        we own all rights to use and incorporate the feedback you provide in any way, including in
        future enhancements and modifications to the service, without payment or attribution to you.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You must not modify another website so as to falsely imply that it is associated with Flows.
        You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the
        service, use of the service, or access to the service without the express written permission
        by the company.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Privacy and security of your data
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We take many measures to protect and secure your data through backups, redundancies, and
        encryption.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Each party agrees to handle the other party’s data in accordance with (i) all applicable
        laws; and (ii) privacy and security measures reasonably adequate to preserve the other party
        data’s confidentiality and security.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You agree to comply with all applicable laws including all privacy and data protection
        regulations.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You agree not to use the service to send sensitive information to the company where
        unauthorized disclosure could cause material, severe, or catastrophic harm or impact to the
        company, any data subjects or third-parties. Sensitive information includes, but is not
        limited to credit card information, passport numbers, government issued identification
        numbers, financial account information, real time geolocation and personally identifiable
        information (PII). PII is information that could be used on its own to directly identify,
        contact, or precisely locate an individual.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Publicity
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You agree that we may, but have no obligation, to identify you as a customer and that we may
        refer to you by name, trade name, trademark, logo and other proprietary marks or words, and
        may describe your business, in our marketing or publicity materials, on our website, and in
        press releases or other public statements.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You hereby grant the Company a nonexclusive, royalty-free, worldwide, fully-paid, and
        sub-licensable license to use your name and any of your trade names, trademarks, logos and
        other proprietary marks or words pursuant to this Section. You can opt-out of this use by
        requesting opt-out by sending an email to {emails.general}.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        General conditions
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Your use of Flows is at your sole risk. We do take uptime of our application seriously.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We also test all of our features extensively before shipping them. As with any software, our
        services inevitably have some bugs. We track the bugs reported to us and work through
        priority ones, especially any related to security or privacy.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Technical support is provided by email. Email responses are provided on the reasonable
        effort basis without guaranteed response time.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We as humans can access your data to help you with support requests you make and to maintain
        and safeguard Flows to ensure the security of your data and the service as a whole.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We use third party vendors to provide the necessary hardware, storage, payment processing
        and related technology required to run the Services. You can see a list of{" "}
        <SmartLink href={routes.privacy}>all subprocessors here</SmartLink>.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Liability
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We build and operate Flows with care to provide a reliable, secure, and high-quality
        service. However, as with any software or integration, interruptions or errors may occur,
        and we cannot guarantee flawless operation under all circumstances.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You are responsible for how you use the Flows platform and SDK, including any content,
        logic, or configurations you create or display within your own application. We are not
        responsible for how you or others choose to implement Flows or for how it behaves inside
        your product as a result.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Flows may depend on or interact with third-party services, libraries, or environments. We
        are not responsible for any unavailability, malfunction, or interruption caused by
        third-party systems or code, including those that you integrate Flows with.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Warranty
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Flows platform and SDK are provided on an “as is” and “as available” basis. We make no
        representation or warranty as to the reliability, timeliness, quality, suitability,
        availability, accuracy, or completeness of the platform, its functionalities, services, or
        any content.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We do not represent or warrant that:
      </Text>
      <ol className={olCss}>
        <li className={bulletCss}>
          Flows will be completely secure, timely, uninterrupted, or error-free;
        </li>
        <li className={bulletCss}>
          The Platform, its functionalities, or SDK will meet your specific requirements or
          expectations;
        </li>
        <li className={bulletCss}>
          Any stored or transmitted data will be accurate, reliable, or permanently preserved;
        </li>
        <li className={bulletCss}>Defects or errors will be corrected; or</li>
        <li className={bulletCss}>
          It will function in all environments or in combination with any other systems.
        </li>
      </ol>
      <Text className={paragraphCss} variant="bodyM">
        All warranties, whether express, implied, statutory, or otherwise — including any implied
        warranties of merchantability, fitness for a particular purpose — are disclaimed to the
        fullest extent permitted by law.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We are not liable for issues caused by unauthorized use, misuse, or changes in your
        application or third-party systems that affect Flows’ operation.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Limitation of liability
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Except as prohibited by law:
      </Text>
      <ol className={olCss}>
        <li className={bulletCss}>
          Neither party shall be liable for any consequential, special, indirect, exemplary, or
          punitive damages, whether in contract, tort, or any other legal theory, even if such party
          has been advised of the possibility of such damages; and
        </li>
        <li className={bulletCss}>
          Our total aggregate liability for any claim is limited to the amount you paid to us for
          the services during the twelve (12) months immediately preceding the occurrence of the
          event giving rise to such claim.
        </li>
      </ol>
      <Text className={paragraphCss} variant="bodyM">
        Nothing in these Terms limits or excludes liability for gross negligence, wilful misconduct,
        breach of any privacy or data security obligations, death or personal injury caused by
        negligence, fraud, or any other liability that cannot be excluded under applicable law.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Each party acknowledges that these limitations are an essential basis of this agreement.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Force Majeure
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Except for payment obligations, neither party shall be liable for any failure or delay in
        performance caused by circumstances beyond their reasonable control, including but not
        limited to government actions, natural disasters, labor disputes, internet or power
        failures, or other force majeure events.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Governing Law and Jurisdiction
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        These Terms and any other contracts and legal relationships concluded by and between us
        (unless otherwise explicitly provided) shall be governed by the laws of the Czech Republic.
        Any disputes arising here from between us shall be resolved by the courts of general
        jurisdiction in the Czech Republic.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Acknowledgement
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        By using our services or other services provided by us, you acknowledge that you have read
        these terms, as may be amended from time to time, and agree to be bound by them.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Contact us
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        If you have a question about any of the Terms of Service, please contact us by e-mail at{" "}
        <strong>{emails.general}</strong>.
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        Effective date: January 1, 2026
      </Text>
    </Section>
  );
};

export default Page;
