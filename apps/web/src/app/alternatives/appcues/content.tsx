import { Box, Flex } from "@flows/styled-system/jsx";
import { WorkflowsExample } from "app/solutions/workflows-example";
import {
  CustomUIComponentsIllustration,
  EmbeddableComponentsIllustrations,
  PlaceholderApplication,
  PlaceholderTooltip,
} from "components/ui";
import { Appcues20 } from "icons";
import { FREE_LIMIT } from "shared";

import { type ComparisonContentType } from "../content-type";

export const appcuesContent: ComparisonContentType = {
  pageTitle: "Free Appcues alternative",
  heroTitle: (
    <>
      Free Appcues
      <br />
      alternative
    </>
  ),
  description:
    "Flows is the Appcues alternative for modern companies who want to build better product adoption at a fraction of the price.",
  comparisonTitle: (
    <>
      Why choose <br /> Flows vs. Appcues?
    </>
  ),
  competitorName: "Appcues",
  competitorLogo: <Appcues20 />,
  comparisons: [
    {
      title: "Tooltips",
      competitor: true,
      flows: true,
      hint: "Guide users exactly where they need to go with a series of tooltips.",
    },
    {
      title: "Banners",
      competitor: true,
      flows: true,
      hint: "Display important information to users with a banner at the top of the screen.",
    },
    {
      title: "Checklists",
      competitor: true,
      flows: true,
      hint: "Motivate users to complete important tasks with step-by-step guidance.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      hint: "Elements like tooltips, banners, and checklists that float above your app’s UI.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      hint: "Render inline components directly within your app’s UI. Don’t just put tooltips over your product.",
    },
    {
      title: "Customization",
      competitor: "CSS only",
      flows: "Full control over components and their logic",
      hint: "Full control over your product adoption experience. Build exactly what you need, without being limited by a tool.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      hint: "Leverage our APIs and your design system for full control. Build your own components and create a native experience.",
    },
    {
      title: "Branching",
      competitor: "Paid add-on",
      flows: true,
      hint: "Create multiple paths for users to follow based on their actions.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      hint: "Translate your experiences into multiple languages to reach a wider audience.",
    },
    {
      title: "Dark mode support",
      competitor: false,
      flows: true,
      hint: "Support dark mode in your app and make sure your users have a great experience regardless of their theme.",
    },
    {
      title: "Published experiences",
      competitor: "Limited by a plan tier",
      flows: "Unlimited",
      hint: "Total count of live, published experiences. Appcues calls them flows, we call them workflows.",
    },
    {
      title: "Multi-Account support",
      competitor: "Needs a plan starting at $750/month",
      flows: "Free for all accounts",
      hint: "Switch between multiple organizations with the same login credentials.",
    },
    {
      title: "Team members",
      competitor: "Limited by a plan tier",
      flows: "Unlimited",
      hint: "Number of users in your organization.",
    },
    {
      title: "Free plan",
      competitor: "Only free trial for up to 28 days",
      flows: true,
      hint: `Flows is free for up to ${FREE_LIMIT} monthly tracked users. No credit card required.`,
    },
    {
      title: "Price",
      competitor: "From $300/month",
      flows: "From $0/month with Pay-as-you-go",
      hint: `Flows is free for up to ${FREE_LIMIT} monthly tracked users. No credit card required.`,
    },
  ],
  features: [
    {
      title: "Own the user experience",
      description:
        "Appcues gives you pre-canned elements like tooltips and modals with limited customization. Flows lets you use your own components and design system to build a native experience.",
      viz: <CustomUIComponentsIllustration />,
    },
    {
      title: "Beyond onboarding",
      description:
        "Flows is built to support any user journey. Anything from onboarding, education, upsell flows, feature discovery, and more.",
      viz: (
        <Flex
          h="100%"
          w="100%"
          overflow="hidden"
          role="img"
          layerStyle="dotBackground"
          alignItems="center"
          justifyContent="center"
          maskImage="linear-gradient(
                  rgb(0, 0, 0) 70%,
                  rgba(0, 0, 0, 0.886) 76.6%,
                  rgba(0, 0, 0, 0.733) 81.4%,
                  rgba(0, 0, 0, 0.557) 85.3%,
                  rgba(0, 0, 0, 0.376) 88.3%,
                  rgba(0, 0, 0, 0.21) 91%,
                  rgba(0, 0, 0, 0.082) 94%,
                  rgba(0, 0, 0, 0.01) 97.6%,
                  rgba(0, 0, 0, 0) 100%)"
        >
          <WorkflowsExample />
        </Flex>
      ),
    },
    {
      title: "Inline and floating components",
      description:
        "Appcues limits you to floating elements (modals, banners, tooltips). Flows supports those too, but it also lets you embed components inline, directly in your app layout.",
      viz: <EmbeddableComponentsIllustrations />,
    },
    {
      title: "Developer friendly",
      description:
        "Unlike Appcues, Flows integrates like a normal SDK. You bring the components, we handle the states and logic.",
      viz: (
        <Box
          h="100%"
          w="100%"
          overflow="hidden"
          role="img"
          maskImage="linear-gradient(
                      rgb(0, 0, 0) 70%,
                      rgba(0, 0, 0, 0.886) 76.6%,
                      rgba(0, 0, 0, 0.733) 81.4%,
                      rgba(0, 0, 0, 0.557) 85.3%,
                      rgba(0, 0, 0, 0.376) 88.3%,
                      rgba(0, 0, 0, 0.21) 91%,
                      rgba(0, 0, 0, 0.082) 94%,
                      rgba(0, 0, 0, 0.01) 97.6%,
                      rgba(0, 0, 0, 0) 100%)"
        >
          <PlaceholderApplication
            sidebarTooltipSlot={
              <Box position="relative">
                <Box
                  height={24}
                  width={24}
                  backgroundColor="newBg.neutral"
                  borderWidth="1px"
                  borderColor="newBorder.primary"
                  borderRadius="radius4"
                  shadow="focus"
                />
                <Box width={176} pt="space4" position="absolute" right={0} md={{ right: "unset" }}>
                  <PlaceholderTooltip
                    title="Get started"
                    description="Start by installing Flows SDK in your app"
                  />
                </Box>
              </Box>
            }
          />
        </Box>
      ),
    },
  ],
};
