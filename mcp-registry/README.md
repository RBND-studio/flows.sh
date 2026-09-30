# MCP Registry

Publishing to registry under organization may fail with normal `mcp-publisher login github` command.
To get around this issue create a fine-grained token: resource owner RBND-studio, with Organization
permissions → Members → Read-only. And use
these commands to login with it:

```sh
read -s -x MCP_GITHUB_TOKEN
mcp-publisher logout
mcp-publisher login github
```
