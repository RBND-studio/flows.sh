import { DOMAIN } from "lib/constants";
import type { source } from "lib/source";

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  const title = page.data.pageTitle ?? page.data.title ?? "";
  const description = page.data.description ?? "";
  const pageUrl = `https://${DOMAIN}/docs${page.url}`;

  const frontmatter = [
    "---",
    `title: ${title}`,
    `description: ${description}`,
    `url: ${pageUrl}`,
    "---",
  ].join("\n");

  return [frontmatter, processed].join("\n\n");
}
