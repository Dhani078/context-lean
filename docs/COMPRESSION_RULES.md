# Compression Rules: context-lean

Detailed breakdown of patterns eliminated during minification.

## 1. Conversational Fillers
Phrases that consume tokens without delivering actionable instructions:
* `^(?:sure|certainly|of course|i'd be happy to)[^.\n]*[.:]`
* `\b(?:it is important to note that|it should be noted that|please make sure to|keep in mind that)\b`
* `\b(?:in order to|with the purpose of)\b` -> simplified
* `\b(?:basically|actually|essentially|simply|just|really)\b` -> pruned
* `^(?:hello|welcome to|thanks for using)[^.\n]*[.:]`

## 2. Decorative Emojis
Multi-byte unicode code points (`\u{1F300}-\u{1F9FF}`) that often decode to 2-4 tokens per emoji in BPE tokenizers without technical utility.

## 3. Whitespace Compacting
* Collapsing 3+ consecutive newlines down to a single blank line.
* Trimming trailing line whitespaces.
