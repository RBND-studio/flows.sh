import { Cursor16, VSCode16, Claude16 } from "icons";
import type { FC } from "react";
import { claudeMcpInstallUrl, cursorMcpInstallUrl, vscodeMcpInstallUrl } from "shared";
import { Button, Icon } from "ui";

const MCP_URL = "https://api.flows-cloud.com/mcp";

const clients = {
  claude: { title: "Add to Claude", icon: Claude16, href: claudeMcpInstallUrl },
  cursor: { title: "Add to Cursor", icon: Cursor16, href: cursorMcpInstallUrl(MCP_URL) },
  vscode: { title: "Add to VS Code", icon: VSCode16, href: vscodeMcpInstallUrl(MCP_URL) },
};

type Props = {
  client: keyof typeof clients;
};

export const McpInstallButton: FC<Props> = ({ client }) => {
  const { title, icon, href } = clients[client];

  return (
    <div className="not-prose">
      <Button asChild variant="secondary" startIcon={<Icon icon={icon} />}>
        <a href={href}>{title}</a>
      </Button>
    </div>
  );
};
