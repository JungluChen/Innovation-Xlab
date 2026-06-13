import * as THREE from 'three';
import { mulberry32 } from '../util/helpers.js';

const SKY = new THREE.Color(98 / 255, 188 / 255, 241 / 255);
const SKY_DEEP = new THREE.Color(0x2e8fd0);
const NAVY = new THREE.Color(1 / 255, 61 / 255, 124 / 255);
const GOLD = new THREE.Color(1, 192 / 255, 0);

// ---- tuning knobs for the particle field ----
const COUNT = 150; // number of particles (kept modest for perf)
const MAX_LINKS = 320; // hard cap on constellation links drawn per frame
const LINK_DIST = 5.4; // world-space distance under which two particles link
const LINK_DIST2 = LINK_DIST * LINK_DIST;
const FIELD_Z = -11; // depth plane the field is centred on (behind the figure at z≈0)
const CURSOR_R = 6.0; // world-space radius of mouse influence
const CURSOR_R2 = CURSOR_R * CURSOR_R;
const SPRING = 2.2; // pull back toward rest position
const DAMP = 0.9; // velocity damping per frame
const PR = Math.min(window.devicePixelRatio || 1, 1.75); // match renderer pixelRatio cap

const _ndc = new THREE.Vector3();

/**
 * Interactive "quantum" particle constellation behind the entire scene.
 *
 *  • A drifting field of particles with faint links between near neighbours
 *    (the lattice / constellation look).
 *  • Mouse proximity EXCITES particles — they brighten, grow, glow gold, and are
 *    drawn toward the cursor.
 *  • Clicks emit an expanding shock-ring that shoves particles outward.
 *
 * It is parented at renderOrder -1 with negative z, so it always sits BEHIND the
 * workflow figure and below the frosted text panels (whose backdrop-blur dims it
 * further) — the legibility/figure work is preserved. Only created in heavy mode
 * (scene.js is imported by heavy.js only), so mobile / reduced-motion never load
 * it. All motion runs off the shared gsap.ticker (requestAnimationFrame).
 */
export class Ambient {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.renderOrder = -1;
    scene.add(this.group);

    const rand = mulberry32(7321);
    this.n = COUNT;
    this.home = new Float32Array(COUNT * 3); // rest position
    this.pos = new Float32Array(COUNT * 3); // live position (drives geometry)
    this.vel = new Float32Array(COUNT * 3);
    this.phase = new Float32Array(COUNT);
    this.baseCol = new Float32Array(COUNT * 3);
    this.baseSize = new Float32Array(COUNT);

