# Understanding the Context Window

![type:video](./_videos/4-1_context_window.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* digs into the details of IBM Bob's context window. *[4 min]*

<br/>

## Overview

The context window is the total amount of information a large language model can hold in memory during a single conversation. Understanding how the context window fills up — and how to manage it — is essential for getting consistent, high-quality results from Bob, particularly on complex or long-running tasks.

---

## What Is a Context Window?

The models powering Bob provide a context window of **200,000 tokens**, which is approximately **150,000 words** — roughly the length of *The Fellowship of the Ring*. Every new conversation starts with this full capacity available.

The context window holds everything: instructions, file contents, conversation history, and Bob's responses. Once the window fills, the oldest content must be dropped or summarized to make room for new content.

---

## What Fills the Context Window

Content is loaded into the context window in the following order at the start of every conversation:

| Order | Content | Notes |
|-------|---------|-------|
| 1 | Bob system prompt | Hidden from the user; contains Bob's core instructions |
| 2 | Mode description | The definition of the currently active mode (Code, Plan, custom, etc.) |
| 3 | Rules | Content from all files in `.bob/rules/` |
| 4 | MCP tool definitions | Can be very large depending on the number and complexity of connected MCP servers |
| 5 | Conversation messages | User prompts and Bob's responses |
| 6 | File reads and writes | Contents of files Bob reads or produces during the conversation |

MCP tool definitions deserve special attention — they can consume a significant portion of the context window before the first message is sent, depending on how many MCP servers are configured.

---

## What Happens When the Context Window Fills

When the 200,000-token limit is reached, Bob does not stop or error. Instead:

1. A new conversation is started automatically in the background
2. Bob generates a summary of the previous conversation
3. The summary is prepended to the new conversation
4. Bob seamlessly continues responding

This process is transparent to the user but has important implications for quality and cost.

---

## Why Context Management Matters

### Token Cost

Tokens are the unit of consumption for Bob (measured in Bob coins). Longer conversations and larger file reads consume more tokens. Keeping conversations focused reduces cost.

### Summarization Is Lossy

Automatic summarization is not lossless. When a conversation exceeds the context window and is summarized, specific technical details, intermediate reasoning, and nuanced context may be lost. A summary is always less precise than the original conversation.

This can affect implementation quality if critical constraints or edge cases were discussed earlier in the conversation but are not faithfully preserved in the summary.

### Quality Degrades Above ~100K Tokens

Models do not maintain uniform quality across the full 200,000-token range. As the context window fills, response quality noticeably declines — particularly past the ~100,000-token mark. A conversation that uses 50,000 tokens will generally produce better output than one that uses 180,000 tokens, all else being equal.

---

## Strategy: Persistent Artifacts

The most effective approach to context management is the **persistent artifacts** pattern:

1. Break complex tasks into discrete steps
2. Each step produces a saved output (a file on disk)
3. Start a new conversation for each major step, referencing the saved output

This approach prevents any single conversation from consuming excessive context while preserving all important information as durable files that can be referenced in future conversations.

### Example: Seat Class Implementation

The seat class feature (Economy, Business, Galaxium) was implemented using this pattern:

| Conversation | Task | Output |
|-------------|------|--------|
| 1 | Plan the feature | `seat-class-implementation-plan.md`, `seat-class-architecture.md` |
| 2 | Implement based on plan | Code changes across frontend, backend, and database |

Result: The implementation conversation consumed **88,000 of 200,000 tokens** — well within the range where quality remains high. The two-conversation split prevented the planning discussion from competing with the implementation for context space.

---

## Practical Guidelines

- **Start new conversations when switching tasks.** A conversation about planning should not bleed into implementation.
- **Prefer direct file references over copying content.** Use `@/path/to/file` rather than pasting file contents into the prompt.
- **Keep MCP configurations lean.** Every MCP server's tool definitions consume context on every conversation start.
- **Monitor token usage.** Review conversation token consumption to identify which interactions are most expensive and adjust workflows accordingly.

---

## Key Takeaways

- The context window is 200,000 tokens (~150,000 words) — every conversation starts fresh with this capacity
- Context fills in order: system prompt → mode description → rules → MCP tools → messages → file reads/writes
- When context is exhausted, Bob auto-summarizes and continues — but summarization is lossy
- Quality noticeably degrades beyond ~100,000 tokens
- The persistent artifacts pattern (plan → save → new conversation → implement) is the primary strategy for managing context effectively
- Less context used = better output quality and lower cost
