import assert from "node:assert";
import { compressMarkdown, analyzeContext } from "../src/compressor.js";

const sampleInput = `
# Project Guide 🚀

Hello! Welcome to our project documentation.
Basically, it is important to note that you must configure environment variables in order to run the app.

\`\`\`bash
npm run dev --port=3000
\`\`\`

Please make sure to check the database connection.
`;

const analysis = analyzeContext(sampleInput);
assert.strictEqual(analysis.savedTokens > 0, true, "Should save tokens");
assert.strictEqual(analysis.compressed.includes("npm run dev --port=3000"), true, "Code blocks must be preserved intact");
assert.strictEqual(analysis.compressed.includes("🚀"), false, "Decorative emoji should be stripped");
assert.strictEqual(analysis.compressed.includes("Basically"), false, "Filler words should be stripped");

console.log("All context-lean tests passed!");
