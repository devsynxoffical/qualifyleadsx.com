# QualifiedLeadsX™ Design and Animation Guide

A handoff-ready reference for the QualifiedLeadsX.com homepage (everything **except** the hero / FlowWave section).

---

## 1. Tech Stack

| Layer | Tool |
| --- | --- |
| Framework | Next.js 15 (App Router, React 19) |
| Styling | Tailwind CSS v4 (`@theme` design tokens) |
| Animation | GSAP 3 (`ScrollTrigger`, `SplitText`), Motion (Framer Motion) `motion/react` |
| Smooth scroll | Lenis |
| 3D / shaders | Three.js (WebGL, FlowWave hero only) |
| Icons | lucide-react |
| Fonts | Google Fonts via `next/font/google` |

---

## 2. Typography & Fonts

Three font families, loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables:

| Role | Font | Variable | CSS usage |
| --- | --- | --- | --- |
| Body / UI | **Inter** | `--font-sans` | paragraphs, buttons, inputs, nav |
| Headings | **Inter Tight** | `--font-heading` | `h1–h4`, `.font-heading` |
| Labels / numbers | **Geist Mono** | `--font-mono` | eyebrows, stats, step numbers, tags |

### Type settings (global)
- Body: `font-feature-settings: "cv11", "ss01"; letter-spacing: -0.011em`
- Headings: `letter-spacing: -0.03em` (tight tracking for a premium feel)
- Micro labels (`font-mono`): `text-[9px]–[11px]`, `uppercase`, `tracking-[0.25em]–[0.3em]`, used for eyebrows, tags, stat labels, and section numbers.

### Text styles used in cards
| Element | Class pattern |
| --- | --- |
| Card title | `text-lg sm:text-xl font-semibold tracking-tight text-fog` |
| Big stat | `font-mono text-4xl sm:text-5xl font-bold tracking-tight` |
| Body copy | `text-sm leading-relaxed text-mist` |
| Card index number | `font-mono text-5xl font-bold text-fog/[0.08]` (ghost watermark) |

---

## 3. Color System

Defined as Tailwind v4 theme tokens in `app/globals.css` (`@theme`).

### Dark theme (default)
| Token | Hex | Use |
| --- | --- | --- |
| `--color-ink` | `#06080a` | deepest background |
| `--color-base` | `#0a0c0f` | page background |
| `--color-panel` | `#0f1216` | card surface |
| `--color-elevated` | `#151920` | card hover surface |
| `--color-glass` | `#ffffff08` | glass surface |
| `--color-line` | `#ffffff12` | hairline borders |
| `--color-line-strong` | `#ffffff24` | stronger borders |
| `--color-fog` | `#f2f4f5` | primary text |
| `--color-mist` | `#a2a8b0` | secondary text |
| `--color-dim` | `#626a73` | muted / labels |
| `--color-lime` | `#c9f26b` | **primary accent** |
| `--color-lime-soft` | `#e4ffae` | accent hover |
| `--color-violet` | `#9b8bff` | secondary accent |
| `--color-amber` | `#ffc857` | accent |
| `--color-mint` | `#5ef2c2` | accent |
| `--color-rose` | `#ff7a90` | warning / pain |

### Light theme (`.theme-light` class)
Applied to **EverythingIncluded, Comparison, Different, ClientSuccess, FAQ** sections, swapping to light backgrounds (`#f4f6f8`), dark text (`#0c1117`) and a darker lime (`#4f7a1e`).

### Text gradients
- `.text-gradient-lime`: `linear-gradient(100deg, #e4ffae, #c9f26b 45%, #7dffc4)` clipped to text (headline emphasis).
- `.text-gradient-soft`: `#ffffff → #a2a8b0` vertical fade (secondary emphasis).

### Shadows
- `--shadow-glow`: lime glow: `0 0 80px -20px lime@55%`
- `--shadow-soft`: deep drop: `0 24px 80px -32px rgb(0 0 0 / .85)`

---

## 4. Animation System

### 4.1 Motion libraries & helpers (`lib/motion.ts`)
- GSAP defaults: `ease: "expo.out", duration: 1`.
- Named eases: `outExpo`, `outQuint` (`power4.out`), `inOut` (`power3.inOut`), `outBack` (`back.out(1.7)`), `outSoft` (`power2.out`).
- `prefersReducedMotion()`: every animation checks this and degrades gracefully.
- `isTouchDevice()`: disables magnetic/hover-heavy effects on touch.

