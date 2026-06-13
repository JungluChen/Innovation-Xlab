import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { makeCardTextures } from './cardTexture.js';
import { mulberry32, clamp01 } from '../util/helpers.js';

const COUNT = 38;
const AMBIENT_COUNT = 16;
const SPAN_Y = 15;
const CENTER = new THREE.Vector3(0, 0.6, 0);

/**
 * Act I/II — restrained rain of 3D document cards.
 * params.gather  0..1  cards spiral into the forming workflow (scrubbed)
 * params.ambient 0..1  a few faint far-depth cards drift behind later acts
 * params.fade    0..1  global opacity
 */
export class FileRain {
  constructor(scene) {
    this.params = { gather: 0, ambient: 0, fade: 1 };
    this.group = new THREE.Group();
    scene.add(this.group);

    const rand = mulberry32(20251);
    const textures = makeCardTextures();
    const bodyGeo = new RoundedBoxGeometry(1.05, 1.32, 0.05, 3, 0.07);
    const faceGeo = new THREE.PlaneGeometry(0.97, 1.24);

    this.cards = [];
    for (let i = 0; i < COUNT; i++) {
      const holder = new THREE.Group();
      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0xffffff, roughness: 0.32, metalness: 0.06, transparent: true,
      });
      const faceMat = new THREE.MeshStandardMaterial({
        map: textures[i % textures.length], roughness: 0.5, metalness: 0, transparent: true,
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      const front = new THREE.Mesh(faceGeo, faceMat);
      front.position.z = 0.026;
      const backMat = faceMat.clone();
      const back = new THREE.Mesh(faceGeo, backMat);
      back.position.z = -0.026;
      back.rotation.y = Math.PI;
      holder.add(body, front, back);
      this.group.add(holder);

      this.cards.push({
        holder,
        mats: [bodyMat, faceMat, backMat],
        x0: (rand() - 0.5) * 20,
        z0: -4.4 + rand() * 7.2,
        speed: 0.18 + rand() * 0.42,
        phase: rand(),
        baseScale: 0.66 + rand() * 0.62,
        rot: new THREE.Euler((rand() - 0.5) * 0.5, (rand() - 0.5) * 0.9, (rand() - 0.5) * 0.3),
        rotSpeed: new THREE.Vector3((rand() - 0.5) * 0.3, (rand() - 0.5) * 0.5, (rand() - 0.5) * 0.2),
        gatherDelay: (i / COUNT) * 0.42,
        spin: rand() * Math.PI * 2,
        ambient: i < AMBIENT_COUNT
          ? {
              x: (rand() - 0.5) * 23,
              y: (rand() - 0.5) * 9,
              z: -5.8 - rand() * 4.6,
              bob: rand() * Math.PI * 2,
              drift: 0.55 + rand() * 1.4,
            }
          : null,
      });
    }

    this._free = new THREE.Vector3();
    this._target = new THREE.Vector3();
  }

  update(t) {
    const { gather, ambient, fade } = this.params;
    for (let i = 0; i < this.cards.length; i++) {
      const c = this.cards[i];
      const h = c.holder;

      // free fall, looping top to bottom with sway — ambient motion, clock-driven
      const yFall = 7.5 - ((c.phase * SPAN_Y + t * c.speed * 2.2) % SPAN_Y);
      this._free.set(c.x0 + Math.sin(t * 0.3 + i * 1.7) * 0.45, yFall, c.z0);

      // gather: spiral into the workflow center (scroll-scrubbed)
      const g = clamp01((gather * 1.45 - c.gatherDelay) / 1.0);
      const ge = g * g * (3 - 2 * g);
      let opacity = fade;
      let scale = c.baseScale * (1 - ge);

      if (ge > 0) {
        const ang = c.spin + ge * 5;
        const rad = (1 - ge) * 1.6;
        this._target.set(
          CENTER.x + Math.cos(ang) * rad,
          CENTER.y + Math.sin(ang) * rad * 0.55,
          CENTER.z + (1 - ge) * 0.8
        );
        this._free.lerp(this._target, ge);
        opacity *= 1 - ge * 0.3;
      }

      // ambient: faint far-depth drift for later acts
      if (c.ambient && ambient > 0.01) {
        const a = c.ambient;
        const ax = a.x + Math.sin(t * 0.11 * a.drift + a.bob) * 1.25;
        const ay = a.y + Math.sin(t * 0.17 * a.drift + a.bob * 2) * 0.78;
        const az = a.z + Math.cos(t * 0.09 * a.drift + a.bob) * 0.75;
        const ambientMix = ambient * (0.55 + ge * 0.45);
        this._free.lerp(this._target.set(ax, ay, az), ambientMix);
        opacity = fade * Math.max(opacity / fade || 0, 0.44 * ambientMix);
        scale = Math.max(scale, c.baseScale * 1.45 * ambientMix);
      }

      h.position.copy(this._free);
      h.rotation.set(
        c.rot.x + t * c.rotSpeed.x + ge * 2.2,
        c.rot.y + t * c.rotSpeed.y,
        c.rot.z + t * c.rotSpeed.z
      );
      h.scale.setScalar(Math.max(scale, 0.0001));

      const visible = opacity > 0.02 && scale > 0.02;
      h.visible = visible;
      if (visible) {
        for (const m of c.mats) m.opacity = opacity;
      }
    }
  }
}
