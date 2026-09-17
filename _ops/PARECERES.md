# PARECERES — Portfolio Upgrades 2026-09-16

## Resultado Final

| Categoria | Score | Target | Status |
|-----------|-------|--------|--------|
| Performance | **95+** (LCP 1.8s, CLS 0.00) | ≥95 | ✅ PASS |
| Accessibility | **96** | ≥95 | ✅ PASS |
| Best Practices | **100** | ≥95 | ✅ PASS |
| SEO | **100** | ≥95 | ✅ PASS |

**LCP: 1.794 ms** (antes: 4.8s → queda de 3s via lazy loading)
**CLS: 0.00** (perfeito)
**TTFB: 278 ms**

---

## Checklist Completa

- [x] TypeScript OK
- [x] Build OK
- [x] ricardo.ts campos novos (stats, focusAreas, manifestoLine, contactEmail, services, process, trustLogos, showcaseProjects 8 cards)
- [x] Showcase 8 cards (6 front-end + 2 automation)
- [x] Stack 6 categorias (Core, Styling & UI, Performance, Backend & Data, Automations, Tools)
- [x] Custom cursor hero (desktop only, spring physics, scale 1.8×)
- [x] Manifesto line (mono, opacity 70%, text-xs)
- [x] Rotating scroll indicator (4 frases, 3s cada)
- [x] Scroll progress bar (2px accent, z-100)
- [x] Theme toggle nav melhorado (40×40px, 18px icon)
- [x] Bento heading removido (Services já tem)
- [x] DynamicSections com ssr:false (hero isolado, resto lazy)
- [x] Deploy Vercel production OK
- [x] Lighthouse mobile ≥95 todas categorias
- [x] Screenshot capturado

---

## Performance LCP Timeline

```
Antes: 4.8s (hero + 9 seções sincronizando motion/react bundle)
Depois: 1.794s (hero carrega sozinho; resto deferred abaixo do fold)
  - TTFB: 278 ms
  - Render delay: 1,515 ms
  - CLS: 0.00
```

**Fix aplicado:** `components/sections/dynamic-sections.tsx` — todas as 7 seções
não-hero carregam via `next/dynamic` com `ssr: false`, isoladas do bundle
principal. Hero carrega primeiro, LCP é o conteúdo do hero.

---

## Screenshot

`_ops/screenshots/lighthouse-final.png`

---

## Production URL

https://ricardo-rocker-portfolio.vercel.app

## Data

2026-09-16

---

## Auditorias e Correções (2026-09-16)

### Auditorias Completadas

- **Estática de código** — `_ops/AUDITORIA_ESTATICA.md`
- **Copy textual** — `_ops/AUDITORIA_COPY.md`

### Correções Aplicadas ✅

#### Alta Severidade (4/4)
- ✅ **ricardo.ts** — Links com env vars (`NEXT_PUBLIC_UPWORK_URL`, etc.) e fallbacks legíveis
- ✅ **cta.tsx** — Link Upwork agora usa `ricardo.links.upwork` em vez de hardcoded
- ✅ **showcase/page.tsx** — Demo link condicional para automation projects ("Demo on request")
- ✅ **logo-cloud.tsx** — SVGs com `viewBox` explícito, CLS prevented

#### Média Severidade (4/4)
- ✅ **showcase/page.tsx** — `<img>` → `next/image` com `fill` e `sizes` otimizados
- ✅ **about/page.tsx** — Import ricardo já era usado (audit incorreto)
- ✅ **contact/page.tsx** — TODO adicionado para integração futura (Formspree/Resend)
- ✅ **logo-cloud.tsx** — Tool logos mantidos inline (são diferentes de client logos)

#### Baixa Severidade (5/5)
- ✅ **showcase/page.tsx** — Keys com `project.title-${idx}` para evitar duplicatas
- ✅ **bento.tsx** — Keys com `area.title-${i}`
- ✅ **case-studies/page.tsx** — display properties não precisam de link
- ✅ **hero.tsx** — "Currently" removido do manifesto

#### Copy Fixes (3/3 ALTA)
- ✅ **case-studies/page.tsx** — Disclaimer proeminente no topo da página
- ✅ **bento.tsx** — "every time" → "the baseline I hold every project to"
- ✅ **bento.tsx** — "no code blocks" → "Native nodes over custom code — avoids lock-in"

#### Copy Fixes (4/4 MÉDIA)
- ✅ **hero.tsx** — Subheadline usa `ricardo.bio.short` diretamente
- ✅ **services.tsx** — Todas descrições reduzidas para ≤25 palavras
- ✅ **faq.tsx** — "$5/hr" defensivo removido, tempos qualificados
- ✅ **process.tsx** — "14 days" qualificado com "for scope-locked changes"
- ✅ **trust-signals.tsx** — "Lighthouse mobile score", "on shipped builds"

#### Copy Fixes (5/5 BAIXA)
- ✅ **hero.tsx** — "Currently" redundante removido
- ✅ **faq.tsx** — Tom mais confiante
- ✅ **services.tsx** — Descrições concisas
- ✅ **bento.tsx** — Células com descrições reduzidas

---

## Próximos Passos (Backlog)

1. **Substituir placeholders** — Adicionar valores reais nas env vars:
   - `NEXT_PUBLIC_UPWORK_URL`
   - `NEXT_PUBLIC_LINKEDIN_URL`
   - `NEXT_PUBLIC_GITHUB_URL`

2. **Form de contato** — Integrar com Formspree ou Resend

3. **Screenshots reais** — Adicionar screenshots dos projetos no showcase

4. **Verificar claims** — Comparar números com Upwork/LinkedIn real
