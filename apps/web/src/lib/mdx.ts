import fs from "node:fs/promises";
import path from "node:path";

export type ChangelogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  Mdx: React.FC;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  imageAlt?: string;
  author: string;
  Mdx: React.FC;
};

export type GlossaryPost = {
  slug: string;
  title: string;
  description: string;
  Mdx: React.FC;
};

/**
 * @param path - `changelog/my-post.mdx` or `blog/my-post.mdx`
 */
export const importMdxFile = async <T>(filePath: string): Promise<T> => {
  const { default: Mdx, frontmatter } = await import(`markdown/${filePath}`);
  const slug = filePath.split("/").pop()?.replace(".mdx", "") ?? "";

  return { Mdx, slug, ...frontmatter } as T;
};

export const importChangelogPost = importMdxFile<ChangelogPost | undefined>;
export const importBlogPost = importMdxFile<BlogPost | undefined>;
export const importGlossaryPost = importMdxFile<GlossaryPost | undefined>;

export const scanChangelogFiles = (): Promise<string[]> => {
  return fs.readdir(path.resolve(process.cwd(), "src/markdown/changelog"));
};
export const importAllChangelogPosts = async (): Promise<ChangelogPost[]> => {
  const changelogFiles = await scanChangelogFiles();

  const allChangelogs: ChangelogPost[] = [];
  for (const file of changelogFiles) {
    const changelog = await importChangelogPost(`changelog/${file}`);
    if (changelog) allChangelogs.push(changelog);
  }

  return allChangelogs.sort((a, b) => b.date.localeCompare(a.date));
};

export const scanBlogFiles = (): Promise<string[]> => {
  return fs.readdir(path.resolve(process.cwd(), "src/markdown/blog"));
};
export const importAllBlogPosts = async (): Promise<BlogPost[]> => {
  const blogFiles = await scanBlogFiles();

  const allPosts: BlogPost[] = [];
  for (const file of blogFiles) {
    const post = await importBlogPost(`blog/${file}`);
    if (post) allPosts.push(post);
  }

  return allPosts.sort((a, b) => b.date.localeCompare(a.date));
};

export const scanGlossaryFiles = (): Promise<string[]> => {
  return fs.readdir(path.resolve(process.cwd(), "src/markdown/glossary"));
};
export const importAllGlossaryPosts = async (): Promise<GlossaryPost[]> => {
  const glossaryFiles = await scanGlossaryFiles();

  const allPosts: GlossaryPost[] = [];
  for (const file of glossaryFiles) {
    const post = await importGlossaryPost(`glossary/${file}`);
    if (post) allPosts.push(post);
  }

  return allPosts.sort((a, b) => a.title.localeCompare(b.title));
};
