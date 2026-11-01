**context-lean**

[![GitHub Release](https://img.shields.io/github/v/release/Dhani078/context-lean?color=blue)](https://github.com/Dhani078/context-lean/releases)
[![Live Demo](https://img.shields.io/badge/demo-live%20playground-success.svg)](https://dhani078.github.io/context-lean/)
[![CI](https://github.com/Dhani078/context-lean/actions/workflows/ci.yml/badge.svg)](https://github.com/Dhani078/context-lean/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)
[![Node.js >= 20](https://img.shields.io/badge/node-%3E%3D20-green.svg)](#)

---

**Interactive Browser Playground**

Test prompt compression live in your browser with real-time tokenomics counters:
- **Live Web App**: [https://dhani078.github.io/context-lean/](https://dhani078.github.io/context-lean/)
- Local file: Open [`playground.html`](playground.html) in any browser.

---

**Overview**

Compresses `INSTRUCTIONS.md`, `AGENTS.md`, `README.md`, and system prompts by stripping conversational filler, preamble fluff, and multi-byte decorative emojis while preserving code blocks, paths, and technical parameters 100% verbatim.

**Features**

- **Zero Dependencies**: Pure Node.js standard library.
- **Code Block Safety**: Protects all backtick-fenced blocks and inline literals byte-for-byte.
- **Measurable Token Savings**: Analyzes original and compressed token densities with `stats` command.
- **CI/CD Ready**: Automates token budget checks and pre-commit hooks.

**Quick Start**

```bash
# Analyze token count and savings
npx context-lean stats INSTRUCTIONS.md

# Minify to stdout
npx context-lean minify docs/PROMPT.md

# Minify in-place
npx context-lean minify INSTRUCTIONS.md -o INSTRUCTIONS.md
```

**Documentation**

* [Specification](SPEC.md)
* [Architecture & C4 Model](docs/ARCHITECTURE.md)
* [Data Flow Architecture](docs/DATA_FLOW.md)
* [Security Model & Integrity Proofs](docs/SECURITY_MODEL.md)
* [Token Density & Linguistic Entropy Analysis](docs/TOKEN_DENSITY_ANALYSIS.md)
* [Latency Impact Study & TTFT Benchmarks](docs/LATENCY_IMPACT_STUDY.md)
* [API Reference](docs/API_REFERENCE.md)
* [CLI Usage Guide](docs/CLI_USAGE.md)
* [Integration Guide](docs/INTEGRATION_GUIDE.md)
* [Troubleshooting](docs/TROUBLESHOOTING.md)
* [Real-World Examples](docs/EXAMPLES.md)
* [Compression Rules Reference](docs/COMPRESSION_RULES.md)
* [Speed Benchmarks](docs/BENCHMARKS.md)
* [Tokenomics Analysis](docs/TOKENOMICS.md)
* [Roadmap](docs/ROADMAP.md)
* [FAQ](docs/FAQ.md)

**License**

MIT © [Dhani078](https://github.com/Dhani078)
