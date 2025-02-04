import { DocsLogo } from "components/docs-logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Home16 } from "icons";
import { links } from "lib/links";
import { Icon, Logo } from "ui";

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
  links: [
    {
      text: "Open app",
      url: links.logIn,
      icon: <Logo type="pill" size={16} />,
    },
    {
      text: "Website",
      url: links.homePage,
      icon: <Icon icon={Home16} />,
    },
  ],
  githubUrl: links.publicRepo,
};
