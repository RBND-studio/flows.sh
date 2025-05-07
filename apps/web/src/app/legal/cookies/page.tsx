import { Flex } from "@flows/styled-system/jsx";
import { headingCss, paragraphCss, Section } from "components/ui";
import { type Metadata } from "next";
import type { ReactElement } from "react";
import { Text } from "ui";

import { type Cookie, CookiesTable } from "./table";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Exploring Flows’s legal documents? Let us know if we can help. Get in touch at hello@flows.sh",
};

const cookies: Cookie[] = [
  {
    name: "scheme-mode",
    description: "Stores the user's color scheme preference (e.g., light or dark mode) (internal).",
    type: "Strictly necessary",
    duration: "infinite",
  },
  {
    name: "theme",
    description:
      "Stores the user's color scheme preference specifically for the /docs section (internal).",
    type: "Strictly necessary",
    duration: "infinite",
  },
  {
    name: "__Host-authjs.csrf-token",
    description:
      "Prevents Cross-Site Request Forgery (CSRF) attacks during authentication (internal).",
    type: "Strictly necessary",
    duration: "session",
  },
  {
    name: "__Secure-authjs.callback-url",
    description: "Stores the callback URL for the OAuth authentication flow (internal).",
    type: "Strictly necessary",
    duration: "session",
  },
  {
    name: "__Secure-authjs.session-token",
    description: "Stores the user's session token for authentication purposes (internal).",
    type: "Strictly necessary",
    duration: "30 days",
  },
  {
    name: "__vdpl",
    description: "Tracks the checkout ID when initiating a Lemon Squeezy checkout process.",
    type: "Strictly necessary",
    duration: "session",
  },
  {
    name: "laravel_session",
    description: "Identifies the session during the Lemon Squeezy checkout process.",
    type: "Strictly necessary",
    duration: "1 hour",
  },
  {
    name: "ls_checkout_origin",
    description: "Tracks the origin of the Lemon Squeezy checkout process.",
    type: "Strictly necessary",
    duration: "session",
  },
  {
    name: "XSRF-TOKEN",
    description: "CSRF token used by Lemon Squeezy to prevent unauthorized requests.",
    type: "Strictly necessary",
    duration: "1 hour",
  },
  {
    name: "flows_affiliate",
    description: "Stores the affiliate code associated with the user's referral source (internal).",
    type: "Strictly necessary",
    duration: "90 days",
  },
];

const Page = (): ReactElement => {
  return (
    <Section maxWidth="580px!" py="space40" md={{ py: "space80" }}>
      <Flex mb="space40" flexDirection="column" gap="space12" maxW="800px">
        <Text align="center" as="h1" variant="title4xl">
          Flows Cookie Policy
        </Text>
      </Flex>
      <Text className={paragraphCss} variant="bodyM">
        Flows uses Cookies to secure and monitor its platform in order to provide our customers with
        the best possible user experience. This document outlines our use of cookies and your rights
        relating to them.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Cookies
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We use cookies, small text snippets, to distinguish you from other users and collect
        information, which may include Personal Data. To find out more about how we use and protect
        your Personal Data, see our Privacy Policy. This helps us to provide you with a good
        experience when you browse our website and use our product, as well as to allow us to
        improve our sites.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        A cookie is a small file of letters and numbers that we store on your browser or the hard
        drive of your computer. Cookies contain information that is transferred to your computer’s
        hard drive.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        This document sets out more about the types of cookies we use, and why. In the tables below,
        you can see a description of each cookie that we use, what it does and when a cookie expires
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Types of cookies and how we use them
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Strictly necessary cookies
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        These cookies are necessary for the website to function and cannot be switched off in our
        systems. They are usually only set in response to actions made by you which amount to a
        request for services, such as setting your privacy preferences, logging in or filling in
        forms. You can set your browser to block or alert you about these cookies, but some parts of
        the site will not then work. These cookies do not store any personally identifiable
        information.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We use strictly necessary cookies to enable certain functions on our website, such as the
        ability to log in or purchase a subscription.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Performance cookies
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Performance cookies track how you use a website during your visit. Typically, this
        information is anonymous and aggregated, with information tracked across all site users.
        They help companies understand visitor usage patterns, identify and diagnose problems or
        errors their users may encounter, and make better strategic decisions in improving their
        audience’s overall website experience. These cookies may be set by the website you’re
        visiting (first-party) or by third-party services. They do not collect personal information
        about you.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We do not use performance cookies, all our analytics are done anonymously.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Functional cookies
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Functional cookies are used to collect information about your device and any settings you
        may configure on the website you’re visiting (like language and time zone settings). With
        this information, websites can provide you with customized, enhanced, or optimized content
        and services. These cookies may be set by the website you’re visiting (first-party) or by
        third-party services.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We do not use functional cookies.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Targeting/advertising cookies
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Targeting/advertising cookies help determine what promotional content is most relevant and
        appropriate to you and your interests. Websites may use them to deliver targeted advertising
        or limit the number of times you see an advertisement. This helps companies improve the
        effectiveness of their campaigns and the quality of content presented to you. These cookies
        may be set by the website you’re visiting (first-party) or by third-party services.
        Targeting/advertising cookies set by third-parties may be used to track you on other
        websites that use the same third-party service.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We do not use targeting/advertising cookies.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Individual cookies
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        We respect your privacy and follow the principle of data minimization. We only use cookies
        that are strictly necessary for the operation of our site and think twice before adding any
        new ones.
      </Text>

      <CookiesTable cookies={cookies} />

      <Text className={paragraphCss} variant="bodyM">
        Last updated: May 6, 2025
      </Text>
    </Section>
  );
};

export default Page;
