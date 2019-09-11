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
  /**
   * Adds a delay closing for a notification
   */
  document
    .querySelectorAll('[data-notification-trigger]')
    .forEach((triggerEl) => {
      triggerEl.addEventListener('click', () => {
        const name = triggerEl.getAttribute('data-notification-trigger');
        document
          .querySelectorAll(`[data-notification-target="${name}"]`)
          .forEach((targetEl) => {
            targetEl.classList.add('is-open');
            setTimeout(() => {
              targetEl.classList.remove('is-open');
            }, 10000);
          });
      });
    });
});
