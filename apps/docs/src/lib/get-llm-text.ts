import { DOMAIN } from "lib/constants";
import type { source } from "lib/source";

const docsUrl = `https://${DOMAIN}/docs`;

// Links are relative to the /docs basePath, which Next.js only adds when rendering HTML.
// Without this, crawlers and agents resolve them against the site root and hit 404s.
export const toAbsoluteDocsLinks = (text: string): string =>
  text
    // The docs home is served without a trailing slash, "/docs/" redirects to "/docs"
    .replace(/(\]\(|(?:href|src)=")\/(?=[)"#?])/g, `$1${docsUrl}`)
    .replace(/(\]\(|(?:href|src)=")\/(?!\/)/g, `$1${docsUrl}/`);

type Page = (typeof source)["$inferPage"];

// The docs home is served at /docs, "/docs/" redirects there
export const getPageUrl = (page: Page): string =>
  page.url === "/" ? docsUrl : `${docsUrl}${page.url}`;

export async function getLLMText(page: Page) {
  const processed = await page.data.getText("processed");

  const title = page.data.metaTitle ?? page.data.pageTitle ?? page.data.title ?? "";
  const description = page.data.description ?? "";
  const pageUrl = getPageUrl(page);

  const content = toAbsoluteDocsLinks(processed);

  // JSON strings are valid double quoted YAML scalars, so values with ": " or quotes still parse
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `url: ${pageUrl}`,
    "---",
  ].join("\n");

  return [frontmatter, content].join("\n\n");
}
