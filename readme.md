# The Wellness House — Design System

> **Life feels better when you do.**
> A boutique chiropractic & wellness practice in Orlando, FL — at home or in-office.

This repository is the brand + design system for **The Wellness House**. It contains the
visual foundations (color, type, spacing, effects), reusable React UI components, brand
assets, and a full marketing-website UI kit. The automated compiler bundles every component
into `_ds_bundle.js` and indexes the tokens from `styles.css`.

**Namespace:** components are exposed at `window.TheWellnessHouseDesignSystem_3295ce.<Name>`.

---

## Sources

No existing codebase, Figma file, or brand assets were provided. The system was authored
from the client's website intro copy (services, the "Welcome to The Wellness House" letter,
and contact details). **The logo is a placeholder** — see Caveats.

- Practice: The Wellness House · Orlando, FL
- Contact: Text 407·961·7616 · 401 N. Mills Ave. STE A, Orlando, FL 32803
- Services: Chiropractic & Fascia Release · Massage & Bodywork · Wellness Consultations

---

## Brand at a glance

**Aesthetic direction: Clinical luxe.** Warm off-white "paper" grounds, soft spa-sage as the
primary brand color, a deep forest for dramatic dark sections, and a quiet warm-clay accent
used sparingly. The feeling is serene, elevated, and unhurried — a sanctuary, not a clinic.

- **Display type:** Jost (geometric, airy, light weights) — headings & wordmark
- **Body type:** Hanken Grotesk (humanist, calm, legible) — all running text & UI
- **Editorial accent:** Cormorant Garamond italic — reserved for pull-quotes / "sanctuary" moments
- **Primary brand color:** `--sage-500` `#6F8060`
- **Dark ground:** `--forest` `#232C1E`

---

## Content fundamentals

How the brand writes. Voice is **warm, elevated, and reassuring** — never clinical, never
salesy, never hype.

- **Person:** Second person ("you", "your body"), with a confident first person for the
  founder's letter ("I'm reaching for the stars…"). The reader is always the subject of care.
- **Tone:** Calm, intimate, aspirational. Invites rather than instructs. Treats wellness as a
  foundation for a bigger life, not a transaction.
- **Casing:** Sentence case for headings and body. Uppercase reserved for small eyebrow labels
  and the wordmark, always with wide letter-spacing.
- **Punctuation:** Em-dashes for soft asides. Minimal exclamation points. Ellipses to let a
  thought breathe ("…even if you don't yet have the words for it").
- **Emoji:** None. Never. The brand voice is too composed for emoji.
- **Numbers:** Spare. Prices framed gently ("From $180"), durations as plain badges ("60 min").
  Avoid stat-slop.

**We say**
- "We'll meet you there."
- "Life feels better when you do."
- "A sanctuary for the shift."
- "The body already knows how to heal; we simply create the conditions for it to do so."

**We avoid**
- "Book your appointment today!" / hard CTAs with exclamation marks
- Clinical jargon, insurance-speak, or fear-based framing
- Hype, urgency, scarcity, or anything that feels like marketing

---

## Visual foundations

**Color.** Warm, desaturated, and natural. Backgrounds are warm off-whites (`--paper`,
`--linen`, `--mist`) rather than pure white. Sage is the brand spine; forest anchors dark
sections; clay is a rare warm highlight. Status colors are all muted/earthy — no bright
primaries. Text is a warm near-black (`--ink`), never `#000`.