### 4.2 Reusable UI animation components
| Component | What it does |
| --- | --- |
| `Reveal` | Fade + slide-up on scroll (`y:32`, `ease: expo.out`, `top 88%`, fires once). Accepts `delay`, `x`, `y`, `scale`, `stagger`. |
| `SplitReveal` | GSAP `SplitText` masked line/word/char reveal (`yPercent:120` → 0, chars rotate `8deg`). Used for every section heading. |
| `Magnetic` | Element subtly follows cursor on hover (`strength: 0.35`, `gsap.quickTo`, `power3.out`). Wraps all Buttons. |
| `Marquee` | Infinite horizontal loop (duplicated content, CSS `animate-marquee`, `-50%` translate, optional `mask-fade-x` edge fade). |
| `Counter` | Number count-up on scroll (`power2.out`, optional thousands separator). |
| `ScrollProgress` | Fixed top 2px bar, `scaleX` scrubbed 0→1 with gradient lime→mint→violet. |

### 4.3 CSS keyframe animations (`app/globals.css`)
| Token | Keyframes | Use |
| --- | --- | --- |
| `animate-marquee` | translate 0 → -50% (40s linear) | FinalCTA trust marquee |
| `animate-float` | translateY ±14px + rotate 0.5° (7s) | Guarantee particles, floating badges |
| `animate-float-slow` | same, 11s | Floating quote cards |
| `animate-pulse-ring` | scale 0.8→1.6, fade out | live-status rings |
| `animate-aurora` | slow translate/scale drift (18s) | background tints |
| `animate-shimmer` | background-position sweep | shimmer text |
| `animate-grain` | 6-step jitter (1.2s) | film-grain texture |

### 4.4 Global motion layers
- **Lenis smooth scroll** (`SmoothScroll` provider): `lerp 0.09`, synced to GSAP ticker, drives all `ScrollTrigger` updates.
- **Film grain** (`NoiseOverlay`): fixed full-screen SVG fractal-noise, `opacity .035`, `mix-blend-overlay`, `z-[90]`.
- **Custom cursor** (`CustomCursor`): lime dot + ring that expands on hover (1.8×), labels **View / Play / Book / Drag** on `[data-cursor]` elements, shrinks on mousedown (`back.out(2)`). Desktop fine-pointer only.
- **Reduced motion**: global `@media (prefers-reduced-motion)` kills CSS animations; JS checks kill GSAP/Magnetic/cursor.

### 4.5 Card hover language (used consistently)
1. Border shifts to `lime/30` (or `line-strong`), background to `elevated`.
2. A **corner glow orb** (blur-3xl accent radial) fades in (`opacity 0 → 100`, 500ms).
3. Icon tile **rotates -6° & scales 1.1**.
4. A **bottom gradient hairline** scales in from the left (`scale-x-0 → 100`, `origin-left`).
5. Duration is always `500ms` for these micro-interactions.

---

## 5. Card / Section Design Breakdown (excluding hero)

> Shared layout primitives: `Section` (relative, `py-24 sm:py-32 lg:py-40`, `.container-x` = max 88rem + `clamp(1.25rem, 4vw, 2.5rem)` padding) and `SectionHeading` (eyebrow + SplitReveal h2 + subtitle).

---

### 5.1 Announcement Bar (top sticky banner)
- Lime full-width strip (`h-10`, `sticky top-0 z-[70]`), uppercase mono microcopy, dismissible (saved in `localStorage`).
- Entrance: `yPercent:-110 → 0`, `expo.out`, `delay 0.4` on mount.

### 5.2 Nav
- Fixed header; on scroll >24px gains `border-b` + `bg-ink/70 backdrop-blur-xl`.
- Nav links: hover reveals a 1px lime underline (`scale-x-0 → 100`, 300ms).
- CTA pill: `bg-lime text-ink`, glow shadow on hover, `data-cursor="book"`.
- Mobile menu: full-screen `bg-ink/95 backdrop-blur-2xl`, links slide up with staggered `transitionDelay` (100ms + 60ms each).

### 5.3 TrustBar: trust chips
- Centered flex-wrap row of 5 badges (`border-y border-line`, `bg-ink/60`), each: lime check icon in a `h-6 w-6` circle (`border-lime/30 bg-lime/10`) + mist label.
- Entrance: `Reveal y={20} stagger 0.06`. Hover: text dim→fog.

