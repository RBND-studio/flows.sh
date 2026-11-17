const fs = require("node:fs");
const path = require("node:path");

/**
 * Last modified dates from the `updated` (falls back to `date`) frontmatter field of each post,
 * keyed by URL path. Other pages have no reliable date, so their sitemap entry has no lastmod.
 */
const readContentDates = (section) => {
  const dir = path.join(__dirname, "src/markdown", section);
  const dates = new Map();
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".mdx")) continue;
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
    const field = (key) =>
      frontmatter.match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, "m"))?.[1];
    const date = field("updated") ?? field("date");
    if (date) dates.set(`/${section}/${file.replace(/\.mdx$/, "")}`, date);
  }
  // The index page changes whenever one of its posts does
  const latest = [...dates.values()].sort((a, b) => a.localeCompare(b)).at(-1);
  if (latest) dates.set(`/${section}`, latest);
  return dates;
};

const contentDates = new Map([...readContentDates("blog"), ...readContentDates("changelog")]);

const instructions = `# As a condition of accessing this website, you agree to
# abide by the following content signals:

# (a)  If a content-signal = yes, you may collect content
# for the corresponding use.
# (b)  If a content-signal = no, you may not collect
# content for the corresponding use.
# (c)  If the website operator does not include a content
# signal for a corresponding use, the website operator
# neither grants nor restricts permission via content
# signal with respect to the corresponding use.

# The content signals and their meanings are:

# search: building a search index and providing search
# results (e.g., returning hyperlinks and short excerpts
# from your website's contents).  Search does not include
# providing AI-generated search summaries.
# ai-input: inputting content into one or more AI models
# (e.g., retrieval augmented generation, grounding, or
# other real-time taking of content for generative AI
# search answers).
# ai-train: training or fine-tuning AI models.

# ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE
# EXPRESS RESERVATIONS OF RIGHTS UNDER ARTICLE 4 OF THE
# EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT AND
# RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.`;

const userAgentAllow = `
# *
User-Agent: *
Content-Signal: ai-train=no, search=yes, ai-input=yes
Allow: /
`;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  generateRobotsTxt: true,
  // Without this every URL gets the build time as lastmod, which crawlers learn to ignore
  autoLastmod: false,
  transform: async (config, loc) => ({
    loc,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: contentDates.get(loc),
    alternateRefs: config.alternateRefs ?? [],
  }),
  robotsTxtOptions: {
    policies: [],
    additionalSitemaps: [`https://${process.env.NEXT_PUBLIC_DOMAIN}/docs/sitemap.xml`],
    transformRobotsTxt: async (_, robotsTxt) =>
      [instructions, userAgentAllow, robotsTxt].join("\n"),
  },
};
