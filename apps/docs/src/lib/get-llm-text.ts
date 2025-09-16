import fs from "node:fs/promises";

import type { InferPageType } from "fumadocs-core/source";
import { remarkInclude } from "fumadocs-mdx/config";
import { DOMAIN } from "lib/constants";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";

import { type source } from "./source";

const processor = remark()
  .use(remarkMdx)
  // needed for Fumadocs MDX
  .use(remarkInclude)
  .use(remarkGfm);

export async function getLLMText(page: InferPageType<typeof source>): Promise<string> {
  const processed = await processor.process({
    path: page.absolutePath,
    value: await fs.readFile(page.absolutePath),
  });

  const pageUrl = `https://${DOMAIN}/docs${page.url}`;

  // note: it doesn't escape frontmatter, it's up to you.
  return `# ${page.data.title}
URL: ${pageUrl}

${processed.value}`;
}
