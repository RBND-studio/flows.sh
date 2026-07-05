"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex } from "@flows/styled-system/jsx";
import { css, cx } from "@flows/styled-system/css";
import { Text } from "ui";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";

import Image from "next/image";

import featureDiscoveryPng from "./examples/feature-discovery.png";
import freeToPaidPromptPng from "./examples/free-to-paid-prompt.png";
import gettingStartedChecklistPng from "./examples/getting-started-checklist.png";
import interactiveTourPng from "./examples/interactive-tour.png";
import npsSurveyPng from "./examples/nps-survey.png";
import trialExpiryReminderPng from "./examples/trial-expiry-reminder.png";
import userFeedbackSurveyPng from "./examples/user-feedback-survey.png";
import welcomeModalPng from "./examples/welcome-modal.png";
import whatsNewAnnouncementPng from "./examples/whats-new-announcement.png";
import betaFeaturePng from "./examples/beta-feature.png";
import emptyStatePng from "./examples/empty-state.png";
import roleOnboardingPng from "./examples/role-onboarding.png";
import { routes } from "routes";
import Link from "next/link";

export const ExamplesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [AutoScroll({ playOnInit: false, stopOnInteraction: false, speed: 1.5, startDelay: 0 })],
  );

  // Only animate while the carousel is on screen and motion is allowed
  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) autoScroll.play();
      else autoScroll.stop();
    });
    observer.observe(emblaApi.rootNode());
    return () => observer.disconnect();
  }, [emblaApi]);

  return (
    <Box ref={emblaRef}>
      <Flex touchAction="pan-y" marginLeft="-24px" willChange="transform">
        {examples.map((item) => (
          <Box key={item.title} w={324} h={300} flexShrink={0} paddingLeft="space24">
            <Link
              href={item.link}
              className={cx(
                css({
                  display: "flex",
                  bg: "pane.bg.elevated",
                  borderWidth: "1px",
                  borderColor: "border.neutral.placeholder",
                  borderRadius: "radius12",
                  shadow: "antimetal",
                  userSelect: "none",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  fastEaseInOut: "border-color, scale",
                  _hover: {
                    borderColor: "border.neutral.strong",
                    scale: "1.02",
                  },
                  color: "#000",
                }),
              )}
              style={{
                backgroundColor: item.background,
                color: item.color || undefined,
              }}
            >
              <Box p="space24">
                <Text variant="titleL" lineHeight="24px!" color="inherit">
                  {item.title}
                </Text>
              </Box>
              <Image src={item.img} alt={item.alt} />
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

const examples = [
  {
    title: "Getting started checklist",
    alt: "A floating checklist widget guiding a new user through onboarding steps",
    background: "#FDFDFD",
    img: gettingStartedChecklistPng,
    link: routes.exampleDetail("floating-checklist"),
  },
  {
    title: "Interactive product tour",
    alt: "A step-by-step product tour highlighting key parts of the app interface",
    background: "#FCFBFA",
    img: interactiveTourPng,
    link: routes.exampleDetail("tour"),
  },
  {
    title: "Welcome modal",
    alt: "A welcome modal greeting a new user when they first open the app",
    background: "#000000",
    color: "#fff",
    img: welcomeModalPng,
    link: routes.exampleDetail("modal"),
  },
  {
    title: "Feature discovery tooltip",
    alt: "A tooltip pointing out a new feature within the app interface",
    background: "#F8FAFF",
    img: featureDiscoveryPng,
    link: routes.exampleDetail("feature-hint"),
  },
  {
    title: "What's new announcement",
    alt: "An announcement panel showing recent product updates and new features",
    background: "#F8F9FA",
    img: whatsNewAnnouncementPng,
    link: routes.exampleDetail("feature-announcement"),
  },
  {
    title: "User feedback survey",
    alt: "A short in-app survey asking the user for feedback",
    background: "#F6F6F6",
    img: userFeedbackSurveyPng,
    link: routes.exampleDetail("microsurvey"),
  },
  {
    title: "Free-to-paid upgrade prompt",
    alt: "An upgrade prompt encouraging a free user to move to a paid plan",
    background: "#FFFFFF",
    img: freeToPaidPromptPng,
    link: routes.exampleDetail("enterprise-upsell"),
  },
  {
    title: "Trial expiry reminder",
    alt: "A reminder banner notifying the user that their trial is about to expire",
    background: "#F3F3ED",
    img: trialExpiryReminderPng,
    // TODO: replace with relevant example once we have one
    link: routes.examples,
  },
  {
    title: "Empty state walkthrough",
    alt: "An empty state screen walking the user through how to get started",
    background: "#181818",
    color: "#fff",
    img: emptyStatePng,
    link: routes.exampleDetail("getting-started-dashboard"),
  },
  {
    title: "Role-based onboarding",
    alt: "An onboarding flow tailored to the user's selected role",
    background: "#F6F6F6",
    img: roleOnboardingPng,
    link: routes.exampleDetail("tooltip"),
  },
  {
    title: "NPS survey",
    alt: "An NPS survey asking the user to rate how likely they are to recommend the product",
    background: "#F2F4F4",
    img: npsSurveyPng,
    link: routes.exampleDetail("nps-survey"),
  },
  {
    title: "Beta feature opt-in",
    alt: "A prompt inviting the user to opt into a new beta feature",
    background: "#FFFFFF",
    img: betaFeaturePng,
    link: routes.exampleDetail("interactive-feature-announcement"),
  },
];
