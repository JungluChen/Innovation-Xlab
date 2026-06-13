import gsap from 'gsap';

/** Custom cursor, magnetic buttons, film grain. Desktop heavy mode only. */
export function initExtras() {
  // ---------- film grain ----------
  const noise = document.createElement('canvas');
  noise.width = noise.height = 128;
  const g = noise.getContext('2d');
  const img = g.createImageData(128, 128);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 26;
  }
  g.putImageData(img, 0, 0);
  const grain = document.getElementById('grain');
  grain.style.backgroundImage = `url(${noise.toDataURL()})`;
  grain.style.backgroundRepeat = 'repeat';

  if (!window.matchMedia('(pointer: fine)').matches) return;

  // ---------- custom cursor ----------
  const cursor = document.getElementById('cursor');
  const dot = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const ringPos = { x: pos.x, y: pos.y };
  window.addEventListener('mousemove', (e) => {
    pos.x = e.clientX; pos.y = e.clientY;
    dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
  });
  gsap.ticker.add(() => {
    ringPos.x += (pos.x - ringPos.x) * 0.16;
    ringPos.y += (pos.y - ringPos.y) * 0.16;
    ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
  });
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button')) cursor.classList.add('hovering');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button')) cursor.classList.remove('hovering');
  });

  // ---------- magnetic buttons ----------
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: dx * 0.28, y: dy * 0.34, duration: 0.4, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    });
  });
}
