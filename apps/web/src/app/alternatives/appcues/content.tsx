import { Appcues20 } from "icons";
import { FREE_LIMIT } from "shared";

import { type ComparisonContentType } from "../content-type";

export const appcuesContent: ComparisonContentType = {
  pageTitle: "Free Appcues alternative | Flows",
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
};
