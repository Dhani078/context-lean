# Data Flow Architecture: context-lean

Data pipeline and token masking state machine in `context-lean`.

## 1. Stream Processing State Machine

```mermaid
stateDiagram-v2
    [*] --> InputBuffer : UTF-8 Markdown text
    InputBuffer --> CodeQuarantine : Mask ```...``` & `...`
    CodeQuarantine --> URLQuarantine : Mask https://...
    URLQuarantine --> EmojiStripper : Unicode regex sweep
    EmojiStripper --> FluffStripper : Regex vocabulary pass
    FluffStripper --> PunctuationNormalizer : Clean leading , ; :
    PunctuationNormalizer --> CapitalizationPass : Sentence opener uppercase
    CapitalizationPass --> CodeRehydration : Replace placeholders
    CodeRehydration --> OutputBuffer : Minified markdown
    OutputBuffer --> [*]
```

## 2. Token Masking Invariants

To guarantee code and URL safety:
1. **Fenced Code Blocks**: `/(```[\s\S]*?```)/g` are extracted first to prevent nested inline ticks from corrupting blocks.
2. **Inline Code Spans**: `/(`[^`\n]+`)/g` are extracted second.
3. **HTTP/HTTPS URLs**: `/https?:\/\/[^\s<>()"']+/g` are extracted third.
4. **Placeholder Tokens**: Masked entities use `__PROTECTED_BLOCK_N__`, where $N \in \mathbb{N}$ indexes the original byte sequence in memory.
