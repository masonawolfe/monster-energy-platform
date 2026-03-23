# CLAUDE.md — Monster Energy E2E Commercialization Platform

## IMPORTANT — READ FIRST
The canonical demo code is in src/app/page.tsx. This is v6 — the stable, working build.
DO NOT modify the brief generation logic, the API call structure, or the prompt format.
The brief generation works. Do not touch it.

## Project Overview
A single-page React application (Next.js) that helps Monster Energy marketers build
community-first commercialization plans. 7-step flow:
  1. Segment selection (6 consumer segments)
  2. Cultural insights + brand guardrails
  3. Event opportunities ranked by cultural fit score
  4. Activation plan with account-specific sell-in templates
  5. Supply chain & CCNA pipeline (5-month pipe, Coca-Cola bottling network)
  6. Retail sell-in (trade spend A/B/C scenarios, content matrix)
  7. AI-generated brief + ROI model + post-event debrief

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: JavaScript (page.tsx uses JS syntax with allowJs:true — do not add TS types to page.tsx)
- AI: Anthropic Claude API — currently called DIRECTLY from the browser in page.tsx
  (this is intentional for the demo — the artifact sandbox proxy handles auth)
- State: React useState/useEffect only

## CRITICAL — API Call Architecture in v6
The generateBrief() and sendChat() functions in page.tsx call the Anthropic API directly:
  fetch("https://api.anthropic.com/v1/messages", ...)
This works in the Claude.ai artifact sandbox because Anthropic proxies the auth.
In a real Next.js deployment you MUST move these to /api/brief and /api/chat routes
and add ANTHROPIC_API_KEY from .env.local. The API route stubs are already scaffolded
in src/app/api/brief/route.ts and src/app/api/chat/route.ts.
For the demo today: leave page.tsx exactly as-is.

## Brief Generation — DO NOT CHANGE
The prompt in generateBrief() is:
  "You are a brand strategist for Monster Energy. Return ONLY valid JSON, no markdown:
  {headline, strategy_statement, events_team[], creative_team[], partnerships_team[],
   social_team[], new_product_needed, product_recommendation, success_metrics[],
   estimated_roi_breakdown, retail_lift_projection, risk}
  SEGMENT:|PRODUCT:|EVENT:|MARKET:|TRADE:|PIPE:|RETAILERS:|WHITE SPACE:"

This format is proven to work. The JSON.parse strips markdown fences automatically.
max_tokens is 1200. Model is claude-sonnet-4-20250514.

## Brand Identity
- Primary: #39FF14 (Monster green)
- Background: #000000 / #0d0d0d
- Borders: #1f1f1f
- Muted text: #888888
- Font: Arial Black / Arial

## Key Concepts
- FLRT: Monster's new women-targeted energy drink (Gen Z Female segment)
- CCNA: Coca-Cola North America bottling network (5-month pipeline required)
- Cultural fit score: 0-100 ranking events by 5 factors
- Trade spend: TPR 35% / Display 30% / Digital 20% / Scan-down 15% (Scenario B recommended)

## Segments
1. Gen Z Female (18-26) — FLRT Launch — Coachella, NCAA, Roller Derby, Zine Fests
2. Gen Z Male (18-26) — Core Growth — EVO Championship, ComplexCon
3. Hispanic Youth (16-28) — Fastest Growing — Lowrider Super Show, Liga MX Fan Fests
4. Gaming Community (16-32) — At Risk — PAX East/West/Aus
5. Millennial Female (27-40) — FLRT Expand — Pilates & Studio Events
6. Millennial Male (27-40) — Retain — Overland Expo

## Features in v6 (all working)
- Brand guardrail filter (must/must-not per segment)
- Cultural fit score explainer with 5-factor breakdown bars
- Staffing model calculator by event scale
- Promotional calendar conflict checker
- Campaign name generator with rationale
- Account-specific sell-in templates (17 retailers including Best Buy)
- Trade deal A/B/C scenario comparison with pros/cons
- Content matrix builder
- Sensitivity analysis (bear/base/bull ROI scenarios)
- Post-event debrief with real scan data (4 events) + generated data (all others)
- AI Sales Assistant chat panel with plan context
- CSV export
- Activate modal with 6 team briefs
- Spanish-primary market flag for Hispanic Youth

## What Claude Code should do with this project
1. Run: npm install
2. Run: npm run dev
3. Open http://localhost:3000 — the app should load immediately
4. To move API calls server-side (P1): implement src/app/api/brief/route.ts
   and src/app/api/chat/route.ts, then update the fetch URLs in page.tsx
5. See NEXT_ACTIONS.md for full backlog

## Do NOT do
- Do not refactor page.tsx into components (it will break the demo)
- Do not add TypeScript types to page.tsx (it uses JS syntax)
- Do not change the brief generation prompt or JSON parse logic
- Do not change the API endpoint URLs in page.tsx until you have working API routes