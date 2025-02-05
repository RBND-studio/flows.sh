/**
 * @deprecated use `links` from `lib/links` to get links with domain support
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- infer the return type
export const links = (domain = "flows.sh") => ({
  homePage: `https://${domain}`,
  twitter: `https://x.com/flows_sh`,
  rbnd: `https://rbnd.studio`,
  rbndGithub: `https://github.com/RBND-studio`,
  publicRepo: `https://github.com/RBND-studio/flows.sh`,
  status: `https://status.flows.sh`,
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
  sdk: {
    reactTemplate: `https://github.com/RBND-studio/flows-sdk/tree/main/examples/react/vite`,
    nextTemplate: `https://github.com/RBND-studio/flows-sdk/tree/main/examples/react/next`,
    nuxtTemplate:
      "https://github.com/RBND-studio/flows-sdk/tree/main/examples/vue/nuxt-custom-components",
  },
  examples: {
    card: "https://card.examples.flows.sh",
    cardSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/card",
    tour: "https://tour.examples.flows.sh",
    tourSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/tour",
    hint: "https://hint.examples.flows.sh",
    hintSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/hint",
    embeddedTips: "https://embedded-tips.examples.flows.sh",
    embeddedTipsSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/embedded-tips",
    modal: "https://modal.examples.flows.sh",
    modalSource: "https://github.com/RBND-studio/flows.sh/tree/main/examples/modal",
  },
  docs: {
    home: `https://${domain}/docs`,
    migrateToFlows2: `https://${domain}/docs/migrate-to-flows-2`,
    users: {
      main: `https://${domain}/docs/users/overview`,
      properties: `https://${domain}/docs/users/properties`,
    },
    workflows: {
      main: `https://${domain}/docs/workflows/overview`,
      publish: `https://${domain}/docs/workflows/publishing`,
      environments: `https://${domain}/docs/workflows/publishing#managing-active-versions`,
      frequency: `https://${domain}/docs/workflows/overview#workflow-frequency`,
    },
    blockTemplates: {
      main: `https://${domain}/docs/block-templates`,
      updateInstances: `https://${domain}/docs/block-templates#updating-block-template-instances`,
    },
    organization: {
      main: `https://${domain}/docs/organization-setup/organizations`,
      members: `https://${domain}/docs/organization-setup/manage-members`,
      billing: `https://${domain}/docs/organization-setup/billing`,
    },
    environments: `https://${domain}/docs/organization-setup/environments`,
    blocks: {
      start: `https://${domain}/docs/start-blocks/automatic-start`,
      tour: `https://${domain}/docs/tour-block`,
      filter: `https://${domain}/docs/logic-blocks/filter`,
      end: `https://${domain}/docs/end-block`,
      components: {
        custom: `https://${domain}/docs/components/custom`,
      },
    },
    blockProperties: {
      slot: `https://${domain}/docs/block-properties/slot`,
      pageTargeting: `https://${domain}/docs/block-properties/page-targeting`,
      userProperties: `https://${domain}/docs/block-properties/user-properties`,
      waitProperty: `https://${domain}/docs/block-properties/wait`,
    },
    configureBlocks: {
      exitNodes: `https://${domain}/docs/workflows/configure-blocks#exit-nodes`,
    },
    tour: {
      steps: `https://${domain}/docs/tour-block#tour-steps`,
      waitStep: `https://${domain}/docs/tour-block#wait-step`,
    },
    sdk: {
      javascriptInstallation: `https://${domain}/docs/javascript/installation`,
    },
    contact: `https://${domain}/docs/contact-us`,
    /**
     * @deprecated old flows docs
     */
    stepsEditor: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/creating-flows/steps-editor.mdx`,
    /**
     * @deprecated old flows docs
     */
    installFlows: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/getting-started/install-flows.mdx`,
    /**
     * @deprecated old flows docs
     */
    startFlow: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/creating-flows/start-flow.mdx`,
    /**
     * @deprecated old flows docs
     */
    targetFlow: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/creating-flows/targeting.mdx`,
    /**
     * @deprecated old flows docs
     */
    flowFrequency: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/creating-flows/frequency.mdx`,
    step: {
      /**
       * @deprecated old flows docs
       */
      tooltip: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/step-types/tooltip.mdx`,
      /**
       * @deprecated old flows docs
       */
      modal: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/step-types/modal.mdx`,
      /**
       * @deprecated old flows docs
       */
      banner: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/step-types/banner.mdx`,
      /**
       * @deprecated old flows docs
       */
      wait: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/step-types/wait.mdx`,
    },
    /**
     * @deprecated old flows docs
     */
    branchTargeting: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/step-types/fork.mdx#targeting-branches`,
    /**
     * @deprecated old flows docs
     */
    previewFlow: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/creating-flows/preview.mdx`,
    /**
     * @deprecated old flows docs
     */
    publishFlow: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/creating-flows/enable-flow.mdx#publishing-changes`,
    /**
     * @deprecated old flows docs
     */
    makeFlowLive: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/creating-flows/enable-flow.mdx#making-your-flow-live`,
    /**
     * @deprecated old flows docs
     */
    projectDomains: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/project-setup/project-domains.mdx`,
    /**
     * @deprecated old flows docs
     */
    customStyles: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/customization-and-styling/custom-styles.mdx`,
    /**
     * @deprecated old flows docs
     */
    migrateToFlows: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/migrate-to-flows.mdx`,
    /**
     * @deprecated old flows docs
     */
    resetFlow: `https://github.com/RBND-studio/flows.sh/tree/8007d587b7904f0718b9246d97eddeb484539277/apps/docs/src/pages/project-setup/reset-user-progress.mdx`,
  },
});
