# PROMPT GIGANTE — AUDITORIA PROFUNDA + CORREÇÕES DO PORTFÓLIO 02

**Sessão Origem:** Fable 5 (noite 2026-09-16) + auditoria visual do Ricardo
**Pré-requisito:** Portfolio 02 deployado em `https://ricardo-rocker-portfolio.vercel.app` (Lighthouse 95/96/100/100 mobile)
**Meta desta rodada:** Auditoria EXAUSTIVA + correções + melhorias de performance + polimento + amplitude de copy. Vai muito além do checklist do PROMPT_CONTINUACAO_03 — quero um portfolio que **cause fascínio à primeira vista** em QUALQUER categoria de cliente Upwork (web + automation + AI + dados), e que mantenha Lighthouse ≥95 mobile.

---

## 1. CONTEXTO (LEIA ANTES DE TUDO — leva 3 min, economiza 30 min depois)

### 1.1 O que o Ricardo quer
- Portfolio único que atraia clientes de **TODAS** as categorias que ele atende (vide `dashboard-v3` em `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\dashboard-v3` — 16 jobs ativos em 10 subcategorias).
- Ele é **Full-Stack Engineer & Automation Specialist**, NÃO "apenas frontend". O portfolio atual reflete só metade.
- Lighthouse ≥95 mobile (já está em 95/96/100/100). Não pode regredir.
- Zero bugs visuais. Cada container, cada texto, cada imagem precisa ser revisado.
- "Fascínio à primeira vista" — copy + UX + UI + animações devem ser referência.

### 1.2 Estado atual verificado (auditoria Fable 5 noite 2026-09-16)

| Página | Veredito | Problemas específicos |
|--------|----------|----------------------|
| Home Hero | ✅ Bom | Headline reescrita ("I ship production code / that ships on time.") + Stats 10+/30+/$250K+/24h + Manifesto line + Custom Cursor. |
| Home Proof Bar | ✅ Bom | Marquee infinito com 18 tags mono. |
| Home Services | ✅ Bom | 6 cards (Front-End, Workflow Automation, AI Integration, Data & Backend, Analytics, Web Perf & A11y). |
| Home Trust Signals | ✅ Bom | 4 números (30+ / 4.9 / 24h / 95+). |
| Home **Logo Cloud** | ❌ **QUEBRADO** | Os 8 SVGs (Stripe, OpenAI, Vercel, Notion, Linear, Figma, GitHub, Supabase) renderizam com `width: 0` porque a div tem `style={{ height: "28px", width: "auto" }}` mas o SVG inline não tem `width`/`height` explícito nem classe Tailwind que force dimensão. Visualmente: a seção aparece VAZIA no DOM, com 8 divs invisíveis. Hover no Stripe e nos outros não resolve (width continua 0). Confirmado via `mcp__chrome-devtools__evaluate_script`: `divComputedWidth: 0`. **Causa raiz:** SVG sem `width="auto"` no próprio elemento SVG; precisa de `width="60"` no `<svg>` ou `className="h-7 w-auto"` no container. |
| Home Bento | ✅ Bom | 6 áreas (Landing Pages & Web Apps, Web Performance, Design Systems, Motion & Interaction, n8n Workflows, Python Scripts & ETL). |
| Home FAQ | ✅ Bom | 6 perguntas. |
| Home Process | ✅ Bom | 5 steps (Brief → Discovery → Build → Ship → Iterate). |
| Home Stats | ⚠️ Redundante | 95+/<1s/n8n/Python — repete conceitualmente o Trust Signals. Não é bug, é copy overlap. |
| Home CTA | ✅ Bom | "Ready when you are" + Hire on Upwork + Send a brief. |
| Home ScrollProgress + Lenis | ✅ Bom | Implementados em `components/shared/scroll-progress.tsx` e `components/motion/lenis-provider.tsx`. Integrados no layout. |
| Home Theme toggle | ✅ Bom | Sun/Moon lucide, 40×40px hit area. |
| About | ✅ Bom | Role "Full-Stack Engineer & Automation Specialist" + 4 jobs novos na timeline + 8 chips de expertise. |
| Stack | ✅ Bom | 6 categorias (Core, Styling & UI, Performance, Backend & Data, Automations, Tools). |
| Case Studies | ✅ Bom | 5 cases completos com Challenge/Approach/Result + disclaimer "Demonstration case studies". |
| Showcase | ⚠️ Parcial | 6 frontend + 2 automation (n8n + OpenAI Pipeline). Demo links = `href="#"` (quebrados). |
| Contact | ✅ Bom | Form completo + Upwork + Email CTA. Falta confirmação do email real (atualmente `NEXT_PUBLIC_CONTACT_EMAIL=contact@ricardorocker.com` placeholder). |
| Footer | ⚠️ Placeholders | Upwork/LinkedIn/GitHub com `href="[PLACEHOLDER]"`. |

