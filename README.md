# context-lean

Zero-dependency Markdown and prompt context compressor cutting token waste by 30-60%.

[![CI](https://github.com/Dhani078/context-lean/actions/workflows/ci.yml/badge.svg)](https://github.com/Dhani078/context-lean/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)
[![Node.js >= 20](https://img.shields.io/badge/node-%3E%3D20-green.svg)](#)

---

## Overview

Compresses `INSTRUCTIONS.md`, `AGENTS.md`, `README.md`, and system prompts by stripping conversational filler, preamble fluff, and multi-byte decorative emojis while preserving code blocks, paths, and technical parameters 100% verbatim.

## Features

- **Zero Dependencies**: Pure Node.js standard library.
- **Code Block Safety**: Protects all backtick-fenced blocks and inline literals byte-for-byte.
- **Measurable Token Savings**: Analyzes original and compressed token densities with `stats` command.
- **CI/CD Ready**: Automates token budget checks and pre-commit hooks.

## Quick Start

```bash
# Analyze token count and savings
npx context-lean stats INSTRUCTIONS.md

# Minify to stdout
npx context-lean minify docs/PROMPT.md

# Minify in-place
npx context-lean minify INSTRUCTIONS.md -o INSTRUCTIONS.md
```

## Documentation

- [API Reference](docs/API_REFERENCE.md)
- [CLI Usage](docs/CLI_USAGE.md)
- [Integration Guide](docs/INTEGRATION_GUIDE.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Compression Rules Reference](docs/COMPRESSION_RULES.md)
- [Benchmarks](docs/BENCHMARKS.md)
- [Tokenomics](docs/TOKENOMICS.md)
- [Roadmap](docs/ROADMAP.md)

## License

MIT © [Dhani078](https://github.com/Dhani078)
