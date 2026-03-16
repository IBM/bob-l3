# Custom Modes

![type:video](./_videos/3-3_custom_modes.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* showcases how to utilize IBM Bob's various Modes for custom workflows. *[4 min]*

<br/>

## Overview

Bob's built-in modes (Code, Plan, Ask, Advanced) cover the most common development workflows. Custom modes extend this system by allowing teams and developers to define specialized personas with tailored instructions and specific tool access. A custom mode combines a role definition, behavioral instructions, and a deterministic set of permitted tools.

---

## Anatomy of a Mode

Every mode — built-in or custom — is defined by the same set of fields:

| Field | Type | Description |
|-------|------|-------------|
| **Slug** | Identifier | Unique machine-readable name used to reference the mode |
| **Name** | Display name | Human-readable label shown in the mode selector |
| **Description / Overview** | Non-deterministic | High-level summary of what the mode does |
| **Role definition** | Non-deterministic | Defines how Bob should think and behave in this mode |
| **When-to-use** | Non-deterministic | Guidance for mode orchestration — when other modes should switch to this one |
| **Custom instructions** | Non-deterministic | Detailed behavioral instructions for how Bob performs tasks |
| **Tools** | Deterministic | The set of tools Bob is permitted to use in this mode |

### Deterministic vs. Non-Deterministic Fields

- **Instructions** (description, role, when-to-use, custom instructions) are non-deterministic: they guide Bob's behavior, but Bob interprets and applies them probabilistically.
- **Tools** are deterministic: Bob is strictly limited to the tools listed. It cannot use tools outside this list, regardless of instructions.

Tool restrictions are enforced — not suggested. This makes the tools section the primary mechanism for constraining what Bob can do in a given mode.

---

## Creating a Custom Mode

Custom modes are created through the mode settings panel in Bob IDE:

1. Click the gear icon in the mode selector to open mode settings
2. Select the **Custom Modes** tab
3. Click the **+** icon to create a new mode
4. Fill in the slug, name, scope, custom instructions, and tool permissions
5. Save the mode

### Scope Options

| Scope | Availability |
|-------|-------------|
| **Project** | Only available in the current project (stored in `.bobmodes`) |
| **Global** | Available across all projects on the machine |

### The .bobmodes File

Creating a custom mode through the UI generates a `.bobmodes` file in the project root. This is a YAML file that defines the mode configuration. The file can be:

- Edited directly to make changes without using the UI
- Committed to the repository so all team members have access to the same custom modes
- Used as a starting point for asking Bob to generate additional modes

---

## Example: Product Management Mode

The following example demonstrates a custom mode designed for product planning tasks.

**Purpose**: Transform feature ideas into a structured, prioritized product plan

**Configuration:**

| Field | Value |
|-------|-------|
| Slug | `product-management` |
| Scope | Project |
| Instructions | Transform ideas into a simple prioritized product plan |
| Tools | Read, Edit, MCP (GitHub integration) |
| Excluded tools | Execute (terminal commands), Browser |

**Rationale for tool selection:**

- **Read** is needed to understand existing features and the current state of the codebase
- **Edit** is needed to produce output documents (markdown plans)
- **MCP** is included to allow communication with GitHub (reading issues, creating plans linked to issues)
- **Execute** is excluded — product management tasks do not require running code
- **Browser** is excluded — not relevant for this workflow

---

## Rules Apply Across All Modes

Rules defined in `.bob/rules/` are injected into every conversation regardless of mode. A custom mode does not override or bypass rules. For example, an internal monologue rule configured globally will continue to generate summaries even when using a custom Product Management mode.

This makes rules the correct mechanism for cross-cutting behaviors, while mode instructions handle mode-specific behaviors.

---

## Key Takeaways

- Custom modes combine non-deterministic instructions with deterministic tool constraints
- Tool restrictions are enforced, not suggested — they are the primary safety mechanism in a mode
- Modes are created through the UI or by editing `.bobmodes` directly
- Project-scoped modes are stored in `.bobmodes` and committed to the repository
- Rules apply across all modes — they are not overridden by custom mode instructions
- The mode marketplace (coming soon) will provide community-contributed modes for common workflows
