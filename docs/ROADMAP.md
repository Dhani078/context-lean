Roadmap

Upcoming milestones for `context-lean`.

v1.0.0 (Current)
- Deterministic regex-based filler phrase elimination.
- Decorative emoji removal.
- Code block and inline literal isolation.
- Fast character and token estimation (~4 chars/token).
- Zero external dependencies.

v1.1.0 (Upcoming)
- Support for AST-based Markdown parsing for table whitespace alignment.
- YAML / TOML frontmatter preservation flag.
- Custom stop-word dictionary support via `.contextleanrc.json`.

v1.2.0
- Model-specific tokenizers (optional integration with tiktoken/cl100k_base or o200k_base).
- Batch directory minification mode: `context-lean minify docs/ -o dist/docs/`.

v2.0.0
- Semantic losslessness validation: verification loop using embeddings or LLM judge to verify instruction recall remains 100%.
