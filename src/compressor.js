// context-lean compressor engine
// ponytail: rule-based stream compressor; add BPE tokeniser if exact token budgeting is needed.

const FLUFF_PATTERNS = [
  /^(?:sure|certainly|of course|i'd be happy to|in this guide we will)[^.\n]*[.:]/gmi,
  /\b(?:it is important to note that|it should be noted that|please make sure to|keep in mind that)\b/gi,
  /\b(?:in order to|with the purpose of)\b/gi,
  /\b(?:basically|actually|essentially|simply|just|really)\b/gi,
  /^(?:hello|welcome to|thanks for using)[^.\n]*[.:]/gmi
];

const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;

export function estimateTokens(text) {
  // ~4 characters per token heuristic
  return Math.ceil(text.length / 4);
}

export function compressMarkdown(rawText) {
  // 1. Separate fenced code blocks so code is untouched
  const codeBlocks = [];
  const placeholderText = rawText.replace(/(```[\s\S]*?```|`[^`\n]+`)/g, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  const lines = placeholderText.split(/\r?\n/);
  const cleanedLines = [];

  for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed) {
      if (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1] !== "") {
        cleanedLines.push("");
      }
      continue;
    }

    // Strip decorative emojis
    trimmed = trimmed.replace(EMOJI_REGEX, "");

    // Apply fluff removal
    for (const pattern of FLUFF_PATTERNS) {
      trimmed = trimmed.replace(pattern, "");
    }

    // Clean multiple spaces
    trimmed = trimmed.replace(/[ \t]{2,}/g, " ").trim();

    if (trimmed.length > 0) {
      cleanedLines.push(trimmed);
    }
  }

  let result = cleanedLines.join("\n");

  // Restore code blocks
  result = result.replace(/__CODE_BLOCK_(\d+)__/g, (_, idx) => {
    return codeBlocks[parseInt(idx, 10)];
  });

  return result;
}

export function analyzeContext(text) {
  const originalTokens = estimateTokens(text);
  const compressed = compressMarkdown(text);
  const compressedTokens = estimateTokens(compressed);
  const savedTokens = Math.max(0, originalTokens - compressedTokens);
  const percentSaved = originalTokens > 0 ? ((savedTokens / originalTokens) * 100).toFixed(1) : "0.0";

  return {
    originalLength: text.length,
    originalTokens,
    compressedLength: compressed.length,
    compressedTokens,
    savedTokens,
    percentSaved,
    compressed
  };
}
