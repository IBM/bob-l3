# The Agentic Sidebar

![type:video](./_videos/2-3_agentic_sidebar.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* showcases how to work with IBM Bob's agentic chat. *[5 min]*

<br/>

## Overview

The agentic chat sidebar is the primary interface for complex, multi-step development tasks in IBM Bob. Unlike inline features such as next edit prediction or literate coding, the agentic sidebar enables Bob to read files, reason across the full codebase, ask clarifying questions, and autonomously implement features end-to-end. It is the most capable way to interact with Bob.

The agentic sidebar supports multiple modes, each designed for a specific phase of development. For complex feature work, the recommended workflow is: **Plan mode → review → new conversation → Code mode**.

---

## Plan Mode

Plan mode is the starting point for any complex feature or architectural change. In this mode, Bob has read-only access to the codebase and focuses on generating a detailed plan before any code is written.

**When to use Plan mode:**

- Implementing features that touch multiple files or layers (frontend, backend, database)
- Designing new system components or data models
- Investigating the scope of a change before committing to it

**How to enter Plan mode:**

1. Open the agentic sidebar in VS Code
2. Select **Plan** from the mode selector
3. Describe the feature or change in natural language

### What Happens in Plan Mode

After receiving a request, Bob:

1. **Reads relevant files** from the codebase to understand existing structure
2. **Asks clarifying questions** to resolve ambiguities before planning begins
3. **Generates planning documents** — typically two files:
   - **Implementation plan**: A detailed specification describing what the feature does, how it will be built, how it will be tested, and the expected behavior. These documents can be 100–200+ lines.
   - **Architecture plan**: A higher-level description of structural decisions, component interactions, and data flow

These documents are saved to the project and become the authoritative specification for the implementation.

---

## Developer Responsibility: Reading the Plans

The planning documents Bob generates are not suggestions — they are what Bob will actually build. Approving a plan without reading it transfers responsibility for incorrect or misaligned implementations to the developer.

**Required before proceeding:**

- Read both the implementation plan and the architecture plan in full
- Verify that the described behavior matches the intended feature
- Check that testing requirements are appropriate
- Correct any misunderstandings by revising the prompt or asking follow-up questions

> "Read those plans. That is where your responsibility as a developer comes in."

This review step is the most important quality gate in the agentic workflow. The quality of the final implementation is directly tied to the quality of the approved plan.

---

## Code Mode: Implementing the Plan

After the plan is reviewed and approved, implementation begins in a **new conversation**. Starting a new conversation clears the context window, which:

- Prevents earlier planning discussion from consuming token budget
- Keeps the implementation context focused and clean
- Reduces the risk of the model conflating planning and implementation instructions

**To reference the planning documents in the new conversation**, use context mentions:

```
@/path/to/implementation-plan.md
@/path/to/architecture-plan.md
```

Bob reads the referenced documents and implements the feature according to the approved specification.

**To switch to Code mode:**

1. Start a new conversation in the agentic sidebar
2. Select **Code** from the mode selector
3. Reference the planning documents using `@/path/to/file`
4. Send the implementation request

In Code mode, Bob has full access to file operations and command execution, allowing it to create, modify, and run code across the entire codebase.

---

## Auto-Approval Settings

Bob requires approval for actions such as writing files, running terminal commands, and executing tests. The auto-approval setting controls whether these actions proceed automatically or pause for review.

| Setting | Behavior | When to Use |
|---------|----------|-------------|
| **Manual approval** | Every action requires explicit confirmation | Sensitive codebases, unfamiliar tasks |
| **Auto-approve** | Bob proceeds without interruption | Controlled demos, trusted environments |
| **Hybrid** | Auto-approve low-risk actions; prompt for riskier ones | Day-to-day development |

**Risks of full auto-approval:**

- Bob can execute arbitrary terminal commands without review
- Mistakes in the plan propagate to the codebase without intervention points
- Unintended file deletions or overwrites may occur

For most development work, a hybrid approach is recommended: auto-approve file reads and writes while requiring confirmation for command execution.

> Configure auto-approval settings in Bob's settings panel based on the sensitivity of the project and the level of trust placed in the approved plan.

---

## Example: Implementing Seat Classes in Galaxium Travels

The following example demonstrates the full Plan → Code workflow applied to a cross-cutting feature affecting the frontend, backend, and database.

**Feature:** Add seat class tiers to a flight booking system (Economy, Business, Galaxium class)

### Plan Phase

1. Switch to **Plan mode** in the agentic sidebar
2. Submit prompt:
   > "I want different classes of seats for Galaxium Travels. They're supposed to be an Economy, a Business class, and a Galaxium class. Help me make a plan to implement this."
3. Bob reads relevant files and asks clarifying questions about behavior, pricing logic, and UI presentation
4. Bob generates:
   - `seat-class-implementation-plan.md` — ~160 lines covering data model, API changes, frontend components, and test cases
   - `seat-class-architecture.md` — structural overview of how seat class data flows through the system
5. **Read both documents** and verify the plan matches the intended behavior

### Implementation Phase

1. Start a **new conversation** to clear the context window
2. Switch to **Code mode**
3. Reference the planning documents:
   ```
   @/seat-class-implementation-plan.md @/seat-class-architecture.md
   ```
4. Submit the implementation request
5. Bob implements the feature across frontend, backend, and database layers autonomously

**Result:** The seat class selector becomes available in the booking UI, with Economy, Business, and Galaxium class options reflected throughout the system.

---

## Context Mentions

When referencing files in the agentic sidebar, use context mentions rather than copying and pasting content:

| Mention syntax | Effect |
|----------------|--------|
| `@/path/to/file.js` | Includes the full contents of a specific file |
| `@/path/to/folder` | Includes all files within a directory |
| `@problems` | Includes current VS Code Problems panel diagnostics |
| `@terminal` | Includes recent terminal output |

Context mentions are resolved when the message is sent, giving Bob precise, targeted information without consuming excess context on unrelated files.

---

## Key Takeaways

- The agentic sidebar is the most capable Bob interface, suited for complex, multi-file features
- Always begin complex work in **Plan mode** to generate a specification before any code is written
- **Read the generated plans in full** — they define what Bob will build
- Start a **new conversation** before switching to Code mode to keep the context window focused
- Use **context mentions** (`@/path/to/file`) to reference planning documents in the implementation conversation
- Configure **auto-approval settings** deliberately based on project sensitivity and task complexity
- The Plan → new conversation → Code workflow is the standard pattern for feature development with Bob