### 1.3 Quatro coisas verificadas durante a auditoria (não confiar — RE-VERIFICAR ao começar)

1. **Hash de deploy atual**: `https://ricardo-rocker-portfolio.vercel.app` (não `portfolio-qpv0nqxpt` — esse é legado da v1). Confirmado em `02_PORTFOLIO_WEB/_ops/PROGRESS.md`.
2. **Lighthouse scores mobile**: 95/96/100/100 (Performance/Accessibility/Best Practices/SEO). Confirmado no relatório `02_PORTFOLIO_WEB/lighthouse-report.json`.
3. **Email placeholder**: `NEXT_PUBLIC_CONTACT_EMAIL=contact@ricardorocker.com` em `.env.local`. Ricardo precisa confirmar se é o real ou trocar.
4. **Versão Next.js**: 16.3.5 (não 15, não 14). `AGENTS.md` avisa: "This is NOT the Next.js you know" — Breaking changes.

### 1.4 Leitura obrigatória antes de tocar em qualquer arquivo

Estes 5 arquivos respondem 90% das perguntas. Se não ler, vai re-descobrir:

| Ordem | Arquivo | Tempo |
|-------|---------|-------|
| 1 | `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\CLAUDE.md` | 30s |
| 2 | `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\00_LEIA_PRIMEIRO\STATUS_ATUAL.md` | 1 min |
| 3 | `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\02_PORTFOLIO_WEB\PROMPT_CONTINUACAO.md` | 1 min |
| 4 | `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\PORTFOLIO_PLAN\PROMPT_CONTINUACAO_03_VISUAL_POLISH_AMPLITUDE.md` | 3 min |
| 5 | `C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\PORTFOLIO_PLAN\GUIA_MASTER_02_MODERN_WEBAPP.md` (apenas §5 e §9) | 3 min |
| 6 | Toda a pasta `C:\Users\rocker\.claude\projects\C--Projetos-08-Renda-Extra-06-Prestacao-Servicos\memory\` | 5 min |

### 1.5 Regra de ouro deste projeto

> **Todo dado crítico DEVE ser verificado na fonte antes de ser usado como premissa.**
> Antes de auditar uma página: abrir no Chrome via `mcp__chrome-devtools__navigate_page`, fazer `mcp__chrome-devtools__take_screenshot` fullpage, ler `mcp__chrome-devtools__evaluate_script` para DOM real. **NUNCA** ler código e assumir que é o que renderiza. Em Next.js 16, hydration errors, mismatches de client/server, race conditions em Motion + Lenis são comuns.

---

## 2. STACK OPERACIONAL (NÃO MUDE)

- **Orquestrador:** Opus 5 (você). Faz: análise crítica, coordenação, auditoria visual via Chrome DevTools MCP, decisões arquiteturais, validação de qualidade.
- **Workers:** Sonnet 5 via Agent tool direto. Fazem: implementação, refactor, escrita de código, leitura exaustiva de código, testes.
- **NUNCA** Sonnet faz auditoria visual crítica ou orquestração.
- **NUNCA** Opus 5 escreve código profissional. Só revisa, critica, decide.
- **NUNCA** Workflow `deep-research` (custo proibitivo). **NUNCA** mais que 5-6 sub-agentes em paralelo (regra global §3).
- **SEMPRE** sub-agentes com `model: "sonnet"` explícito. **SEMPRE** prompts com escopo-checklist finito (não tema aberto). **SEMPRE** retorno ≤5 linhas com veredictos.

### 2.1 Stack de navegação
- `mcp__chrome-devtools__*` (único MCP de navegador aprovado).
- **PROIBIDO** `mcp__playwright__*`. **PROIBIDO** MCP oficial da Upwork.

### 2.2 Stack técnica do portfolio (verificar package.json antes de mudar)
- Next.js 16.3.5 + App Router + TypeScript 5.6
- Tailwind v4 (CSS-first, `@theme inline` em `globals.css`)
- Motion v11 (NÃO framer-motion) + Lenis smooth scroll
- shadcn/ui v4 (componentes base)
- Geist via `next/font/google` (`--font-geist-sans`, `--font-geist-mono`)
- Lucide icons
- Vercel deploy (URL final `https://ricardo-rocker-portfolio.vercel.app`)

