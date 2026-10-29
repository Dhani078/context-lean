# Specification: context-lean

## 1. Scope & Objective

`context-lean` is a deterministic, code-safe context minifier designed for developer instruction files (`CLAUDE.md`, `AGENTS.md`, `RULES.md`, `README.md`) and system prompts.

Its objective is to cut prompt token consumption by 30% - 60% without dropping technical commands, file paths, parameters, or architectural constraints.

## 2. Protected Constructs

The minification engine strictly guarantees that the following elements are never modified or compressed:
* Fenced code blocks (```````)
* Inline backticks (``` `foo()` ```)
* Shell commands, CLI arguments, and flags
* Absolute and relative file paths
* URLs and API endpoints
* Technical configuration values and environment keys

## 3. Transformation Pipeline

1. **Extraction**: Fenced code blocks and inline code spans are extracted and replaced with unique indexed placeholders (`__CODE_BLOCK_N__`).
2. **Emoji Stripping**: Multi-byte unicode emojis that consume 2-4 tokens each without adding technical value are pruned.
3. **Conversational Padding Stripping**: Conversational phrasing ("Please note that...", "In order to...", "Basically...", "Welcome to...") is eliminated.
4. **Whitespace Collapsing**: Redundant empty lines and trailing spaces are collapsed to single blank delimiters.
5. **Restoration**: Code block placeholders are replaced with their verbatim original source text.

## 4. Evaluation Metrics

* **Original Tokens**: Heuristic token calculation (`ceil(chars / 4)`).
* **Compressed Tokens**: Token count after pipeline execution.
* **Reduction Percentage**: Measured percentage of saved context tokens.
