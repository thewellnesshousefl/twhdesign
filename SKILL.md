---
name: wellness-house-design
description: Use this skill to generate well-branded interfaces and assets for The Wellness House (boutique chiropractic & wellness practice, Orlando FL), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick reference:
- Entry stylesheet: `styles.css` (links the full token closure).
- Components live in `components/` and are exposed at `window.TheWellnessHouseDesignSystem_3295ce.<Name>`. To use them in an HTML file, load React UMD + the compiled `_ds_bundle.js`, then read `const { Button, Card, ... } = window.TheWellnessHouseDesignSystem_3295ce`.
- Brand color: sage `#6F8060`; dark ground: forest `#232C1E`; warm off-white paper grounds.
- Type: Jost (display), Hanken Grotesk (body), Cormorant Garamond italic (pull-quotes only).
- Voice: warm, elevated, second-person, calm. No emoji, no hype.
- Full UI kit + interactive recreation in `ui_kits/website/`.
