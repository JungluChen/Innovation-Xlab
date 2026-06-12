import * as THREE from 'three';
import { mulberry32 } from '../util/helpers.js';

const SKY = new THREE.Color(98 / 255, 188 / 255, 241 / 255);
const SKY_DEEP = new THREE.Color(0x2e8fd0);
const NAVY = new THREE.Color(1 / 255, 61 / 255, 124 / 255);
const GOLD = new THREE.Color(1, 192 / 255, 0);

const N_SATS = 36;
const LABELS = ['Prompt', 'Synthesize', 'Validate', 'Deploy'];
const CHAIN_SAGS = [
  new THREE.Vector3(0, 0.55, 0.18),
  new THREE.Vector3(0, -0.45, -0.22),
  new THREE.Vector3(0, 0.5, 0.12),
];
// risk junctions: position along a chain link + branch tip offset
const BRANCH_DEFS = [
  { link: 0, t: 0.5, off: [-0.5, -1.7, 0.5] },
  { link: 1, t: 0.3, off: [0.3, -2.0, -0.5] },
  { link: 1, t: 0.72, off: [0.6, -1.6, 0.4] },
  { link: 2, t: 0.38, off: [-0.4, -2.1, -0.4] },
  { link: 2, t: 0.8, off: [0.5, -1.8, 0.5] },
];

const _P = new THREE.Vector3();
const _Q = new THREE.Vector3();
const _T = new THREE.Vector3();
const _N = new THREE.Vector3();
const _B = new THREE.Vector3();
const _M = new THREE.Matrix4();
const _S = new THREE.Vector3();
const _QT = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 0, 1);

function glowTexture(inner, outer) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 2, 64, 64, 62);
  grad.addColorStop(0, inner);
  grad.addColorStop(0.4, outer);
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function ringTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.strokeStyle = 'rgba(255,192,0,0.95)';
  g.lineWidth = 10;
  g.shadowColor = 'rgba(255,192,0,0.9)';
  g.shadowBlur = 22;
  g.beginPath();
  g.arc(128, 128, 96, 0, Math.PI * 2);
  g.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** A tube whose centerline is recomputed every frame. draw ∈ [0,1] trims growth. */
