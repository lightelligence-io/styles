---
name: V2Tabs
category: Component
---

## Description

*V2Tabs* are similar to the [Stepper](/#stepper). It renders a tab-like navigation
which has content for each tab.
 
Each tab link is a
`<input type="radio">` under the hood, so it can work without JavaScript. The 
*V2Tabs* occupies `olt-V2Tabs*` class names and can contain :

- `olt-V2Tabs-header` - The "tab" button
- `olt-V2Tabs-content` - The content of the tab.

The tabs's content is only visible when the user has clicked on the tab itself.

The *V2Tabs* are transformed to row toggled sections, when a small screen is
being used to render it. You can test the functionality by reducing the screen 
width of this page and take a look at the example below.

## V2Tabs as Navigation

There is also another *V2Tabs* usecase, when one can use it as a simple
navigation and control the active tab via `is-active` state class name.

```newnavigation.html
<div class="olt-V2Tabs">
  <a class="olt-V2Tabs-header is-active">Link One</a>
  <a class="olt-V2Tabs-header">Link Two</a>
  <a class="olt-V2Tabs-header">Link Three</a>
  <a class="olt-V2Tabs-header">Link Four</a>
  <a class="olt-V2Tabs-header">Link Five</a>
</div>
```
