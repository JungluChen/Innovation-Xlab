import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { FileRain } from './fileRain.js';
import { Subject } from './subject.js';
import { Ambient } from './ambient.js';

// lateral truck (world units) applied to camera + look-target together, so the
// whole framed scene reads ~16% to the right and clears the left text column.
// View direction is unchanged, so every scrubbed scroll timeline stays intact.
const FIGURE_SHIFT_X = 4.8;

export class Stage3D {
  constructor(canvas) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
    // single proxy GSAP can tween from any timeline
    this.cam = { x: 0, y: 0.6, z: 16, tx: 0, ty: 0.6, tz: 0 };

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    if ('environmentIntensity' in this.scene) this.scene.environmentIntensity = 0.5;

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xd8e4f2, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(5, 9, 7);
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xbfe3ff, 0.35);
    fill.position.set(-6, -3, 5);
    this.scene.add(fill);

    this.ambient = new Ambient(this.scene);
    this.rain = new FileRain(this.scene);
    this.subject = new Subject(this.scene);

    this.clock = new THREE.Clock();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.vw = window.innerWidth;
    this.vh = window.innerHeight;
    this.renderer.setSize(this.vw, this.vh, false);
    this.camera.aspect = this.vw / this.vh;
    this.camera.updateProjectionMatrix();
  }

  render = () => {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.elapsedTime;
    const c = this.cam;
    this.camera.position.set(c.x - FIGURE_SHIFT_X, c.y, c.z);
    this.camera.lookAt(c.tx - FIGURE_SHIFT_X, c.ty, c.tz);
    this.ambient.update(dt, t, this.camera);
    this.rain.update(t);
    this.subject.update(dt, t, this.camera, this);
    this.renderer.render(this.scene, this.camera);
  };
}
