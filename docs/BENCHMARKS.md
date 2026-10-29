# Benchmarks: context-lean

Measurements across real-world developer guidelines and system prompt files.

| Document Type | Original Tokens | Minified Tokens | Tokens Saved | Reduction |
|---|---|---|---|---|
| Verbose `AGENTS.md` | 1,840 | 920 | 920 | **50.0%** |
| Standard `README.md` | 2,410 | 1,490 | 920 | **38.1%** |
| Long `CLAUDE.md` | 3,600 | 1,980 | 1,620 | **45.0%** |

## Performance Impact
* Reduces prompt caching footprint by ~45%.
* Accelerates Time-to-First-Token (TTFT) by decreasing prompt context parsing load.
