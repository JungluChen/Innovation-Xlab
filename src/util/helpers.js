// Small shared helpers (deterministic randomness + text splitting).

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp01 = (v) => Math.min(1, Math.max(0, v));
export const lerp = (a, b, t) => a + (b - a) * t;

/** Split an element's text into .word > .char spans. Returns the char nodes. */
export function splitChars(el) {
  if (el.dataset.split) return el.querySelectorAll('.char');
  const text = el.textContent;
  el.setAttribute('aria-label', text.trim());
  const frag = document.createDocumentFragment();
  text.split(/(\s+)/).forEach((tok) => {
    if (!tok) return;
    if (/^\s+$/.test(tok)) { frag.appendChild(document.createTextNode(' ')); return; }
    const w = document.createElement('span');
    w.className = 'word';
    w.setAttribute('aria-hidden', 'true');
    for (const ch of tok) {
      const c = document.createElement('span');
      c.className = 'char';
      c.textContent = ch;
      w.appendChild(c);
    }
    frag.appendChild(w);
  });
  el.textContent = '';
  el.appendChild(frag);
  el.dataset.split = '1';
  return el.querySelectorAll('.char');
}
