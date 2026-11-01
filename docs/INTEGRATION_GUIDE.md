# Integration Guide

Automating context compression across developer tools and agent frameworks.

## 1. Pre-commit Hook

Automatically compact documentation files whenever modified:

```bash
# In .husky/pre-commit
npx context-lean minify CLAUDE.md -o CLAUDE.md
git add CLAUDE.md
```

## 2. CI/CD Token Budget Enforcement

Enforce token budget limits in GitHub Actions before deploying prompts:

```yaml
name: Context Token Budget Check

on:
  push:
    paths:
      - 'prompts/**'
      - 'CLAUDE.md'
      - 'AGENTS.md'

jobs:
  token-budget:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Verify Token Density
        run: |
          npx context-lean stats CLAUDE.md
```

## 3. Cursor Rules & Claude Code Setup

Optimize instructions injected on every turn:

```bash
# Optimize Cursor rule files
npx context-lean minify .cursorrules -o .cursorrules

# Optimize repository agent instructions
npx context-lean minify AGENTS.md -o AGENTS.md
```
