export const routes = {
  home: "/",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
  cookies: "/legal/cookies",
  dpa: "/legal/dpa",
  about: "/about",
  pricing: "/pricing",

  blog: "/blog",
  blogPostDetail: ({ postId }: { postId: string }) => `/blog/${postId}`,

  changelog: "/changelog",
  changelogReleaseDetail: ({ releaseId }: { releaseId: string }) => `/changelog/${releaseId}`,
};
