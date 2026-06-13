# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project Fibula is a single-page, animation-forward showcase site (v2 refactor). Pure static output — no backend.

## Stack & commands

- Vanilla JavaScript ES modules (no TypeScript), bundled with **Vite**. Deps: `three`, `gsap`, `lenis`.
- `npm run dev` — dev server. Use **port 5180** to match `.claude/launch.json`: `npm run dev -- --port 5180 --strictPort`.
- `npm run build` — static export to `dist/`. `npm run preview` — serve the built output.
- `npm run format` — Prettier across the repo.
- Vite `base` is `./` (relative paths) so the build works as a static deploy. Build target is `es2019`; keep that compatibility in mind.

## Architecture

`src/main.js` does feature detection and picks one of two render paths — **edit the right one** for any visual change:
- **Heavy mode** (`src/heavy.js`): desktop AND WebGL AND motion allowed. Full Three.js 3D scene (`src/three/`) + GSAP ScrollTrigger choreography (`src/scroll/choreography.js`) + Lenis smooth scroll.
- **Static mode** (`src/static.js`): mobile (<900px), no WebGL, or `prefers-reduced-motion`. IntersectionObserver fade-in reveals only.
- The page **reloads on viewport-width crossing the 900px breakpoint** to swap modes cleanly — don't fight this.

The 3D `Subject` is a morphing workflow graph; its visual states live in `subject.layouts[name]` and are tweened across scroll phases. Section anchors (`#workflow`, `#methodology`, `#risk-map`, `#findings`, `#impact`, `#team`, `#cta`) are pinned by ScrollTrigger.

## Conventions & gotchas

- **ScrollTrigger animations must use explicit `fromTo()` with declared start values**, not `from()`. Lazy start-value capture breaks when users jump to an anchor mid-page. Follow the existing `fromTo` pattern in `choreography.js`.
- Design tokens (in `src/styles/main.css`), used sparingly over a mostly-white background: navy `#013d7c`, gold `#ffc000` (CTAs/emphasis/risk), sky `#62bcf1` (connections/particles). Don't introduce new accent colors.
- Site copy and data live in `CONTENT.md`; `REFACTOR-PROMPT.md` holds the v2 design brief. Update `CONTENT.md` when changing narrative text.
- Team photos in `public/Photo/`, logos in `public/Logo/`, downloadable poster + `documents.html` in `public/`.

## Git & deploy

- Branch off and open a **PR into `main`** — don't commit directly to `main`. Current work is on `fibula-v2`.
- Deploys as a static site to **GitHub Pages** (the `./` Vite base supports this).
