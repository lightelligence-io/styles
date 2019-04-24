---
name: Checkbox
category: Controls
---

# Checkbox

Checkbox is used with `<div>` elements that contain `<input type="checkbox"/>`.


```checkbox.html
<div class="olt-Checkbox">
  <input id="checkbox" type="checkbox" class="olt-Checkbox-input"/>
  <label for="checkbox" class="olt-Label olt-Checkbox-label">Checkbox</label>
</div>
<div class="olt-Checkbox">
  <input id="checked-checkbox" type="checkbox" class="olt-Checkbox-input" checked/>
  <label for="checked-checkbox" class="olt-Label olt-Checkbox-label">Checked checkbox</label>
</div>
<div class="olt-Checkbox">
  <input disabled id="disabled-checkbox" type="checkbox" class="olt-Checkbox-input"/>
  <label for="disabled-checkbox" class="olt-Label olt-Checkbox-label">Disabled checkbox</label>
</div>
<div class="olt-Checkbox">
  <input disabled id="disabled-checked-checkbox" type="checkbox" class="olt-Checkbox-input" checked/>
  <label for="disabled-checked-checkbox" class="olt-Label olt-Checkbox-label">Disabled checked checkbox</label>
</div>
```

Indeterminate Checkbox

To set the indeterminate state of a checkbox you can either use the `olt-Checkbox--indeterminate` class or set the `:indeterminate` pseudo-class active via Javascript. Note: Activating the pseudo-class cannot be done with HTML.

```html
<div class="olt-Checkbox">
  <input id="indeterminate-checkbox" type="checkbox" class="olt-Checkbox-input"/>
  <label for="indeterminate-checkbox" class="olt-Label olt-Checkbox-label olt-Checkbox--indeterminate">Indeterminate Checkbox</label>
</div>
<div class="olt-Checkbox">
  <input id="indeterminate-checked-checkbox" type="checkbox" class="olt-Checkbox-input" checked/>
  <label for="indeterminate-checked-checkbox" class="olt-Label olt-Checkbox-label olt-Checkbox--indeterminate">Indeterminate checked checkbox</label>
</div>
<div class="olt-Checkbox">
  <input disabled id="indeterminate-disabled-checkbox" type="checkbox" class="olt-Checkbox-input"/>
  <label for="indeterminate-disabled-checkbox" class="olt-Label olt-Checkbox-label olt-Checkbox--indeterminate">Disabled indeterminate checkbox</label>
</div>
<div class="olt-Checkbox">
  <input disabled id="indeterminate-disabled-checked-checkbox" type="checkbox" class="olt-Checkbox-input" checked/>
  <label for="indeterminate-disabled-checked-checkbox" class="olt-Label olt-Checkbox-label olt-Checkbox--indeterminate">Disabled indeterminate checked checkbox</label>
</div>
```
