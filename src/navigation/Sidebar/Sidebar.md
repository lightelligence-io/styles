---
name: Sidebar
category: Navigation
---

## Description

_Sidebar_ is a sidebar on the right of your application. It occupies the `olt-Sidebar*`
class names.

---

```sidebar.css
body {
  margin: 0;
  padding: 0;
}

.wrapper {
  min-height: 100vh;
  height: 800px;
}
```

```sidebar.js
const navigationItems = [...document.querySelectorAll('[data-item]')];
const secondaryItems = [...document.querySelectorAll('[data-name]')];
const actionItems = [...document.querySelectorAll('[data-action]')];
navigationItems.forEach( item => item.addEventListener('click', event => {
  event.preventDefault();
  const name = item.getAttribute('data-item');
  secondaryItems.forEach( item => {
    item.classList.remove('is-open');
    item.classList.remove('is-hidden');
    if ( item.getAttribute('data-name') === name ) {
      item.classList.add('is-open');
    }
  } );
  if ( item.classList.contains('is-active') ) { return; }
  navigationItems.forEach( item => item.classList.remove('is-active') );
  item.classList.add('is-active');
}));
actionItems.forEach( item => item.addEventListener('click', event => {
  if ( item.getAttribute('data-action') === "back" ) {
    const activeSecondaryItem = secondaryItems
       .find( item => item.classList.contains('is-open') );
    activeSecondaryItem.classList.add('is-hidden');
  }
}));

```

```sidebar.html
<div class="olt-u-backgroundColorGray200 wrapper">
  <aside class="olt-Sidebar">
    <div class="olt-Sidebar-top">
      <div class="olt-Sidebar-mobile-actions">
         <button class="olt-ActionButton olt-ActionButton--default olt-ActionButton-icon-left olt-ActionButton--standalone olt-ActionButton--base olt-Icon-close">
         </button>
      </div>
      <button class="olt-Sidebar-selector olt-Sidebar-selector--filter" data-item="filter">
        <div class="olt-Sidebar-selector--filter-title">Filter</div>
        <div class="olt-Sidebar-selector--filter-filters">
          <div class="olt-Sidebar-selector--filter-filters-filter olt-Icon-office">
            Forschungszentrum
          </div>
          <div class="olt-Sidebar-selector--filter-filters-filter olt-Icon-floorplan">
            2nd Floor
          </div>
        </div>
      </button>
      <hr class="olt-Sidebar-separator" />
      <nav class="olt-Sidebar-navigation">
        <a href="#" class="olt-Sidebar-navigation-item olt-Icon-home" data-item="home">Home</a>
        <a href="#" class="olt-Sidebar-navigation-item olt-Icon-sensor is-active" data-item="devices">Devices</a>
        <nav class="olt-Sidebar-subnavigation">
          <a href="#" class="olt-Sidebar-subnavigation-item is-active">Devices</a>
          <a href="#" class="olt-Sidebar-subnavigation-item">Types</a>
        </nav>
        <a href="#" class="olt-Sidebar-navigation-item olt-Icon-app" data-item="applications">Applications</a>
        <a href="#" class="olt-Sidebar-navigation-item olt-Icon-code" data-item="developer">Developer Area</a>
        <a href="#" class="olt-Sidebar-navigation-item olt-Icon-user-default" data-item="team">Team</a>
      </nav>
    </div>
    <div class="olt-Sidebar-bottom">
      <button class="olt-Sidebar-selector olt-Sidebar-selector--property" data-item="property">
        <div class="olt-Sidebar-selector--property-title">Property Name</div>
        <div class="olt-Sidebar-selector--property-value">Location, Country</div>
      </button>
      <button class="olt-Sidebar-selector olt-Sidebar-selector--tenant" data-item="tenant">
        <div class="olt-Sidebar-selector--tenant-avatar">T</div>
        <div class="olt-Sidebar-selector--tenant-name">Tenant Name</div>
      </button>
    </div>
  </aside>
  <aside class="olt-Sidebar--secondary" data-name="tenant">
    <div class="olt-Sidebar--secondary-mobile-menu">
       <button class="olt-ActionButton olt-ActionButton--default olt-ActionButton-icon-left olt-ActionButton--standalone olt-ActionButton--base olt-Icon-chevron-left" data-action="back">
       </button>
       <button class="olt-ActionButton olt-ActionButton--default olt-ActionButton-icon-left olt-ActionButton--standalone olt-ActionButton--base olt-Icon-close" data-action="close">
       </button>
    </div>
    <div class="olt-Sidebar--secondary-header">
       Tenants
    </div>
  </aside>
  <aside class="olt-Sidebar--secondary" data-name="property">
    <div class="olt-Sidebar--secondary-mobile-menu">
       <button class="olt-ActionButton olt-ActionButton--default olt-ActionButton-icon-left olt-ActionButton--standalone olt-ActionButton--base olt-Icon-chevron-left" data-action="back">
       </button>
       <button class="olt-ActionButton olt-ActionButton--default olt-ActionButton-icon-left olt-ActionButton--standalone olt-ActionButton--base olt-Icon-close" data-action="close">
       </button>
    </div>
    <div class="olt-Sidebar--secondary-header">
       Property
    </div>
  </aside>
</div>
```