### 5.4 WhyScale: "pain" stat cards (dark, lime accent)
- Sticky left column: eyebrow + SplitReveal headline + warning callout (`border-lime/20 bg-lime/[0.04]` with X icon).
- Right column: stacked **pain cards** (`rounded-3xl border-line bg-panel p-7 sm:p-9`).
  - Right-aligned **mono stat** (`text-lime`, up to `text-5xl`) + uppercase mono label.
  - Hover: lime corner orb fades in, `border-line-strong`, bottom `lime` hairline grows.
- Entrance: `Reveal y={44}` staggered `0.08`.

### 5.5 Different: Spotlight cards (light theme)
- Grid `gap-5`, 3 cols; custom **`SpotlightCard`** tracks cursor and paints a lime radial highlight at `--mx/--my` on hover.
- Standard hover set (orb, icon tilt, bottom lime hairline). Entrance: `Reveal y={36}` stagger `0.08`.

### 5.6 FunnelProof: phone screenshot cards (dark)
- **Stat strip**: 4-col divider grid (`gap-px bg-line`, cells `bg-panel`) with mono `text-2xl/3xl` values + uppercase labels.
- **Phone cards**: `aspect-[9/19]` screenshots in `rounded-2xl/3xl` frames, `hover:scale-[1.04]` over 700ms.
  - Top-left niche pill (glass, `backdrop-blur-md`) with a colored dot per client.
  - Hover: dark gradient overlay (`to top`, `rgba(2,22,12,0.85)`) reveals.
  - Caption: name + **Live** badge, colored result line, cost-per-appt line with `TrendingUp` icon.
- Entrance: `Reveal y={40}`, stagger `0.06`.

### 5.7 ClientSuccess: masonry gallery (light theme)
- CSS multi-column masonry (`columns-2 sm:columns-3`, `break-inside-avoid`).
- Screenshot figures `rounded-2xl/3xl`; hover scale 1.03; top-left **Verified** pill (`bg-ink/60 backdrop-blur-md`).
- Trust strip below: rounded-3xl panel with 3 icon+label items.

### 5.8 CTABanner: reusable call-to-action panel
- `rounded-[2rem] border-line` panel over a WebGL **`MeshGradient`** (fractal Brownian fbm noise, 4-color palette, `speed 1.4`).
- Vignette radial to ink + top lime hairline (`via-lime/70`).
- Centered eyebrow → SplitReveal h3 → subtitle → magnetic xl Button → trust hints with icons. Compact and full variants.

### 5.9 Process: 8-step numbered cards
- Horizontal connector hairline behind grid (lg only): `via-lime/30` gradient line.
- Cards: `rounded-3xl` with lime icon tile + **ghost watermark index** (`text-5xl text-fog/[0.08]` mono).
- Full standard hover set (lime orb, icon `-rotate-6 scale-110`, bottom lime hairline). Entrance: `Reveal y={32}`, stagger `0.06`.

### 5.10 EverythingIncluded: service cards (light theme)
- Grid 3 cols; **first card spans 2 cols** (`sm:col-span-2`) for hierarchy.
- `rounded-3xl p-7`; lime icon tile; on hover a **check badge** pops in (`opacity 0 → 100`) top-right and corner orb + bottom lime hairline appear.

### 5.11 Ownership: 3-step ownership flow
- Three step cards with **connectors** (`own-conn-line` gradient hairline + lime `ArrowRight`).
- Middle/third card (the key) uses `border-lime/40` + gradient `from-lime/[0.09] to-panel` to stand out.
- GSAP timeline: steps stagger in (`y:48, scale:0.95`), then connector lines draw left→right (`scaleX`), arrows fade in. Trigger `top 72%`, `once`.
- Below: "You own" asset panel: `rounded-3xl` with **pill tags** (`rounded-full border-line bg-ink/60`) that highlight lime on hover.

### 5.12 Industries: industry chips
- Grid `gap-3`, up to 4 cols; chips `rounded-2xl border-line bg-panel/60` with lime check circle.
- Hover: `border-lime/30 bg-elevated`, label dim→fog. Entrance: `Reveal y={16}` stagger `0.04`.

