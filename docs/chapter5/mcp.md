# Model Context Protocol (MCP)

![type:video](./_videos/5-1_mcp.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* digs into the details of Model Context Protocol (MCP) and how it relates to IBM Bob. *[5 min]*

<br/>

## Overview

The Model Context Protocol (MCP) is a standardized interface that allows large language model applications to connect to external tools, services, and data sources through a consistent integration layer. By adding MCP servers to Bob, developers can extend Bob's capabilities beyond file operations and terminal commands to include any external service that provides an MCP server.

---

## What Is MCP?

MCP defines a standard interface for connecting LLM-powered applications with external systems. Before MCP, integrating an LLM with an external tool required building a custom connection layer specific to each tool — a significant effort that varied widely in implementation across teams and organizations.

MCP addresses this by establishing a single protocol that both LLM applications and external services can implement. Once a service provides an MCP server, any MCP-compatible client (including Bob) can connect to it immediately without custom integration work.

### MCP as a Social Innovation

MCP originated at Anthropic and has since been transferred to the **Linux Foundation**, making it a vendor-neutral, openly governed standard. This governance structure accelerated industry adoption: the majority of major external services and developer tools now provide MCP servers, creating an extensive ecosystem of ready-to-use integrations.

> MCP's impact is not primarily a technical innovation — it is a coordination innovation. A shared standard eliminated duplicated integration effort across the industry.

---

## Adding an MCP Server to Bob

MCP servers are configured in Bob's settings using a JSON configuration file.

**To add an MCP server:**

1. Open Bob settings via the three-dot menu (⋯)
2. Navigate to **MCP Servers**
3. Add the server configuration in JSON format
4. Add credentials as required

The configuration snippet for most MCP servers is available from the service's official documentation. Bob can also be used to insert the JSON configuration directly, handling indentation and bracket placement automatically.

### Credential Management Options

| Method | Description | Best For |
|--------|-------------|----------|
| Inline in config | Personal access token written directly in the JSON file | Quick setup, local development only |
| Environment variable | Token stored as an OS environment variable, referenced in config | Cleaner setup, avoids token in config file |
| Context Forage | Open-source MCP gateway for managing complex, multi-server MCP setups | Teams, production environments, multiple credentials |

---

## Using MCP Tools in Bob

MCP tools are only available in **Advanced mode**. When Advanced mode is active, Bob automatically recognizes the tools provided by all configured MCP servers and can invoke them in response to natural language requests.

No additional syntax is required — Bob determines which MCP tools to call based on the task described.

---

## Example: GitHub MCP Server

The GitHub MCP server demonstrates the breadth of capabilities a single MCP integration can add to Bob.

### Setup

1. Search for the GitHub MCP server configuration snippet in the GitHub documentation
2. Navigate to Bob settings → MCP Servers
3. Paste the configuration snippet into the JSON config
4. Add a GitHub personal access token with appropriate permissions

**Required token permissions:** The token must have permissions matching the operations Bob will perform (e.g., reading issues, creating commits, adding comments, closing issues). A token with insufficient permissions will cause specific operations to fail — Bob will report the permission error and allow the token to be updated.

### Available Operations

Once the GitHub MCP server is configured and Advanced mode is active, Bob can:

- List and read issues from a repository
- Create commits and push changes
- Add comments to issues
- Close issues
- Link commits to issues

### Example Workflow

The following sequence demonstrates a complete issue resolution workflow using Bob with the GitHub MCP server:

1. **List issues**: Ask Bob to list all open issues from the repository
   - Bob calls the GitHub MCP tool to retrieve issues
2. **Implement a fix**: Describe the issue to resolve; Bob reads the relevant code and implements the fix
3. **Commit and push**: Instruct Bob to commit the changes and push to the remote repository
   - Bob calls the appropriate MCP tools and git commands
4. **Update the issue**: Ask Bob to add a comment to the issue linking to the commit and close the issue
   - Bob calls the GitHub MCP comment and close tools

The result: a complete development cycle — from issue to closed resolution — managed through natural language without leaving the Bob interface.

---

## The MCP Ecosystem

The GitHub MCP server is one example of a rapidly growing ecosystem. MCP servers are available for:

- Version control and code review platforms
- Project management and issue tracking tools
- Databases and data services
- Cloud infrastructure providers
- Internal enterprise systems

The breadth of available servers means that most external integrations a development team relies on can be connected to Bob through MCP, without custom development.

---

## Key Takeaways

- MCP (Model Context Protocol) is a standardized interface for connecting Bob to external tools and services
- Originated at Anthropic; now governed by the Linux Foundation as a vendor-neutral standard
- MCP's primary value is coordination: a shared standard eliminates custom integration work
- MCP servers are configured in Bob settings as JSON; credentials can be inline, environment variables, or managed through Context Forage
- MCP tools require **Advanced mode** to access
- The GitHub MCP server enables Bob to list issues, create commits, push changes, add comments, and close issues through natural language
- The MCP ecosystem is broad — most major external services provide MCP servers
