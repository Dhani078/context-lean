**Examples**

Before and after minification comparisons using `context-lean`.

---

**Example 1: Agent Guidelines Document**

**Before (Original)**
```markdown
# Agent Guidelines 🚀✨

Please keep in mind that you should definitely make sure to run tests before committing.
In order to do this properly, basically you simply need to execute:

```bash
npm run test
```

It is really important that all tests pass without errors! 🎉
```

**After (context-lean)**
```markdown
# Agent Guidelines

Make sure to run tests before committing.
To do this properly, you need to execute:

```bash
npm run test
```

Important that all tests pass without errors!
```

*Results*:
- 3 decorative emojis removed.
- 5 filler phrases removed ("Please keep in mind that you should definitely", "In order to", "basically", "simply", "It is really").
- Bash command and code fence preserved 100% intact.

---

**Example 2: API Contract Documentation**

**Before (Original)**
```markdown
## Authentication Overview 🔑

Actually, in order to authenticate requests, you must pass a Bearer token in the header.
Basically, if you do not include this token, the server will simply respond with 401 Unauthorized.
```

**After (context-lean)**
```markdown
## Authentication Overview

To authenticate requests, you must pass a Bearer token in the header.
If you do not include this token, the server will respond with 401 Unauthorized.
```
