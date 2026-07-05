import { FaqSection } from "components/faq-section";
import { routes } from "routes";

const questions = [
  {
    title: "What can I build with Flows?",
    content:
      "Flows gives you the building blocks for any in-product adoption experience: onboarding tours, feature announcements, checklists, surveys, tooltips, welcome modals, and more. Because you build with your own components and design system, there is no ceiling. You are not limited to whatever a vendor decided to ship.",
  },
  {
    title: "How is Flows different from Appcues, Chameleon, or WalkMe?",
    content:
      "Most product adoption tools give you a fixed set of components and expect you to make them fit your product. Flows works the other way. You decide what gets built and how it looks. Use our built-in components, theme them, or replace them entirely with your own. Your design system stays intact and there is no third-party widget fighting with your UI.",
  },
  {
    title: "How long does it take to get started?",
    content:
      "You can install the SDK and have your first experience running in under 30 minutes. Getting started is a single npm install and a few lines of initialization code. From there, creating experiences takes minutes in the editor - no waiting on deploys.",
  },
  {
    title: "Is there a free plan?",
    content:
      "Yes. You can get started for free with no time limit. The free plan covers everything you need to build and ship your first experiences. Paid plans unlock higher usage limits, and priority support.",
  },
  {
    title: "How is pricing calculated?",
    content:
      "Pricing is based on monthly tracked users (MTU) - the number of unique users who see a Flows experience in a given month. You are not charged for every user that visits your product, only those that interact with Flows content. Team seats are unlimited and free, so you can have your whole team building experiences without worrying about costs.",
  },
  {
    title: "Do I need engineers to create and update experiences?",
    content:
      "It depends on how you want to work. Non-technical teammates can create and update experiences using the no-code editor. Engineers can go deeper - writing custom components, hooking into your design system, and using the SDK directly. Both paths are first-class citizens in Flows, so your team can work however makes sense for the experience you're building.",
  },
  {
    title: "Can I migrate my existing experiences from another tool?",
    content:
      "Not directly - experiences from tools like Appcues or Chameleon can't be imported automatically. But we can help you get moved over, and we offer free usage until your existing contract expires so there's no overlap in costs while you migrate.",
  },
  {
    title: "Does Flows work with my existing design system?",
    content:
      "Yes, and that's one of the core reasons teams choose Flows. You can build adoption experiences using your own components, tokens, and styles instead of fighting a third-party widget. If you already have a button, a modal, or a tooltip in your design system, you can use it directly in Flows.",
  },
  {
    title: "How much can I customize the look and feel?",
    content:
      "As much as you want. If you just need a few tweaks, you can theme our built-in components with your colors and typography. If you need something more specific, you can replace any component entirely with your own. There's no styling ceiling - Flows renders inside your app, so whatever your app can render, Flows can render.",
  },
  {
    title: "Can I build completely custom UI components?",
    content:
      "Yes. Flows has a component API that lets you build any UI you want and wire it into the adoption engine. Your custom components receive the same targeting, sequencing, and analytics as built-in ones. This is how teams with mature design systems avoid the 'off-brand widget' problem entirely.",
  },
  {
    title: "What frameworks and languages does Flows support?",
    content:
      "Flows works with any web-based product. We have a React SDK and JavaScript SDK so Flows can be used with Next.js, React, Vue, Angular, Svelte, plain JavaScript, or any other JS based app. If your product runs in a browser, Flows can run in it.",
  },
  {
    title: "Does Flows support localization and multiple languages?",
    content:
      "Yes. Flows supports localization out of the box. You can create experiences in any language, and the Flows SDK will render the correct version based on the user's locale. This allows you to provide a seamless experience for users around the world.",
  },
  {
    title: "Will Flows slow down my app?",
    content:
      "No. The Flows SDK is lightweight and loads asynchronously so it never blocks your critical rendering path. Experiences only load when they're needed, and nothing shows until a user matches a targeting condition.",
  },
];

export const HomeFaqSection = () => {
  return (
    <FaqSection questions={questions} title="Frequently asked questions" pageUrl={routes.home} />
  );
};
