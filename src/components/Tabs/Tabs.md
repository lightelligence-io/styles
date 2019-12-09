---
name: Tabs
category: Component
---

## Description

*Tabs* render a tab-like navigation, with links that can point to the tab content.

- `olt-Tabs` - The tab bar
- `olt-Tabs-link` - The tab link

The *Tabs* are centered on large screens and right aligned on small screens.
The active tab is decorated via `is-active` state class name.

```newnavigation.html
<div class="olt-Tabs">
  <a class="olt-Tabs-link is-active">Link One</a>
  <a class="olt-Tabs-link">Link Two</a>
  <a class="olt-Tabs-link">Link Three</a>
  <a class="olt-Tabs-link">Link Four</a>
  <a class="olt-Tabs-link">Link Five</a>
</div>
```

Use the --forceScroll modifier to ensure the menu does not overflow, but scrolls whenever it is too large for the screen.

```newnavigationforce.html
<div class="olt-Tabs--forceScroll">
  <a class="olt-Tabs-link is-active">Link One</a>
  <a class="olt-Tabs-link">Link Two</a>
  <a class="olt-Tabs-link">Link Three</a>
  <a class="olt-Tabs-link">Link Four</a>
  <a class="olt-Tabs-link">Link Five</a>
  <a class="olt-Tabs-link">Link Six</a>
  <a class="olt-Tabs-link">Link Seven</a>
  <a class="olt-Tabs-link">Link Eight</a>
  <a class="olt-Tabs-link">Link Nine</a>
  <a class="olt-Tabs-link">Link Ten</a>
</div>
```

To add a gradient to show that there are more elements available, use `has-gradient-left` and `has-gradient-right` state class name. The gradient overlay on either side is used to indicate that more content is available outside of the visible area. note: you need a relatively positions container around the navigation for this.

```newnavigationgradient.html
<div style="position: relative">
  <div class="olt-Tabs">
    <a class="olt-Tabs-link is-active">Link One</a>
    <a class="olt-Tabs-link">Link Two</a>
    <a class="olt-Tabs-link">Link Three</a>
    <a class="olt-Tabs-link">Link Four</a>
    <a class="olt-Tabs-link">Link Five</a>
  </div>
</div>
```

```newnavigationgradient.js
const tabs = document.querySelector(".olt-Tabs")
var overflows = tabs.scrollWidth>tabs.clientWidth;
if (overflows) tabs.classList.add("has-gradient-right");

tabs.addEventListener('scroll', () => {
  var hasScrolledLeft = tabs.scrollLeft > 0;
  tabs.classList.toggle("has-gradient-left", hasScrolledLeft);
  var canScrollRight = tabs.scrollWidth-tabs.scrollLeft-tabs.clientWidth > 0;
  tabs.classList.toggle("has-gradient-right", canScrollRight);
});
```
