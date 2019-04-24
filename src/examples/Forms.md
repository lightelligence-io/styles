---
name: Forms
category: Examples
---

# Forms

Here is an example how to layout a common form with a grid, textfield, formfield, select and checkbox elements.

```forms.html
<div class="olt-Grid">
  <div
    class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-6"
  >
    <div class="olt-FormField">
      <label for="my-select-1" class="olt-Label">Select</label>
      <select id="my-select-1" class="olt-Select">
        <option value="LoremIpsum">Lorem Ipsum</option>
        <option value="DolorSitAmet">Dolor Sit Amet</option>
        <option value="EtVersus">Et Versus</option>
      </select>
      <div class="olt-FormField-footer">
        <div class="olt-FormField-message olt-u-colorError">Here we go</div>
      </div>
    </div>
  </div>
  <div
    class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-6"
  >
    <div class="olt-TextField">
      <label for="my-input-1" class="olt-Label olt-TextField-label"
        >Label</label
      >
      <input
        id="my-input-1"
        class="olt-Input olt-TextField-input is-error"
        placeholder="Enter your life..."
      />
      <div class="olt-TextField-footer">
        <div class="olt-TextField-message olt-u-colorError">
          Something went wrong
        </div>
        <div class="olt-TextField-info">max. 200 Chars</div>
      </div>
    </div>
  </div>
  <div
    class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-12 olt-Grid-item--lg-12"
  >
    <div class="olt-Checkbox">
      <input id="my-checkbox-0" type="checkbox" class="olt-Checkbox-input" />
      <label for="my-checkbox-0" class="olt-Label olt-Checkbox-label"
        >I Accept our terms of use</label
      >
    </div>
    <div class="olt-Checkbox">
      <input id="my-checkbox-1" type="checkbox" class="olt-Checkbox-input" />
      <label for="my-checkbox-1" class="olt-Label olt-Checkbox-label"
        >I also accept our privacy policy</label
      >
    </div>
  </div>
  <div
    class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-12 olt-Grid-item--lg-12"
  >
    <input type="button" class="olt-Button" value="Submit" />
  </div>
</div>
```
