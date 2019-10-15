---
name: ActionButton
category: Component
---


## Description

V2-Buttons can be used with `<button>`, `<a>`, and `<input type="button">`
elements and occupy the `olt-ActionButton*` class names.

The Action Button consists of three three states. The state of the Action Button depends on the cursor's distance to the click-area:

- Default: The label is hidden and only the icon is displayed
- Approximation: If the cursor is near the button the icon's base and the label appear
- Hover: When the cursor directly approaches the click-area the base will expand and include the label. Also the label and the icon will come closer.

On Tablet and Mobile Devices the action button is always displayed as the "Standalone with Base" variant to increase and show the click-area. If the standalone version cannot satisfactory represent the action it can be assisted with the label ("Fixed Label") depending on the context

```test.html
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">icon left</div>
</button>
<button class="olt-ActionButton olt-ActionButton--proximity olt-ActionButton-icon-left olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">icon left</div>
</button>
<button class="olt-ActionButton olt-ActionButton--proximity olt-ActionButton--primary olt-ActionButton-icon-right olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">icon right</div>
</button>
```
```t.html
<div class="olt-u-textAlignRight olt-ActionButton--proximity-area" style="padding: 50px">
<button class="olt-ActionButton olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-right olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">icon right</div>
</button>
</div>
```

```example.html
<button class="olt-ActionButton">
  <div class="olt-ActionButton-action-label">Plain</div>
</button>
<button class="olt-ActionButton olt-ActionButton--default">
  <div class="olt-ActionButton-action-label">Default</div>
</button>
<button class="olt-ActionButton olt-ActionButton--primary">
  <div class="olt-ActionButton-action-label">Primary</div>
</button>
<button class="olt-ActionButton olt-ActionButton--confirmative">
  <div class="olt-ActionButton-action-label">Confirmative</div>
</button>
<button class="olt-ActionButton olt-ActionButton--destructive">
  <div class="olt-ActionButton-action-label">Destructive</div>
</button>
<button class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">icon left</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">icon left</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-right olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">icon right</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default olt-ActionButton--fixed">
  <div class="olt-ActionButton-action-label">fixed with icon left</div>
</button>
<button class="olt-ActionButton olt-ActionButton--fixed">
  <div class="olt-ActionButton-action-label">fixed no icon</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default olt-ActionButton--standalone">
  <div class="olt-ActionButton-action-label">standalone with icon left</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default olt-ActionButton--standalone">
</button>
<button class="olt-ActionButton olt-ActionButton--standalone">
  <div class="olt-ActionButton-action-label">standalone no icon</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default olt-ActionButton--base">
  <div class="olt-ActionButton-action-label">base with icon left</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default olt-ActionButton--base">
</button>
<button class="olt-ActionButton olt-ActionButton--base">
  <div class="olt-ActionButton-action-label">base no icon</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default olt-ActionButton--proximity">
  <div class="olt-ActionButton-action-label">proximity</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default olt-ActionButton--proximity">
</button>
<button class="olt-ActionButton olt-ActionButton--proximity">
  <div class="olt-ActionButton-action-label">proximity no icon</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon olt-Icon-action-add-default olt-ActionButton--proximity">
</button>

```

```anotherexample.html
<button class="olt-ActionButton">
  <div class="olt-ActionButton-action-label">Edit</div>
  <i class="olt-ActionButton-action-icon"></i>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">Edit</div>
</button>
<button class="olt-ActionButton olt-ActionButton-icon-right olt-Icon-action-add-default">
  <div class="olt-ActionButton-action-label">Edit</div>
</button>
<button class="olt-ActionButton olt-ActionButton--default">
  <div class="olt-ActionButton-action-label">Edit</div>
  <i class="olt-ActionButton-action-icon"></i>
</button>
<button class="olt-ActionButton olt-ActionButton--confirmative">
  <div class="olt-ActionButton-action-label">Edit</div>
  <i class="olt-ActionButton-action-icon"></i>
</button>
<a class="olt-ActionButton olt-ActionButton--destructive">
  <div class="olt-ActionButton-action-label">Edit</div>
  <i class="olt-ActionButton-action-icon"></i>
</a>
<input class="olt-ActionButton olt-ActionButton--destructive">
  <div class="olt-ActionButton-action-label">Edit</div>
  <i class="olt-ActionButton-action-icon"></i>
</input>
```

ActionButton--default
ActionButton--primary
ActionButton--confirmative
ActionButton--destructive

ActionButton-icon-right
ActionButton-icon-left

ActionButton--fixed

ActionButton--standalone

ActionButton--proximity
ActionButton--base