**Type.** Sans-led. Large, light-weight Jost display set tight (`-0.02em`) for headlines;
relaxed Hanken Grotesk body at 1.6–1.7 line-height for calm reading. The Cormorant italic
appears only as an editorial grace note (pull-quotes, the founder's letter) — never for UI.

**Spacing.** 4px base rhythm, but used generously — spa-like whitespace. Sections breathe
with `--space-11` (112px) vertical padding. Content max-width 1200px; prose 680px.

**Backgrounds.** Solid warm grounds, alternating `--paper` / `--linen`. Dark sections use a
soft forest gradient (`#3a4733 → #232c1e → #1a2116`) with a faint radial sage glow. No busy
patterns, no noise textures. Photography is warm, natural-light, intimate, soft-focus (shown
here as tonal gradient placeholder panels until real images are supplied).

**Corner radii.** Architectural, not bubbly. Cards use `--radius-lg` (14px); inputs `--radius-md`
(8px); buttons and badges are full pills (`--radius-full`). Photo panels use `--radius-xl` (24px).

**Cards.** Soft warm surface (`--surface` `#FCFBF7`) on a 1px `--border-soft` hairline, with a
low diffuse shadow (`--shadow-sm`). Interactive cards lift 3px and deepen to `--shadow-md` on
hover. No heavy borders, no colored left-accent bars.

**Shadows.** Low, diffuse, warm umber-tinted (`rgba(35,36,30,…)`) — never gray or harsh. Four
steps xs→lg. Elevation is suggested, not shouted.

**Borders.** Hairline 1px in the stone ramp. `--border-soft` for quiet dividers, `--border-brand`
(sage) for branded outlines (secondary buttons, sage cards).

**Motion.** Slow and calm. `--dur-base` 240ms on a gentle `--ease-out`; no bounce, no spring.
Hover transitions fade color and shadow. Entrance animations, where used, fade + rise softly.

**Hover states.** Primary buttons darken (sage-500 → sage-700); outline/ghost buttons wash to a
faint sage/stone tint; cards lift. **Press** states settle without scaling dramatically.

**Transparency & blur.** Used once, deliberately: the sticky site header is a translucent paper
with `backdrop-filter: blur` over scrolled content; over the hero it goes fully transparent.

**Layout rules.** Sticky translucent header; centered max-width containers; generous section
padding; 2–3 column grids for services; prose centered at 680px for letters and quotes.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) line icons, loaded from CDN
  (`unpkg.com/lucide@0.460.0`). Stroke weight **1.6**, rounded caps/joins — matches the calm,
  light visual register. This is a **substitution** (no brand icon set existed); swap if the
  client adopts one.
- **Usage:** Sparingly, always line (never filled), at 18–26px. Service tiles, value props,
  and small affordances (check, arrow, plus). Icons inherit `currentColor` and are tinted
  sage on wash backgrounds.
- **Wordmark/monogram:** A small inline SVG "rising sun over a horizon" mark (placeholder),
  in `assets/`. Drawn with sage strokes.
- **Emoji:** Never used.
- **Unicode:** Em-dash (—) and middle-dot (·) are used as typographic separators (e.g.
  "Text 407·961·7616"), not as icons.

---

## Index / manifest

**Root**
- `styles.css` — design-system entry point (import this one file). `@import`s the token closure.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skill front-matter for use in Claude Code.
- `The Wellness House.html` — standalone offline export of the website UI kit.

**`tokens/`** — CSS custom properties (all reachable from `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`assets/`** — brand marks (⚠ placeholder)
- `logo-stacked.svg` · `logo-horizontal.svg` · `monogram.svg`

**`components/`** — reusable React primitives (exposed on the namespace)
- `forms/` — `Button`, `Input`, `Select`, `Checkbox`
- `core/` — `Card`, `Badge`, `Eyebrow`, `Avatar`, `Quote`, `ServiceCard`

**`ui_kits/website/`** — marketing site recreation (interactive `index.html`)
- `SiteHeader`, `SiteFooter`, `HomeScreen`, `ServicesScreen`, `AboutScreen`, `BookingScreen`,
  `shared.jsx` (helpers: `Icon`, `PhotoPanel`, service data)

**`guidelines/cards/`** — Design System tab specimen cards (Colors, Type, Spacing, Brand)

---

## Caveats

- **⚠ Logo is a placeholder.** No logo was supplied (the upload didn't come through). The
  wordmark/monogram in `assets/` is set in Jost Light with a simple horizon mark. Replace with
  the real logo when available.
- **Photography is placeholder.** Tonal gradient panels (`PhotoPanel`) stand in for real
  imagery. Supply warm, natural-light photos and they'll be wired in.
- **Fonts are Google Fonts substitutions** chosen to fit the "clinical luxe" brief (Jost,
  Hanken Grotesk, Cormorant Garamond), loaded via CDN. Self-host TTFs for production/offline.
- **Icons are Lucide** (CDN) as a substitution — no brand icon set existed.
