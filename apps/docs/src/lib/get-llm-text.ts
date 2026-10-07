import { DOMAIN } from "lib/constants";
import type { source } from "lib/source";

const docsUrl = `https://${DOMAIN}/docs`;

// Links are relative to the /docs basePath, which Next.js only adds when rendering HTML.
// Without this, crawlers and agents resolve them against the site root and hit 404s.
export const toAbsoluteDocsLinks = (text: string): string =>
  text.replace(/(\]\(|(?:href|src)=")\/(?!\/)/g, `$1${docsUrl}/`);

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  const title = page.data.pageTitle ?? page.data.title ?? "";
  const description = page.data.description ?? "";
  const pageUrl = `${docsUrl}${page.url}`;

  const content = toAbsoluteDocsLinks(processed);

  const frontmatter = [
    "---",
    `title: ${title}`,
    `description: ${description}`,
    `url: ${pageUrl}`,
    "---",
  ].join("\n");

  return [frontmatter, content].join("\n\n");
}
