import { DocsLogo } from "components/docs-logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { links } from "lib/links";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <DocsLogo />,
  },
  githubUrl: links.publicRepo,
};
