# Architecture: context-lean

`context-lean` optimizes developer prompt tokens through a three-phase isolation pipeline.

## Architectural Flow

```mermaid
flowchart TD
    A[Raw Markdown / Instructions] --> B[Phase 1: Quarantine Engine]
    
    subgraph Phase 1: Quarantine Buffer
        B1[Fenced Code Blocks ```...```]
        B2[Inline Code Spans `...`]
        B3[Technical URLs https://...]
    end
    
    B --> B1
    B --> B2
    B --> B3
    
    B1 --> C[Protected Buffer Cache<br/>__PROTECTED_BLOCK_N__]
    B2 --> C
    B3 --> C
    
    C --> D[Phase 2: Stream Token Minifier]
    
    subgraph Phase 2: Sanitization
        D1[Unicode Emoji Stripper]
        D2[Fluff & Filler Phrase Pruning]
        D3[Punctuation & Capitalization Normalizer]
        D4[Whitespace & Newline Compaction]
    end
    
    D --> D1
    D1 --> D2
    D2 --> D3
    D3 --> D4
    
    D4 --> E[Phase 3: Code Rehydration]
    E -. Restores Blocks Verbatim .-> C
    E --> F[Output: Minified Context<br/>30-60% Tokens Saved]
```

## Guarantees

* **Zero Regressions**: Source code examples inside fenced code blocks and inline literals are never altered by even a single character.
* **URL Safety**: Query parameters and endpoint paths containing dictionary words remain completely intact.
* **Deterministic Output**: Fast synchronous execution via native Node.js string operations.