### 2.3 Estrutura de pastas (NÃO reorganizar)
```
02_PORTFOLIO_WEB/
├── app/
│   ├── layout.tsx (root)
│   ├── page.tsx (home — orquestra todas as seções)
│   ├── about/page.tsx
│   ├── case-studies/page.tsx
│   ├── showcase/page.tsx
│   ├── stack/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── sections/ (10 arquivos: hero, proof-bar, services, trust-signals, logo-cloud, bento, stats, faq, process, cta)
│   ├── shared/ (nav, footer, theme-provider, scroll-progress)
│   └── motion/ (lenis-provider)
├── lib/
│   ├── ricardo.ts (DADOS CANÔNICOS — única fonte de verdade)
│   └── ...
├── styles/
│   └── globals.css (tokens, theme, typography)
├── _ops/
│   ├── PROGRESS.md (live build log)
│   ├── PARECERES.md (relatório final)
│   ├── SCREENSHOTS/ (screenshots de cada wave)
│   └── lighthouse/ (relatórios)
├── .env.local (NEXT_PUBLIC_CONTACT_EMAIL)
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## 3. PROTOCOLO DE EXECUÇÃO (8 WAVES)

Cada wave = bloco autônomo. Opus 5 NUNCA escreve código — só coordena, audita, decide, critica.

### WAVE 0 — SETUP (você mesmo, sozinho)
1. Ler arquivos obrigatórios (seção 1.4).
2. Confirmar `git status` + branch + último commit. Se nada estiver commitado, **PARE** e peça OK ao Ricardo (regra §2 do CLAUDE.md — reversibilidade).
3. Confirmar `pnpm install` rodou, `pnpm dev` sobe em http://localhost:3000, `pnpm build` passa sem erros TS.
4. Abrir Chrome via `mcp__chrome-devtools__new_page` em `https://ricardo-rocker-portfolio.vercel.app/`.
5. Tirar screenshot fullpage inicial da home como baseline (`_ops/SCREENSHOTS/wave-0-baseline-home.png`).
6. Navegar para TODAS as outras páginas (/about, /stack, /case-studies, /showcase, /contact) e tirar screenshot fullpage de cada. Salvar em `_ops/SCREENSHOTS/wave-0-baseline-<page>.png`.
7. Rodar `pnpm exec lighthouse https://ricardo-rocker-portfolio.vercel.app --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --quiet --chrome-flags="--headless" --output=json --output-path=_ops/lighthouse/wave-0-baseline-mobile.json`.
8. Rodar lighthouse desktop também (`--preset=desktop`) e salvar como `wave-0-baseline-desktop.json`.
9. Disparar 2 Sonnets em paralelo:
   - **Sonnet A — auditoria de código estática**: ler `app/`, `components/`, `lib/ricardo.ts`, `styles/globals.css`, `package.json`. Retornar JSON estruturado: (a) lista de TODOS os componentes com descrição 1 linha cada; (b) lista de TODOS os campos em `lib/ricardo.ts`; (c) lista de TODAS as classes Tailwind customizadas em `globals.css`; (d) TODOS os problemas óbvios de código (warnings TS, unused imports, console.logs, TODOs); (e) TODOS os `<PLACEHOLDER>` ainda no código (grep por `[PLACEHOLDER]`).
   - **Sonnet B — auditoria de copy estática**: ler `lib/ricardo.ts` + textos de todas as sections via `Grep`. Retornar JSON: (a) mapa de TODAS as strings de copy por seção (hero, services, bento, etc.); (b) checagem de consistency (gramática, register, capitalization); (c) checagem de palavras-taboo (proibidas pelo GUIA_MASTER §X — verificar); (d) checagem de length (titles ≤ 8 palavras, descriptions ≤ 30 palavras, paragraphs ≤ 80 palavras); (e) lista de claims numéricos que precisam ser verificáveis (ex: "10+ years", "$250K+ lifetime").
10. **VALIDAR** os 2 JSONs: ler artefatos, confrontar com baseline, gerar `_ops/PARECERES.md` seção "WAVE 0 — BASELINE".

### WAVE 1 — FIXES CRÍTICOS VISUAIS (3 Sonnets em paralelo)
**Objetivo:** eliminar TODOS os bugs visuais identificados na baseline.

**Sonnet 1 — LOGO CLOUD FIX** (alta prioridade):
- Arquivo: `components/sections/logo-cloud.tsx`
- Bug: SVGs invisíveis (width 0)
- Fix mínimo: adicionar `width="60"` em cada SVG OU adicionar `className="h-7 w-auto"` no container OU trocar inline `<svg dangerouslySetInnerHTML>` por `<svg width="60" height="25" dangerouslySetInnerHTML={{__html: logo.svg}} />` com width explícito.
- Decisão de UX: aumentar opacity default de 0.40 para 0.55 (mais visível sem ser agressivo), grayscale default de 100% (mantém), hover opacity 1 + grayscale 0.
- ADICIONAL: validar visualmente os 8 logos. Os paths SVG inline são confiáveis? Stripe e Vercel devem parecer oficiais. Se algum logo tiver path quebrado/errado, substituir por lucide icon equivalente (ex: Triangle para Vercel, Sparkles para OpenAI, FileText para Notion).
- Validar: tirar screenshot da Logo Cloud section após fix. Confirmar 8 logos visíveis, alinhados, com hover funcional.
- Entregar: diff do arquivo + screenshot de evidência.

