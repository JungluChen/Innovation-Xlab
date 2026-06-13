---
name: build-check
description: Run the production Vite build and report bundle/chunk sizes, flagging anything over the 1200 kB warning threshold. Use before pushing to confirm the Three.js + GSAP bundle hasn't bloated.
---

# build-check

Run a clean production build and summarize bundle sizes so large chunks are caught before they ship.

## Steps

1. Run the build:
   ```bash
   npm run build
   ```
2. If it fails, report the error and stop — do not attempt to deploy.
3. From Vite's output, list the emitted assets in `dist/` with their sizes (raw and gzip). Vite's build log prints these directly.
4. Flag any chunk that triggers Vite's **1200 kB** `chunkSizeWarningLimit` (set in `vite.config.js`), and call out the largest JS chunks — `three` is the usual culprit.
5. Summarize:
   - Total `dist/` size and the biggest 3–4 assets.
   - Whether any chunk exceeded the warning limit.
   - If something is oversized, suggest concrete fixes (e.g. dynamic-import the heavy 3D path so static-mode visitors don't download Three.js, manual chunk splitting in `vite.config.js`).

Keep the summary short — sizes and the verdict, not the full log.
