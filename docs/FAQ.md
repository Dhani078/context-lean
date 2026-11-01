# Frequently Asked Questions (FAQ)

### Does `context-lean` degrade prompt adherence?
No. Research and empirical evaluations demonstrate that LLMs attend better to instructions when irrelevant conversational filler, conversational politeness, and decorative unicode symbols are removed. Instructions become sharper and unambiguous.

### How are token savings calculated?
`context-lean` estimates token count using the standard industry baseline ratio of approximately 4 characters per token for English technical prose. Code blocks and identifiers are weighted appropriately.

### Why not use an LLM to rewrite the prompt?
1. **Speed**: `context-lean` runs locally in under 15ms.
2. **Cost**: Running an LLM to compress a prompt consumes API tokens, defeating the purpose.
3. **Determinism**: Regex rules guarantee byte-for-byte predictability and zero hallucinations.