**Sonnet 2 — DEMO LINKS FIX** (média prioridade):
- Arquivos: `app/showcase/page.tsx` + qualquer outro componente com botão "Demo"
- Bug: Demo links = `href="#"`
- Decisão arquitetural: como Ricardo não tem demos reais públicas, criar uma de 3 opções:
  - **Opção A (recomendada)**: substituir "Demo" por "Coming soon" e desabilitar (botão opacidade 30%, cursor not-allowed). Honesto, evita link quebrado.
  - **Opção B**: linkar para o portfolio pessoal (`/` ou `/showcase`) como demo (lazy, mas funciona).
  - **Opção C**: criar 8 demos em `/demos/<slug>` (só se sobrar tempo no wave 3).
- Escolher A e implementar.
- Validar: screenshot do Showcase sem links quebrados.
- Entregar: diff + screenshot.

**Sonnet 3 — FOOTER PLACEHOLDERS** (alta prioridade):
- Arquivo: `components/shared/footer.tsx`
- Bug: `href="[PLACEHOLDER]"` em Upwork/LinkedIn/GitHub
- Decisão: NÃO inventar URLs. Ricardo precisa fornecer. Criar componente de fallback: se URL for `[PLACEHOLDER]`, renderizar como texto muted em vez de link. Adicionar tooltip "Configure em lib/ricardo.ts".
- Adicionar `lib/ricardo.ts` campo `socials: { upwork: string; linkedin: string; github: string; email: string }` com valores atuais sendo `[PLACEHOLDER]`.
- Validar: screenshot do footer — links sem `[PLACEHOLDER]` visível.
- Entregar: diff + screenshot.

**Após os 3 Sonnets terminarem:**
- Tirar screenshot fullpage da home atualizada.
- Verificar se o Logo Cloud agora aparece visível (expectativa: sim).
- Adicionar entrada no PROGRESS.md com WAVE 1 status.

### WAVE 2 — AUDITORIA DE UX/UI/COPY (2 Sonnets + Opus visual)
**Objetivo:** mapear TODOS os problemas de UX/UI/copy remanescentes, com severidade.

**Sonnet 1 — auditoria de copy textual**:
- Ler TODOS os textos visíveis em todas as páginas (via Grep nos arquivos + ler via Chrome DevTools snapshot de cada página).
- Avaliar: (a) gramática, (b) consistência de register, (c) cliché vs diferencial, (d) clareza da proposta de valor, (e) ausência de buzzwords vazios ("innovative", "cutting-edge", "world-class"), (f) especificidade (cliente de Upwork quer saber o que recebe, não o que o Ricardo "é").
- Retornar JSON com lista de problemas + sugestão de reescrita para cada (≤ 20 palavras cada).
- Categorias: Title (h1) / Subtitle / Card Title / Card Desc / CTA / Footer / FAQ / Manifesto / Process / Stats / Trust Signal.

**Sonnet 2 — auditoria de UX/UI**:
- Ler componentes visuais (Hero, Bento, Services, etc).
- Avaliar: (a) hierarquia visual (olho bate onde deveria?), (b) CTAs claros e visíveis, (c) navegação clara (sempre dá pra voltar), (d) dark/light mode ambos funcionam e são visualmente equilibrados, (e) micro-interações existentes (hover, focus, active states), (f) animações não atrapalham leitura (Lenis, Motion), (g) gaps e respiro (não saturado).
- Tirar screenshots em modo light e dark de cada página.
- Retornar JSON: lista de problemas + severidade (alta/média/baixa) + print de evidência (qual screenshot, qual seção).

**Opus 5 — auditoria visual crítica**:
- Navegar TODAS as páginas via Chrome MCP.
- Modo dark + light para cada.
- Mobile (375px) + tablet (768px) + desktop (1440px) para a home.
- Para cada par (página, viewport), tirar screenshot.
- Criar pasta `_ops/SCREENSHOTS/wave-2-audit/` com 16+ screenshots.
- Listar TODOS os problemas visuais encontrados: overflow, texto cortado, imagens quebradas, alinhamento torto, contraste ruim, animações travadas, foco invisível em keyboard nav.
- Cruzar com os relatórios dos Sonnets. Gerar `_ops/PARECERES.md` seção "WAVE 2 — AUDITORIA UX/UI/COPY" consolidada.

