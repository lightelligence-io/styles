---
name: Filter
category: Component
---

## Description

You can use the *Filter* component to show a button that opens a filter popup and displays additional attributes. This component occupies `olt-Filter*` class names.

The card can be a `button` or an `a` element.


```basic.html
<div class="olt-Card">
  <input data-toggle="dropdown" id="dropdown-toggle-1" type="checkbox">
  <label class="olt-V2Label olt-V2Label--floating" for="dropdown-toggle-1">
    <div class="olt-V2Dropdown">
      <div class="olt-V2Label-text">Filter</div>
      <div class="olt-Filter-bubble">99+</div>
      <div class="olt-V2Dropdown-content">
        <ul class="olt-InputList">
          <li class="olt-InputList-item">
            <a class="olt-InputList-link">Lorem Ipsum</a>
          </li>
          <li class="olt-InputList-item">
            <a class="olt-InputList-link">Dolor Sit Amet</a>
          </li>
          <li class="olt-InputList-item">
            <a class="olt-InputList-link">Et Versus</a>
          </li>
          <li class="olt-InputList-item">
            <a class="olt-InputList-link">Dolor Sit Amet</a>
          </li>
          <li class="olt-InputList-item">
            <a class="olt-InputList-link">Et Versus</a>
          </li>
          <li class="olt-InputList-item">
            <a class="olt-InputList-link">Lorem Ipsum</a>
          </li>
        </ul>
      </div>
    </div>
  </label>
</div>
```

```checkboxfilter.html
<div class="olt-Card">
  <input data-toggle="dropdown" id="dropdown-toggle-1" type="checkbox">
  <label class="olt-V2Label olt-V2Label--floating" for="dropdown-toggle-1">
    <div class="olt-V2Dropdown">
      <div class="olt-V2Label-text">Filter</div>
      <div class="olt-Filter-bubble">99+</div>
      <div class="olt-V2Dropdown-content">
        <div class="olt-u-paddingLeft3 olt-u-paddingRight3">
          <label class="olt-V2Checkbox">
            <input type="checkbox" checked />
            <span class="olt-V2Checkbox-button"></span>
            <span class="olt-V2Checkbox-label">Option 1</span>
          </label>
          <label class="olt-V2Checkbox">
            <input type="checkbox" checked />
            <span class="olt-V2Checkbox-button"></span>
            <span class="olt-V2Checkbox-label">Option 2</span>
          </label>
          <label class="olt-V2Checkbox">
            <input type="checkbox" checked />
            <span class="olt-V2Checkbox-button"></span>
            <span class="olt-V2Checkbox-label">Option 4</span>
          </label>
        </div>
      </div>
    </div>
  </label>
</div>
```
