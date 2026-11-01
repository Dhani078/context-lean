# Security Model: context-lean

Security guarantees, boundary validation, and integrity proofs in `context-lean`.

## 1. Zero Prompt-Injection Guarantee

`context-lean` does not execute LLM inferences, API calls, or dynamic scripts to perform minification. It relies entirely on deterministic regular expressions:
- **No Hallucinations**: Words are only removed if explicitly matching the audited fluff pattern list.
- **No Injections**: Untrusted markdown input cannot alter execution flows or leak environment variables.
- **Offline / Air-Gapped Safe**: Runs 100% locally on the host machine without network access.

## 2. Integrity Verification Matrix

| Data Class | Preservation Method | Guarantee |
| :--- | :--- | :--- |
| **Shell Commands** | Fenced code quarantine (`` ````bash ... ```` ``) | 100% byte-for-byte exact |
| **API Endpoints & URLs** | URL quarantine regex (`https?://...`) | Query parameters, endpoints preserved |
| **Environment Variables** | Inline code quarantine (`` `DATABASE_URL` ``) | String literal preserved |
| **Markdown Headings** | Header regex isolation (`#`, `##`, `###`) | Hierarchy preserved |
| **JSON Contracts** | Fenced code quarantine (`` ````json ... ```` ``) | Syntax and keys untouched |
