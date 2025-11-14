import { createParams } from "./create-params";

/**
 * @deprecated use `links` from `lib/links` to get links with domain support
 */
export const links = (domain = "flows.sh") =>
  ({
    homePage: `https://${domain}`,
    twitter: `https://x.com/flows_sh`,
    rbnd: `https://rbnd.studio`,
    rbndGithub: `https://github.com/RBND-studio`,
    publicRepo: `https://github.com/RBND-studio/flows.sh`,
    status: `https://status.flows.sh`,
    youtube: `https://www.youtube.com/@flows-sh`,
    slack: `https://flows.sh/join-slack`,
    signUp: `https://app.${domain}/signup`,
    logIn: `https://app.${domain}/login`,
    nextJsDemo: `https://nextjs.flows.sh`,
    privacy: `https://${domain}/legal/privacy`,
    terms: `https://${domain}/legal/terms`,
    cookies: `https://${domain}/legal/cookies`,
    dpa: `https://${domain}/legal/dpa`,
    pricing: `https://${domain}/pricing`,
    changelog: `https://${domain}/changelog`,
    examplesList: `https://${domain}/examples`,
    affiliate: `https://flows-sh.lemonsqueezy.com/affiliates`,
    scheduleCall: "https://cal.com/flows-ondra/session",
    contact: `https://${domain}/contact`,
    sdk: {
      overview: `https://github.com/RBND-studio/flows-sdk/tree/main/examples`,
      reactTemplate: `https://github.com/RBND-studio/flows-sdk/tree/main/examples/react/vite`,
      nextTemplate: `https://github.com/RBND-studio/flows-sdk/tree/main/examples/react/next`,
      nuxtTemplate: "https://github.com/RBND-studio/flows-sdk/tree/main/examples/vue/nuxt",
      angularTemplate: "https://github.com/RBND-studio/flows-sdk/tree/main/examples/angular",
    },
    examples: {
      card: "https://card.examples.flows.sh",
      cardSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/card",
      cardPage: `https://${domain}/examples/card`,
      tour: "https://tour.examples.flows.sh",
      tourSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/tour",
      hint: "https://hint.examples.flows.sh",
      hintSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/hint",
      embeddedTips: "https://embedded-tips.examples.flows.sh",
      embeddedTipsSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/embedded-tips",
      modal: "https://modal.examples.flows.sh",
      modalSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/modal",
      interactiveFeatureAnnouncement: "https://interactive-feature-announcement.examples.flows.sh",
      interactiveFeatureAnnouncementSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/interactive-feature-announcement",
      newFeatureBadge: "https://new-feature-badge.examples.flows.sh",
      newFeatureBadgeSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/new-feature-badge",
      enterpriseUpsell: "https://enterprise-upsell.examples.flows.sh",
      enterpriseUpsellSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/enterprise-upsell",
      newFeatureCard: "https://new-feature-card.examples.flows.sh",
      newFeatureCardSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/new-feature-card",
      floatingChecklist: "https://floating-checklist.examples.flows.sh",
      floatingChecklistSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/floating-checklist",
      floatinChecklistPage: `https://${domain}/examples/floating-checklist`,
      featureHint: "https://feature-hint.examples.flows.sh",
      featureHintSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/feature-hint",
      productHuntLaunchAnnouncement: "https://product-hunt-launch-announcement.examples.flows.sh",
      productHuntLaunchAnnouncementSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/product-hunt-launch-announcement",
      onboardingHub: "https://onboarding-hub.examples.flows.sh",
      onboardingHubSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/onboarding-hub",
      featureAnnouncement: "https://feature-announcement.examples.flows.sh",
      featureAnnouncementSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/feature-announcement",
      gettingStartedDashboard: "https://getting-started-dashboard.examples.flows.sh",
      gettingStartedDashboardSource:
        "https://github.com/RBND-studio/flows.sh/tree/main/examples/getting-started-dashboard",
      // --PLOP_NEW_EXAMPLE_LINK--
    },
    docs: {
      home: `https://${domain}/docs`,
      users: {
        main: `https://${domain}/docs/users/overview`,
        properties: `https://${domain}/docs/users/properties`,
        defaultProperties: `https://${domain}/docs/users/properties#default-user-properties`,
      },
      workflows: {
        main: `https://${domain}/docs/workflows/overview`,
        publish: `https://${domain}/docs/workflows/publishing`,
        environments: `https://${domain}/docs/workflows/publishing#managing-active-versions`,
        frequency: `https://${domain}/docs/workflows/overview#workflow-frequency`,
        versionHistory: `https://${domain}/docs/workflows/overview#workflow-versions`,
      },
      components: {
        main: `https://${domain}/docs/components/overview`,
        updateInstances: `https://${domain}/docs/components/managing#updating-component-instances`,
        manageLibraries: `https://${domain}/docs/components/managing#libraries`,
      },
      organization: {
        main: `https://${domain}/docs/organization-setup/organizations`,
        members: `https://${domain}/docs/organization-setup/manage-members`,
        billing: `https://${domain}/docs/organization-setup/billing`,
        howWeCountMTus: `https://${domain}/docs/organization-setup/billing#how-do-we-calculate-monthly-tracked-users-mtus`,
      },
      environments: `https://${domain}/docs/environments`,
      blocks: {
        start: `https://${domain}/docs/start-blocks/automatic-start`,
        "manual-start": `https://${domain}/docs/start-blocks/manual-start`,
        tour: `https://${domain}/docs/tour-block`,
        filter: `https://${domain}/docs/logic-blocks/filter`,
        end: `https://${domain}/docs/end-block`,
        components: {
          custom: `https://${domain}/docs/components/custom`,
        },
      },
      blockProperties: {
        overview: `https://${domain}/docs/block-properties/overview`,
        slot: `https://${domain}/docs/block-properties/slot`,
        pageTargeting: `https://${domain}/docs/block-properties/page-targeting`,
        userProperties: `https://${domain}/docs/block-properties/user-properties`,
        waitProperty: `https://${domain}/docs/block-properties/wait`,
        array: `https://${domain}/docs/block-properties/array`,
        stateMemory: `https://${domain}/docs/block-properties/state-memory`,
        blockTrigger: `https://${domain}/docs/block-properties/block-trigger`,
        blockState: `https://${domain}/docs/block-properties/block-state`,
        blockKey: `https://${domain}/docs/block-properties/block-key`,
        tourTrigger: `https://${domain}/docs/tour-block#tour-trigger`,
        action: `https://${domain}/docs/block-properties/action`,
      },
      configureBlocks: {
        exitNodes: `https://${domain}/docs/workflows/configure-blocks#exit-nodes`,
      },
      tour: {
        steps: `https://${domain}/docs/tour-block#tour-steps`,
        waitStep: `https://${domain}/docs/tour-block#wait-step`,
      },
      sdk: {
        overview: `https://${domain}/docs/sdk-overview`,
        javascriptInstallation: `https://${domain}/docs/javascript/installation`,
      },
      localization: {
        main: `https://${domain}/docs/localization`,
      },
      launchpad: {
        main: `https://${domain}/docs/launchpad`,
        workflowPriority: `https://${domain}/docs/launchpad#workflow-priority`,
        concurrency: `https://${domain}/docs/launchpad#concurrency`,
      },
    },
    /**
     * Helper function to generate Open Graph image URLs
     *
     * See `apps/web/src/app/api/og/route.tsx` for implementation details
     */
    ogImage: (params: { title: string; type?: string }) => {
      return `https://${domain}/api/og${createParams(params)}`;
    },
  }) as const;
