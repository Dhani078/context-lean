export interface ContextAnalysis {
  originalLength: number;
  compressedLength: number;
  originalTokens: number;
  compressedTokens: number;
  savedTokens: number;
  percentSaved: number;
}

export interface CompressionRule {
  id: string;
  name: string;
  apply: (text: string) => string;
}

export declare const RULES: CompressionRule[];
export declare function compressMarkdown(rawMarkdown: string): string;
export declare function analyzeContext(rawMarkdown: string): ContextAnalysis;
