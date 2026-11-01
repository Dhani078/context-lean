# context-lean

[![CI Status](https://github.com/Dhani078/context-lean/actions/workflows/ci.yml/badge.svg)](https://github.com/Dhani078/context-lean/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Dependencies: 0](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

> Zero-dependency Markdown and prompt context compressor cutting token consumption by 30-60% without losing technical instructions.

Compresses `CLAUDE.md`, `AGENTS.md`, `README.md`, and LLM system prompts by stripping conversational filler, preamble fluff, and multi-byte decorative emojis while preserving code blocks, paths, and technical parameters 100% verbatim.

---

## Features

* **Code-Safe**: Code fences (```````) and inline backticks are preserved verbatim without altering indentation or characters.
* **Fluff Stripping**: Removes conversational filler phrases ("Please note that...", "Basically...", "In order to...").
* **Emoji Pruning**: Eliminates multi-byte unicode emojis that waste 2-4 tokens each in LLM BPE tokenizers.
* **Zero Dependencies**: Pure Node.js standard library. Fast, deterministic, and offline-ready.

---

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

---

## Configuration (`.contextleanrc.json`)

Configure custom fluff patterns or emoji stripping options in `.contextleanrc.json`:

```json
{
  "stripEmojis": true,
  "customFluffWords": [
    "furthermore",
    "nevertheless",
    "needless to say"
  ]
}
```

---

## Pre-commit Integration

Add to `.pre-commit-config.yaml`:

```yaml
repos:
  - repo: https://github.com/Dhani078/context-lean
    rev: v1.0.0
    hooks:
      - id: context-lean
```

---

## Documentation

* [Specification](SPEC.md)
* [Architecture & Flow](docs/ARCHITECTURE.md)
* [Compression Rules](docs/COMPRESSION_RULES.md)
* [Token Benchmarks](docs/BENCHMARKS.md)

---

## License

MIT © [Dhani078](https://github.com/Dhani078)
