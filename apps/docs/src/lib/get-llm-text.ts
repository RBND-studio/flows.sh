import fs from "node:fs/promises";
import path from "node:path";

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
    value: await fs.readFile(validatePath(page.absolutePath)),
  });

  const pageUrl = `https://${DOMAIN}/docs${page.url}`;

  // note: it doesn't escape frontmatter, it's up to you.
  return `# ${page.data.title}
URL: ${pageUrl}

${processed.value}`;
}

function validatePath(p: string): string {
  // Decode percent-encoded sequences (e.g. %2e%2e -> ..). If decoding fails, fall back to the original.
  let decoded = p;
  try {
    decoded = decodeURIComponent(p);
  } catch {
    // ignore malformed encodings
  }

  // If the relative path begins with '..' then `resolved` is outside `allowedBase`
  if (decoded.includes("..")) {
    throw new Error("Invalid file path");
  }

  // Reject absolute paths
  if (decoded.startsWith("/")) {
    throw new Error("Invalid file path");
  }

  const resolved = path.resolve(decoded);

  // Allow only .mdx files
  if (!resolved.endsWith(".mdx")) {
    throw new Error("Invalid file type");
  }

  return resolved;
}
