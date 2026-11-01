API Reference

`context-lean` provides a programmatic interface for compressing markdown text and analyzing prompt token density.

Installation

```bash
npm install --save-dev context-lean
```

Import

```javascript
import { analyzeContext, compressMarkdown, RULES } from "context-lean";
```

Functions

`compressMarkdown(rawMarkdown: string): string`
Applies rule-based context compaction:
- Strips decorative emojis
- Trims redundant filler language
- Eliminates excessive blank lines
- Preserves code blocks (`` `code` `` and ```` ``` ````) and technical identifiers verbatim.

- Parameters: `rawMarkdown` (string)
- Returns: Compressed markdown string

```javascript
const compressed = compressMarkdown("# Hello! 🚀\n\nBasically we simply need to run the build.");
// Returns: "# Hello!\nWe need to run the build."
```

`analyzeContext(rawMarkdown: string): ContextAnalysis`
Calculates character counts, token estimates, and token reduction potential.

- Parameters: `rawMarkdown` (string)
- Returns: `ContextAnalysis` object

```javascript
const stats = analyzeContext(rawMarkdown);
console.log(stats);
```

Types

`ContextAnalysis`
```typescript
interface ContextAnalysis {
  originalLength: number;
  compressedLength: number;
  originalTokens: number;
  compressedTokens: number;
  savedTokens: number;
  percentSaved: number;
}
```

`CompressionRule`
```typescript
interface CompressionRule {
  id: string;
  name: string;
  apply: (text: string) => string;
}
```
