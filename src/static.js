/** Static mode: mobile, no-WebGL, or prefers-reduced-motion.
 *  Full content in document flow + light fade-up reveals. */
export function init() {
  // counters show their final values immediately
  document.querySelectorAll('.stat-num').forEach((el) => {
    el.textContent = el.dataset.count + (el.dataset.suffix || '');
  });

  const targets = document.querySelectorAll(
    '.stage-head, .wf-card, .ev-card, .method-stats, .risk-beat, .journey, ' +
    '.fix-card, .relight, .impact-card, .member-card, .mentor-card, .logos, .cta-shell'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el) => io.observe(el));
}
