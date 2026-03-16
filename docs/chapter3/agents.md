# The /init Command and Agents

![type:video](./_videos/3-1_init_command.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* showcases how to work with IBM Bob's `init` command to summarize a large and complex code base. *[2 min]*

<br/>

## Overview

The `/init` command scans a project and generates a structured summary file that Bob uses as persistent context in every conversation. This is the primary mechanism for giving Bob durable knowledge about a project's structure, conventions, and codebase, without requiring Bob to re-read every file at the start of each interaction.

---

## Why Project Context Matters

Large language models are stateless by nature. Each new conversation starts with no memory of previous interactions. Without explicit project context, Bob must rediscover the codebase from scratch every time — an approach that is inefficient and becomes impractical at scale.

The `/init` command addresses this by producing a persistent context file that is automatically included in every Bob conversation.

---

## Running /init

To initialize project context:

1. Open the agentic sidebar in Bob IDE
2. Enter the slash command: `/init`
3. Bob reads the relevant files in the project
4. Bob generates the `agents.md` context file

The command completes in seconds for most projects. No additional configuration is required.

---

## The agents.md File

The primary output of `/init` is `agents.md` — a plain text markdown file placed at `.bob/agents.md` in the project root.

This file functions like onboarding documentation for Bob: a concise, actionable summary that provides everything Bob needs to understand the project's structure and conventions. Contents typically include:

- Project overview and purpose
- Directory structure and key file locations
- Technology stack and dependencies
- Architectural patterns and conventions
- Development workflows

From this point forward, `agents.md` is automatically prepended to every new conversation, giving Bob immediate project context without requiring manual file reads.

---

## Mode-Specific agents.md Files

In addition to the main `agents.md`, `/init` also generates mode-specific context files for each built-in mode:

| File | Mode |
|------|------|
| `.bob/agents.md` | All conversations (global project context) |
| `.bob/agents-code.md` | Code mode |
| `.bob/agents-plan.md` | Plan mode |
| `.bob/agents-ask.md` | Ask mode |
| `.bob/agents-advanced.md` | Advanced mode |

Each mode-specific file extends the base context with information relevant to that mode's purpose. For example, the plan mode context might emphasize architectural conventions, while the code mode context highlights file structure and naming patterns.

---

## Scaling Considerations

| Project Size | Role of agents.md |
|-------------|-------------------|
| Small projects | Bob could technically read all files per conversation, but agents.md remains more efficient |
| Large projects | agents.md becomes the backbone of the entire Bob experience — Bob relies on it to navigate the codebase without exhausting the context window on file reads |

As codebases grow, the value of a well-maintained `agents.md` increases proportionally.

---

## Maintaining agents.md

Re-run `/init` after significant project changes:

- Adding new modules or services
- Changing the directory structure
- Adopting new technologies or frameworks
- Onboarding new team members who will use Bob

The file can also be edited manually to add context that Bob's automated scan may not capture, such as business rules, deployment conventions, or team-specific practices.

---

## Key Takeaways

- LLMs are stateless — each conversation starts fresh without persistent memory
- `/init` scans the project and generates `agents.md`, a context file included in every Bob conversation
- `agents.md` functions like onboarding documentation: a structured summary Bob uses to navigate the project
- Mode-specific agents.md files provide targeted context for Code, Plan, Ask, and Advanced modes
- In large projects, `agents.md` is essential — Bob cannot feasibly read all files at the start of every conversation
- Re-run `/init` after major project changes to keep the context current
