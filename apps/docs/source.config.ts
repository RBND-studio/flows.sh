import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { pageSchema } from "fumadocs-core/source/schema";
import { z } from "zod";

export const docs = defineDocs({
  dir: "src/content",
  docs: {
    schema: pageSchema.extend({
      pageTitle: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig({
  mdxOptions: {
    remarkNpmOptions: {
      persist: { id: "package-manager" },
    },
  },
});