### WAVE 3 — FIXES DE COPY + UX (4 Sonnets em paralelo)
**Objetivo:** aplicar correções priorizadas da auditoria WAVE 2.

**Sonnet 1 — REESCRITA DE COPY** (alta prioridade):
- Aplicar TODAS as reescritas categorizadas como "alta severidade" do relatório WAVE 2.
- NÃO remover nada — só adicionar/melhorar.
- Manter tom direto, sem buzzwords, baseado em fato.
- Validar com TypeScript build antes de fechar.

**Sonnet 2 — PERFORMANCE FIXES** (média prioridade):
- Auditar bundle: `pnpm build` e ver tamanho de cada rota.
- Identificar componentes que poderiam ser `next/dynamic` (lazy).
- Identificar imagens não-otimizadas (se houver — projeto usa SVGs e Unsplash).
- Identificar JS desnecessário (Motion, Lenis estão sendo usados em 100% das rotas?).
- Implementar: dynamic import para seções below-the-fold (Bento, Stats, FAQ, Process, CTA).
- Adicionar `loading="lazy"` em imagens below-the-fold.
- Resultado esperado: Lighthouse Performance 95 → 97+.

**Sonnet 3 — ACCESSIBILITY FIXES** (média prioridade):
- Rodar `axe` via Chrome MCP em todas as páginas.
- Garantir: (a) contraste AA em TODOS os textos (especialmente muted), (b) focus rings visíveis em todos os elementos interativos, (c) aria-labels em ícones sem texto, (d) alt text em imagens, (e) heading hierarchy (h1 → h2 → h3 sem pular), (f) keyboard navigation funciona (Tab em Services grid + Process).
- Lighthouse Accessibility esperado: 96 → 100.

**Sonnet 4 — RESPONSIVIDADE + LIGHT MODE** (média prioridade):
- Testar cada página em 4 viewports: 375px (sm), 768px (md), 1024px (lg), 1440px (xl).
- Identificar problemas: overflow horizontal, texto cortado, grid quebrado, sticky issues, custom cursor em mobile (deve estar desabilitado), Lenis em mobile (deve estar OK).
- Light mode: tirar screenshots, identificar contrastes ruins, ajustar tokens em `globals.css` se necessário.
- Resultado esperado: zero overflow, zero texto cortado, light mode visualmente equivalente ao dark.

**Após os 4 Sonnets:**
- Rebuild + re-test lighthouse mobile.
- Screenshot comparativo home (antes/depois).
- Adicionar PROGRESS.md.

### WAVE 4 — CONTEÚDO NOVO (3 Sonnets em paralelo)
**Objetivo:** adicionar profundidade que falta para "fascínio à primeira vista".

**Sonnet 1 — DEMOS reais ou GIFs**:
- Para os 8 cards do Showcase, gerar GIFs animados curtos (3-5s, looping) usando alguma ferramenta headless (Puppeteer ou playwright interno) ou usar placeholders animados de sites como https://lottiefiles.com/ (free) ou criar SVGs animados com Motion + Framer.
- Se GIF real for inviável, gerar GIF mockup de "tela do app" com gradiente + tipografia + tag (placeholder honesto).
- Salvar em `public/showcase/<slug>.gif` ou `public/showcase/<slug>.mp4`.
- Atualizar `app/showcase/page.tsx` para usar imagens reais em vez de Unsplash (Unsplash genérico destrói credibilidade — Ricardo pediu amplitude mas não pediu mentira visual).

**Sonnet 2 — MAIS CASE STUDIES ou MAIS DEPTH**:
- Adicionar 2 case studies novos focado em AUTOMATION e AI (não mais frontend):
  - "n8n Workflow for SaaS Churn Recovery" — 4 etapas (Trigger → Enrich → Personalize Email → Update CRM)
  - "OpenAI Customer Support Assistant" — RAG com embeddings, fallback para humano
- Manter disclaimer "Demonstration case studies".
- Atualizar `app/case-studies/page.tsx`.
- Lighthouse não pode regredir.

**Sonnet 3 — BLOG/INSIGHTS ou TESTIMONIALS**:
- Decidir entre as duas opções baseado em tempo:
  - **Opção A — Testimonials**: adicionar 3-4 testimonials placeholder (NÃO inventar — marcar como "Examples based on real client interactions, anonymized") com foto via initials avatar.
  - **Opção B — Blog/Insights**: criar `/blog` com 2-3 artigos placeholder sobre web performance, automation ROI, AI integration trade-offs (markdown, 600-1000 palavras cada).
- Escolher A (mais rápido, mais persuasivo). Adicionar em `/` entre Stats e FAQ.
- Validar.

**Após os 3 Sonnets:**
- Verificar build + lighthouse.
- PROGRESS.md atualizado.

