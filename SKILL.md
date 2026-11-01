---
name: context-lean
description: Minify markdown documentation and agent instructions to cut token usage 30-60% without losing technical substance.
version: 1.0.1
author: Dhani078
---

**Context Lean Skill**

Use when maintaining `INSTRUCTIONS.md`, `AGENTS.md`, or system prompt files to prevent context window bloat and reduce token costs.

**Instructions**

1. Before committing or injecting documentation into prompt context, check stats:
   ```bash
   npx context-lean stats INSTRUCTIONS.md
   ```
2. Compress instructions to eliminate conversational filler and emojis while retaining exact paths and code commands:
   ```bash
   npx context-lean minify INSTRUCTIONS.md -o INSTRUCTIONS.md
   ```
