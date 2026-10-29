# Architecture: context-lean

`context-lean` optimizes developer prompt tokens through a two-phase AST isolation pipeline.

## Architectural Flow

```
Raw Markdown/Instructions 
       │
       ▼
[Phase 1: Code Block Quarantine]
  - Regex isolates ```...``` and `...`
  - Stores blocks in protected buffer
  - Replaces text with __CODE_BLOCK_N__ tokens
       │
       ▼
[Phase 2: Stream Token Minifier]
  - Unicode emoji pruning (strips multi-byte glyphs)
  - Filler phrase pruning ("in order to", "basically", etc.)
  - Whitespace & blank line compaction
       │
       ▼
[Phase 3: Code Block Re-hydration]
  - Restores __CODE_BLOCK_N__ verbatim from quarantine buffer
       │
       ▼
Output: Minified Markdown
```

## Guarantees

* **Zero Regressions**: Source code examples inside fenced code blocks are never altered by even a single character.
* **Deterministic Output**: Fast synchronous execution via native Node.js string operations.
