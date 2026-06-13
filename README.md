# Project Fibula Refactor v2 — Refactoring Guide

## 📦 Package Contents

```
refactor-v2/
├── REFACTOR-PROMPT.md          ← Planning brief (read this first)
├── CONTENT.md                  ← All text content and data
├── documents.html              ← Linked document library page
├── fibula-research-poster.pdf  ← CTA downloadable asset
├── Logo/                       ← Organization logos (3)
│   ├── NUS.jpg
│   ├── Innovationxlab.png
│   └── Staple.jpg
└── Photo/                      ← Team member headshots (8)
    ├── chen.png
    ├── Jin.jpg
    ├── Josh.png
    ├── Jussi.jpg
    ├── Mo.jpeg
    ├── Ye.jpg
    ├── Zhang.jpeg
    └── Faryz.jpeg
```

---

## 🎯 The Mission

Refactor Project Fibula into a **high-fidelity, animation-forward single-page experience** with:

1. A **dynamic file rain** opening — restrained in count, premium in modeling
2. A **morphing central subject** that transforms shape across every narrative phase (four-node flow or a stronger form)
3. The workflow as a **persistent visual anchor** the whole story orbits
4. Content sections (Workflow, Method, Risk, Fixes, Impact) revealed around the workflow
5. A **team reveal** finale (8 members + logos)
6. **Navy, Gold, Sky Blue** used sparingly on a bright, glassy, Apple-like base

---

## ⚠️ This Is a Planning Brief

The model is instructed to **propose a plan first and wait for your approval** before writing any code. The expected flow:

1. **Model reads** `REFACTOR-PROMPT.md` + `CONTENT.md`
2. **Model proposes** a plan: tech stack, workflow morphology, file-rain treatment, scroll choreography, section layouts, and open questions
3. **You review** the plan, give feedback, request changes
4. **Model builds** only after you approve

This keeps you in control of the creative and technical direction before any time is spent on implementation.

---

## 📖 How to Kick It Off

Hand the model the `refactor-v2/` folder and a message like:

> Read `REFACTOR-PROMPT.md` and `CONTENT.md`. Per the brief, propose your plan first — don't write code yet. I want to review your approach to the morphing workflow, the file-rain density, and your tech stack choice before you build.

The model should return a plan. Iterate with it until you're happy, then tell it to proceed.

---

## ✨ Key Design Notes

### The Morphing Subject (the protagonist)
The centerpiece is **not static**. A literal four-node flow (Prompt → Synthesize → Validate → Deploy) is just a starting point — the model may choose a stronger central form if it morphs and reads better. Whatever the form, it transforms per section:
- **Workflow:** canonical state
- **Method:** reshapes into a research/mapping board
- **Risk:** fractures into branching failure paths (gold warnings)
- **Fixes:** visibly repairs back into clean structure
- **Impact:** consolidates into a confident final form
- **Team:** blooms outward, emitting team cards

Morphing is smooth, physics-driven, scroll-tied, and reversible. The transformation itself is the show.

### File Rain (restrained, not a swarm)
Fewer, higher-fidelity document cards beat a dense flat swarm. Real 3D objects with depth, lighting, and weight. Density can breathe across phases. Elegance over quantity.

### Animation Philosophy
- **Weight matters** — documents fall and settle, they don't float
- **Easing is everything** — cubic-bezier, spring physics, custom curves; never linear
- **Depth is critical** — parallax, depth-of-field, shadows, layering
- **Light is design** — glows, halos, rim lighting, bloom

### Color Discipline
- Navy: node labels, key text, selected states
- Gold: CTAs, emphasis, transitions, risk-junction warnings
- Sky Blue: workflow connections and flow particles
- Keep 70%+ of the page white/light gray; never a dark dashboard

---

## 🔗 Navigation Anchors

All must work: `#before`, `#workflow`, `#methodology`, `#risk-map`, `#findings`, `#impact`, `#team`, `#cta`

---

## 📱 Mobile Consideration

Mobile does **not** need the full 3D experience — a **simple, clean content presentation** is enough. Stack sections vertically, show all text/cards/team in a readable layout, keep it fast. The file rain, morphing subject, and heavy 3D are desktop-only. On mobile, just make the complete content legible and well-spaced (no canvas/WebGL needed).

## 🌐 Deployment

The output must be a **static site deployable on GitHub Pages** — pure HTML/CSS/JS, no server runtime. If a build step is used, it must produce a static export.

---

## ✅ Checklist Before Shipping

- [ ] Plan was proposed and approved before coding
- [ ] File rain is elegant and restrained (not a flat swarm)
- [ ] Workflow graph morphs convincingly across all phases
- [ ] Workflow stays the clear visual centerpiece throughout
- [ ] All content sections present and linked correctly
- [ ] Team members all have photos and LinkedIn links
- [ ] Logos display correctly; PDF and documents.html links work
- [ ] Anchor navigation works smoothly
- [ ] Scroll is performant (no jank), 60fps desktop
- [ ] Colors match the palette, used sparingly on a bright base
- [ ] Accessibility: reduced-motion support or graceful degradation

---

## 🚀 Next Step

Give the model the folder, ask for the plan, and review it. Build only after you've signed off.
