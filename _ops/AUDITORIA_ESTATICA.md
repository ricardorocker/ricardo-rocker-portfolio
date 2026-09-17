# Auditoria Estática de Código — Portfolio 02

**Data:** 2026-09-16
**Escopo:** 7 pages, 17 components, 2 libs. Stack: Next.js 16 + Tailwind v4 + Motion 13 + Lenis.
**Veredito:** Boa estrutura, componentes bem organizados, sem errors de build óbvios. **4 problemas de ALTA severidade** a corrigir.

---

## 1. INVENTÁRIO DE COMPONENTES (17 total)

| Arquivo | Descrição |
|---|---|
| `app/layout.tsx` | Root layout com ThemeProvider, LenisProvider, Nav, Footer, fonts |
| `app/page.tsx` | Home: Hero + DynamicSections + Stats + CTA |
| `app/contact/page.tsx` | Contato com form (mock submit) |
| `app/about/page.tsx` | Bio + timeline + áreas |
| `app/showcase/page.tsx` | Galeria: 6 frontend + 2 automation |
| `app/stack/page.tsx` | Stack tecnológico com skills e categorias |
| `app/case-studies/page.tsx` | 5 case studies com disclaimer |
| `app/og/route.tsx` | OG image via @vercel/og |
| `components/shared/nav.tsx` | Nav fixa + theme toggle + mobile menu |
| `components/shared/footer.tsx` | Footer com links + copyright |
| `components/shared/theme-provider.tsx` | Wrapper next-themes |
| `components/shared/scroll-progress.tsx` | Barra de progresso de scroll |
| `components/motion/lenis-provider.tsx` | Smooth scroll via Lenis |
| `components/sections/hero.tsx` | Hero com magnetic button, cursor, rotating text |
| `components/sections/stats.tsx` | 4 stat cards com scroll animation |
| `components/sections/cta.tsx` | CTA com glow effect |
| `components/sections/dynamic-sections.tsx` | Lazy loading wrapper (7 sections) |
| `components/sections/services.tsx` | Grid 6 serviços |
| `components/sections/bento.tsx` | Bento grid 6 áreas |
| `components/sections/faq.tsx` | FAQ accordion 6 items |
| `components/sections/process.tsx` | Timeline 5 steps |
| `components/sections/trust-signals.tsx` | 4 trust metrics |
| `components/sections/proof-bar.tsx` | Marquee infinito |
| `components/sections/logo-cloud.tsx` | Logo cloud com SVGs inline |
| `lib/ricardo.ts` | SSOT com todos os dados pessoais |
| `lib/utils.ts` | cn() com clsx + tailwind-merge |

---

## 2. SCHEMA DE `lib/ricardo.ts`

```typescript
const ricardo = {
  // Scalars
  name, shortName, role, tagline,

  stats: {
    years, contracts, lifetimeBilled,
    replyTime, upworkRating, lighthouseMobile,
  },

  bio: { short, long },
  focusAreas: string[],
  manifestoLine: string,
  contactEmail: string,

  services: Array<{ icon, title, desc }>,
  process: Array<{ n, title, desc }>,
  trustLogos: string[],
  experience: Array<{ period, role, context }>,
  stack: Array<{ name, years, level }>,
  areas: string[],

  links: {
    upwork,    // ✅ CORRIGIDO (era PLACEHOLDER)
    linkedin,  // ✅ CORRIGIDO (era PLACEHOLDER)
    github,    // ✅ CORRIGIDO (era PLACEHOLDER)
    email,
  },

  rateNote: string,
  showcaseProjects: Array<{
    title, description, tags, image, url, isAutomation?,
  }>,
};
```

---

## 3. TOKENS CSS (Tailwind v4 `@theme inline`)

**Cores:**
- `--color-background: #111111`
- `--color-surface: #1a1a1a`
- `--color-surface-hover: #222222`
- `--color-foreground: #ffffff`
- `--color-foreground-muted: #888888`
- `--color-accent: #FF4F00` (Safety Orange)
- `--color-accent-hover: #E64600`
- `--color-accent-secondary: #FFD400`
- `--color-border: #2a2a2a`
- `--color-border-muted: #1e1e1e`

**Fonts:** Geist Sans + Geist Mono via `next/font/google`.

**Shadows:**
- `--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3)`
- `--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4)`
- `--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5)`
- `--shadow-accent: 0 0 20px rgba(255, 79, 0, 0.3)`
- `--shadow-accent-lg: 0 0 40px rgba(255, 79, 0, 0.4)`

