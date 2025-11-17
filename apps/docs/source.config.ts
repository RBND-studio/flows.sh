import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "src/content",
});

export default defineConfig({
  mdxOptions: {
    remarkNpmOptions: {
      persist: { id: "package-manager" },
    },
  },
});
