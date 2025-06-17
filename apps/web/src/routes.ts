export const routes = {
  home: "/",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
  cookies: "/legal/cookies",
  dpa: "/legal/dpa",
  affiliateTerms: "/legal/affiliate",
  about: "/about",
  pricing: "/pricing",
  affiliate: "/affiliate",

  solutions: {
    index: "/solutions",
    userOnboarding: "/solutions/user-onboarding",
    featureAdoption: "/solutions/feature-adoption",
    productLedGrowth: "/solutions/product-led-growth",
    productMarketing: "/solutions/product-marketing",
    revenueExpansion: "/solutions/revenue-expansion",
  },

  alternatives: {
    appcues: "/alternatives/appcues",
    userflow: "/alternatives/userflow",
  },

  examples: "/examples",
  exampleDetail: (slug: string) => `/examples/${slug}`,

  blog: "/blog",
  blogPostDetail: ({ postId }: { postId: string }) => `/blog/${postId}`,

  changelog: "/changelog",
  changelogReleaseDetail: ({ releaseId }: { releaseId: string }) => `/changelog/${releaseId}`,
};
