# PROGRESS.md — Live build log for Fable 5 auditor

**Audience:** Fable 5 (master auditor of Opus 5 session).
**NOT for Ricardo.** Technical machine-to-machine. English. Dense. No pleasantries.
**Format:** Append-only. Each macro step = one block. Never rewrite history. Append.

---

## PROTOCOL

### When Opus 5 (or any Sonnet worker) completes a macro step:

1. **Append a new section** to this file under `## [STEP N] <HH:MM:SS> <slug>`.
2. **Update the dashboard table** at the bottom of this file.
3. **Take a screenshot** via Chrome DevTools MCP and save to `_ops/SCREENSHOTS/step-N-<slug>.png`.
4. **Reference the screenshot path** in your step section.

### Schema for each step section:

```
## [STEP N] <ISO timestamp> <short-slug>

WAVE: <1-10>
SECTION: <which entregável from §5 of GUIA_MASTER>
STATUS: <in_progress | completed | blocked | rolled_back>

### Files created/modified
- path/to/file.tsx: <1 line what it does>
- path/to/file.mdx: <1 line what it does>

### Sonnets dispatched
- count: N
- summary: <1 line each>

### Decisions made
- <decision 1: why>
- <decision 2: why>

### Deviations from GUIA_MASTER
- <if any, explicit reference to §X.Y bullet and what changed>

### Risks identified
- <risk 1>
- <risk 2>

### Screenshot
- _ops/SCREENSHOTS/step-N-<slug>.png
- <1 line: what auditor should look for>

### Next planned step
- <brief>
```

### Strict rules for Opus 5 / Sonnets

- ❌ NEVER rewrite past entries. Append only.
- ❌ NEVER delete this file.
- ❌ NEVER use humanized language ("looks great!"). State facts only.
- ✅ Be technical, dense, specific (file paths, line numbers, exact decisions).
- ✅ Reference §X.Y of GUIA_MASTER when justifying deviations.
- ✅ If blocked, write STATUS=blocked with explicit reason.

---

## DASHBOARD (Opus 5 updates this table every step)

| Step | Time | Wave | Section | Status | Screenshot | Notes |
|------|------|------|---------|--------|------------|-------|
| 0 | (pending) | 0 | setup | pending | — | Folder cleanup + npm install |
| 1 | (pending) | 1 | hero pessoal | pending | — | First-person, Ricardo links |
| 2 | (pending) | 2 | features | pending | — | Bento + stats + FAQ |
| 3 | (pending) | 3 | rest landing | pending | — | CTA + selected work |
| 4 | (pending) | 4 | /about | pending | — | Bio estendida |
| 5 | (pending) | 5 | case studies | pending | — | MDX with disclaimer |
| 6 | (pending) | 6 | /stack | pending | — | Interactive tour |
| 7 | (pending) | 7 | /showcase | pending | — | 6 variants |
| 8 | (pending) | 8 | /contact | pending | — | Web3Forms |
| 9 | (pending) | 9 | README + og | pending | — | NOT SKIPPABLE |
| 10 | (pending) | 10 | deploy | pending | — | Vercel prod + notify |

---

## STEP ENTRIES (append below this line — DO NOT modify header)

## [STEP 0] 2026-09-16T12:05:00Z setup-initial

WAVE: 0
SECTION: setup
STATUS: in_progress

### Files created/modified
- (setup in progress)

### Sonnets dispatched
- count: 0

### Decisions made
- Deleting old `portfolio-web/` (wrong agency-style site from previous session)
- Bootstrapping fresh `02_PORTFOLIO_WEB/` with Next.js 16.3.5 + full stack
- Reusing validated package versions from previous session where possible

### Screenshot
- (none yet — setup phase)

### Next planned step
- Dispatch 4 Sonnets in parallel for Wave 1: (A) bootstrap + lib/ricardo.ts, (B) Hero component, (C) theme + footer, (D) sitemap/robots/og

