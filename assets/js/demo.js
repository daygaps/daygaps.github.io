// The home page's focus demo.
//
// The window under [data-demo] is drawn as the app draws Today, with the
// focus card open over it. A visitor can tick tasks (on the card or on the
// page behind it), close the card by clicking outside it or pressing Escape,
// and open it again from the now island. Ticking follows the app's rule: a
// task with an open subtask cannot be ticked. The pie counts the card's
// top-level tasks.
//
// Nothing here runs on a timer; every change answers a click or a key.

(() => {
  const root = document.querySelector('[data-demo]');
  if (!root) return;

  const focusLayer = root.querySelector('.mw__focus');
  const behind = root.querySelectorAll('.mw__side, .mw__main, .mw__insp');
  const card = root.querySelector('[data-card]');
  const pie = card && card.querySelector('[data-pie]');

  const setInert = () => {
    const open = root.classList.contains('is-focused');
    focusLayer.inert = !open;
    behind.forEach((el) => { el.inert = open; });
  };

  const isDone = (id) => {
    const el = root.querySelector(`[data-task="${id}"]`);
    return !!el && el.classList.contains('is-done');
  };

  const openSubtasks = (id) =>
    [...root.querySelectorAll(`.fl[data-parent="${id}"]`)]
      .filter((el) => !el.classList.contains('is-done'));

  const updatePie = () => {
    if (!pie) return;
    const tops = [...card.querySelectorAll('.fl:not(.fl--sub)')];
    const done = tops.filter((el) => el.classList.contains('is-done')).length;
    pie.style.setProperty('--f', tops.length ? done / tops.length : 0);
    pie.setAttribute('aria-label', `${done} of ${tops.length} tasks done`);
  };

  const refuse = (id) => {
    root.querySelectorAll(`[data-task="${id}"]`).forEach((el) => {
      el.classList.remove('is-refused');
      void el.offsetWidth;
      el.classList.add('is-refused');
    });
  };

  const toggle = (id) => {
    const done = isDone(id);
    if (!done && openSubtasks(id).length) { refuse(id); return; }
    root.querySelectorAll(`[data-task="${id}"]`).forEach((el) => el.classList.toggle('is-done', !done));
    root.querySelectorAll(`[data-tick="${id}"]`).forEach((b) => b.setAttribute('aria-pressed', String(!done)));
    updatePie();
  };

  const open = () => {
    root.classList.add('is-focused');
    setInert();
    const first = card.querySelector('[data-tick]');
    if (first) first.focus({ preventScroll: true });
  };

  const close = () => {
    root.classList.remove('is-focused');
    setInert();
  };

  root.addEventListener('click', (e) => {
    const tick = e.target.closest('[data-tick]');
    if (tick) { toggle(tick.dataset.tick); return; }
    if (e.target.closest('[data-open-focus]')) { open(); return; }
    if (root.classList.contains('is-focused') && !e.target.closest('[data-card]')) close();
  });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('is-focused')) close();
  });

  setInert();
  updatePie();
})();
