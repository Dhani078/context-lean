# Troubleshooting

Ensuring safe context compaction with `context-lean`.

## 1. Preserving Code Snippets and Identifiers

**Concern**: Will code blocks or URLs be modified during minification?
**Guarantee**: `context-lean` uses protected placeholder tokens (`___CODE_BLOCK_N___` and `___INLINE_CODE_N___`). All backtick-fenced code blocks, inline code spans, URLs, and JSON examples are fully preserved byte-for-byte.

## 2. Preventing Over-Compression

**Problem**: Technical terms contain words like "basically" or "simply" that form part of an official brand name or API string.
**Solution**:
Wrap any critical phrase in backticks: `` `basically` `` or `` `simply` ``. `context-lean` treats all quoted and backtick-fenced tokens as literal code.

## 3. Markdown Formatting Integrity

**Problem**: Does minifying remove essential list markers or headings?
**Answer**: No. `context-lean` only collapses 3+ consecutive newlines down to 2 newlines to preserve Markdown paragraph structure, bulleted lists, and heading hierarchies.
