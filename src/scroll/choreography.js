import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { splitChars } from '../util/helpers.js';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: 'before', label: 'Problem' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'methodology', label: 'Method' },
  { id: 'risk-map', label: 'Risk Map' },
  { id: 'findings', label: 'Fixes' },
  { id: 'impact', label: 'Impact' },
  { id: 'team', label: 'Team' },
  { id: 'cta', label: 'Try Fibula' },
];

export function initChoreography(stage) {
  const { cam, subject, rain } = stage;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  // ---------- smooth scroll ----------
  const lenis = new Lenis({ duration: 1.15 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ---------- split all kinetic text ----------
  $$('.split-chars').forEach((el) => splitChars(el));

  // ---------- initial hidden states (JS-only so static mode stays complete) ----------
  const heads = $$('#workflow, #methodology, #risk-map, #findings, #impact, #team');
  heads.forEach((sec) => {
    gsap.set(sec.querySelectorAll('.eyebrow, .stage-body'), { autoAlpha: 0, y: 24 });
  });

  // Per-section title start states. Each section title gets a distinct,
  // meaning-driven entrance (the matching reveal lives in each pinned timeline).
  // workflow — streamed/typed in from the left (a sequential pipeline)
  gsap.set('#workflow .stage-title .char', { autoAlpha: 0, x: -16, y: 4 });
  // method — whole title resolves from blurred + oversized to sharp (evidence in focus)
  const meTitle = $('#methodology .stage-title');
  gsap.set(meTitle, { autoAlpha: 0, scale: 1.06, transformOrigin: '0% 50%' });
  meTitle.style.filter = 'blur(14px)';
  // risk — characters jitter in from chaotic offsets, then settle (instability)
  gsap.set('#risk-map .stage-title .char', {
    autoAlpha: 0,
    x: () => (Math.random() - 0.5) * 26,
    y: () => (Math.random() - 0.5) * 30,
    rotation: () => (Math.random() - 0.5) * 26,
  });
  // fixes — characters flip upright like records being set straight (corrections)
  gsap.set('#findings .stage-title .char', {
    autoAlpha: 0,
    rotationX: -92,
    transformPerspective: 600,
    transformOrigin: '50% 100%',
  });
  // impact — characters press in from oversized, center-out (authoritative final form)
  gsap.set('#impact .stage-title .char', { autoAlpha: 0, scale: 1.55 });
  // team — slogan lines rise and assemble (people coming together)
  gsap.set('#team .team-slogan > span', { autoAlpha: 0, y: 30 });

  gsap.set('.wf-card', {
    autoAlpha: 0,
    y: 90,
    rotationX: 7,
    transformPerspective: 800,
  });
  gsap.set('.wf-progress-num', { autoAlpha: 0, y: 10 });

  const evCards = $$('.ev-card');
  // evidence cards fly in from three directions and lock into the grid row:
  // Evidence 1 from the left, Evidence 2 from below, Evidence 3 from the right
  gsap.set(evCards, {
    autoAlpha: 0,
    x: 0,
    y: (i) => [90, 130, 90][i],
    rotation: 0,
  });
  gsap.set('.method-stats', { autoAlpha: 0, y: 40 });

  const riskBeats = $$('.risk-beat');
  gsap.set(riskBeats, { autoAlpha: 0 });
  riskBeats.forEach((b) => {
    gsap.set(b.querySelectorAll('.risk-quote .char'), { autoAlpha: 0, y: 36 });
    gsap.set(b.querySelector('.risk-card'), { autoAlpha: 0, x: 90 });
  });
  gsap.set('.journey', { autoAlpha: 0 });

  gsap.set('.fix-card', { autoAlpha: 0, x: -100, yPercent: -50 });
  gsap.set('.relight', { yPercent: -50, autoAlpha: 0, scale: 0.85 });

  gsap.set('.impact-left', { autoAlpha: 0, x: -120, rotationY: 9, transformPerspective: 900 });
  gsap.set('.impact-right', { autoAlpha: 0, x: 120, rotationY: -9, transformPerspective: 900 });

  // team: keep the grid spatially stable; cards resolve in place.
  const memberCards = $$('.member-card');
  const setTeamStart = () => {
    memberCards.forEach((card) => {
      gsap.set(card, {
        x: 0,
        y: 24,
        scale: 0.96,
        autoAlpha: 0,
        rotation: 0,
      });
    });
  };
  setTeamStart();
  gsap.set('.students-label', { autoAlpha: 0 });
  gsap.set('.mentors-block', { autoAlpha: 0, y: 46 });
  gsap.set('.mentor-card', { autoAlpha: 0, y: 22 });
  gsap.set('.logos li', { autoAlpha: 0, y: 26 });

  gsap.set('#cta .eyebrow, #cta .cta-body', { autoAlpha: 0, y: 30 });
  gsap.set('#cta .stage-title .char', { yPercent: 120, autoAlpha: 0 });
  gsap.set('#cta .btn', { autoAlpha: 0, y: 38, scale: 0.92 });

  // convergence — characters fly in from the far edges and lock together (17 → 1)
  gsap.set('#act-converge .converge-line .char', {
    autoAlpha: 0,
    x: (i, t, arr) => (i - (arr.length - 1) / 2) * 14,
  });
  gsap.set('#act-converge .converge-sub', { autoAlpha: 0 });

  // ---------- helpers ----------
  const pins = {};
  function pinTL(id, lenVH) {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: id,
        start: 'top top',
        end: () => '+=' + Math.round((window.innerHeight * lenVH) / 100),
        // smoothing lives in Lenis; synchronous scrub keeps every timeline's
        // writes ordered by document position even on instant jumps
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    pins[id.slice(1)] = tl.scrollTrigger;
    return tl;
  }

  // Secondary copy (eyebrow + body). Each section's TITLE has its own bespoke
  // entrance, declared inline at the section's timeline below.
  function copyIn(tl, sel, at = 0) {
    const sec = $(sel);
    const eyebrow = sec.querySelector('.eyebrow');
    const body = sec.querySelector('.stage-body');
    if (eyebrow) tl.to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.4 }, at);
    if (body) tl.to(body, { autoAlpha: 1, y: 0, duration: 0.5 }, at + 0.3);
  }

  // Morphs always declare their FROM layout explicitly. Scrubbed timelines
  // capture tween start values lazily; on fast anchor jumps several pinned
  // timelines play concurrently and would otherwise capture mid-flight
  // garbage as their permanent start state.
  function morphTo(tl, fromName, name, at = 0, dur = 1.2) {
    const F = subject.layouts[fromName];
    const L = subject.layouts[name];
    tl.fromTo(
      subject.hubPos,
      {
        x: (i) => F.hubs[i][0],
        y: (i) => F.hubs[i][1],
        z: (i) => F.hubs[i][2],
      },
      {
        x: (i) => L.hubs[i][0],
        y: (i) => L.hubs[i][1],
        z: (i) => L.hubs[i][2],
        duration: dur,
        ease: 'power2.inOut',
        immediateRender: false,
      },
      at,
    );
    tl.fromTo(
      subject.satPos,
      {
        x: (i) => F.sats[i][0],
        y: (i) => F.sats[i][1],
        z: (i) => F.sats[i][2],
      },
      {
        x: (i) => L.sats[i][0],
        y: (i) => L.sats[i][1],
        z: (i) => L.sats[i][2],
        duration: dur * 0.85,
        ease: 'power3.inOut',
        immediateRender: false,
        stagger: { each: dur * 0.012, from: 'random' },
      },
      at,
    );
  }

  // draw-state tweens share Tube targets across timelines — same lazy-capture
  // hazard, so from-values are always explicit
  const drawTo = (tl, set, from, to, vars, at) => {
    tl.fromTo(tubes(set), { draw: from }, { draw: to, immediateRender: false, ...vars }, at);
  };

  const tubes = (set) => set.map((c) => c.tube);

  // ================= HERO =================
  const heroChars = $$('#before .hero-headline .char');
  const intro = gsap.timeline({ delay: 0.2, defaults: { ease: 'power3.out' } });
  intro
    .from('#topnav', { y: -28, autoAlpha: 0, duration: 0.7 }, 0)
    .from('#before .kicker', { autoAlpha: 0, y: 18, duration: 0.6 }, 0.15)
    .fromTo(
      heroChars,
      {
        y: () => -(220 + Math.random() * 420),
        rotation: () => (Math.random() - 0.5) * 56,
        autoAlpha: 0,
      },
      {
        y: 0,
        rotation: 0,
        autoAlpha: 1,
        duration: 1.05,
        ease: 'back.out(1.1)',
        stagger: { each: 0.015, from: 'random' },
      },
      0.3,
    )
    .from('#before .hero-body', { autoAlpha: 0, y: 30, duration: 0.7 }, 1.25)
    .from('#before .scroll-hint', { autoAlpha: 0, duration: 0.6 }, 1.55);

  const heroTl = pinTL('#before', 110);
  heroTl
    .to(
      heroChars,
      {
        y: () => -(130 + Math.random() * 330),
        rotation: () => (Math.random() - 0.5) * 44,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.in',
        stagger: { each: 0.01, from: 'random' },
      },
      0,
    )
    .to(
      '#before .kicker, #before .hero-body, #before .scroll-hint',
      {
        autoAlpha: 0,
        y: -44,
        duration: 0.6,
      },
      0,
    )
    .to(cam, { z: 14.6, duration: 1.2, ease: 'power1.inOut' }, 0);

  // ================= CONVERGENCE =================
  const convTl = pinTL('#act-converge', 170);
  convTl
    .to(rain.params, { gather: 1, duration: 1.6, ease: 'power2.inOut' }, 0)
    .to(cam, { z: 13.2, duration: 2.2, ease: 'power1.inOut' }, 0)
    .to(
      '#act-converge .converge-line .char',
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.6,
        stagger: { each: 0.012, from: 'edges' },
        ease: 'power3.out',
      },
      0.15,
    )
    .to('#act-converge .converge-sub', { autoAlpha: 1, duration: 0.4 }, 0.55)
    .to(subject.params, { scale: 1, duration: 0.7, ease: 'back.out(1.4)' }, 0.9)
    .to(subject.hubScale, { v: 1, duration: 0.5, ease: 'back.out(2.2)', stagger: 0.1 }, 1.0)
    .fromTo(
      tubes(subject.chain),
      { draw: 0 },
      { draw: 1, duration: 0.55, stagger: 0.18, ease: 'power2.inOut', immediateRender: false },
      1.2,
    )
    .fromTo(
      subject.satScl,
      { v: 0 },
      {
        v: 1,
        duration: 0.4,
        ease: 'back.out(2)',
        stagger: { each: 0.012, from: 'random' },
        immediateRender: false,
      },
      1.3,
    )
    .fromTo(
      tubes(subject.spokes),
      { draw: 0 },
      { draw: 1, duration: 0.5, stagger: 0.012, immediateRender: false },
      1.45,
    )
    .to(subject.params, { labelAlpha: 1, particleAlpha: 0.95, duration: 0.4 }, 1.85)
    .to(
      '#act-converge .converge-line .char',
      { autoAlpha: 0, y: -30, duration: 0.35, stagger: 0.008 },
      2.05,
    )
    .to('#act-converge .converge-sub', { autoAlpha: 0, duration: 0.3 }, 2.1);

  // ================= WORKFLOW — title streams in left→right (typed pipeline) =================
  const HUBX = [-4.2, -1.4, 1.4, 4.2];
  const wfCards = $$('.wf-card');
  const wfNums = $$('.wf-progress-num');
  const wfTl = pinTL('#workflow', 300);
  copyIn(wfTl, '#workflow', 0);
  wfTl.to(
    '#workflow .stage-title .char',
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      stagger: { each: 0.018, from: 'start' },
      ease: 'power2.out',
    },
    0.05,
  );
  wfTl.fromTo(
    rain.params,
    { ambient: 0 },
    { ambient: 0.85, duration: 1, immediateRender: false },
    0,
  );
  wfTl.to(
    subject.params,
    { methodSignal: 0, riskSignal: 0, repairSignal: 0, confidenceSignal: 0, duration: 0.4 },
    0,
  );
  for (let b = 0; b < 4; b++) {
    const at = 0.7 + b * 2.0;
    wfTl.to(
      cam,
      { x: HUBX[b] * 0.55, tx: HUBX[b] * 0.8, z: 12.2, duration: 0.9, ease: 'power2.inOut' },
      at,
    );
    wfTl.to(subject.hubActive[b], { v: 1, duration: 0.35 }, at + 0.15);
    wfTl.to(
      wfCards[b],
      { autoAlpha: 1, y: 0, rotationX: 0, duration: 0.55, ease: 'power3.out' },
      at + 0.25,
    );
    wfTl.to(wfNums[b], { autoAlpha: 1, y: 0, duration: 0.25 }, at + 0.25);
    if (b > 0) {
      wfTl.to(wfCards[b - 1], { autoAlpha: 0, y: -70, duration: 0.4, ease: 'power2.in' }, at);
      wfTl.to(subject.hubActive[b - 1], { v: 0, duration: 0.3 }, at);
      wfTl.to(wfNums[b - 1], { autoAlpha: 0, y: -10, duration: 0.2 }, at);
    }
  }
  wfTl.to(cam, { x: 0, tx: 0, z: 12.8, duration: 0.9, ease: 'power2.inOut' }, 8.9);
  wfTl.to(wfCards[3], { autoAlpha: 0, y: -70, duration: 0.4 }, 8.9);
  wfTl.to(subject.hubActive[3], { v: 0, duration: 0.3 }, 8.9);
  wfTl.to(wfNums[3], { autoAlpha: 0, duration: 0.2 }, 8.9);

  // ================= METHOD — title resolves from blur (evidence in focus) =================
  const meTl = pinTL('#methodology', 200);
  copyIn(meTl, '#methodology', 0);
  meTl.to(meTitle, { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'power2.out' }, 0.05);
  const meBlur = { b: 14 };
  meTl.to(
    meBlur,
    {
      b: 0,
      duration: 0.7,
      ease: 'power2.out',
      onUpdate: () => {
        meTitle.style.filter = `blur(${meBlur.b}px)`;
      },
    },
    0.05,
  );
  morphTo(meTl, 'workflow', 'method', 0.2, 1.3);
  meTl.to(
    subject.params,
    {
      flowSpeed: 0.45,
      methodSignal: 1,
      riskSignal: 0,
      repairSignal: 0,
      confidenceSignal: 0,
      duration: 0.8,
    },
    0.2,
  );
  drawTo(meTl, subject.threads, 0, 1, { duration: 0.7, stagger: 0.05 }, 1.0);
  // all three evidence cards fly in together and lock into the grid (filed into place)
  meTl.to(
    evCards,
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.7,
      ease: 'back.out(1.5)',
      stagger: { each: 0.05, from: 'center' },
    },
    1.5,
  );
  meTl.to('.method-stats', { autoAlpha: 1, y: 0, duration: 0.5 }, 2.7);
  $$('.stat-num').forEach((el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const obj = { v: 0 };
    meTl.to(
      obj,
      {
        v: target,
        duration: 0.9,
        ease: 'power1.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.v) + suffix;
        },
      },
      2.8,
    );
  });

  // ================= RISK MAP — title jitters in from chaos (instability) =================
  const riskCards = riskBeats.map((b) => b.querySelector('.risk-card'));
  const journeyStops = $$('.journey-stop');
  const journeyDots = $$('.journey-dot');
  const riTl = pinTL('#risk-map', 380);
  copyIn(riTl, '#risk-map', 0);
  riTl.to(
    '#risk-map .stage-title .char',
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.5,
      stagger: { each: 0.014, from: 'random' },
      ease: 'back.out(1.7)',
    },
    0.05,
  );
  morphTo(riTl, 'method', 'risk', 0.2, 1.1);
  drawTo(riTl, subject.threads, 1, 0, { duration: 0.5, stagger: 0.02 }, 0.2);
  riTl.to(
    subject.params,
    {
      flowSpeed: 0.25,
      methodSignal: 0,
      riskSignal: 1,
      repairSignal: 0,
      confidenceSignal: 0,
      duration: 0.6,
    },
    0.3,
  );
  riTl.to('.journey', { autoAlpha: 1, duration: 0.4 }, 0.5);
  subject.chain.forEach((c) => {
    riTl.fromTo(
      c.tube.mat.emissive,
      { r: SKYR.r, g: SKYR.g, b: SKYR.b },
      { r: 1, g: 0.62, b: 0.1, duration: 1.2, immediateRender: false },
      0.4,
    );
  });
  const JCAMX = [-0.9, -0.3, 0.1, 0.7, 1.1];
  for (let b = 0; b < 5; b++) {
    const at = 1.1 + b * 2.0;
    const beat = riskBeats[b];
    if (b > 0)
      riTl.to(riskBeats[b - 1], { autoAlpha: 0, duration: 0.3, ease: 'power1.in' }, at - 0.2);
    riTl.to(beat, { autoAlpha: 1, duration: 0.15 }, at);
    riTl.to(
      beat.querySelectorAll('.risk-quote .char'),
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.008,
        ease: 'power3.out',
      },
      at + 0.05,
    );
    riTl.to(riskCards[b], { autoAlpha: 1, x: 0, duration: 0.5, ease: 'power3.out' }, at + 0.35);
    riTl.fromTo(
      subject.branches[b].tube,
      { draw: 0 },
      { draw: 1, duration: 0.5, ease: 'power3.out', immediateRender: false },
      at + 0.1,
    );
    riTl.fromTo(
      subject.flares[b].state,
      { v: 0 },
      { v: 1, duration: 0.4, ease: 'back.out(2.5)', immediateRender: false },
      at + 0.1,
    );
    riTl
      .to(subject.params, { jitter: 0.55, duration: 0.12 }, at + 0.08)
      .to(subject.params, { jitter: 0.14, duration: 0.5 }, at + 0.26);
    riTl.to(
      journeyDots[b],
      {
        backgroundColor: '#ffc000',
        boxShadow: '0 0 12px rgba(255,192,0,0.95)',
        duration: 0.2,
      },
      at + 0.1,
    );
    riTl.to(journeyStops[b], { color: 'rgb(1,61,124)', duration: 0.2 }, at + 0.1);
    riTl.to('#vignette', { opacity: 0.14 + b * 0.09, duration: 0.4 }, at + 0.2);
    riTl.to(cam, { x: JCAMX[b], duration: 0.8, ease: 'power2.inOut' }, at);
  }

  // ================= FIXES — title flips upright (records set straight) =================
  const fixCards = $$('.fix-card');
  const HEAL = [[0, 1], [2], [3, 4]];
  const fxTl = pinTL('#findings', 290);
  copyIn(fxTl, '#findings', 0);
  fxTl.to(
    '#findings .stage-title .char',
    {
      autoAlpha: 1,
      rotationX: 0,
      duration: 0.55,
      stagger: { each: 0.02, from: 'start' },
      ease: 'back.out(1.4)',
    },
    0.05,
  );
  fxTl.to(riskBeats[4], { autoAlpha: 0, duration: 0.4 }, 0);
  fxTl.to('.journey', { autoAlpha: 0, duration: 0.4 }, 0);
  fxTl.to(
    subject.params,
    { methodSignal: 0, riskSignal: 0, repairSignal: 1, confidenceSignal: 0, duration: 0.35 },
    0,
  );
  fxTl.to(cam, { x: 0, duration: 1, ease: 'power2.inOut' }, 0.2);
  morphTo(fxTl, 'risk', 'workflow', 0.5, 4.2);
  fxTl.to(
    subject.params,
    { jitter: 0, riskSignal: 0, repairSignal: 1, confidenceSignal: 0, duration: 2 },
    1,
  );
  const fixAt = [0.8, 2.6, 4.4];
  for (let b = 0; b < 3; b++) {
    const at = fixAt[b];
    if (b > 0) fxTl.to(fixCards[b - 1], { autoAlpha: 0, x: -70, duration: 0.35 }, at - 0.15);
    fxTl.to(fixCards[b], { autoAlpha: 1, x: 0, duration: 0.5, ease: 'power3.out' }, at);
    HEAL[b].forEach((br, k) => {
      const t0 = at + 0.4 + k * 0.3;
      fxTl
        .to(subject.pulses[br], { on: 1, duration: 0.08 }, t0)
        .fromTo(
          subject.pulses[br],
          { t: 0 },
          { t: 1, duration: 0.4, ease: 'power1.in', immediateRender: false },
          t0,
        )
        .to(subject.pulses[br], { on: 0, duration: 0.15 }, t0 + 0.42);
      fxTl.fromTo(
        subject.branches[br].tube,
        { draw: 1 },
        { draw: 0, duration: 0.45, ease: 'power2.in', immediateRender: false },
        t0,
      );
      fxTl.fromTo(
        subject.flares[br].sprite.material.color,
        { r: 1, g: 192 / 255, b: 0 },
        { r: 0.38, g: 0.74, b: 0.95, duration: 0.3, immediateRender: false },
        t0,
      );
      fxTl.fromTo(
        subject.flares[br].state,
        { v: 1 },
        { v: 0, duration: 0.35, immediateRender: false },
        t0 + 0.12,
      );
    });
  }
  subject.chain.forEach((c) => {
    fxTl.fromTo(
      c.tube.mat.emissive,
      { r: 1, g: 0.62, b: 0.1 },
      { r: SKYR.r, g: SKYR.g, b: SKYR.b, duration: 1.4, immediateRender: false },
      3.2,
    );
  });
  fxTl.fromTo(
    '#vignette',
    { opacity: 0.5 },
    { opacity: 0, duration: 0.8, immediateRender: false },
    3.4,
  );
  fxTl.to(fixCards[2], { autoAlpha: 0, x: -70, duration: 0.35 }, 6.0);
  fxTl.to('.relight', { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(1.6)' }, 6.2);
  fxTl
    .to(subject.runner, { on: 1, duration: 0.1 }, 6.3)
    .to(subject.runner, { t: 1, duration: 0.7, ease: 'power1.inOut' }, 6.35)
    .to(subject.runner, { on: 0, duration: 0.15 }, 7.05);
  fxTl
    .to(subject.params, { flowSpeed: 1.7, particleAlpha: 1, duration: 0.5 }, 6.4)
    .to(subject.params, { flowSpeed: 1.15, duration: 0.6 }, 7.1);

  // ================= IMPACT — title presses in, center-out (final form) =================
  const imTl = pinTL('#impact', 240);
  copyIn(imTl, '#impact', 0);
  imTl.to(
    '#impact .stage-title .char',
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
      stagger: { each: 0.016, from: 'center' },
      ease: 'power4.out',
    },
    0.05,
  );
  imTl.to('.relight', { autoAlpha: 0, duration: 0.3 }, 0);
  morphTo(imTl, 'workflow', 'impact', 0.3, 1.4);
  drawTo(imTl, subject.chain, 1, 0, { duration: 0.6 }, 0.3);
  drawTo(imTl, subject.spokes, 1, 0, { duration: 0.7, stagger: 0.008 }, 0.3);
  imTl.fromTo(
    subject.params,
    { particleAlpha: 1, labelAlpha: 1 },
    {
      particleAlpha: 0,
      flowSpeed: 0.6,
      labelAlpha: 0,
      riskSignal: 0,
      repairSignal: 0,
      confidenceSignal: 1,
      duration: 0.6,
      immediateRender: false,
    },
    0.35,
  );
  drawTo(imTl, subject.arcs, 0, 1, { duration: 0.5, stagger: 0.015 }, 1.3);
  imTl.to(cam, { z: 11.8, ty: 0.62, duration: 1.2, ease: 'power1.inOut' }, 0.3);
  imTl.to(
    '.impact-left',
    { autoAlpha: 1, x: 0, rotationY: 0, duration: 0.6, ease: 'power3.out' },
    2.3,
  );
  imTl.to(
    '.impact-right',
    { autoAlpha: 1, x: 0, rotationY: 0, duration: 0.6, ease: 'power3.out' },
    3.5,
  );
  imTl
    .to(subject.stamp, { a: 0.85, duration: 0.1 }, 4.6)
    .to(subject.stamp, { s: 1.7, duration: 0.5, ease: 'power2.out' }, 4.62)
    .to(subject.stamp, { a: 0, duration: 0.35 }, 4.85);
  imTl
    .to(subject.params, { glowBoost: 0.5, duration: 0.2 }, 4.6)
    .to(subject.params, { glowBoost: 0, duration: 0.5 }, 4.9);

  // ================= TEAM — title lines rise and assemble (people) =================
  const teTl = pinTL('#team', 310);
  copyIn(teTl, '#team', 0);
  teTl.to(
    '#team .team-slogan > span',
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'back.out(1.6)',
    },
    0.05,
  );
  drawTo(teTl, subject.arcs, 1, 0, { duration: 0.6, stagger: 0.01 }, 0.5);
  morphTo(teTl, 'impact', 'bloom', 0.5, 1.5);
  teTl.to(
    subject.params,
    { methodSignal: 0, riskSignal: 0, repairSignal: 0, confidenceSignal: 0.18, duration: 0.8 },
    0.4,
  );
  teTl.fromTo(
    subject.satScl,
    { v: 1 },
    { v: 0, duration: 0.5, stagger: { each: 0.02, from: 'random' }, immediateRender: false },
    1.3,
  );
  teTl.fromTo(
    subject.group.position,
    { y: 0, z: 0 },
    { y: 1.5, z: -2.6, duration: 1.2, ease: 'power2.inOut', immediateRender: false },
    0.6,
  );
  teTl.fromTo(
    subject.params,
    { scale: 1 },
    { scale: 0.55, duration: 1.2, immediateRender: false },
    0.6,
  );
  teTl.to('.students-label', { autoAlpha: 1, duration: 0.3 }, 1.2);
  memberCards.forEach((card, i) => {
    teTl.to(
      card,
      {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        autoAlpha: 1,
        duration: 0.45,
        ease: 'power2.out',
      },
      0.95 + i * 0.06,
    );
  });
  teTl.to('.mentors-block', { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power1.out' }, 1.45);
  teTl.to(
    '.mentor-card',
    { autoAlpha: 1, y: 0, duration: 0.32, stagger: 0.04, ease: 'power1.out' },
    1.55,
  );
  teTl.to('.logos li', { autoAlpha: 1, y: 0, duration: 0.32, stagger: 0.04 }, 1.78);

  // ================= CTA — title ripples up from the center (invitation) =================
  const ctTl = pinTL('#cta', 170);
  ctTl.fromTo(
    subject.group.position,
    { y: 1.5, z: -2.6 },
    { y: 1.15, z: 0, duration: 1.2, ease: 'power2.inOut', immediateRender: false },
    0,
  );
  ctTl.fromTo(
    subject.params,
    { scale: 0.55 },
    { scale: 0.3, glowBoost: 0.25, duration: 1.2, immediateRender: false },
    0,
  );
  ctTl.to(subject.group.rotation, { y: 1.4, duration: 2.4, ease: 'none' }, 0);
  ctTl.fromTo(
    rain.params,
    { ambient: 0.85 },
    { ambient: 0, duration: 1, immediateRender: false },
    0,
  );
  ctTl.to(cam, { x: 0, z: 13.5, ty: 0.5, duration: 1.2, ease: 'power1.inOut' }, 0);
  ctTl.to('#cta .eyebrow', { autoAlpha: 1, y: 0, duration: 0.4 }, 0.3);
  ctTl.to(
    '#cta .stage-title .char',
    {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.6,
      stagger: { each: 0.02, from: 'center' },
      ease: 'back.out(1.5)',
    },
    0.4,
  );
  ctTl.to('#cta .cta-body', { autoAlpha: 1, y: 0, duration: 0.5 }, 0.8);
  ctTl.to(
    '#cta .btn',
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.7)' },
    1.05,
  );

  // ---------- section dots ----------
  const dotsRoot = document.getElementById('dots');
  SECTIONS.forEach(({ id, label }) => {
    const b = document.createElement('button');
    b.className = 'dot';
    b.setAttribute('aria-label', label);
    b.innerHTML = `<span class="dot-tip">${label}</span>`;
    b.addEventListener('click', () => scrollToSection(id));
    dotsRoot.appendChild(b);
    const target = pins[id] ? pins[id].trigger : document.getElementById(id);
    ScrollTrigger.create({
      trigger: target,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => b.classList.toggle('active', self.isActive),
    });
  });

  // ---------- anchor navigation ----------
  // land far enough into each pin that the heading and first beat are on stage
  const LANDING = {
    'act-converge': 0.3,
    workflow: 0.16,
    methodology: 0.32,
    'risk-map': 0.23,
    findings: 0.14,
    impact: 0.24,
    team: 0.82,
    cta: 0.62,
  };
  function scrollToSection(id) {
    if (id === 'before') {
      lenis.scrollTo(0, { duration: 1.4 });
      return;
    }
    const st = pins[id];
    const y = st
      ? st.start + (st.end - st.start) * (LANDING[id] || 0.15)
      : document.getElementById(id)?.offsetTop || 0;
    lenis.scrollTo(y, { duration: 1.5 });
  }
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    history.replaceState(null, '', '#' + id);
    scrollToSection(id);
  });

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
    if (location.hash.length > 1) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const st = pins[id];
        if (st)
          lenis.scrollTo(st.start + (st.end - st.start) * (LANDING[id] || 0.15), {
            immediate: true,
          });
      });
    }
  });

  return { lenis, scrollToSection };
}

// sky tone used to restore the chain after the risk act
const SKYR = { r: 98 / 255, g: 188 / 255, b: 241 / 255 };
