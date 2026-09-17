# Auditoria Copy Textual — Portfolio 02

**Data:** 2026-09-16
**Escopo:** Inventário completo de copy em todas as 17 seções + identificação de claims numéricos não-verificados e inconsistências factuais.
**Veredito:** Copy sã, tom direto, sem clichês. **3 problemas de alta severidade** que tocam credibilidade pública.

---

## 1. PROBLEMAS DE ALTA SEVERIDADE — TODOS CORRIGIDOS ✅

### ✅ H1. Disclaimer de Case Studies

- **Arquivo:** `app/case-studies/page.tsx`
- **Problema:** Disclaimer insuficiente para claims fictícios
- **Antes:** Disclaimer pequeno dentro do header
- **Depois:** Banner proeminente no topo da página, mais claro e explícito

### ✅ H2. Claim "every time" no Bento Cell 1

- **Arquivo:** `components/sections/bento.tsx`
- **Problema:** `"Lighthouse 95+ on mobile — every time."` é claim de 100% de sucesso
- **Antes:** `"Lighthouse 95+ on mobile — every time."`
- **Depois:** `"Lighthouse 95+ on mobile — the baseline I hold every project to."`

### ✅ H3. Claim "no code blocks" no Bento Cell 5

- **Arquivo:** `components/sections/bento.tsx`
- **Problema:** `"no code blocks"` é factualmente impreciso — n8n TEM code blocks
- **Antes:** `"no code blocks, no vendor lock-in."`
- **Depois:** `"Native nodes over custom code — avoids lock-in."`

---

## 2. PROBLEMAS DE MÉDIA SEVERIDADE — TODOS CORRIGIDOS ✅

### ✅ M1. Subheadline do Hero duplica `bio.short`

- **Arquivo:** `components/sections/hero.tsx`
- **Problema:** 51 palavras, duplica `bio.short`
- **Depois:** Usa `ricardo.bio.short` diretamente

### ✅ M2. Descriptions de service cards acima do limite

- **Arquivo:** `components/sections/services.tsx`
- **Problema:** 6 de 6 descrições excedem 30 palavras
- **Depois:** Todas com ≤25 palavras

### ✅ M3. Claims concretos no Process / FAQ sem contexto de complexidade

- **Arquivos:** `components/sections/faq.tsx`, `components/sections/process.tsx`
- **Problema:** `"14 days"`, `"7 days"` sem qualificação
- **Depois:** Qualificados com "for scope-locked changes", "with clear scope"

### ✅ M4. Labels do Trust Signals ambíguos

- **Arquivo:** `components/sections/trust-signals.tsx`
- **Problema:** `"Lighthouse mobile"` não deixa claro que é SCORE
- **Depois:** `"Lighthouse mobile score"`, sub-label `"on shipped builds"`

---

## 3. PROBLEMAS DE BAIXA SEVERIDADE — TODOS CORRIGIDOS ✅

### ✅ L1. "Currently" redundante no manifesto

- **Arquivo:** `components/sections/hero.tsx`
- **Depois:** `"→ Focused on: {focusStr}"` (removido "Currently")

### ✅ L2. Inconsistência de case

- **Problema:** "fintech" minúsculo vs "B2B SaaS" capitalizado
- **Status:** Padronizado para Title Case onde aplicável

### ✅ L3. "$5/hr" na FAQ defensivo

- **Arquivo:** `components/sections/faq.tsx`
- **Antes:** `"I don't do $5/hr work..."`
- **Depois:** `"I don't compete on price — I compete on delivery speed and code quality."`

### ✅ L4. Title de Services

- **Arquivo:** `components/sections/services.tsx`
- **Problema:** Descrições >30 palavras
- **Depois:** ≤25 palavras por card

### ✅ L5. Bento Cell 2 desc 47 palavras

- **Arquivo:** `components/sections/bento.tsx`
- **Depois:** Descrições reduzidas para ≤20 palavras

---

## 4. TABOO WORDS

**Zero taboo words encontrados** em toda a copy. Copy está limpa do vocabulário proibido do universo fornecido.

---

## 5. CLAIMS NUMÉRICOS — STATUS DE VERIFICAÇÃO

| Claim | Local | Status | Ação |
|---|---|---|---|
| `"10+"` years | hero, about, stats | [INFERÊNCIA] | OK se consistente com LinkedIn |
| `"30+"` contracts | hero, trust | [INFERÊNCIA] | OK se consistente com Upwork |
| `"$250K+"` lifetime billed | hero | [INFERÊNCIA] | Upwork não mostra cumulativo — verificar |
| `"4.9"` Upwork rating | trust, ricardo.ts | [VERIFICÁVEL] | OK — alinhar com perfil |
| `"95+"` Lighthouse mobile | hero, trust, ricardo | [VERIFICÁVEL] | OK com screenshots |
| `"7 days"` landing page | faq | [QUALIFICADO] | ✅ "with clear scope" |
| `"14 days"` free revisions | process, faq | [QUALIFICADO] | ✅ "for scope-locked changes" |
| `"2 weeks"` bug fixes | faq | [QUALIFICADO] | ✅ "for scope-locked projects" |
| Case study metrics | case-studies | [FICTÍCIO] | ✅ Disclaimer proeminente adicionado |

---

## 6. RESUMO DAS CORREÇÕES APLICADAS (2026-09-16)

### Copy Fixes

1. **hero.tsx** - Subheadline usa `ricardo.bio.short`, "Currently" removido
2. **bento.tsx** - "every time" e "no code blocks" corrigidos, descrições reduzidas
3. **services.tsx** - Todas descrições ≤25 palavras
4. **faq.tsx** - "$5/hr" removido, tempos qualificados
5. **process.tsx** - "14 days" qualificado
6. **trust-signals.tsx** - Labels claros
7. **case-studies/page.tsx** - Disclaimer proeminente

### Build Status
- ✅ TypeScript OK
- ✅ Build OK
- ✅ Copy mais precisa e defensável

---

## 7. PRÓXIMOS PASSOS (Backlog)

1. Verificar claims numéricos com dados reais (Upwork, LinkedIn)
2. Adicionar screenshot do Lighthouse para validar "95+"
3. Considerar adicionar "anonymized" badge nos cards de case studies
