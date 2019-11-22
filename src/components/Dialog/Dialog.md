---
name: Dialog
category: Component
---

## Description

*Dialog* occupies `olt-Dialog*` class names. It provides a modal dialog to show any kind of content and is also utilized for dynamic lists and steppers.

The dialog changes to full screen on mobile and tablet devices.

<div class="olt-Card olt-u-padding24">
  <div class="olt-u-marginAuto">
    <input data-toggle="dialog" id="demo-1" type="checkbox">
    <label class="olt-Button" for="dialog-demo-1">Open</label>
    <div class="olt-Dialog">
      <div class="olt-Dialog-window">
        <label class="olt-Dialog-close" for="dialog-demo-1"></label>
        <div class="olt-Dialog-title">Dialog Title</div>
        <div class="olt-Dialog-description">This is the dialog description.</div>
        <div class="olt-Dialog-content">
          <div class="olt-Card">
            <div class="olt-Card-header">
              <h4 class="olt-Card-title">
                A title of a card
              </h4>
              <p class="olt-Card-description">
                Lorem ipsum dolor
              </p>
            </div>
          </div>
        </div>
        <div class="olt-Dialog-footer">
          <label class="olt-Button" for="dialog-demo-1">Finish</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="dialog" id="dialog-toggle-1" type="checkbox">
<label class="olt-Button" for="dialog-toggle-1">Open</label>
<div class="olt-Dialog">
  <div class="olt-Dialog-window">
    <label class="olt-Dialog-close" for="dialog-toggle-1"></label>
    <div class="olt-Dialog-title">Dialog Title</div>
    <div class="olt-Dialog-description">This is the dialog description.</div>
    <div class="olt-Dialog-content">
      <div class="olt-Card">
        <div class="olt-Card-header">
          <h4 class="olt-Card-title">
            A title of a card
          </h4>
          <p class="olt-Card-description">
            Lorem ipsum dolor
          </p>
        </div>
      </div>
      <div class="olt-Dialog-footer">
        <label class="olt-Button" for="dialog-toggle-1">Finish</label>
      </div>
    </div>
  </div>
</div>
```
