# Project Fibula Refactor — Planning Brief

## How to Use This Brief

**Do not start coding immediately.** This is a planning brief. Your first job is to read everything, then come back to me with a **proposed plan** for my review. Only after I approve the plan should you begin implementation.

### Step 1 — Propose (before any code)
Read this brief and `CONTENT.md`, then present me with a concise plan covering:
1. **Tech stack choice** — which 3D engine, animation library, and rendering strategy you'll use, and *why* it best serves the animation goals
2. **The workflow morphology** — what central "subject" form you'll use (four-node flow or a stronger alternative — see "Morphing Workflow Subject") and how it will visually transform across the four narrative phases; sketch the shapes/states in words or ASCII
3. **File rain treatment** — how many documents, how they spawn, and how density changes across phases (quantity is flexible — see "File Rain" below)
4. **Scroll choreography** — how scroll maps to the narrative phases, and how content sections orbit the workflow
5. **Section-by-section layout** — a short outline of how each content section (Workflow, Method, Risk, Fixes, Impact, Team) will be presented
6. **Open questions / trade-offs** — anything where you'd like my input, or where you see a meaningful design decision

Present this as a readable plan, ask for my feedback, and wait. If something in this brief is ambiguous or you see a better creative direction, say so in your proposal.

### Step 2 — Build (only after approval)
Once I approve (and after any adjustments I request), implement the full page.

---

## The Vision

A single, animation-forward webpage for Project Fibula. The priority is **visual excellence, fluid motion, and precise 3D modeling**. No constraints on technology or complexity — only on shipping a complete, beautiful, performant result.

---

## Narrative Arc

The page tells one continuous story, with the **workflow graph as the visual anchor that lives through all of it** — but the workflow is *not static*. It changes shape and character as the story moves.

**Act I — File Rain.** The hero opens with industrial documents drifting through 3D space like a light rain. This establishes the problem: fragmentation. (Quantity is intentionally restrained — see below.)

**Act II — Convergence.** As the user scrolls, the drifting documents are drawn toward the center, where the workflow begins to take form. Documents collapse into the emerging structure with physical weight.

**Act III — The Morphing Workflow Anchor.** The workflow locks center-stage and becomes the fixed reference. As each content section scrolls past (Workflow, Method, Risk Map, Fixes, Impact), the workflow graph **morphs** — its geometry, node arrangement, connection style, and labels transform to embody each section's meaning.

**Act IV — Team Output.** The workflow performs its final transformation, "emitting" the team members as its output. The people become the conclusion.

---

## Morphing Workflow Subject (Key Requirement)

The central workflow is the protagonist. It must **transform across phases**, not sit still.

**The four-node flow (Prompt → Synthesize → Validate → Deploy) is a starting point, not a hard requirement.** You are free to choose a stronger central form for the "subject" if it better serves the story and the morphing — it could be a node graph, a flowing structure, a generative form, a 3D object, or something that reshapes more dramatically. The goal is a compelling, morphing centerpiece that the whole page orbits. Propose your chosen form in your plan and explain why it reads better than a literal four-node diagram.

Whatever form you pick, it should **morph across phases** to embody each section's meaning. Here is the *intent* per phase (you may reinterpret freely):

- **Workflow phase** — The canonical, "textbook" state of the subject. Sky-blue flow, clear structure.
- **Method phase** — Reshapes into an evidence/mapping structure: a research-board or mind-map feel, connections become investigative threads.
- **Risk Map phase** — Fractures or branches into failure-point territory: visible stress, forking risk paths, gold warning accents at junctions.
- **Fixes phase** — Visibly *repairs* itself: broken/forked parts heal back into clean structure, correction shown in motion.
- **Impact phase** — Consolidates into a confident, auditable final form: tight, glowing, resolved.
- **Team phase** — Blooms outward, emitting the team cards as output, then settles.

Morphing should be **smooth and physics-driven** — elements glide to new positions, connections re-route with animated curves, labels cross-fade. The transformation itself is part of the show. Tie morph progress to scroll so it's reversible.

