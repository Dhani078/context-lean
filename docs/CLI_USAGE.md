# CLI Usage

`context-lean` command-line utility optimizes documentation and prompt context files.

## Syntax

```bash
npx context-lean [command] <file.md> [options]
```

## Commands

- `stats <file>`: Analyzes original vs compressed character length, estimated token counts, and token savings percentage.
- `minify <file>`: Compresses markdown. Prints output directly to `stdout`.
- `minify <file> -o <out.md>`: Saves compressed markdown directly to specified output file.
- `--help`, `-h`: Shows command usage help.

## Examples

### Analyze Token Density
```bash
npx context-lean stats INSTRUCTIONS.md
```

### Compress to stdout
```bash
npx context-lean minify docs/SYSTEM_PROMPT.md
```

### Minify in-place
```bash
npx context-lean minify AGENTS.md -o AGENTS.md
```

## Package.json Scripts
```json
{
  "scripts": {
    "optimize:context": "context-lean minify INSTRUCTIONS.md -o INSTRUCTIONS.md",
    "check:tokens": "context-lean stats INSTRUCTIONS.md"
  }
}
```
