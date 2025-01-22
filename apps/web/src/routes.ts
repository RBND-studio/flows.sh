export const routes = {
  home: "/",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
  cookies: "/legal/cookies",
  dpa: "/legal/dpa",
  about: "/about",
  pricing: "/pricing",

  solution: {
    userOnboarding: "/solution/user-onboarding",
    featureAdoption: "/solution/feature-adoption",
  },

  example: {
    main: "/examples",
    card: "/examples/card",
    tour: "/examples/tour",
  },

  blog: "/blog",
  blogPostDetail: ({ postId }: { postId: string }) => `/blog/${postId}`,

  changelog: "/changelog",
  changelogReleaseDetail: ({ releaseId }: { releaseId: string }) => `/changelog/${releaseId}`,
};
