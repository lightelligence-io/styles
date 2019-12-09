---
name: Filter
category: Component
---

## Description

You can use the *Filter* component to show a dropdown that opens a filter popup and displays additional attributes. This component occupies `olt-Filter*` class names.


```basic.html
<div class="olt-Card">
  <input data-toggle="dropdown" id="dropdown-toggle-1" type="checkbox">
  <label class="olt-Label olt-Label--floating" for="dropdown-toggle-1">
    <div class="olt-Filter">
      <div class="olt-Label-text">Filter</div>
      <div class="olt-Filter-bubble">99+</div>
      <div class="olt-Filter-content">
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

You can add any element inside the filters dropdown. The `--active` modifier identifies an active filter. The `olt-Filter-bubble` class is used to place a bubble inside the filter intended to show the number of elements being displayed after the filter is applied.

```checkboxfilter.html
<div class="olt-Card">
  <input data-toggle="dropdown" id="dropdown-toggle-1" type="checkbox">
  <label class="olt-Label olt-Label--floating" for="dropdown-toggle-1">
    <div class="olt-Filter olt-Filter--active">
      <div class="olt-Label-text">Filter</div>
      <div class="olt-Filter-bubble">99+</div>
      <div class="olt-Filter-content">
        <div class="olt-u-padding16">
          <label class="olt-Checkbox">
            <input type="checkbox" checked />
            <span class="olt-Checkbox-button"></span>
            <span class="olt-Checkbox-label">Option 1</span>
          </label>
          <label class="olt-Checkbox">
            <input type="checkbox" checked />
            <span class="olt-Checkbox-button"></span>
            <span class="olt-Checkbox-label">Option 2</span>
          </label>
          <label class="olt-Checkbox">
            <input type="checkbox" checked />
            <span class="olt-Checkbox-button"></span>
            <span class="olt-Checkbox-label">Option 4</span>
          </label>
        </div>
      </div>
    </div>
  </label>
</div>
```