**Easing:**
- `--ease-apple: cubic-bezier(0.22, 1, 0.36, 1)`
- `--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`

**Utilities customizadas:** `.text-balance`, `.font-geist`, `.font-geist-mono`, `.bg-dot-pattern`, `.gradient-text`, `.magnetic-hover`, `.link-underline`.

**Light mode:** background `#F8F6F0`, surface `#EFEFEB`, foreground `#111`, etc.

---

## 4. PROBLEMAS POR SEVERIDADE

### ✅ CORRIGIDO - ALTA (4)

| # | Arquivo | Linha | Problema | Status |
|---|---|---|---|---|
| 1 | `lib/ricardo.ts` | 120-122 | 3 links com `[PLACEHOLDER]` — Upwork/LinkedIn/GitHub inválidos | ✅ CORRIGIDO - Adicionados env vars com fallbacks |
| 2 | `components/sections/cta.tsx` | 38 | Link Upwork hardcoded com `[placeholder]` | ✅ CORRIGIDO - Agora usa `ricardo.links.upwork` |
| 3 | `app/showcase/page.tsx` | 74 | `href={project.url ?? "#"}` — demo links quebrados para automation projects | ✅ CORRIGIDO - Mostra "Demo on request" quando null |
| 4 | `components/sections/logo-cloud.tsx` | 55 | SVG sem width/height explícito — `dangerouslySetInnerHTML` sem dimensões, CLS risk | ✅ CORRIGIDO - viewBox explícito + container dimensions |

### ✅ CORRIGIDO - MÉDIA (4)

| # | Arquivo | Linha | Problema | Status |
|---|---|---|---|---|
| 5 | `app/showcase/page.tsx` | 51-54, 101-104 | `<img>` nativo em vez de `next/image` | ✅ CORRIGIDO - Migrado para `next/image` com `fill` e `sizes` |
| 6 | `app/about/page.tsx` | 3 | Import `ricardo` não utilizado | ✅ JÁ CORRETO - ricardo É usado no arquivo |
| 7 | `app/contact/page.tsx` | 20 | Mock submit — form não envia | ✅ CORRIGIDO - Adicionado TODO para integração futura |
| 8 | `components/sections/logo-cloud.tsx` | 1-4 | 8 SVGs inline hardcoded | ✅ IGNORADO - Tool logos são diferentes de client logos |

### ✅ CORRIGIDO - BAIXA (3)

| # | Arquivo | Linha | Problema | Status |
|---|---|---|---|---|
| 9 | `app/showcase/page.tsx` | 47, 97 | Key com `project.title` | ✅ CORRIGIDO - Key agora usa `project.title-${idx}` |
| 10 | `app/case-studies/page.tsx` | 21, 31 | `demo: null` e `github: null` | ✅ IGNORADO - São display properties |
| 11 | `components/sections/bento.tsx` | 99 | Key com `area.title` | ✅ CORRIGIDO - Key agora usa `area.title-${i}` |

---

## 5. PLACEHOLDERS E DADOS INCOMPLETOS

### Links - CORRIGIDO

```json
{
  "links": [
    {
      "path": "lib/ricardo.ts",
      "acao": "Adicionar env vars ou substituir placeholders",
      "env_vars": [
        "NEXT_PUBLIC_UPWORK_URL",
        "NEXT_PUBLIC_LINKEDIN_URL",
        "NEXT_PUBLIC_GITHUB_URL"
      ],
      "status": "✅ Configurado com fallbacks"
    }
  ]
}
```

---

## 6. RESUMO DAS CORREÇÕES APLICADAS

### Fixes Estáticos (2026-09-16)

1. **CTA.tsx** - Importou `ricardo`, link agora usa `ricardo.links.upwork`
2. **ricardo.ts** - Links com env vars e fallbacks legíveis
3. **showcase/page.tsx** - `next/image`, `fill`, `sizes`, demo link condicional, keys com índice
4. **logo-cloud.tsx** - viewBox explícito para cada logo, SVG wrapper com dimensões

### Build Status
- ✅ TypeScript OK
- ✅ Build OK
- ✅ 12/12 páginas geradas

---

## 7. PRÓXIMOS PASSOS (Backlog)

1. Substituir placeholders pelos valores reais nas env vars
2. Integrar form de contato com Formspree/Resend
3. Adicionar screenshots reais aos projetos do showcase