### 5.13 Comparison: agency vs QLX table (light theme)
- `rounded-[1.8rem]` table card; header row with mono label + **QLX column highlighted** (`bg-lime/[0.05]`, left 1px `lime/30` rule, "The system" pill).
- Rows: value cells: `true` → lime check + "Included"; `false` → rose X + "Not offered"; strings auto-classified (weak → rose with `Minus`, strong → lime bold).
- QLX column gets hover tint `bg-lime/[0.08]`; key rows `bg-lime/[0.03]` + "Key" pill. Rows reveal with `Reveal y={20}`, capped stagger.

### 5.14 Guarantee: animated contract
- **Background**: lime spotlight radial + floating colored particles (`animate-float` with staggered delays).
- **Contract card** (light "paper" `#f5f3ee`, dark text `#14171b`): GSAP entrance: card `y:60, rotate:3, opacity:0` → settle; text lines draw in (`scaleX 0→1`, stagger 0.09); **handwritten signature** scales in (`back.out(2.5)`); **90-Day Guarantee stamp** pops (`scale 2.4→1, rotate -30→-18`, `back.out(3)`).
- Floating pen badge: `animate-float-slow`, lime border, glass.

### 5.15 FAQ: accordion (light theme)
- **Controls**: pill search input (`rounded-full`, lime focus border) + category filter pills (active = `bg-lime text-ink`).
- **Items**: `rounded-2xl`, mono index number; open state = `border-lime/30 bg-panel`; chevron rotates 180° into a lime filled circle.
- Answer reveals via CSS grid trick `grid-rows-[0fr]→[1fr]` + opacity (500ms). First item open by default.

### 5.16 FinalCTA: closing section
- **Background**: full-bleed WebGL `MeshGradient` (olive/deep-green palette) + top lime hairline.
- **Floating quote cards**: `animate-float-slow`, `panel-glass` (`backdrop-blur(16px)`), `shadow-soft`, Quote icon + mono attribution.
- Center: eyebrow → SplitReveal h2 (`clamp(2.4rem→4.8rem)`) → copy → magnetic xl Button → mono trust line → icon trust row.
- **Trust marquee**: `Marquee` (`45s`, reversed optional) with large `text-3xl/4xl` words at `text-fog/25` separated by lime dots, edge-faded via `mask-fade-x`.

### 5.17 Footer
- `bg-ink`, top lime hairline; brand + social circles (`hover:border-lime/50 hover:text-lime`), mono column headings, external links reveal `ArrowUpRight` on hover, lime CTA pill, mono legal line.

---

## 6. Component Inventory

| File | Purpose |
| --- | --- |
| `components/ui/Reveal.tsx` | Scroll fade/slide wrapper (GSAP) |
| `components/ui/SplitReveal.tsx` | Masked SplitText headline reveal |
| `components/ui/Button.tsx` | Pill button (4 variants × 3 sizes) + Magnetic + arrow slide on hover + white sweep overlay |
| `components/ui/Magnetic.tsx` | Cursor-follow wrapper |
| `components/ui/Marquee.tsx` | Infinite loop (duplicate content, CSS animation) |
| `components/ui/Counter.tsx` | Count-up number |
| `components/ui/Section.tsx` | Section + SectionHeading primitives |
| `components/ui/CTABanner.tsx` | Reusable CTA panel w/ MeshGradient |
| `components/ui/MeshGradient.tsx` | WebGL fbm noise background |
| `components/ui/NoiseOverlay.tsx` | Film-grain overlay |
| `components/ui/ScrollProgress.tsx` | Top scroll bar |
| `components/providers/SmoothScroll.tsx` | Lenis + GSAP sync |
| `components/providers/CustomCursor.tsx` | Custom dot/ring cursor |

---

## 7. Performance & Accessibility Notes

- All images use `next/image` with explicit dimensions / `sizes`.
- `prefers-reduced-motion` disables: GSAP tweens, magnetic effects, custom cursor, marquee, WebGL animation (renders a static frame), and CSS animations.
- Custom cursor only on `(pointer: fine)`; native cursor restored otherwise.
- Focus states: 2px lime outline; `skip-link` provided.
- `content-visibility` / virtualization not used: WebGL scenes pause when off-screen via `IntersectionObserver` (MeshGradient) or are scroll-scoped (FlowWave).

---

*Generated from the live codebase (`app/globals.css`, `app/layout.tsx`, `lib/motion.ts`, `components/**`).*
