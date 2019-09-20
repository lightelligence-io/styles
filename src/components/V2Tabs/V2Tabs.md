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

```V2tabs.css hidden
body > div.olt-Frame { min-height: 250px; }
```

```V2tabs.html
<div class="olt-V2Tabs">
  <input type="radio" name="V2tabs" id="V2tabone" checked="checked"/>
  <label for="V2tabone" class="olt-V2Tabs-header">Devices</label>
  <div class="olt-V2Tabs-content">
    <h4 class="olt-Headline olt-Headline--4">Tab One Content</h4>
    <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicinsg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

  <input type="radio" name="V2tabs" id="V2tabtwo"/>
  <label for="V2tabtwo" class="olt-V2Tabs-header">Profile</label>
  <div class="olt-V2Tabs-content">
    <h4 class="olt-Headline olt-Headline--4">Tab Two Content</h4>
    <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

  <input type="radio" name="V2tabs" id="V2tabthree"/>
  <label for="V2tabthree" class="olt-V2Tabs-header">Settings</label>
  <div class="olt-V2Tabs-content">
    <h4 class="olt-Headline olt-Headline--4">Tab Three Content</h4>
    <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</div>
```

## V2Tabs as Navigation

There is also another *V2Tabs* usecase, when one can use it as a simple
navigation and control the active tab via `is-active` state class name.

```navigation.html
<div class="olt-V2Tabs olt-V2Tabs--navigation">
  <a class="olt-V2Tabs-header is-active">Link One</a>
  <a class="olt-V2Tabs-header">Link Two</a>
  <a class="olt-V2Tabs-header">Link Three</a>
</div>
```
