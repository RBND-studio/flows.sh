import { Flex } from "@flows/styled-system/jsx";
import { bulletCss, headingCss, paragraphCss, Section, ulCss } from "components/ui";
import { getWebMetadata } from "lib/get-metadata";
import { type Metadata } from "next";
import type { ReactElement } from "react";
import { emails } from "shared";
import { Text } from "ui";

export const metadata: Metadata = getWebMetadata({
  title: "Affiliate Program Policy",
  description: `Exploring Flows’s legal documents? Let us know if we can help. Get in touch at ${emails.general}`,
});

const Page = (): ReactElement => {
  return (
    <Section maxWidth="580px!" py="space40" md={{ py: "space80" }}>
      <Flex mb="space40" flexDirection="column" gap="space12" maxW="800px">
        <Text align="center" as="h1" variant="title4xl">
          Flows Affiliate Program Policy
        </Text>
      </Flex>
      <Text className={paragraphCss} variant="bodyM">
        RBND studio s.r.o., with its registered seat at č.p. 182, 29476 Hlavenec, Czech Republic,
        Company reg. no. 21378614, recorded in the Commercial Register kept by the Municipal Court
        of Prague, File No.: C 401074 (“we“ or “RBND“) thanks you (“you“ or the “Affiliate Partner“)
        for your interest in joining the Flows Affiliate Program (the “Affiliate Program“). These
        terms and conditions (the “Affiliate Program Terms“) shall govern your rights and
        obligations in relation to your participation in the Affiliate Program in addition to Flows
        General Terms and Conditions (the “General Terms“).
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Joining the affiliate program
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        You may join the Affiliate Program by creating an account on Flows Lemon Squeezy portal
        (“Lemon Squeezy“). By signing up to the affiliate program, you claim that you are over 18
        years old and agree to adhere to these Affiliate Program Terms, in addition to the General
        Terms. If you act on behalf of a company when accepting these Affiliate Program Terms, you
        also hereby declare to be authorized to perform such legal actions on behalf of the company
        (herein the term “you“ shall mean the relevant company).
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        RBND’s obligations
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Upon joining the Affiliate Program, we will make available to you your unique referral link
        (the “Referral Link“) and promotional materials, which you may use in promoting the Flows
        platform.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        RBND shall pay to the Affiliate Partner a commission (the “Commission“) for referred users’
        use of the Platform according to the provisions below.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Referred Customers
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        “Referred Customer“ is a natural person or a company who subscribed to Flows Platform using
        the Referral Link in compliance with these Affiliate Program Terms.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Tracking of the potential Referred Customer is performed by cookies lasting 90 days. If the
        cookies expire or are deleted, a customer may not be recognized as a Referred Customer.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        If the Affiliate Partner identifies any customer that, in their opinion, shall be considered
        Referred Customer but has not been recognized by the tracking, the Affiliate Partner may
        report this information to RBND together with sufficient evidence. RBND shall in its
        discretion in good faith consider the Affiliate Partner’s report and evidence, and decide
        whether or not such a customer shall be deemed Referred Customer.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        In case of any uncertain or suspicious circumstances, RBND shall have the right to
        ultimately decide whether a customer is to be deemed Referred Customer or not, in its sole
        discretion.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Commission
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Unless agreed otherwise, the Commission shall be computed as 25% of all payments made by
        each Referred Customer to RBND (excluding any taxes, fees, or other charges) for the
        duration of the Referred Customer’s subscription.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Payment terms
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Payment of the Commission shall be handled by Lemon Squeezy. The Commission shall be paid
        out according to Lemon Squeezy’s payment terms. The Affiliate Partner shall be responsible
        for providing accurate payment information to Lemon Squeezy. RBND shall not be liable for
        any errors or omissions in the payment information provided by the Affiliate Partner.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The minimum Commission payable is 10 USD. Commission in any given month lower than 10 USD
        shall be rolled over to the next month.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Affiliate acknowledges and agrees that RBND makes no representation or guarantee of any kind
        regarding revenue, business, profit, or customers under these Affiliate Program Terms.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Affiliate Partner’s obligations
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Affiliate Partner must not promote RBND or use its Referral Link in any of the following
        ways:
      </Text>

      <ul className={ulCss}>
        <li className={bulletCss}>
          In any materials or in connection with any services that are illegal, infringing on third
          party rights, fraudulent, harassing, defamatory, discriminatory or violent.
        </li>
        <li className={bulletCss}>
          Use any paid advertisements and/or advertise via any pay-per-click advertisement systems
          (e.g., Google Ads, Facebook Ads or LinkedIn Ads).
        </li>
        <li className={bulletCss}>
          Bid on the “Flows“ keyword for any pay-per-click advertisement systems (e.g., Google Ads),
          including any misspellings, capitalizations or in combination with any other text.
        </li>
        <li className={bulletCss}>
          For self-referral, i.e., its own or its friends, affiliates, related persons or business
          partners sign-ups to the Platform.
        </li>
        <li className={bulletCss}>
          In any content that’s available on the Platform, Website or any other assets owned,
          operated or maintained by RBND.
        </li>
        <li className={bulletCss}>
          For any illegal activity, including, without limitation, fraud or money laundering.
        </li>
      </ul>

      <Text className={paragraphCss} variant="bodyM">
        Any customer referred in breach of this clause 6.1 shall not be considered a Referred
        Customer.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        For avoidance of doubt, the Affiliate Partner shall not be an agent of RBND. Nothing in
        these Affiliate Program Terms shall be construed as authorization to act or make
        representations on behalf of RBND.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        License
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        RBND hereby grants to the Affiliate Partner a limited, worldwide, revocable, non-exclusive,
        non-sublicensable and non-transferable license to use RBND’s trademark, logo, trade name,
        service names and copyrighted material (the “Intellectual Property Assets“) in its
        marketing, advertising or other content while promoting RBND services in accordance with
        this Affiliate Program Terms.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Affiliate Partner shall not alter, modify, adapt, translate, or create derivative works
        from the whole or any part of the Intellectual Property Assets or permit any part of the
        Intellectual Property Assets to be merged, combined with, or otherwise incorporated into any
        other product, unless the Affiliate Partner obtained prior written consent from RBND. The
        Affiliate Partner shall not use any language or display the Intellectual Property Assets in
        such a way as to create the impression that the Intellectual Property Assets belong to the
        Affiliate Partner.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Affiliate Partner shall not attack, question, or contest the validity of RBND’s
        ownership of Intellectual Property Assets.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        If any infringement of any Intellectual Property Assets comes to the Affiliate Partner’s
        attention, whether actual or threatened, the Affiliate Partner agrees to inform RBND as soon
        as possible. The Affiliate Partner also agrees to notify us of any claim by anyone that our
        products infringe the rights of any other person. The Affiliate Partner shall, at our
        request and expense, provide its cooperation to RBND in doing any reasonably required steps
        to address such claims.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        RBND reserves all rights not expressly granted in this Agreement, and does not transfer any
        right, title, or interest to any intellectual property rights.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Termination
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Affiliate Partner may terminate its participation in the Affiliate Program at any time
        and for any reason by providing RBND a written notice. Commission earned during that
        calendar month when the Affiliate ceased to be part of the Affiliate Program will be paid
        out in the usual term after the end of that calendar month.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        RBND may terminate the Affiliate Partner’s participation in the Affiliate Program with
        immediate effect if the Affiliate Partner breaches any provision of these Affiliate Program
        Terms or any other terms agreed between the Affiliate Partner and RBND. All commissions
        shall be forfeited and the Affiliate Partner will not be entitled to any reimbursement.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        RBND may terminate the Affiliate Partner’s participation in the Affiliate Program at any
        time and for any reason by providing the Affiliate Partner with at least a thirty (30) days
        written notice. Commission earned during that calendar month when the Affiliate Partner
        ceased to be a part of the Affiliate Program will be paid out in the usual term after the
        end of that calendar month.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        These Affiliate Program Terms shall terminate together with the termination of the Affiliate
        Partner’s participation in the Affiliate Program.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Changes and questions
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We may unilaterally amend the Affiliate Program Terms. We shall notify you of such an
        amendment at least 30 days in advance before its effectiveness. Should you disagree with
        such an amendment, you may withdraw from the Affiliate Program until the effective date of
        the amendments. Otherwise, you will be deemed to agree with the announced amendments.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Contact us at <strong>{emails.general}</strong> if you have any questions, comments, or
        concerns about these terms.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Last updated: May 22, 2025
      </Text>
    </Section>
  );
};

export default Page;
