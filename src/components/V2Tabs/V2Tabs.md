---
name: V2Tabs
category: Component
---

## Description

*V2Tabs* render a tab-like navigation, with links that can point to the tab content.
 
- `olt-V2Tabs` - The tab bar
- `olt-V2Tabs-link` - The tab link

The *V2Tabs* are centered on large screens and right aligned on small screens.
The active tab is decorated via `is-active` state class name.

```newnavigation.html
<div class="olt-V2Tabs">
  <a class="olt-V2Tabs-link is-active">Link One</a>
  <a class="olt-V2Tabs-link">Link Two</a>
  <a class="olt-V2Tabs-link">Link Three</a>
  <a class="olt-V2Tabs-link">Link Four</a>
  <a class="olt-V2Tabs-link">Link Five</a>
</div>
```

To add a gradient to show that there are more elements available, use `has-gradient-left` and `has-gradient-right` state class name. The gradient overlay on either side is used to indicate that more content is available outside of the visible area.

```newnavigationgradient.html
<div class="olt-V2Tabs">
  <a class="olt-V2Tabs-link is-active">Link One</a>
  <a class="olt-V2Tabs-link">Link Two</a>
  <a class="olt-V2Tabs-link">Link Three</a>
  <a class="olt-V2Tabs-link">Link Four</a>
  <a class="olt-V2Tabs-link">Link Five</a>
</div>
```

```newnavigationgradient.js
const tabs = document.querySelector(".olt-V2Tabs")
var overflows = tabs.scrollWidth>tabs.clientWidth;
if (overflows) tabs.classList.add("has-gradient-right");

tabs.addEventListener('scroll', () => {
  var hasScrolledLeft = tabs.scrollLeft > 0;
  if (hasScrolledLeft) {
    tabs.classList.add("has-gradient-left");
  } else {
    tabs.classList.remove("has-gradient-left");
  }

  var canScrollRight = tabs.scrollWidth-tabs.scrollLeft-tabs.clientWidth > 0;        
  if (canScrollRight) {
    tabs.classList.add("has-gradient-right");
  } else {
    tabs.classList.remove("has-gradient-right");
  }
});
```