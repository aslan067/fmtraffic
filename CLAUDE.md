# CLAUDE.md — FM Traffic Codebase Guide

This file documents the codebase structure, conventions, and development workflows for AI assistants working in this repository.

## Project Overview

FM Traffic (`fmtraffic.com`) is a **multilingual B2B landing page** for a road-safety equipment supplier targeting European markets. It is a static site built with Next.js 14 (App Router) and deployed to GitHub Pages.

- **Framework**: Next.js 14.2.10 (App Router, static export)
- **React**: 18.3.1
- **Deployment**: GitHub Pages via GitHub Actions
- **Styling**: Vanilla CSS with CSS custom properties (no Tailwind, no CSS-in-JS)
- **i18n**: JSON translation files for 5 languages
- **No database, no backend, no tests, no Docker**

---

## Repository Structure

```
fmtraffic/
├── app/
│   ├── layout.jsx              # Root HTML layout (metadata, favicon)
│   ├── page.jsx                # Root redirect page (detects browser language)
│   ├── globals.css             # Global CSS with CSS variables and utilities
│   └── [lang]/
│       ├── layout.jsx          # Per-language layout (hreflang, OG tags, canonical)
│       └── page.jsx            # Main page component (all sections rendered here)
├── locales/
│   ├── en.json                 # English translations
│   ├── de.json                 # German translations
│   ├── nl.json                 # Dutch translations
│   ├── fr.json                 # French translations
│   └── tr.json                 # Turkish translations
├── public/
│   └── favicon.svg             # Traffic cone SVG logo (orange #ff6a00)
├── out/                        # Static build output (git-tracked, auto-generated)
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Primary GitHub Pages deployment pipeline
│       └── nextjs.yml          # Alternate Next.js deployment workflow
├── _index                      # Fallback static HTML (pre-Next.js version)
├── CNAME                       # fmtraffic.com, www.fmtraffic.com
├── next.config.js              # Next.js config (static export, trailing slash)
├── package.json                # Dependencies and scripts
└── README.MD                   # Project readme
```

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build static export to ./out
npm start            # Serve the ./out directory locally
npm run lint         # Lint (optional, not enforced in CI)
```

### Local Preview of Built Site

After `npm run build`, the `out/` directory is served. The site redirects `/` to `/{lang}/` based on browser language.

---

## Architecture Decisions

### Static Export (`output: 'export'`)

`next.config.js` sets `output: 'export'`, which means:
- All pages are pre-rendered to HTML at build time
- No server-side rendering or API routes
- The `out/` directory is what gets deployed
- `images: { unoptimized: true }` is required for static export

### Language Routing

- The root `app/page.jsx` detects `navigator.language` and redirects to `/{lang}/`
- Supported language codes: `en`, `de`, `nl`, `fr`, `tr`
- `app/[lang]/layout.jsx` uses `generateStaticParams()` to pre-render all 5 language routes
- Language switching is done via link navigation to `/{lang}/`

### Translation Files

Each `locales/{lang}.json` has a flat key structure. Keys used in `app/[lang]/page.jsx`:

| Key | Description |
|-----|-------------|
| `heroTitle` | Main headline (use `\n` for line breaks) |
| `heroDesc` | Hero description paragraph |
| `chips` | Array of 3 feature tag strings |
| `kpi1`, `kpi1s` | KPI 1 value + label |
| `kpi2`, `kpi2s` | KPI 2 value + label |
| `kpi3`, `kpi3s` | KPI 3 value + label |
| `productsTitle`, `productsDesc` | Products section header |
| `bullets` | Array of 5 bullet strings (include ✓ prefix) |
| `cards` | Array of 5 objects: `{ title, desc }` |
| `contactUs`, `viewCatalog`, `whatsapp`, `email` | Button labels |
| `whyTitle`, `whyDesc` | Differentiation section |
| `ctaTitle` | Call-to-action headline |
| `footerLine` | Copyright/footer text |

---

## Styling Conventions

All styles are in `app/globals.css`. No component-scoped styles.

### CSS Variables (defined on `:root`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#0b1020` | Page background |
| `--card` | `#0f172a` | Card/section background |
| `--muted` | `#94a3b8` | Secondary text |
| `--text` | `#e5e7eb` | Primary text |
| `--brand` | `#ff6a00` | Primary orange accent |
| `--brand-2` | `#ffb300` | Secondary orange |
| `--ok` | `#22c55e` | Green accent |
| `--max` | `1200px` | Max container width |

### Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.container` | Centered max-width wrapper |
| `.btn` | Primary orange gradient button |
| `.btn.secondary` | Outline/transparent button |
| `.hero` | 2-column hero grid (1.1fr / 0.9fr) |
| `.cards` | Auto-fit responsive card grid (min 220px) |
| `.glass` | Glassmorphism KPI overlay |
| `.pill` | Rounded language switcher / tag button |
| `.float` | Floating animation (6s) on hero icon |

### Responsive Breakpoint

Single breakpoint at `960px` — below this, layouts stack vertically.

---

## Contact / CTA Information

These are hardcoded in `app/[lang]/page.jsx` and should not change without business approval:

- **WhatsApp**: `https://wa.me/905454888381`
- **Email**: `info@fmtrafik.com`
- **Domain**: `fmtraffic.com`

---

## CI/CD — GitHub Actions

### Primary Pipeline: `deploy.yml`

Triggers on push to `main` or manual dispatch.

1. **build** job (ubuntu-latest, Node 20):
   - Checkout → `npm install` → `npm run build` → upload `./out` artifact
2. **deploy** job:
   - Deploys the artifact to GitHub Pages

### Secondary Pipeline: `nextjs.yml`

Alternate workflow with auto-detection of package manager (npm/yarn/pnpm). Same outcome — deploys to GitHub Pages.

### Deployment Target

- GitHub Pages at `fmtraffic.com` (configured via `CNAME` file)
- The `out/` directory is uploaded as the deployment artifact

---

## Adding a New Language

1. Create `locales/{code}.json` with all required keys (copy `en.json` as template)
2. In `app/[lang]/layout.jsx`, add the new code to `generateStaticParams()` and the `hrefLangs` object
3. In `app/page.jsx`, add the language code to the browser detection logic
4. Run `npm run build` to verify the new static route is generated

---

## Key Conventions

- **No TypeScript** — all files use `.jsx`
- **No CSS framework** — pure CSS with custom properties
- **No state management library** — React hooks only
- **No test framework** — no tests exist; manual testing only
- **Client components** (`"use client"`) for pages that use browser APIs (language detection, rendering)
- **Server components** for layouts (SEO metadata, static params)
- **Translations are loaded at render time** from JSON imports in `page.jsx`
- **The `out/` directory is committed** — it contains the pre-built static site used by GitHub Pages

---

## What NOT to Do

- Do not add a backend, database, or API routes — this is a static site
- Do not install CSS frameworks (Tailwind, etc.) without updating all existing styles
- Do not use TypeScript without migrating all `.jsx` files
- Do not modify `CNAME` without coordinating DNS changes
- Do not remove the `_index` fallback without ensuring the Next.js build is stable
- Do not push directly to `main` — changes trigger an automatic deployment
