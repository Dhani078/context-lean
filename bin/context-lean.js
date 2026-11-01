#!/usr/bin/env node

import path from "node:path";
import fs from "node:fs";
import { analyzeContext, compressMarkdown } from "../src/compressor.js";

const rawArgs = process.argv.slice(2);
const isJson = rawArgs.includes("--json");
const args = rawArgs.filter(a => !a.startsWith("-") || a === "-o");

const command = args[0] || "stats";
const targetFile = args[1];

function printUsage() {
  console.log(`
context-lean - Token and context optimizer for AI documentation & prompts.

Usage:
  npx context-lean stats <file.md> [options]        Analyze token count and fluff percentage
  npx context-lean minify <file.md> [options]       Compress markdown and print to stdout
  npx context-lean minify <file.md> -o <out.md>     Save compressed output to file
  npx context-lean --help                           Show help

Options:
  --json       Output stats analysis as JSON
  -h, --help   Show help
`);
}

if (rawArgs.includes("-h") || rawArgs.includes("--help") || !targetFile) {
  printUsage();
  process.exit(0);
}

const resolvedPath = path.resolve(process.cwd(), targetFile);

if (!fs.existsSync(resolvedPath)) {
  console.error(`Error: File '${resolvedPath}' not found.`);
  process.exit(1);
}

const rawContent = fs.readFileSync(resolvedPath, "utf-8");

if (command === "stats") {
  const analysis = analyzeContext(rawContent);
  if (isJson) {
    console.log(JSON.stringify({ file: resolvedPath, ...analysis }, null, 2));
    process.exit(0);
  }
  console.log(`\n\x1b[36m[context-lean stats]\x1b[0m ${targetFile}`);
  console.log(`  Original Size      : ${analysis.originalLength} chars (~${analysis.originalTokens} tokens)`);
  console.log(`  Compressed Size    : ${analysis.compressedLength} chars (~${analysis.compressedTokens} tokens)`);
  console.log(`  Tokens Saved       : \x1b[32m~${analysis.savedTokens} tokens (${analysis.percentSaved}% reduction)\x1b[0m\n`);
} else if (command === "minify") {
  const outIndex = rawArgs.indexOf("-o");
  const compressed = compressMarkdown(rawContent);

  if (outIndex !== -1 && rawArgs[outIndex + 1]) {
    const outPath = path.resolve(process.cwd(), rawArgs[outIndex + 1]);
    fs.writeFileSync(outPath, compressed, "utf-8");
    if (!isJson) {
      console.log(`\x1b[32m✔ Compressed context written to ${outPath}\x1b[0m`);
    } else {
      console.log(JSON.stringify({ file: outPath, status: "written" }));
    }
  } else {
    process.stdout.write(compressed + "\n");
  }
} else {
  printUsage();
  process.exit(1);
}