### WAVE 5 — INTEGRAÇÃO COM UPWORK + DADOS REAIS (1 Sonnet + Opus)
**Objetivo:** portfolio se conecta à "vida real" de Ricardo no Upwork.

**Sonnet 1 — LINKED PROFILE BADGE**:
- Adicionar uma seção/badge na home ou no About mostrando:
  - Upwork profile link (placeholder até Ricardo confirmar)
  - Top Rated Rising Talent badge (se aplicável — verificar via Chrome MCP)
  - Job Success Score (se aplicável)
  - Total Jobs Completed
- Esses dados DEVEM ser verificados via Chrome MCP em `https://www.upwork.com/freelancers/ricardorocker` ANTES de usar como premissa.
- Não inventar números. Se não verificável, omitir com nota "(verifiable on Upwork profile)".

**Opus 5 — verificador de dados Upwork**:
- Navegar para `https://www.upwork.com/freelancers/ricardorocker` no Chrome MCP logado.
- Capturar: Top Rated? Rising Talent? Job Success Score? Total earnings (publicly visible)? Total jobs? Total hours? Portfolio items count? Skills count?
- Atualizar `lib/ricardo.ts` `.stats` e `.badges` com dados REAIS verificados.
- Atualizar `00_LEIA_PRIMEIRO/STATUS_ATUAL.md` com fonte e data de verificação.

### WAVE 6 — SEO + METADATA + SHAREABILITY (2 Sonnets)
**Objetivo:** portfolio aparece bem em Google, LinkedIn, Twitter quando compartilhado.

**Sonnet 1 — SEO TÉCNICO**:
- Adicionar `app/sitemap.ts` (Next 16 way) e `app/robots.ts`.
- Adicionar `app/icon.tsx` para favicon dinâmico (Safety Orange "R").
- Adicionar `app/opengraph-image.tsx` para OG image (gerar via `next/og`).
- Validar com Lighthouse SEO: esperado 100.
- Validar com `https://www.opengraph.xyz/` (WebFetch) que OG image aparece em preview.

**Sonnet 2 — METADATA + JSON-LD**:
- Adicionar `Person` JSON-LD no `<head>` em `app/layout.tsx`.
- Adicionar metadata específico por página (`app/about/page.tsx`, etc).
- Adicionar `metadataBase` URL canônica.
- Validar Lighthouse Best Practices: esperado 100.

### WAVE 7 — POLIMENTO FINAL (3 Sonnets)
**Objetivo:** "fascínio à primeira vista" = 80% copy + 20% polish.

**Sonnet 1 — ANIMAÇÕES AVANÇADAS**:
- Custom cursor no hero (já existe, validar funcionamento).
- Hero scroll indicator rotativo (já existe, validar).
- Theme toggle (já existe, validar).
- Scroll progress bar (já existe, validar).
- ADICIONAR: stagger animation em Bento e Services cards (Motion + useInView).
- ADICIONAR: parallax sutil no hero (Lenis + Motion useScroll + useTransform).
- ADICIONAR: text reveal animation em headings (cada palavra aparece com delay).
- Lighthouse Performance não pode regredir.

**Sonnet 2 — MICROINTERAÇÕES**:
- Hover states em todos os cards: scale 1.02, shadow accent, transition 200ms.
- Focus states visíveis com outline Safety Orange 2px + offset 2px.
- Botões com active:scale-95.
- Links com underline animado (underline aparece da esquerda pra direita).
- Validar com keyboard nav real.