---

## File Rain (Flexible Density)

The file rain sets the mood; it does not need to be a heavy storm. **Restraint is encouraged.** A smaller number of well-modeled, beautifully lit document cards drifting with real depth and weight will look more premium than a dense swarm of flat planes.

- Lean toward **fewer, higher-fidelity** cards (propose a count in your plan — somewhere modest is fine)
- Each card is a real 3D object: document type label, a few metadata lines, subtle glow, depth-of-field
- Density can **breathe**: maybe a few more during the opening, thinning as they converge
- Performance and elegance over sheer quantity

---

## Visual Language

### Color Palette
- **Navy** `rgb(1, 61, 124)` — Node labels, critical text, selected states, high-weight callouts
- **Gold** `rgb(255, 192, 0)` — Primary CTAs, emphasis moments, state transitions, key metrics, risk-junction warnings
- **Sky Blue** `rgb(98, 188, 241)` — Workflow connections, flow particles, secondary signals, progress states

### Design Sensibility
- **Foundation:** Bright, glassy, Apple-like. White and light-gray dominate. Navy and gold applied sparingly, never dominating. Avoid a dark dashboard feel.
- **Depth:** 3D perspective, depth of field, layering. The page is a physical space, not flat.
- **Motion:** Every movement has weight. Nothing floats weightlessly. Curves are eased and natural.
- **Finish:** Gloss, blur, glow, bloom — used to make surfaces feel premium and alive.

---

## Content Requirements

All content from `CONTENT.md` must be present and complete:
- Full workflow stage descriptions (4 stages, 3 bullets each)
- All Method (3), Risk (5), Fixes (3), Impact (2) cards with titles and body copy
- Complete team roster (5 students, 3 mentors) with LinkedIn links and headshots
- All CTA buttons functional and labeled correctly
- Navigation anchors: `#before`, `#workflow`, `#methodology`, `#risk-map`, `#findings`, `#impact`, `#team`, `#cta`

Images live in `Logo/` and `Photo/`. The document library link points to `documents.html`. SEO-friendly — content in HTML, not pure canvas.

---

## Technical Freedom

You choose the stack — pick what excels at animation (Three.js, Babylon.js, GSAP, Framer Motion, custom WebGL, or a hybrid). Justify the choice in your plan.

**Constraint:** Ship a self-contained bundle that runs without external CDN dependencies (vendor libs may be bundled). The output must be a **static site deployable on GitHub Pages** — pure HTML/CSS/JS with no server-side runtime. If a build step is used, it must produce a static export.

## Mobile

Mobile does **not** need the full 3D experience. A **simple, clean content presentation** is enough: stack the sections vertically, show all text/cards/team in a readable layout, keep it fast and pleasant. The heavy 3D, file rain, and morphing subject are desktop features. On mobile, just make the complete content legible and well-spaced — no canvas or WebGL required.

---

## Success Criteria

- Animation fidelity is the top priority — every transition smooth, eased, purposeful
- The central subject is the centerpiece, and its **morphing across phases** is a highlight
- File rain is elegant and restrained, not a flat swarm
- The three theme colors accent rather than dominate; the page stays bright and glassy
- All content present, linked, and interactive
- 60fps desktop; mobile shows a simple, clean, complete content layout
- Deployable as a static site on GitHub Pages
- The story arc reads clearly: problem → structure → evidence → correction → output → team

---

## Assets Included
- `CONTENT.md` — All text, section data, team roster, document types, palette
- `Logo/` — NUS.jpg, Innovationxlab.png, Staple.jpg
- `Photo/` — chen.png, Jin.jpg, Zhang.jpeg, Mo.jpeg, Ye.jpg, Jussi.jpg, Josh.png, Faryz.jpeg
- `documents.html` — Linked document library
- `fibula-research-poster.pdf` — CTA downloadable

---

**Remember: propose your plan first. Do not write code until I approve it.**
