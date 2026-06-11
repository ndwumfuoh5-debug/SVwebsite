# Scalator Ventures — Website

## High-level Strategy and Goal

A minimal, modern, single-page marketing website for **Scalator Ventures** and its three funds: **Scalator Fund I (Automotive)**, **Health & Longevity AI First Fund**, and **Sports Hero Fund I**. The site communicates the firm's "Distribution-First" investment thesis — the Scalator Effect — where exclusive strategic distribution channels are secured before capital is deployed. Design is inspired by kindredventures.com: big typography, full-bleed imagery, sparse copy, and generous white space.

---

## Changes Implemented

### Complete Redesign (May 2026)
Full redesign of the site to a minimal, modern aesthetic with the following page structure:

**Page structure:**
```
Navbar → HeroSection → ThesisSection → FundsSection →
AutomotiveFundSection → HealthFundSection → SportsFundSection → ContactSection
```

**Section rewrites:**
- `Navbar.tsx` — Ultra-clean white bar with thin bottom border; logo left, 3 nav links (The Scalator Effect, Funds, Contact); no shadow
- `HeroSection.tsx` — Full-viewport dark navy (#0A1540) hero; large centered "We invest to scale." headline; subtitle + 1-paragraph description; scroll chevron
- `ThesisSection.tsx` — White bg; "THE SCALATOR EFFECT" label; big headline; 2-sentence body; 3 horizontal principle cards (Distribution First, Exponential CAC, Scalator Effect)
- `FundsSection.tsx` — Light gray (#F7F7F7) bg; "Three sectors. One thesis." headline; 3 image-topped cards linking to fund sections
- `AutomotiveFundSection.tsx` — White bg; full-bleed 500px hero image; badge pill; headline; 2-sentence body; 3 stat pills; 3 portfolio placeholder cards
- `HealthFundSection.tsx` — Light gray bg; full-bleed 500px hero image; badge pill; headline; 2-sentence body; 3 stat pills; 3 portfolio placeholder cards
- `WhyNowSection.tsx` — Completely rewritten as `SportsFundSection`; white bg; full-bleed 500px hero image; badge pill; headline; 2-sentence body; 3 stat pills; 3 portfolio placeholder cards
- `ContactSection.tsx` — Dark navy bg; centered "Ready to scale?" headline; mailto pill button; copyright footer

**Removed sections (stubbed to null):**
- `EdgeSection.tsx`, `ProblemSection.tsx`, `InvestmentAreasSection.tsx`, `PlaybookSection.tsx`, `ProgramSection.tsx`, `TechFocusSection.tsx`, `PortfolioSection.tsx`

**Shared:**
- `shared.tsx` — FadeUp now defaults to `opacity: 1` so content is always visible; animation is an enhancement only

---

## Architecture and Technical Decisions

- **Single-page client components** — all scroll animations use `IntersectionObserver` via the `FadeUp` component in `shared.tsx`.
- **Section components** in `src/app/_sections/` — each section is its own file; `page.tsx` is a thin orchestrator.
- **FadeUp animation** — starts at `opacity: 1` (always visible), `IntersectionObserver` is enhancement only. No content is ever hidden.
- **Brand colors**: `#1B4FBF` (blue), `#0A1540` (dark navy), `#C0292A` (red), `#FFFFFF` (white), `#F7F7F7` (light gray).
- **Unsplash images** — full-bleed section images loaded directly from Unsplash CDN URLs.
- **Responsive** — mobile-first with `lg:` breakpoints for layout changes; mobile hamburger menu in navbar.
- **TypeScript strict** — passes `strictNullChecks` and `noUncheckedIndexedAccess`.
- **Design system**: `max-w-6xl mx-auto px-6 lg:px-8` content width; `py-24 lg:py-32` section padding; `text-4xl lg:text-6xl font-bold tracking-tight` headlines; `text-xs font-semibold tracking-widest uppercase text-[#1B4FBF]` section labels.
