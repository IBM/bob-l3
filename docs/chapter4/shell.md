# Bob Shell

![type:video](./_videos/4-2_bob_shell.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* showcases how to work with IBM Bob's shell and shell commands. *[4 min]*

<br/>

## Overview

Bob Shell is a terminal-based interface for IBM Bob that provides the same core capabilities as Bob IDE in a keyboard-driven, command-line form factor. It is installed separately from the VS Code extension and runs in any standard terminal. For developers comfortable in the terminal, Bob Shell offers workflows that are difficult or impossible to replicate in the IDE, including headless automation and running multiple Bob instances in parallel.

---

## Installation

Bob Shell is installed separately from Bob IDE. Installation instructions are available in the Bob documentation. Once installed, Bob Shell is invoked by running:

```bash
bob
```

Bob Shell prompts for IBM login credentials on first use. After successful authentication, the interactive shell session begins.

---

## Basic Usage

Bob Shell operates similarly to the Bob IDE chat interface. Natural language prompts are entered directly at the shell prompt, and Bob reads and modifies files in the current working directory.

**Example:**
```
Check the README and see if you can make any improvements.
```

Bob reads the file, makes changes, and reports what was done — exactly as it would in the IDE sidebar.

### Shell Mode: Running Normal Commands

Within a Bob Shell session, prefix any command with `!` to drop into normal shell execution:

```
!git diff
!cat README.md
!ls -la
```

This allows switching between AI-assisted tasks and standard shell operations without leaving the Bob Shell session.

### Getting Help

```
/help
```

The `/help` command lists all available Bob Shell commands and options. This is the recommended starting point for new users navigating the interface for the first time.

---

## Auto-Approval Settings

By default, Bob Shell applies **stricter auto-approval settings** than Bob IDE. File writes and shell commands require explicit confirmation before proceeding. To allow a specific action, approve it when prompted. To allow all actions for the session, select the "always allow" option when prompted.

This default is intentional — Bob Shell is often used in environments (servers, CI pipelines, scripts) where unreviewed changes can have broader consequences than in a local IDE session.

---

## Three Reasons to Use Bob Shell

### 1. Keyboard Efficiency

Bob Shell eliminates mouse-driven interaction entirely. The entire workflow — navigating files, issuing commands, reviewing output, and prompting Bob — happens through the keyboard. For developers who have internalized terminal workflows, this creates a faster, more direct path from thought to action.

This efficiency takes time to develop but compounds significantly once established. Bob Shell can serve as a full daily driver replacement for Bob IDE once the interface becomes familiar.

### 2. Headless Mode (Automation and Pipeline Integration)

Bob Shell supports **headless mode**, where input is piped directly to Bob rather than entered interactively. This makes Bob available as a component in automated workflows.

**Syntax:**
```bash
cat error.log | bob "explain this"
```

**Use cases:**

| Scenario | Example |
|----------|---------|
| Build pipeline errors | Pipe compiler output to Bob for diagnosis and suggested fixes |
| Operational incidents | Pipe log files to Bob for triage |
| Automated analysis | Generate summaries or reports from file contents as part of a script |
| Error remediation | Let Bob attempt to fix minor errors autonomously and escalate complex ones |

Headless mode makes Bob a programmable component rather than only an interactive assistant. Combined with shell scripting, it opens a broad range of automation possibilities.

### 3. Parallelization

Because Bob Shell runs in a terminal, multiple independent instances can run simultaneously — one per terminal tab, pane, or multiplexer window. This is trivially simple to set up compared to any IDE-based approach.

**Example parallel setup:**

- Bob IDE with the normal agentic sidebar for exploratory work
- Bob Shell instance 1: implementing a backend change
- Bob Shell instance 2: writing tests for a separate component
- Bob Shell instance 3: generating documentation

Different tasks benefit from parallelization to varying degrees. Tasks with no shared state or file dependencies are ideal candidates. Bob Shell's terminal-based form factor makes this architecture practical without additional tooling.

---

## Choosing Between Bob IDE and Bob Shell

| Factor | Bob IDE | Bob Shell |
|--------|---------|-----------|
| Visual file exploration | Better | Limited |
| Keyboard-driven workflows | Good | Excellent |
| Automation and scripting | Not supported | Supported (headless mode) |
| Parallel instances | Difficult | Trivial |
| Getting started | Easier | Steeper learning curve |

The two interfaces are complementary. Many workflows benefit from running Bob IDE alongside one or more Bob Shell instances.

---

## Key Takeaways

- Bob Shell provides the same capabilities as Bob IDE in a terminal form factor
- Invoke with `bob`; use `!` prefix for normal shell commands within a session
- Auto-approval is strict by default in Bob Shell — confirm actions as prompted
- **Keyboard efficiency**: Faster for terminal-native developers once the interface is learned
- **Headless mode**: `cat file | bob "prompt"` enables automation, pipeline integration, and scripted workflows
- **Parallelization**: Multiple Bob Shell instances can run simultaneously for independent tasks
- Bob Shell and Bob IDE are complementary — use both for different parts of the workflow