class Tube {
  constructor(parent, { tubular = 22, radial = 7, radius = 0.04, color = SKY, opacity = 1, emissiveIntensity = 0.35 }) {
    this.tubular = tubular;
    this.radial = radial;
    this.radius = radius;
    this.draw = 0;
    const vcount = (tubular + 1) * (radial + 1);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vcount * 3), 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(vcount * 3), 3));
    const idx = [];
    for (let s = 0; s < tubular; s++) {
      for (let r = 0; r < radial; r++) {
        const a = s * (radial + 1) + r;
        const b = a + radial + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    geo.setIndex(idx);
    this.mat = new THREE.MeshStandardMaterial({
      color: color.clone(), roughness: 0.35, metalness: 0,
      emissive: color.clone(), emissiveIntensity,
      transparent: true, opacity,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    parent.add(this.mesh);
  }

  update(point) {
    if (this.draw <= 0.003) { this.mesh.visible = false; return; }
    this.mesh.visible = true;
    const { tubular, radial } = this;
    const pos = this.mesh.geometry.attributes.position.array;
    const nor = this.mesh.geometry.attributes.normal.array;
    const d = this.draw;
    let k = 0;
    for (let s = 0; s <= tubular; s++) {
      const t = (s / tubular) * d;
      point(t, _P);
      point(Math.min(t + 0.012, d), _Q);
      _T.subVectors(_Q, _P);
      if (_T.lengthSq() < 1e-10) _T.set(1, 0, 0);
      _T.normalize();
      _N.crossVectors(_T, UP);
      if (_N.lengthSq() < 1e-6) _N.set(0, 1, 0);
      _N.normalize();
      _B.crossVectors(_T, _N).normalize();
      const taper = Math.min(1, s * 0.4, (tubular - s) * 0.4);
      const r = this.radius * taper * Math.min(1, d * 5);
      for (let j = 0; j <= radial; j++) {
        const a = (j / radial) * Math.PI * 2;
        const cn = Math.cos(a), sn = Math.sin(a);
        const nx = _N.x * cn + _B.x * sn;
        const ny = _N.y * cn + _B.y * sn;
        const nz = _N.z * cn + _B.z * sn;
        nor[k] = nx; pos[k++] = _P.x + nx * r;
        nor[k] = ny; pos[k++] = _P.y + ny * r;
        nor[k] = nz; pos[k++] = _P.z + nz * r;
      }
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.attributes.normal.needsUpdate = true;
  }
}

/**
 * The morphing centerpiece: 4 labelled hubs + satellite swarm + re-routable
 * tube connections. All positions/scales live in plain objects so GSAP
 * scrubbed timelines can drive them.
 */
export class Subject {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    this.params = {
      scale: 0, labelAlpha: 0, jitter: 0,
      flowSpeed: 1, particleAlpha: 0, glowBoost: 0,
    };
    this.flowT = 0;

    this.layouts = buildLayouts();
    const W = this.layouts.workflow;
    this.hubPos = W.hubs.map((p) => ({ x: p[0], y: p[1], z: p[2] }));
    this.satPos = W.sats.map((p) => ({ x: p[0], y: p[1], z: p[2] }));
    this.hubScale = LABELS.map(() => ({ v: 0 }));
    this.hubActive = LABELS.map(() => ({ v: 0 }));
    this.satScl = this.satPos.map(() => ({ v: 0 }));

    const rand = mulberry32(99);
    this.satSize = this.satPos.map(() => 0.055 + rand() * 0.055);

    // --- hubs ---
    const hubGeo = new THREE.SphereGeometry(0.19, 32, 24);
    const skyGlow = glowTexture('rgba(255,255,255,0.95)', 'rgba(98,188,241,0.55)');
    this.hubMeshes = [];
    this.hubGlows = [];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, roughness: 0.16, metalness: 0.05,
        clearcoat: 1, clearcoatRoughness: 0.25,
        emissive: SKY.clone(), emissiveIntensity: 0.12,
      });
      const m = new THREE.Mesh(hubGeo, mat);
      this.group.add(m);
      this.hubMeshes.push(m);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: skyGlow, transparent: true, opacity: 0.4, depthWrite: false,
      }));
      glow.scale.setScalar(1.1);
      this.group.add(glow);
      this.hubGlows.push(glow);
    }

    // --- satellites ---
    const satGeo = new THREE.IcosahedronGeometry(1, 0);
    const satMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.15, flatShading: true });
    this.satMesh = new THREE.InstancedMesh(satGeo, satMat, N_SATS);
    this.satMesh.frustumCulled = false;
    const col = new THREE.Color();
    for (let i = 0; i < N_SATS; i++) {
      const r = rand();
      col.copy(r < 0.62 ? SKY : r < 0.88 ? NAVY : GOLD);
      this.satMesh.setColorAt(i, col);
    }
    this.group.add(this.satMesh);

    // --- connection sets ---
    const hubPt = (i) => (out) => out.set(this.hubPos[i].x, this.hubPos[i].y, this.hubPos[i].z);
    const satPt = (i) => (out) => out.set(this.satPos[i].x, this.satPos[i].y, this.satPos[i].z);

    const makeConn = (getA, getB, sag, opts) => {
      const tube = new Tube(this.group, opts);
      const A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3();
      const point = (t, out) => {
        getA(A); getB(B);
        C.set((A.x + B.x) / 2 + sag.x, (A.y + B.y) / 2 + sag.y, (A.z + B.z) / 2 + sag.z);
        const it = 1 - t;
        out.set(
          it * it * A.x + 2 * it * t * C.x + t * t * B.x,
          it * it * A.y + 2 * it * t * C.y + t * t * B.y,
          it * it * A.z + 2 * it * t * C.z + t * t * B.z
        );
      };
      return { tube, point };
    };

    this.chain = [];
    for (let l = 0; l < 3; l++) {
      this.chain.push(makeConn(hubPt(l), hubPt(l + 1), CHAIN_SAGS[l], {
        radius: 0.05, tubular: 26, color: SKY, emissiveIntensity: 0.4,
      }));
    }

    this.spokes = [];
    for (let i = 0; i < N_SATS; i++) {
      const sag = new THREE.Vector3((rand() - 0.5) * 0.3, (rand() - 0.5) * 0.3, (rand() - 0.5) * 0.3);
      this.spokes.push(makeConn(satPt(i), hubPt(i % 4), sag, {
        radius: 0.013, tubular: 14, radial: 5, color: SKY, opacity: 0.5, emissiveIntensity: 0.25,
      }));
    }

    this.threads = [];
    for (let i = 0; i < 14; i++) {
      let a = Math.floor(rand() * N_SATS);
      let b = Math.floor(rand() * N_SATS);
      if (a === b) b = (b + 7) % N_SATS;
      const sag = new THREE.Vector3((rand() - 0.5) * 0.6, (rand() - 0.5) * 0.6, 0.3 + rand() * 0.4);
      this.threads.push(makeConn(satPt(a), satPt(b), sag, {
        radius: 0.011, tubular: 16, radial: 5, color: SKY_DEEP, opacity: 0.55, emissiveIntensity: 0.3,
      }));
    }

    const chainPoint = (link, t, out) => this.chain[link].point(t, out);
    this.branches = BRANCH_DEFS.map((def) => {
      const getA = (out) => chainPoint(def.link, def.t, out);
      const getB = (out) => {
        chainPoint(def.link, def.t, out);
        out.x += def.off[0]; out.y += def.off[1]; out.z += def.off[2];
      };
      const sag = new THREE.Vector3(def.off[0] * 0.2, def.off[1] * 0.12 - 0.25, def.off[2] * 0.2);
      return makeConn(getA, getB, sag, {
        radius: 0.032, tubular: 18, color: GOLD, emissiveIntensity: 0.6,
      });
    });

    this.arcs = [];
    for (let i = 0; i < N_SATS; i++) {
      this.arcs.push(makeConn(satPt(i), satPt((i + 1) % N_SATS), new THREE.Vector3(0, 0, 0), {
        radius: 0.026, tubular: 8, radial: 5, color: SKY, emissiveIntensity: 0.5,
      }));
    }

    // --- flares at risk junctions ---
    const goldGlow = glowTexture('rgba(255,236,170,1)', 'rgba(255,192,0,0.7)');
    this.flares = BRANCH_DEFS.map(() => {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: goldGlow, color: GOLD.clone(), transparent: true, opacity: 0, depthWrite: false,
      }));
      sprite.scale.setScalar(0.001);
      this.group.add(sprite);
      return { state: { v: 0 }, sprite };
    });

    // --- weld pulses + chain runner ---
    this.pulses = BRANCH_DEFS.map(() => ({ t: 0, on: 0 }));
    this.pulseSprites = BRANCH_DEFS.map(() => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: goldGlow, color: 0xffffff, transparent: true, opacity: 0, depthWrite: false,
      }));
      s.scale.setScalar(0.001);
      this.group.add(s);
      return s;
    });
    this.runner = { t: 0, on: 0 };
    this.runnerSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture('rgba(255,255,255,1)', 'rgba(255,210,80,0.8)'),
      transparent: true, opacity: 0, depthWrite: false,
    }));
    this.runnerSprite.scale.setScalar(0.001);
    this.group.add(this.runnerSprite);

    // --- impact stamp ring ---
    this.stamp = { s: 0, a: 0 };
    this.stampSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: ringTexture(), transparent: true, opacity: 0, depthWrite: false,
    }));
    this.stampSprite.position.set(0, 0.65, 0.3);
    this.group.add(this.stampSprite);

    // --- flow particles along the chain ---
    const P_COUNT = 48;
    this.pGeo = new THREE.BufferGeometry();
    this.pGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(P_COUNT * 3), 3));
    this.pLink = new Uint8Array(P_COUNT);
    this.pOff = new Float32Array(P_COUNT);
    this.pSpd = new Float32Array(P_COUNT);
    for (let i = 0; i < P_COUNT; i++) {
      this.pLink[i] = i % 3;
      this.pOff[i] = rand();
      this.pSpd[i] = 0.1 + rand() * 0.14;
    }
    this.points = new THREE.Points(this.pGeo, new THREE.PointsMaterial({
      map: glowTexture('rgba(255,255,255,1)', 'rgba(46,143,208,0.85)'),
      color: SKY_DEEP, size: 0.16, sizeAttenuation: true,
      transparent: true, opacity: 0, depthWrite: false,
    }));
    this.points.frustumCulled = false;
    this.group.add(this.points);

    // --- HTML hub labels ---
    const labelRoot = document.getElementById('hub-labels');
    this.labels = LABELS.map((text) => {
      const el = document.createElement('div');
      el.className = 'hub-label';
      el.textContent = text;
      el.style.opacity = '0';
      labelRoot.appendChild(el);
      return el;
    });
  }

  update(dt, time, camera, viewport) {
    const p = this.params;
    this.group.visible = p.scale > 0.002;
    this.group.scale.setScalar(Math.max(p.scale, 0.0001));
    this.flowT += dt * p.flowSpeed;

    // hubs
    for (let i = 0; i < 4; i++) {
      const hp = this.hubPos[i];
      const jx = Math.sin(time * 11 + i * 13.7) * p.jitter * 0.08;
      const jy = Math.cos(time * 13 + i * 7.3) * p.jitter * 0.08;
      const m = this.hubMeshes[i];
      m.position.set(hp.x + jx, hp.y + jy, hp.z);
      const act = this.hubActive[i].v;
      const s = this.hubScale[i].v * (1 + 0.45 * act) * (1 + Math.sin(time * 2.4 + i) * 0.025);
      m.scale.setScalar(Math.max(s, 0.0001));
      m.visible = s > 0.01;
      m.material.emissiveIntensity = 0.12 + act * 0.5 + p.glowBoost * 0.4;
      const g = this.hubGlows[i];
      g.position.copy(m.position);
      g.scale.setScalar(Math.max(1.05 * s * (1 + act * 0.5), 0.0001));
      g.material.opacity = (0.34 + act * 0.45 + p.glowBoost * 0.5) * Math.min(s, 1);
      g.visible = m.visible;
    }

    // satellites
    for (let i = 0; i < N_SATS; i++) {
      const sp = this.satPos[i];
      const jx = Math.sin(time * 9 + i * 3.1) * p.jitter * 0.1;
      const jy = Math.cos(time * 8 + i * 5.7) * p.jitter * 0.1;
      const bob = Math.sin(time * 0.9 + i * 1.3) * 0.04;
      _S.setScalar(Math.max(this.satScl[i].v * this.satSize[i], 0.0001));
      _QT.setFromAxisAngle(UP, time * 0.4 + i);
      _M.compose(_P.set(sp.x + jx, sp.y + jy + bob, sp.z), _QT, _S);
      this.satMesh.setMatrixAt(i, _M);
    }
    this.satMesh.instanceMatrix.needsUpdate = true;

    if (this.group.visible) {
      for (const c of this.chain) c.tube.update(c.point);
      for (const c of this.spokes) c.tube.update(c.point);
      for (const c of this.threads) c.tube.update(c.point);
      for (const c of this.branches) c.tube.update(c.point);
      for (const c of this.arcs) c.tube.update(c.point);
    }

    // flow particles
    const pa = p.particleAlpha;
    this.points.visible = pa > 0.02 && this.group.visible;
    if (this.points.visible) {
      const arr = this.pGeo.attributes.position.array;
      for (let i = 0; i < this.pLink.length; i++) {
        const u = (this.pOff[i] + this.flowT * this.pSpd[i]) % 1;
        this.chain[this.pLink[i]].point(u, _P);
        arr[i * 3] = _P.x;
        arr[i * 3 + 1] = _P.y + Math.sin(time * 3 + i) * 0.03;
        arr[i * 3 + 2] = _P.z + 0.08;
      }
      this.pGeo.attributes.position.needsUpdate = true;
      this.points.material.opacity = pa;
    }

    // flares
    for (let i = 0; i < this.flares.length; i++) {
      const f = this.flares[i];
      const v = f.state.v;
      f.sprite.visible = v > 0.01 && this.group.visible;
      if (f.sprite.visible) {
        this.branches[i].point(0, _P);
        f.sprite.position.copy(_P);
        f.sprite.scale.setScalar(v * (0.85 + Math.sin(time * 5 + i * 2) * 0.12));
        f.sprite.material.opacity = Math.min(1, v);
      }
    }

    // weld pulses
    for (let i = 0; i < this.pulses.length; i++) {
      const pu = this.pulses[i];
      const s = this.pulseSprites[i];
      s.visible = pu.on > 0.01 && this.group.visible;
      if (s.visible) {
        this.branches[i].point(Math.max(0, 1 - pu.t), _P);
        s.position.copy(_P);
        s.scale.setScalar(0.5 * pu.on);
        s.material.opacity = pu.on;
      }
    }

    // chain runner
    this.runnerSprite.visible = this.runner.on > 0.01 && this.group.visible;
    if (this.runnerSprite.visible) {
      const u = Math.min(this.runner.t, 0.999) * 3;
      const link = Math.min(2, Math.floor(u));
      this.chain[link].point(u - link, _P);
      this.runnerSprite.position.copy(_P);
      this.runnerSprite.scale.setScalar(0.6 * this.runner.on);
      this.runnerSprite.material.opacity = this.runner.on;
    }

    // stamp ring
    this.stampSprite.visible = this.stamp.a > 0.01 && this.group.visible;
    if (this.stampSprite.visible) {
      this.stampSprite.scale.setScalar(Math.max(this.stamp.s * 4.6, 0.001));
      this.stampSprite.material.opacity = this.stamp.a;
    }

    // labels
    for (let i = 0; i < 4; i++) {
      const el = this.labels[i];
      const alpha = p.labelAlpha * this.hubScale[i].v * (this.group.visible ? 1 : 0);
      if (alpha < 0.02) { el.style.opacity = '0'; continue; }
      this.hubMeshes[i].getWorldPosition(_P).project(camera);
      if (_P.z > 1) { el.style.opacity = '0'; continue; }
      const x = (_P.x + 1) / 2 * viewport.vw;
      const y = (1 - _P.y) / 2 * viewport.vh;
      el.style.opacity = String(alpha);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -160%)`;
      el.classList.toggle('active', this.hubActive[i].v > 0.5);
    }
  }
}

function buildLayouts() {
  const rand = mulberry32(777);
  const L = {};

  const hubsW = [[-4.2, 0.7, 0], [-1.4, 0.7, 0], [1.4, 0.7, 0], [4.2, 0.7, 0]];
  L.workflow = {
    hubs: hubsW,
    sats: Array.from({ length: N_SATS }, (_, i) => {
      const h = hubsW[i % 4];
      const a = rand() * Math.PI * 2;
      const r = 0.5 + rand() * 0.6;
      return [h[0] + Math.cos(a) * r, h[1] + Math.sin(a) * r * 0.65, (rand() - 0.5) * 1.4];
    }),
  };

  L.method = {
    hubs: [[-3.6, 2.1, -0.2], [3.6, 2.1, -0.2], [-3.6, -1.1, -0.2], [3.6, -1.1, -0.2]],
    sats: Array.from({ length: N_SATS }, () => [
      -4.2 + rand() * 8.4, -1.5 + rand() * 3.9, (rand() - 0.5) * 0.5,
    ]),
  };

  L.risk = {
    hubs: [[-4.2, 1.05, 0], [-1.4, 0.35, 0], [1.4, 1.15, 0], [4.2, 0.45, 0]],
    sats: Array.from({ length: N_SATS }, (_, i) => {
      if (i < 24) {
        const x = -4.2 + rand() * 8.4;
        return [x, 0.6 + (rand() - 0.5) * 1.6, (rand() - 0.5) * 1.4];
      }
      return [(rand() - 0.5) * 8, -1.6 - rand() * 1.2, (rand() - 0.5) * 1.6];
    }),
  };

  const icx = 0, icy = 0.65, irr = 1.95;
  L.impact = {
    hubs: [45, 135, 225, 315].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return [icx + Math.cos(a) * irr, icy + Math.sin(a) * irr * 0.92, 0];
    }),
    sats: Array.from({ length: N_SATS }, (_, i) => {
      const a = (i / N_SATS) * Math.PI * 2;
      const r = irr + (rand() - 0.5) * 0.12;
      return [icx + Math.cos(a) * r, icy + Math.sin(a) * r * 0.92, (rand() - 0.5) * 0.25];
    }),
  };

  L.bloom = {
    hubs: [0, 90, 180, 270].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return [Math.cos(a) * 0.5, 0.9 + Math.sin(a) * 0.5, 0];
    }),
    sats: Array.from({ length: N_SATS }, (_, i) => {
      const a = (i / N_SATS) * Math.PI * 2 + (rand() - 0.5) * 0.4;
      const r = 5.5 + rand() * 4;
      return [Math.cos(a) * r, 0.8 + Math.sin(a) * r * 0.7, (rand() - 0.5) * 3.5];
    }),
  };

  return L;
}
