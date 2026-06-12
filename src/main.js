import './styles/main.css';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wideQuery = window.matchMedia('(min-width: 900px)');

let webgl = false;
try {
  const c = document.createElement('canvas');
  webgl = !!(c.getContext('webgl2') || c.getContext('webgl'));
} catch { /* no webgl */ }

const heavy = wideQuery.matches && !reduced && webgl;
document.documentElement.classList.add(heavy ? 'heavy' : 'static');
if (window.matchMedia('(pointer: fine)').matches) {
  document.documentElement.classList.add('fine-pointer');
}

if (heavy) {
  import('./heavy.js').then((m) => m.init());
} else {
  import('./static.js').then((m) => m.init());
}

// the two modes lay out too differently to hot-swap — reload across the breakpoint
wideQuery.addEventListener('change', () => location.reload());
