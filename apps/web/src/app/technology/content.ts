import { angularUserOnboardingContent } from "./content/angular-user-onboarding";
import { javascriptUserOnboardingContent } from "./content/javascript-user-onboarding";
import { nextjsUserOnboardingContent } from "./content/nextjs-user-onboarding";
import { reactUserOnboardingContent } from "./content/react-user-onboarding";
import { solidUserOnboardingContent } from "./content/solid-user-onboarding";
import { svelteUserOnboardingContent } from "./content/svelte-user-onboarding";
import { vueUserOnboardingContent } from "./content/vue-user-onboarding";
import { type TechnologyContentType } from "./types";

export const technologyContent: TechnologyContentType[] = [
  reactUserOnboardingContent,
  nextjsUserOnboardingContent,
  vueUserOnboardingContent,
  angularUserOnboardingContent,
  solidUserOnboardingContent,
  svelteUserOnboardingContent,
  javascriptUserOnboardingContent,
];
