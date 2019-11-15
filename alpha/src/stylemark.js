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
        'button.olt-Notification-close',
      );
      if (closeEl) {
        closeEl.addEventListener('click', () => {
          notificationEl.classList.remove('is-open');
          notificationEl.style.display = 'none';
        });
      }
    });
});

/**
 * Adds demo functionality to show stack of notifications
 */
showNotifications = () => {
  const notificationsList = [
    ...document.querySelector('div.olt-NotificationContainer').children,
  ].reverse();
  notificationsList.forEach((notification, index) => {
    notification.style.display = '';
    setTimeout(() => {
      notification.classList.add('is-open');
    }, 1000 * index);
    setTimeout(() => {
      notification.style.display = 'none';
      notification.classList.remove('is-open');
    }, 3000 + 1000 * index);
  });
};

/**
 * Show the version and the version dropdown in the sidebar
 */

const triggerNavigation = () => {
  const target = document.getElementById('versions_select').value;
  window.location.href = target;
};

const getCurrentVersion = () =>
  fetch('version.txt').then((response) =>
    response.status === 200 ? response.text() : 'unknown version',
  );

const getAllVersions = () =>
  fetch('/styles/versions_json.txt').then((response) =>
    response.status === 200 ? response.text() : '[]',
  );

const addCurrentVersion = (version) => {
  const sidebarHeader = document.querySelector('.theme-sidebar-header-title');
  sidebarHeader.setAttribute('data-after', version);
};

const createOptions = (versions, currentVersion) =>
  versions.map(
    (v) =>
      `<option value='/styles/releases/${v}'${
        currentVersion.trim() === v.trim() ? ' selected' : ''
      }>
      ${v}
    </option>`,
  );

const insertDropdown = (versions, currentVersion) => {
  const sidebarSearch = document.querySelector('.theme-sidebar-search');
  const dropDown = document.createElement('div');
  dropDown.innerHTML = `
   <label class="olt-Label" style="margin-bottom: 10px">
     <select class="olt-Select" id="versions_select">
       ${createOptions(versions, currentVersion).join('')}
     </select>
     <span class="olt-Label-text">Other Versions</span>
   </label>
  `;
  dropDown.onchange = triggerNavigation;
  sidebarSearch.parentNode.insertBefore(dropDown, sidebarSearch);
};

const addVersionDropdown = (currentVersion) => {
  getAllVersions().then((versionsString) => {
    const versions = JSON.parse(versionsString).sort();
    insertDropdown(versions, currentVersion);
  });
};

getCurrentVersion().then((currentVersion) => {
  addCurrentVersion(currentVersion);
  addVersionDropdown(currentVersion);
});
