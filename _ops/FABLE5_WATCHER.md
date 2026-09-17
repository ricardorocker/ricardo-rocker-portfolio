# FABLE5_WATCHER.md — Internal audit protocol

**Audience:** Fable 5 master auditor + watcher sub-agent dispatched every 5 minutes.

---

## PROTOCOL

### Trigger

Ricardo (human) dispatches a watcher sub-agent via Claude Code CLI:
```
/clear
You are a Fable 5 watcher. Read C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\02_PORTFOLIO_WEB\_ops\FABLE5_WATCHER.md and execute the protocol.
```

This is dispatched every ~5 minutes during the Opus 5 build session.

### Watcher tasks (in order)

1. **Read** `_ops/PROGRESS.md` from line "STEP ENTRIES" onwards.
2. **Diff** against your previous read (use file mtime as proxy if no memory).
3. **List** new screenshots in `_ops/SCREENSHOTS/`.
4. **For each new screenshot**, run `mcp__chrome-devtools__take_screenshot --url=<prod_or_local_url>` if missing, or just inspect the file.
5. **Run audit checklist** from `_ops/SCREENSHOTS/README.md` "Audience check" section for each new screenshot.
6. **Compare with GUIA_MASTER §3 anti-AI rules** and §6.2 identity personal rules.
7. **Emit PARECER block** if any deviation found.

### PARECER format (append to a new file `_ops/PARECERES.md`)

```
## PARECER [HH:MM:SS] — step N — <verdict>

VERDICT: <approved | needs_fix | critical_block>

ISSUES (if any):
- [CRITICAL] <what>: <why> → <fix>
- [WARNING] <what>: <why> → <fix>

NOTES:
- <observation>

IF NEEDS_FIX: Opus 5 MUST address before proceeding to next step.
IF CRITICAL_BLOCK: Opus 5 MUST stop and refactor the affected slice.
IF APPROVED: Opus 5 proceeds to next wave.

(Fable 5 emits this. Opus 5 watches _ops/PARECERES.md and acts.)
```

### Communication channel

- **Opus 5 → Fable 5:** appends to `PROGRESS.md` + drops screenshots in `SCREENSHOTS/`
- **Fable 5 → Opus 5:** appends to `PARECERES.md`
- **No bidirectional chat needed.** Filesystem is the bus.

### For Ricardo (human)

Ricardo does NOT need to interact with this. He:
1. Pastes the prompt from `PROMPT_CONTINUACAO_02_MODERN_WEBAPP.md` into Opus 5 session.
2. Starts a separate Claude Code session and runs the watcher protocol every ~5 minutes.
3. Waits for Windows notification when Opus 5 finishes.

The watcher session runs in parallel — independent from Opus 5 session.

---

## WATCHER DISPATCH TEMPLATE (Ricardo pastes this into a NEW Claude session, runs ~every 5 min)

```
/clear

You are Fable 5 watcher. Your job is to audit the Opus 5 portfolio build session.

EXECUTE:
1. Read `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\02_PORTFOLIO_WEB\_ops\PROGRESS.md` from "STEP ENTRIES" line down.
2. List `_ops/SCREENSHOTS/` for new files since last check (use file mtime).
3. For each new screenshot file, audit against the checklist in `_ops/SCREENSHOTS/README.md` "Audience check" section.
4. Compare Opus 5's progress against `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\PORTFOLIO_PLAN\GUIA_MASTER_02_MODERN_WEBAPP.md` §3 (anti-AI) and §6.2 (identidade pessoal).
5. If deviations found, append a PARECER block to `_ops/PARECERES.md` using format from `_ops/FABLE5_WATCHER.md`.
6. Report back to me (Fable 5 master) with:
   - One-line summary of Opus 5's last step
   - PARECER verdict (approved/needs_fix/critical_block)
   - Any blockers

DO NOT interrupt the Opus 5 session. Filesystem is the bus. You write to PARECERES.md; Opus 5 reads it.
```

---

## KILL SWITCH

If Fable 5 detects Opus 5 has been spinning >2 hours on the same step without appending to PROGRESS.md, emit a CRITICAL_BLOCK with reason "silent stall" and append a "PARE" instruction to PROGRESS.md for Opus 5 to read.
