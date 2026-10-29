# context-lean

> Zero-dependency Markdown and prompt context compressor cutting token consumption by 30-60% without losing technical instructions.

Compresses `CLAUDE.md`, `AGENTS.md`, `README.md`, and LLM system prompts by stripping narrative conversational fluff, repeated headers, and decorative emojis while preserving code blocks, paths, and technical parameters 100% intact.

## Features

* **Code-Safe**: Code fences (```````) and inline backticks are preserved verbatim.
* **Fluff Stripping**: Removes conversational filler phrases ("Please note that...", "Basically...", "In order to...").
* **Emoji Stripping**: Eliminates multi-byte unicode emojis that waste valuable token budgets.
* **Zero Dependencies**: Pure Node.js standard library. Fast and deterministic.

## Installation & Usage

### 1. Check Token Stats

```bash
npx context-lean stats CLAUDE.md
```

### 2. Minify Context

Output to stdout:

```bash
npx context-lean minify CLAUDE.md
```

Write directly to file:

```bash
npx context-lean minify docs/RULES.md -o docs/RULES.lean.md
```

## Local Installation

```bash
npm install -D context-lean
```

## License

MIT © Dhani078
