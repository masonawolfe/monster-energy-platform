# NEXT_ACTIONS.md — Monster Platform Backlog

## DEMO TODAY — DO NOT CHANGE ANYTHING IN page.tsx

---

## SPRINT 0 — QA bug fixes (after demo)

| ID    | Sev  | Description                                   | Fix |
|-------|------|-----------------------------------------------|-----|
| FQ-01 | HIGH | Stale fit explainer on segment change          | Add setFitOpen(null) in selectSeg() |
| FQ-02 | HIGH | Account filter persists across events          | Add setAF(null) in selectEvt() |
| FQ-03 | HIGH | Trade scenario persists across events          | Add setTS(1) in selectEvt() |
| FQ-04 | MED  | sensScen persists across brief regenerations   | Add setSensScen("base") in generateBrief() |
| FQ-05 | MED  | briefSec persists across brief regenerations   | Add setBriefSec("events") in generateBrief() |
| AQ-02 | HIGH | No API timeout on brief generation             | Add AbortController with 30s timeout |
| EG-01 | HIGH | briefLoading can get stuck on sync error       | Wrap in try/finally { setBL(false) } |
| DQ-01 | MED  | Trade spend items may not sum to total         | Calculate last item as remainder |
| AQ-05 | MED  | Chat max_tokens 300 too low (truncates)        | Increase to 500 |
| PQ-01 | MED  | TEAMS array rebuilt on every render            | useMemo(() => [...], [evt, segObj]) |

---

## SPRINT 1 — Move API calls server-side (security)

- [ ] Implement src/app/api/brief/route.ts (stub already exists)
- [ ] Implement src/app/api/chat/route.ts (stub already exists)  
- [ ] Update fetch URLs in page.tsx from Anthropic direct to /api/brief and /api/chat
- [ ] Add ANTHROPIC_API_KEY to .env.local
- [ ] Verify brief generation and chat still work end-to-end

---

## SPRINT 2 — Workfront Planning integration

- [ ] Build .doc export function using string concatenation (NO template literals)
- [ ] Add wf_* fields to brief generation prompt
- [ ] Add collapsible Workfront export panel to Step 6
- [ ] Map to Workfront Planning Enterprise record types:
      Campaign, Program, Tactics, Activities, Target Audiences, Deliverables, Regions, Partners
- [ ] Test with Workfront Planning AI brief ingestion

---

## SPRINT 3 — Backend & persistence

- [ ] Plan save/load (SQLite local, Turso for prod)
- [ ] Authentication (NextAuth.js)
- [ ] Audit trail
- [ ] Portfolio dashboard (all active plans, status, spend roll-up)

---

## SPRINT 4 — Data integrations

- [ ] Circana / Nielsen / Numerator live data
- [ ] Walmart Luminate, Kroger 84.51 retailer portals
- [ ] Real-time CCNA DC inventory visibility
- [ ] SAP / ERP COGS + margin data

---

## SPRINT 5 — Strategic platform

- [ ] Portfolio optimizer (budget allocation to max blended ROI)
- [ ] Consumer cohort tracker (event → trial → repeat)
- [ ] Joint Business Planning (JBP) module
- [ ] Community-sourced event suggestion engine