# Specification: `context-lean`

## 1. Problem Statement
Developer instruction files and documentation frequently carry significant conversational filler and decorative elements that consume input context windows without adding technical value.

`context-lean` provides a deterministic, code-safe context minifier designed for developer instruction files (`INSTRUCTIONS.md`, `AGENTS.md`, `RULES.md`, `README.md`) and system prompts.

## 2. Technical Architecture
1. **Extraction Phase**: Regex locates all fenced code blocks (```) and inline code spans (`...`), replacing them with indexed placeholder identifiers.
2. **Minification Phase**:
   - Strips decorative emojis (`EMOJI_REGEX`).
   - Removes conversational fluff phrases.
   - Cleans orphaned punctuation and collapses redundant whitespace.
   - Preserves capitalization on sentence openers.
3. **Restoration Phase**: Exact code strings are restored from the cache table.

## 3. Guarantees
- Zero dependencies: runs on Node.js standard library.
- Zero loss on executable code, paths, variables, URLs, and commands.
- Token count calculation matches standard 4-characters-per-token baseline.