    const aColor = new Float32Array(COUNT * 3);
    const aSize = new Float32Array(COUNT);
    const aAlpha = new Float32Array(COUNT);
    const c = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const x = (rand() - 0.5) * 60;
      const y = (rand() - 0.5) * 34;
      const z = FIELD_Z + (rand() - 0.5) * 16;
      this.home[i * 3] = x;
      this.home[i * 3 + 1] = y;
      this.home[i * 3 + 2] = z;
      this.pos[i * 3] = x;
      this.pos[i * 3 + 1] = y;
      this.pos[i * 3 + 2] = z;
      this.phase[i] = rand() * Math.PI * 2;
      const r = rand();
      c.copy(r < 0.55 ? SKY : r < 0.8 ? SKY_DEEP : r < 0.93 ? NAVY : GOLD);
      this.baseCol[i * 3] = c.r;
      this.baseCol[i * 3 + 1] = c.g;
      this.baseCol[i * 3 + 2] = c.b;
      aColor[i * 3] = c.r;
      aColor[i * 3 + 1] = c.g;
      aColor[i * 3 + 2] = c.b;
      this.baseSize[i] = 0.5 + rand() * 0.7;
      aSize[i] = this.baseSize[i];
      aAlpha[i] = 0.5;
    }

    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute(
      'position',
      new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.aColor = new THREE.BufferAttribute(aColor, 3).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(aSize, 1).setUsage(THREE.DynamicDrawUsage);
    this.aAlpha = new THREE.BufferAttribute(aAlpha, 1).setUsage(THREE.DynamicDrawUsage);
    this.geo.setAttribute('aColor', this.aColor);
    this.geo.setAttribute('aSize', this.aSize);
    this.geo.setAttribute('aAlpha', this.aAlpha);

    // Custom point shader: per-particle size + alpha, perspective attenuation,
    // soft circular sprite. Normal blending (additive would wash out on the light bg).
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uPR: { value: PR } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uPR;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPR * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d) * vAlpha;
          gl_FragColor = vec4(vColor, a);
        }
      `,
    });
    this.points = new THREE.Points(this.geo, mat);
    this.points.frustumCulled = false;
    this.group.add(this.points);

    // --- constellation links (rebuilt every frame, capped) ---
    this.linkPos = new Float32Array(MAX_LINKS * 2 * 3);
    this.linkGeo = new THREE.BufferGeometry();
    this.linkGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(this.linkPos, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.linkMat = new THREE.LineBasicMaterial({
      color: SKY_DEEP.clone(),
      transparent: true,
      opacity: 0.17,
      depthWrite: false,
    });
    this.links = new THREE.LineSegments(this.linkGeo, this.linkMat);
    this.links.frustumCulled = false;
    this.group.add(this.links);

    // --- interaction state ---
    this.ptr = { x: 0, y: 0, active: false };
    this.cursor = new THREE.Vector3(0, 0, FIELD_Z); // cursor projected into the field plane
    this.waves = []; // active click shock-rings
    this._wantWave = false;
    this.scroll = 0;

    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener(
        'mousemove',
        (e) => {
          this.ptr.x = (e.clientX / window.innerWidth) * 2 - 1;
          this.ptr.y = -((e.clientY / window.innerHeight) * 2 - 1);
          this.ptr.active = true;
        },
        { passive: true },
      );
      // a click anywhere emits a ripple; we never preventDefault, so links/buttons still work
      window.addEventListener(
        'click',
        () => {
          this._wantWave = true;
        },
        { passive: true },
      );
    }
    window.addEventListener(
      'scroll',
      () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.scroll = max > 0 ? window.scrollY / max : 0;
      },
      { passive: true },
    );
  }

  update(dt, t, camera) {
    const d = Math.min(dt, 0.05);

    // 1) project the screen cursor onto the field's depth plane (z = FIELD_Z)
    if (camera && this.ptr.active) {
      camera.updateMatrixWorld();
      _ndc.set(this.ptr.x, this.ptr.y, 0.5).unproject(camera).sub(camera.position).normalize();
      const reach = (FIELD_Z - camera.position.z) / _ndc.z;
      this.cursor.copy(camera.position).addScaledVector(_ndc, reach);
    }

    // 2) parallax: shift the whole field with scroll + a touch of mouse for depth
    this.group.position.y = -this.scroll * 2.2;
    this.group.rotation.z = this.ptr.x * 0.03;

    // 3) spawn a shock-ring on click (at the current cursor world position)
    if (this._wantWave) {
      this._wantWave = false;
      this.waves.push({ x: this.cursor.x, y: this.cursor.y, t: 0 });
      if (this.waves.length > 4) this.waves.shift();
    }
    for (const w of this.waves) w.t += d;
    this.waves = this.waves.filter((w) => w.t < 1.3);

    const pos = this.pos;
    const vel = this.vel;
    const home = this.home;
    const sizeArr = this.aSize.array;
    const colArr = this.aColor.array;
    const alphaArr = this.aAlpha.array;
    // cursor compared in the group's local space (group only translates in y here)
    const cx = this.cursor.x - this.group.position.x;
    const cy = this.cursor.y - this.group.position.y;

    for (let i = 0; i < this.n; i++) {
      const ix = i * 3;
      const iy = ix + 1;
      const iz = ix + 2;

      // gently oscillating rest point — keeps the field alive with no input
      const hx = home[ix] + Math.sin(t * 0.25 + this.phase[i]) * 0.6;
      const hy = home[iy] + Math.cos(t * 0.21 + this.phase[i]) * 0.6;

      // spring back toward rest
      vel[ix] += (hx - pos[ix]) * SPRING * d;
      vel[iy] += (hy - pos[iy]) * SPRING * d;
      vel[iz] += (home[iz] - pos[iz]) * SPRING * d;

      // mouse proximity → excite (pull in, brighten, grow, glow gold)
      let excite = 0;
      const dx = cx - pos[ix];
      const dy = cy - pos[iy];
      const dd = dx * dx + dy * dy;
      if (this.ptr.active && dd < CURSOR_R2) {
        const f = 1 - Math.sqrt(dd) / CURSOR_R;
        excite = f;
        vel[ix] += dx * f * 4.0 * d;
        vel[iy] += dy * f * 4.0 * d;
      }

      // click shock-rings → outward push through the expanding shell
      for (const w of this.waves) {
        const wx = pos[ix] - w.x;
        const wy = pos[iy] - w.y;
        const wd = Math.sqrt(wx * wx + wy * wy) + 1e-3;
        const ring = w.t * 22; // ring expansion speed (world units / s)
        if (Math.abs(wd - ring) < 3.0) {
          const power = (1 - w.t / 1.3) * 16 * d;
          vel[ix] += (wx / wd) * power;
          vel[iy] += (wy / wd) * power;
          excite = Math.max(excite, 1 - w.t / 1.3);
        }
      }

      // integrate + damp
      vel[ix] *= DAMP;
      vel[iy] *= DAMP;
      vel[iz] *= DAMP;
      pos[ix] += vel[ix] * d * 6;
      pos[iy] += vel[iy] * d * 6;
      pos[iz] += vel[iz] * d * 6;

      // visual response: twinkle baseline + excitation boost
      const tw = 0.42 + Math.sin(t * 1.4 + this.phase[i]) * 0.08;
      alphaArr[i] = Math.min(1, tw + excite * 0.5);
      sizeArr[i] = this.baseSize[i] * (1 + excite * 1.3);
      const br = this.baseCol[ix];
      const bg = this.baseCol[iy];
      const bb = this.baseCol[iz];
      colArr[ix] = br + (GOLD.r - br) * excite;
      colArr[iy] = bg + (GOLD.g - bg) * excite;
      colArr[iz] = bb + (GOLD.b - bb) * excite;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.aSize.needsUpdate = true;
    this.aAlpha.needsUpdate = true;
    this.aColor.needsUpdate = true;

    // 4) rebuild the constellation links (nearest-neighbour lattice, capped)
    const lp = this.linkPos;
    const maxOff = MAX_LINKS * 6;
    let k = 0;
    for (let i = 0; i < this.n && k < maxOff; i++) {
      const ax = pos[i * 3];
      const ay = pos[i * 3 + 1];
      const az = pos[i * 3 + 2];
      for (let j = i + 1; j < this.n && k < maxOff; j++) {
        const ex = ax - pos[j * 3];
        const ey = ay - pos[j * 3 + 1];
        const ez = az - pos[j * 3 + 2];
        if (ex * ex + ey * ey + ez * ez < LINK_DIST2) {
          lp[k++] = ax;
          lp[k++] = ay;
          lp[k++] = az;
          lp[k++] = pos[j * 3];
          lp[k++] = pos[j * 3 + 1];
          lp[k++] = pos[j * 3 + 2];
        }
      }
    }
    this.linkGeo.setDrawRange(0, k / 3);
    this.linkGeo.attributes.position.needsUpdate = true;
  }
}
