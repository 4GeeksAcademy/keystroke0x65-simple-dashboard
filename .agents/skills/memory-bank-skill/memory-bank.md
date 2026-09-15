# Skill: Memory Bank

Maintains a `memory-bank/` directory at project root with concise project documentation. Updated only on request.

## Files

| File                            | Purpose                                                |
| ------------------------------- | ------------------------------------------------------ |
| `memory-bank/project.md`        | Project overview, goals, tech stack                    |
| `memory-bank/architecture.md`   | File structure, dependencies, design decisions         |
| `memory-bank/active-context.md` | Current task, recent changes, next steps               |
| `memory-bank/decisions.md`      | Key decisions with rationale                           |
| `memory-bank/design.md`         | Design system — colors, tokens, typography, components |
| `memory-bank/tasks.md`          | Task breakdown — planned, in-progress, completed items |

## Update Process

1. Read all project files to gather current state (source files, configs, README, etc.)
2. Re-read existing memory-bank files if they exist
3. Rewrite each file with only what changed — don't rewrite unchanged sections
4. Keep every entry concise: 1-3 sentences per item, no fluff

## Style Rules

- No greetings, no praise, no commentary
- Facts only — what exists, what was decided, what to do next
- Bullet points and short sections preferred
- If a file hasn't changed, write: `(unchanged since last update)`

## Initialization

If `memory-bank/` doesn't exist, create all 5 files with a single scan of the project.
