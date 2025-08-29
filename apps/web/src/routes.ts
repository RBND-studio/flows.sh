import { type Route } from "next";

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
  contact: "/contact",

  features: {
    productTours: "/product-tours",
    embeddableComponents: "/embeddable-components",
    customComponents: "/custom-components",
  },

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
    chameleon: "/alternatives/chameleon",
    userflow: "/alternatives/userflow",
    walkme: "/alternatives/walkme",
  },

  examples: "/examples",
  exampleDetail: (slug: string) => `/examples/${slug}` as Route,

  blog: "/blog",
  blogPostDetail: ({ postId }: { postId: string }) => `/blog/${postId}` as const,

  changelog: "/changelog",
  changelogReleaseDetail: ({ releaseId }: { releaseId: string }) =>
    `/changelog/${releaseId}` as const,
} as const;
