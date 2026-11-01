Changelog

All notable changes to `context-lean` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[1.0.1] - 2026-11-01

Added
- Interactive zero-dependency tokenomics playground (`playground.html` & `index.html`) deployed to GitHub Pages.
- URL protection engine (`URL_REGEX` masking) ensuring technical endpoints and query parameters remain byte-for-byte intact.
- Inline code ticks isolation (`` `code` ``) preserving technical strings from dictionary filler removal.
- Sentence capitalization and punctuation normalization after stripping opener fluff.
- GitHub CodeQL SAST automated security scanning workflow (`.github/workflows/codeql.yml`).
- Interactive Mermaid architecture diagram in `docs/ARCHITECTURE.md`.
- Multi-OS CI matrix across Ubuntu, Windows, and macOS with Node.js 20.x & 22.x LTS.
- Least-privilege permissions hardening (`contents: read`) in GitHub Actions workflows.

[1.0.0] - 2026-10-29

Added
- Initial release of `context-lean`.
- CLI commands: `stats` and `minify`.
- Deterministic code block extraction and verbatim preservation engine.
- Fluff stripping regex pipeline for conversational preamble.
- Emoji pruning for multi-byte Unicode characters.
- Whitespace normalization and line reduction.
- Test suite via native `node:assert`.
- Agent skill definition in `SKILL.md`.
