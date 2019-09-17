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
   * Adds closing functionality for a notification
   */
  document
    .querySelectorAll('div.olt-Notification')
    .forEach((notificationEl) => {
      const closeEl = notificationEl.querySelector(
        'label.olt-Notification-close',
      );
      if (closeEl)
        closeEl.addEventListener('click', () => {
          notificationEl.classList.remove('is-open');
        });
    });
});

/**
 * Adds demo functionality to show stack of notifications
 */
showNotifications = () => {
  const notificationsList = [
    ...document.querySelector('div.olt-Notifications').children,
  ].reverse();
  notificationsList.forEach((notification, index) => {
    setTimeout(() => {
      notification.classList.add('is-open');
    }, 1000 * index);
    setTimeout(() => {
      notification.classList.remove('is-open');
    }, 3000 + 1000 * index);
  });
};
