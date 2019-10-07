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

var sidebarHeader = document.querySelector('.theme-sidebar-header-title');
fetch('version.txt')
  .then((response) =>
    response.status === 200 ? response.text() : 'unknown version',
  )
  .then((text) => sidebarHeader.setAttribute('data-after', text));
