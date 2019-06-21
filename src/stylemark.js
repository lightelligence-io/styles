window.addEventListener('load', () => {
  /**
   * Adds a delay closing for a snackbar
   */
  document.querySelectorAll('[data-snackbar-trigger]').forEach((triggerEl) => {
    triggerEl.addEventListener('click', () => {
      const name = triggerEl.getAttribute('data-snackbar-trigger');
      document
        .querySelectorAll(`[data-snackbar-target="${name}"]`)
        .forEach((targetEl) => {
          targetEl.classList.add('is-open');
          setTimeout(() => {
            targetEl.classList.remove('is-open');
          }, 1500);
        });
    });
  });
});
