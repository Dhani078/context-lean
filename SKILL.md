---
name: context-lean
description: Minify markdown documentation and agent instructions to cut token usage 30-60% without losing technical substance.
version: 1.0.0
author: Dhani078
---

# Context Lean Skill

Use when maintaining `CLAUDE.md`, `AGENTS.md`, or system prompt files to prevent context window bloat and reduce token costs.

## Instructions

1. Before committing or injecting documentation into prompt context, check stats:
   ```bash
   npx context-lean stats CLAUDE.md
   ```
2. Compress instructions to eliminate conversational filler and emojis while retaining exact paths and code commands:
   ```bash
   npx context-lean minify CLAUDE.md -o CLAUDE.md
   ```
