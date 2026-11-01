import assert from "node:assert";
import { compressMarkdown, analyzeContext, estimateTokens } from "../src/compressor.js";

const sampleInput = `
# Project Guide 🚀

Hello! Welcome to our project documentation.
Basically, it is important to note that you must configure environment variables in order to run the app.

\`\`\`bash
npm run dev --port=3000
\`\`\`

Please make sure to check the database connection.
`;

// Test 1: Basic compression
const analysis = analyzeContext(sampleInput);
assert.strictEqual(analysis.savedTokens > 0, true, "Should save tokens");
assert.strictEqual(analysis.compressed.includes("npm run dev --port=3000"), true, "Code blocks must be preserved intact");
assert.strictEqual(analysis.compressed.includes("🚀"), false, "Decorative emoji should be stripped");
assert.strictEqual(analysis.compressed.includes("Basically"), false, "Filler words should be stripped");

// Test 2: Inline code preservation
const inlineInput = "The word `basically` and `simply` are code literals.";
const inlineComp = compressMarkdown(inlineInput);
assert.strictEqual(inlineComp.includes("`basically`"), true, "Inline code ticks must be preserved");
assert.strictEqual(inlineComp.includes("`simply`"), true, "Inline code ticks must be preserved");

// Test 3: URL preservation
const urlInput = "Visit https://api.service.io/v1/auth?simply=true for auth details.";
const urlComp = compressMarkdown(urlInput);
assert.strictEqual(urlComp.includes("https://api.service.io/v1/auth?simply=true"), true, "URLs must be preserved intact");

// Test 4: Sentence capitalization after stripping openers
const sentenceInput = "In order to configure tokens, you must edit `.env`.";
const sentenceComp = compressMarkdown(sentenceInput);
assert.strictEqual(/^[A-Z]/.test(sentenceComp), true, "Sentence must start with capital letter");

// Test 5: Token estimator
assert.strictEqual(estimateTokens("abcd"), 1);
assert.strictEqual(estimateTokens(""), 0);

console.log("All context-lean tests passed (Basic, Inlines, URLs, Grammar & Tokens suites)!");
