import Anthropic from "@anthropic-ai/sdk";

// Server-side only — used by API routes in Sprint 1
export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const MODEL = "claude-sonnet-4-20250514";