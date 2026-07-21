"use client";

import { Box } from "@flows/styled-system/jsx";
import { ChevronDown16, Claude16, Codex16, Copy16, Cursor16 } from "icons";
import type { ReactNode } from "react";
import { Button, clipboard, Icon, Menu, MenuItem, MenuSeparator, Text } from "ui";

const promptMd =
  "# Install Flows\n\nHelp the user install Flows in their product or build a new app. You've copied this prompt from the Flows homepage.\n\n## 1. Install the `flows-install` skill\n\nCheck if you have the `flows-install` skill installed. If not, ask the user to install it:\n\n```bash\nnpx skills add RBND-studio/flows.sh --skill flows-install\n```\n\n## 2. Install the `flows-best-practices` skill\n\nCheck if you have the `flows-best-practices` skill installed. If not, ask the user to install it:\n\n```bash\nnpx skills add RBND-studio/flows.sh --skill flows-best-practices\n```\n\n## 3. Install Flows\n\nUse the `flows-install` skill to install Flows in your project.\n\n## 4. Help the user build with Flows\n\nWhen the installation is complete, use the `flows-best-practices` skill to help the user build with Flows. Ask the user what they want to build, and provide guidance based on the best practices skill.";

const items = [
  {
    title: "Cursor",
    href: `https://cursor.com/link/prompt?text=${encodeURIComponent(promptMd)}`,
    icon: Cursor16,
  },
  {
    title: "Codex",
    href: `codex://threads/new?prompt=${encodeURIComponent(promptMd)}`,
    icon: Codex16,
  },
  {
    title: "Claude Code",
    href: `claude-cli://open?q=${encodeURIComponent(promptMd)}`,
    icon: Claude16,
  },
];

export const InstallWithAIButton = (): ReactNode => {
  return (
    <Menu
      trigger={
        <Button size="large" variant="secondary" endIcon={<ChevronDown16 />}>
          Install with AI
        </Button>
      }
    >
      <Box
        maxW={200}
        w="100%"
        h={90}
        px="space6"
        py="space6"
        overflow="hidden"
        maskImage="linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 90%)"
      >
        <Text variant="bodyXs">
          <span style={{ whiteSpace: "pre-wrap" }}>{promptMd}</span>
        </Text>
      </Box>
      <MenuSeparator />
      <Text px="space6" pt="space6" pb="space4" variant="bodyXxs" color="fg.neutral.muted">
        Open prompt in...
      </Text>
      {items.map((item) => (
        <MenuItem key={item.title} asChild>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <Icon icon={item.icon} />
            {item.title}
          </a>
        </MenuItem>
      ))}
      <MenuSeparator />
      <MenuItem onClick={() => clipboard.copy(promptMd)}>
        <Icon icon={Copy16} />
        Copy prompt
      </MenuItem>
    </Menu>
  );
};
