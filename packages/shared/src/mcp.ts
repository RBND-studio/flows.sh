// The contract between the MCP authorization server (apps/app, running better-auth's `mcp` plugin)
// and the MCP resource server (apps/backend). Both sides have to agree on these exactly, so they
// live here instead of being declared twice and kept in step by hand.

/**
 * Scope an access token must carry to reach the MCP tools. apps/app advertises it and mints tokens
 * with it, apps/backend requires it on every request and names it in its `WWW-Authenticate`
 * challenge. The tools re-check organization membership on every call, so it marks "this token may
 * drive the MCP server" rather than carrying permissions of its own.
 */
export const MCP_TOOLS_SCOPE = "mcp:tools";

/**
 * Standard OAuth scope for a refresh token. Without it an MCP client would have to send the user
 * back through the browser every time the 15 min-long access token expired.
 */
export const MCP_OFFLINE_ACCESS_SCOPE = "offline_access";

/**
 * OpenID Connect scopes. Advertising `openid` makes better-auth publish OIDC discovery and a UserInfo
 * endpoint, and `email` adds the user's email and `email_verified` to it. ChatGPT requests both when
 * they are advertised and uses the verified email's domain to keep a company account from being
 * linked outside that company's Enterprise workspace. apps/backend doesn't look at either.
 */
export const MCP_OPENID_SCOPE = "openid";
export const MCP_EMAIL_SCOPE = "email";

/** Every scope an MCP client may ask apps/app for */
export const MCP_SCOPES = [
  MCP_TOOLS_SCOPE,
  MCP_OFFLINE_ACCESS_SCOPE,
  MCP_OPENID_SCOPE,
  MCP_EMAIL_SCOPE,
] as const;

export type McpScope = (typeof MCP_SCOPES)[number];

/**
 * What each scope is allowed to do, in the words shown on the consent screen and in the order shown
 * there. `mcp:tools` is a single scope that reaches every tool, so it spells out the parts worth
 * knowing before granting it. `satisfies` keeps it exhaustive, so a new scope cannot reach that
 * screen as a bare protocol name.
 */
const mcpScopeDescriptions: Record<string, readonly string[] | undefined> = {
  [MCP_TOOLS_SCOPE]: [
    "See and change workflows, components, languages, environments and environment secrets",
    "Delete any of these",
    "Publish workflows",
    "See data about your users (properties, progress, events and survey answers) and reset their progress",
  ],
  [MCP_EMAIL_SCOPE]: ["See your email address"],
  [MCP_OPENID_SCOPE]: ["Know which Flows account you signed in with"],
  [MCP_OFFLINE_ACCESS_SCOPE]: ["Stay connected until you disconnect it"],
} satisfies Record<McpScope, readonly string[]>;

/**
 * The consent screen's list for the requested scopes. `openid` only identifies the account, which
 * `email` already implies, so the pair reads as one line. A client is free to request a scope we do
 * not publish, so that falls back to the raw name at the end.
 */
export const describeMcpScopes = (scopes: readonly string[]): string[] => {
  const requested = new Set(scopes);
  if (requested.has(MCP_EMAIL_SCOPE)) requested.delete(MCP_OPENID_SCOPE);

  const known = Object.keys(mcpScopeDescriptions).filter((scope) => requested.has(scope));
  const unknown = [...requested].filter((scope) => !(scope in mcpScopeDescriptions));
  return [...known.flatMap((scope) => mcpScopeDescriptions[scope] ?? []), ...unknown];
};

/**
 * The OAuth resource identifier both sides fall back to when no MCP resource URL is configured,
 * i.e. local development, where nginx proxies port 8080 to the backend. Deployments set
 * `MCP_RESOURCE_URL` (apps/app) and `MCP_RESOURCE_URL` (apps/backend) to the same public
 * URL — a token is audience-bound to this string, so a mismatch fails every request.
 */
export const LOCAL_MCP_RESOURCE_URL = "http://localhost:8080/mcp";

/**
 * One-click install link for Cursor, see https://cursor.com/docs/mcp/install-links. `config` is the
 * base64 of the server's entry in mcp.json, without the name key.
 */
export const cursorMcpInstallUrl = (url: string): string =>
  `cursor://anysphere.cursor-deeplink/mcp/install?name=flows&config=${btoa(JSON.stringify({ url }))}`;

/** One-click install link for VS Code, see https://code.visualstudio.com/api/extension-guides/ai/mcp */
export const vscodeMcpInstallUrl = (url: string): string =>
  `vscode:mcp/install?${encodeURIComponent(JSON.stringify({ name: "flows", type: "http", url }))}`;

export const claudeMcpInstallUrl = "https://claude.ai/directory/flows";