**Sonnet 3 — TOKEN/THEME POLISH**:
- Auditar `styles/globals.css`.
- Validar pares light/dark para cada token (background, foreground, muted, accent, border).
- Validar que TODAS as cores usadas estão como tokens, nenhum hex inline.
- Validar que Safety Orange (#FF6B35 ou similar) é usado de forma estratégica (não exagerada).
- Adicionar 2-3 novos tokens se útil (ex: `--color-success`, `--color-warn`).

### WAVE 8 — DEPLOY + VALIDAÇÃO FINAL + RELATÓRIO (Opus 5 sozinho)
1. `pnpm run build` (TypeScript check + bundle analysis).
2. `vercel --prod` (deploy production).
3. Lighthouse mobile em produção (URL final). Salvar em `_ops/lighthouse/wave-8-final-mobile.json`.
4. Lighthouse desktop em produção. Salvar em `_ops/lighthouse/wave-8-final-desktop.json`.
5. Screenshot fullpage de todas as páginas em produção em dark e light. Salvar em `_ops/SCREENSHOTS/wave-8-final/`.
6. Escrever `_ops/PARECERES.md` seção "WAVE 8 — FINAL":
   - Resumo do que foi implementado (checklist ✅ final).
   - Lighthouse scores finais mobile + desktop.
   - URL de produção.
   - Desvios ou decisões técnicas não previstas.
   - Screenshot da home final (fullpage).
   - Screenshots comparativos antes/depois das principais mudanças.
7. Atualizar `00_LEIA_PRIMEIRO/STATUS_ATUAL.md` com URL final + Lighthouse + data.
8. Criar memória `C:\Users\rocker\.claude\projects\C--Projetos-08-Renda-Extra-06-Prestacao-Servicos\memory\portfolio-02-auditoria-profunda-concluida-2026-09-16.md` com link para PARECERES.md e resumo.
9. Adicionar linha em `MEMORY.md`.
10. **SE** Ricardo deixou pendência de email real ou URLs Upwork/LinkedIn/GitHub, deixar como "pending config" no STATUS_ATUAL e na PARECERES.

---

## 4. CRITÉRIOS DE ACEITAÇÃO (DEFINITION OF DONE)

A sessão só termina quando:

- [ ] ZERO bugs visuais remanescentes (Logo Cloud renderizando, Demo links não-quebrados, Footer sem placeholders visíveis).
- [ ] Lighthouse mobile ≥ 95 em todas as 4 categorias (Perf/Acc/BP/SEO).
- [ ] Lighthouse desktop ≥ 95 em todas as 4 categorias.
- [ ] TODAS as páginas testadas em 4 viewports (375 / 768 / 1024 / 1440) sem overflow horizontal.
- [ ] TODAS as páginas testadas em dark e light mode, ambas equilibradas.
- [ ] Navegação por teclado funciona (Tab atravessa elementos interativos em ordem lógica, foco visível).
- [ ] `pnpm build` passa sem warnings TS.
- [ ] Deploy em produção na URL `https://ricardo-rocker-portfolio.vercel.app`.
- [ ] `00_LEIA_PRIMEIRO/STATUS_ATUAL.md` atualizado com URL + Lighthouse scores + data.
- [ ] `_ops/PARECERES.md` completo com 9 seções (WAVE 0 até WAVE 8).
- [ ] `_ops/PROGRESS.md` com todas as waves marcadas completed.
- [ ] Memória do projeto atualizada com nova entrada + linha em MEMORY.md.

## 5. NÃO-OBJETIVOS (NÃO FAZER)

- NÃO mexer em stack core (Next 16, Tailwind v4, shadcn/ui, Motion, Lenis). Manter.
- NÃO remover nada de `lib/ricardo.ts` (só adicionar campos).
- NÃO usar logos de empresas CLT do Ricardo (Reply, Nava, Stefanini, Itix, GFT). Regra permanente.
- NÃO incluir screenshots de produtos confidenciais CLT.
- NÃO editar `AGENTS.md` ou `CLAUDE.md` (gerados automaticamente pelo Next.js).
- NÃO degradar Lighthouse abaixo de 95 em qualquer categoria.
- NÃO inventar números ou testimonials sem disclaimer explícito.
- NÃO usar Lorem ipsum ou texto placeholder visível.
- NÃO adicionar CMS, banco de dados, autenticação. Site é estático.
- NÃO usar Workflow `deep-research` (regra global §10).
- NÃO despachar sub-agentes em background invisível (regra global §9).
- NÃO end-turn enquanto houver workers pendentes (regra global §1.5).
- NÃO pedir /cost no meio da sessão (só no fim, depois de tudo entregue).

## 6. FORMATO DE OUTPUT ESPERADO

### 6.1 Comunicação com Ricardo (entre waves)
Curta, em PT-BR, com evidência (link pro arquivo ou screenshot path). Sem enrolação.

### 6.2 `_ops/PARECERES.md` (entregável técnico final)
Markdown técnico, denso, em inglês (audience = outros Claude). Cada seção WAVE 0..8 com:
- Status (completed/partial/blocked)
- Arquivos criados/modificados (path absoluto + linha)
- Sonnets dispatched (count + 1-line cada)
- Decisões tomadas (com justificativa)
- Desvios do GUIA_MASTER ou deste prompt (se houver)
- Riscos identificados
- Screenshots (path)
- Lighthouse scores (se aplicável)

### 6.3 Atualização de memória ao final
Criar arquivo em `C:\Users\rocker\.claude\projects\C--Projetos-08-Renda-Extra-06-Prestacao-Servicos\memory\` com frontmatter padrão. Adicionar linha em `MEMORY.md`.

---

## 7. ARMADILHAS JÁ DESCOBERTAS (não cair)

| # | Armadilha | Como evitar |
|---|-----------|-------------|
| 1 | Sub-agentes com output zero (3 sessões tiveram esse bug) | Verificar artefato em disco após cada Sonnet terminar. Se 0 bytes, re-despachar com prompt mais específico. |
| 2 | Edit tool falha com `Error editing file` | Preferir Write com path absoluto completo. Se Edit falhar 2x, usar Write. |
| 3 | Mix PowerShell/Bash | Usar `Bash` tool para comandos Unix, `PowerShell` tool para Windows. PowerShell NÃO roda no Bash tool. |
| 4 | Arquivo > 256KB truncado | Não criar artefatos > 100KB. Fragmentar em múltiplos. |
| 5 | URL assumida como disponível | Sempre verificar com WebFetch ou Chrome MCP antes de usar como referência. |
| 6 | Lighthouse score flutua ±2 entre runs | Rodar 3 vezes e pegar mediana. Anotar na PARECERES. |
| 7 | Motion + Lenis em mobile | Testar em viewport mobile real, não só redimensionar desktop. |
| 8 | Next.js 16 App Router client/server boundaries | Componente que usa `useState` ou `onClick` precisa `"use client"` no topo. Esquecer = hydration error. |
| 9 | Tailwind v4 syntax mudou | Não usar `@apply` da v3. Usar `@theme inline` em CSS. Se não souber, pedir pro Sonnet ler docs do Tailwind v4 primeiro. |
| 10 | Background agents invisíveis | SEMPRE despachar Sonnets em foreground via Agent tool com `model: "sonnet"`. Ver visualização dos tool calls no fluxo principal. |
| 11 | Contato Email placeholder | Ricardo ainda não confirmou o email real (`contact@ricardorocker.com` é placeholder). NÃO inventar. |
| 12 | Footer hrefs `[PLACEHOLDER]` | Substituir por fallback visual (texto muted) em vez de `href="#"` ou link inventado. |

---

## 8. COMANDOS ÚTEIS

```powershell
# Subir dev server
cd "C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\02_PORTFOLIO_WEB"
pnpm dev

# Build de produção
pnpm run build

# Lighthouse mobile (mobile é o alvo primário)
pnpm exec lighthouse https://ricardo-rocker-portfolio.vercel.app `
  --only-categories=performance,accessibility,best-practices,seo `
  --form-factor=mobile --quiet `
  --chrome-flags="--headless" `
  --output=json --output-path=_ops/lighthouse/<nome>.json

# Lighthouse desktop
pnpm exec lighthouse https://ricardo-rocker-portfolio.vercel.app `
  --only-categories=performance,accessibility,best-practices,seo `
  --preset=desktop --quiet `
  --chrome-flags="--headless" `
  --output=json --output-path=_ops/lighthouse/<nome>-desktop.json

# Deploy produção
vercel --prod

# Tipagem
pnpm exec tsc --noEmit
```

```bash
# Greps úteis
# Todos os arquivos com "PLACEHOLDER"
grep -rn "PLACEHOLDER" components/ app/ lib/ styles/

# Todos os SVGs inline (potenciais bugs de dimensão)
grep -rln "dangerouslySetInnerHTML" components/

# Todos os href="#" ou href="["
grep -rn 'href="#"' components/ app/
grep -rn 'href="\[' components/ app/
```

---

## 9. CRITÉRIOS DE PARALELISMO (REGRA GLOBAL §10)

| Tarefa | Modelo | Paralelismo |
|--------|--------|-------------|
| Auditar código estático | Sonnet | 1-2 paralelos |
| Implementar fix de 1 arquivo | Sonnet | 2-4 paralelos |
| Lighthouse run | Opus sozinho | 0 (não paralelizar — lighthouse tem race condition) |
| Navegação Chrome DevTools MCP | Opus sozinho | 0 (sequencial, contexto compartilhado) |
| Análise crítica de UX/UI | Opus sozinho | 0 (precisa do contexto holístico) |
| Migração em massa de dados (lib/ricardo.ts) | Sonnet | 1 (sequencial, alta chance de conflito) |

**NUNCA** mais que 5-6 sub-agentes simultâneos. Acima disso, parar e replanejar.

---

## 10. ÚLTIMA COISA — LEIA COM CALMA

Você está pegando um portfolio que **está bom o suficiente** (Lighthouse 95/96/100/100, deploy prod, 5 páginas funcionais). Seu trabalho NÃO é demolir. É refinar. Cada mudança deve:
1. Resolver um problema real (verificado, não assumido).
2. Não regredir nada que já funciona.
3. Não adicionar complexidade desnecessária.
4. Não aumentar tempo de build ou bundle size significativamente.

Se em algum momento você ficar em dúvida entre "fazer mais" e "parar aqui e documentar", **escolha parar e documentar**. Portfolio bom-enquanto-iterável > portfolio perfeito-nunca-entregue.

**Boa. Pode começar. Wave 0.**
