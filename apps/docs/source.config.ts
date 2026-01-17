import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "src/content",
  docs: {
    schema: frontmatterSchema.extend({
      pageTitle: z.string().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    remarkNpmOptions: {
      persist: { id: "package-manager" },
    },
  },
});
