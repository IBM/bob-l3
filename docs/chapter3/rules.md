# Bob Rules

![type:video](./_videos/3-2_bob_rules.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* showcases how to work with IBM Bob's defined Rules sets to ensure consistency and cut down on instructions. *[3 min]*

<br/>

## Overview

Bob rules are plain text files that define standing instructions applied to every Bob conversation. Rules allow teams and individual developers to enforce coding standards, communication preferences, workflow constraints, and custom behaviors across all interactions with Bob — without repeating instructions in every prompt.

---

## How Rules Work

Rules are stored as files in a designated folder within the project or at the global user level. The content of every file in the rules folder is automatically injected into each conversation Bob has. Rules apply across all modes (Code, Plan, Ask, Advanced, and any custom modes).

---

## File Location

**Project-level rules** (apply only to the current project):
```
.bob/rules/
```

Place any plain text or markdown file in this directory. Bob reads all files in the folder on every conversation start.

**Global rules** (apply across all projects on the machine):

Global rules use a different directory path at the user level. Consult the Bob documentation for the exact global rules location for your operating system.

---

## Example Rules

### Documentation Standard

```
Always include concise JSDoc strings for every public function.
```

This rule ensures consistent documentation is generated whenever Bob writes or modifies public functions, regardless of what task is being performed.

### Communication Style

```
Be very concise in your wording.
```

Controls how Bob phrases responses and comments — useful for teams that prefer terse, direct output over detailed explanations.

### Internal Monologue (Audit Trail)

A particularly useful pattern is instructing Bob to write a summary of each interaction to a designated folder:

```
Write a summary of every interaction into the folder `internal-monologue/`.
Name the file starting with a timestamp, followed by a concise description of the interaction.
Example: 2026-01-15_update-readme.md
```

This produces a persistent log of everything Bob has done across all conversations. Benefits include:

- **Audit trail**: A record of what changes Bob made and when
- **Cross-session continuity**: Bob can reference the internal monologue folder in future conversations to understand prior work
- **Team transparency**: In shared repositories, the monologue shows what different team members have done with Bob

---

## Project vs. Global Scope

| Scope | Location | Use Case |
|-------|----------|----------|
| Project | `.bob/rules/` in project root | Rules specific to one codebase (e.g., framework conventions, project-specific documentation standards) |
| Global | User-level rules directory | Rules that apply across all projects (e.g., internal monologue, personal communication preferences) |

Rules from both locations are combined and applied simultaneously.

---

## Rules Are Committed to the Repository

Project-level rules in `.bob/rules/` are version-controlled alongside the code. This means:

- Rules propagate automatically to all team members who clone the repository
- Changes to rules go through the normal code review process
- The rules history is tracked in git

---

## Key Takeaways

- Rules are plain text files in `.bob/rules/` that Bob reads at the start of every conversation
- Rules apply across all modes — they are not mode-specific unless placed in mode-specific rule directories
- Rules enforce consistent behavior without requiring repeated instructions in prompts
- The internal monologue pattern provides an audit trail of Bob's actions across all sessions
- Project-level rules are committed to the repository, making them available to the full team
- Global rules apply across all projects on the machine

> "Bob is infinitely hackable. You can make him behave the way you want him to behave — the way that fits your work and your team."
