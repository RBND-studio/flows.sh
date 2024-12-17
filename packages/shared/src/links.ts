/**
 * @deprecated use `links` from `lib/links` to get links with domain support
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- infer the return type
export const links = (domain = "flows.sh") => ({
  homePage: `https://${domain}`,
  twitter: `https://x.com/flows_sh`,
  rbnd: `https://rbnd.studio`,
  rbndGithub: `https://github.com/RBND-studio`,
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
  demoVideoEmbed: `https://www.youtube.com/embed/XY3eU_p0AW4?si=kSQJFruZM8YViA0w`,
  demoVideo: `https://youtu.be/XY3eU_p0AW4?si=I-Kws9rhJ9RLak7Q`,
  sdk: {
    reactTemplate: `https://github.com/RBND-studio/flows-js/tree/main/examples/react/vite`,
    nextTemplate: `https://github.com/RBND-studio/flows-js/tree/main/examples/react/next`,
  },
  docs: {
    home: `https://${domain}/docs`,
    users: {
      main: `https://${domain}/docs/users`,
      properties: `https://${domain}/docs/users/properties`,
    },
    workflows: {
      main: `https://${domain}/docs/workflows`,
      publish: `https://${domain}/docs/workflows/publishing`,
      environments: `https://${domain}/docs/workflows/publishing#managing-active-versions`,
      frequency: `https://${domain}/docs/workflows#workflow-frequency`,
    },
    blockTemplates: {
      main: `https://${domain}/docs/blocks/templates`,
      updateInstances: `https://${domain}/docs/blocks/templates#updating-block-template-instances`,
    },
    organization: {
      main: `https://${domain}/docs/organization-setup/organizations`,
      environments: `https://${domain}/docs/organization-setup/environments`,
      members: `https://${domain}/docs/organization-setup/manage-members`,
      billing: `https://${domain}/docs/organization-setup/billing`,
    },
    blocks: {
      start: `https://${domain}/docs/blocks/library#start-block`,
      tour: `https://${domain}/docs/blocks/library#tour-block`,
      filter: `https://${domain}/docs/blocks/library#filter`,
      end: `https://${domain}/docs/blocks/library#end-block`,
    },
    configureBlocks: {
      slot: `https://${domain}/docs/workflows/configure-blocks#slot-configuration`,
      pageTargeting: `https://${domain}/docs/workflows/configure-blocks#page-targeting`,
      userProperties: `https://${domain}/docs/workflows/configure-blocks#user-properties`,
      exitNodes: `https://${domain}/docs/workflows/configure-blocks#exit-nodes`,
    },
    tour: {
      steps: `https://${domain}/docs/tours/tour-steps`,
      waitStep: `https://${domain}/docs/tours/tour-steps#wait-step`,
      waitProperty: `https://${domain}/docs/tours/tour-steps#wait-property`,
    },
    /**
     * @deprecated old flows docs
     */
    stepsEditor: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/creating-flows/steps-editor.mdx`,
    /**
     * @deprecated old flows docs
     */
    installFlows: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/getting-started/install-flows.mdx`,
    /**
     * @deprecated old flows docs
     */
    contact: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/contact-us.mdx`,
    /**
     * @deprecated old flows docs
     */
    startFlow: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/creating-flows/start-flow.mdx`,
    /**
     * @deprecated old flows docs
     */
    targetFlow: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/creating-flows/targeting.mdx`,
    /**
     * @deprecated old flows docs
     */
    flowFrequency: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/creating-flows/frequency.mdx`,
    step: {
      /**
       * @deprecated old flows docs
       */
      tooltip: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/step-types/tooltip.mdx`,
      /**
       * @deprecated old flows docs
       */
      modal: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/step-types/modal.mdx`,
      /**
       * @deprecated old flows docs
       */
      banner: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/step-types/banner.mdx`,
      /**
       * @deprecated old flows docs
       */
      wait: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/step-types/wait.mdx`,
    },
    /**
     * @deprecated old flows docs
     */
    branchTargeting: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/step-types/fork#targeting-branches.mdx`,
    /**
     * @deprecated old flows docs
     */
    previewFlow: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/creating-flows/preview.mdx`,
    /**
     * @deprecated old flows docs
     */
    publishFlow: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/creating-flows/enable-flow#publishing-changes.mdx`,
    /**
     * @deprecated old flows docs
     */
    makeFlowLive: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/creating-flows/enable-flow#making-your-flow-live.mdx`,
    /**
     * @deprecated old flows docs
     */
    projectDomains: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/project-setup/project-domains.mdx`,
    /**
     * @deprecated old flows docs
     */
    customStyles: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/customization-and-styling/custom-styles.mdx`,
    /**
     * @deprecated old flows docs
     */
    migrateToFlows: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/migrate-to-flows.mdx`,
    /**
     * @deprecated old flows docs
     */
    resetFlow: `https://github.com/RBND-studio/flows.sh/tree/main/apps/docs/src/pages/project-setup/reset-user-progress.mdx`,
  },
});
