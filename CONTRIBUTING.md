# Contributing to context-lean

Thank you for contributing to `context-lean`. We maintain strict standards to ensure zero external runtime dependencies and loss-free token optimization.

## Core Principles

1. **Zero Runtime Dependencies**: All features must rely solely on native Node.js standard libraries (`node:fs`, `node:path`, `node:process`). No third-party packages in `dependencies`.
2. **Maximum 200 Lines of Code Per File**: Modules must be modular, single-purpose, and maintainable.
3. **Loss-Free Code & URL Protection**: Never alter characters inside fenced code blocks, inline code ticks, or URLs.
4. **Deterministic Token Savings**: Rules must consistently reduce prompt fluff across varied Markdown layouts.

## Development Workflow

1. Clone and navigate to repo:
   ```bash
   git clone https://github.com/Dhani078/context-lean.git
   cd context-lean
   ```
2. Run test suite:
   ```bash
   npm test
   ```
3. Add or modify compression patterns in `src/compressor.js`.
4. Ensure new rules have unit test assertions in `tests/compressor.test.js`.
5. Submit a pull request.
