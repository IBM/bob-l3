# Literate Coding

![type:video](./_videos/2-2_literate_coding.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* showcases how to work with IBM Bob's literate coding capabilities. *[2 min]*

<br/>

## Overview

Literate coding is a targeted code modification feature in IBM Bob that allows developers to write natural language instructions directly within code files. This provides precise, localized changes by describing modifications inline, similar to writing comments.

---

## Accessing Literate Coding Mode

Access literate coding through the magic wand icon in the VS Code editor. This enables you to:

- Write natural language instructions at specific code locations
- Target exact sections of code for modification
- Handle changes across multiple locations within a single file

---

## How It Works

1. Position your cursor at the code location requiring modification
2. Click the magic wand icon to enter literate coding mode
3. Type natural language instructions describing the desired change
4. For changes spanning multiple locations, add additional instruction lines at each position
5. Click "Generate" to produce the modifications

---

## The Diff View

Bob presents changes in a diff view interface showing:

- **Added code**: New lines introduced
- **Removed code**: Existing lines to be deleted
- **Context**: Surrounding code for understanding scope

Review all changes before accepting or rejecting them.

---

## Use Cases

Literate coding is effective for:

- **Adding wrapper logic**: Retry mechanisms, error handling, or logging around existing code
- **Refactoring specific blocks**: Modifying targeted sections while preserving surrounding logic
- **Quick targeted modifications**: Precise changes to specific functions without affecting broader structure

---

## Example Scenario

**Problem**: Backend timeouts when fetching flight information.

**Solution**: Use literate coding to add retry logic.

1. Identify the API call location
2. Enter literate coding mode
3. Write: "Add retry logic with 3 attempts and exponential backoff"
4. Review the generated diff
5. Accept if requirements are met

---

## Best Practices

- **Be specific**: Provide clear, detailed instructions
- **Review before accepting**: Examine the diff view carefully
- **Use for localized changes**: Best for single-file modifications
- **Commit first**: Use version control for easy rollback

---

## Key Takeaways

- Literate coding enables precise, natural language-driven code modifications
- The diff view ensures full visibility and control over changes
- Most effective for targeted, localized modifications within a single file
- For multi-file changes or architectural restructuring, use Code mode instead