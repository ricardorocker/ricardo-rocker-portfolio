# SCREENSHOTS — Visual audit trail

**Audience:** Fable 5 (master auditor).
**NOT for Ricardo.** Machine-to-machine audit material.

---

## PROTOCOL

### When Opus 5 completes a macro step:

1. Take screenshot via Chrome DevTools MCP: `mcp__chrome-devtools__take_screenshot`
2. Filename convention: `step-<N>-<short-slug>.png`
   - N = step number from PROGRESS.md
   - short-slug = kebab-case identifier (e.g., step-1-hero-personal.png)
3. Save to this directory.
4. Reference the filename in PROGRESS.md step entry.

### Required screenshots per wave

| Wave | Required screenshots |
|------|---------------------|
| 1 (hero) | step-1-hero-desktop.png, step-1-hero-mobile.png, step-1-hero-dark.png |
| 2 (features) | step-2-features-desktop.png, step-2-features-mobile.png |
| 3 (rest landing) | step-3-cta-desktop.png, step-3-selected-work.png |
| 4 (about) | step-4-about-desktop.png, step-4-about-mobile.png |
| 5 (case studies) | step-5-case-list.png, step-5-case-detail.png (with disclaimer visible) |
| 6 (stack) | step-6-stack-desktop.png, step-6-stack-mobile.png |
| 7 (showcase) | step-7-showcase-grid.png, step-7-showcase-variant-A.png |
| 8 (contact) | step-8-contact-desktop.png |
| 9 (README) | (no screenshot — Markdown file in repo) |
| 10 (deploy) | step-10-prod-lighthouse.png, step-10-prod-home.png |

### Audience check for each screenshot (Fable 5 verifies)

For every screenshot, Fable 5 audits:
- [ ] NO purple-to-blue gradient anywhere
- [ ] NO Inter font (Geist only)
- [ ] NO generic illustrations (Storyset/unDraw)
- [ ] NO 3D blobs / blur orbs
- [ ] First-person copy in hero ("I ship..." not "We help...")
- [ ] "Ricardo Rocker" name visible at least once
- [ ] Real-looking GitHub/LinkedIn/Upwork links in header or footer
- [ ] Case studies have visible "Demonstration case study" disclaimer
- [ ] NO pricing tiers $X/$Y/$Z for service sales
- [ ] Mobile viewport (375px) looks intentionally designed, not "it works"

If any check fails, Fable 5 emits a "PARECER: ..." block via watcher agent.
