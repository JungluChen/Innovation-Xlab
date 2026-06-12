import gsap from 'gsap';
import { Stage3D } from './three/scene.js';
import { initChoreography } from './scroll/choreography.js';
import { initExtras } from './ui/extras.js';

export function init() {
  const stage = new Stage3D(document.getElementById('gl'));
  initChoreography(stage);
  initExtras();
  gsap.ticker.add(stage.render);
}
