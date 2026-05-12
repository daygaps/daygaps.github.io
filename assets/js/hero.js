// Hero scroll choreography.
//
// Why a JS-driven --p instead of CSS scroll-timeline / @scroll-timeline:
//   - scroll-timeline still ships behind a flag in Safari (May 2026).
//   - The user is a Mac person targeting other Mac people. Safari has to
//     work cleanly. JS is the cross-browser path.
//
// Contract:
//   .hero is the scroll-tracked container (the tall section).
//   While its top is above the viewport top AND its bottom is below it,
//   we map the distance into a 0..1 progress value and write it to
//   --p on the same .hero element. CSS consumes --p inside .hero only.
//
// Respect prefers-reduced-motion: we don't animate; CSS shows the
// post-animation state immediately (see .hero[data-static] in main.css).

(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Reduced motion: opt out of the choreography entirely. CSS handles the
  // static layout via the data attribute.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) {
    hero.dataset.static = 'true';
    hero.style.setProperty('--p', '1');
    return;
  }

  // Mark JS as active so the no-js fallback CSS doesn't apply.
  document.documentElement.classList.add('js');

  let ticking = false;
  let lastP = -1;

  const update = () => {
    ticking = false;
    const rect = hero.getBoundingClientRect();
    // Total scroll distance over which the hero animates. We want the
    // animation to fully play out by the time the hero's top reaches the
    // viewport top + (heroHeight - viewportHeight). After that point the
    // sticky .hero__stage releases and the next section enters.
    const travel = rect.height - window.innerHeight;
    if (travel <= 0) {
      hero.style.setProperty('--p', '1');
      return;
    }
    // `-rect.top` is how far we've scrolled past the top of the hero.
    // Clamp to [0, 1].
    const raw = -rect.top / travel;
    const p = Math.max(0, Math.min(1, raw));
    // Avoid wasted style recalcs when the value hasn't meaningfully moved.
    if (Math.abs(p - lastP) < 0.001) return;
    lastP = p;
    hero.style.setProperty('--p', p.toFixed(4));
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  // Initial run so the page doesn't flash in mid-animation if the user
  // reloads scrolled down.
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
})();
