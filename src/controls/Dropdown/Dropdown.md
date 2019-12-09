---
name: Dropdown
category: Controls
---

## Description

You can use the *Dropdown* component to show a dropdown that opens popup and displays a list of values to choose. This component occupies `olt-Dropdown*` class names.

In contrast to the select, the dropdown displays a content div element instead of the native `select` element.

```example.html
<div class="olt-Card">
  <input data-toggle="dropdown" id="dropdown-toggle-1" type="checkbox">
  <label class="olt-Label olt-Label--floating" for="dropdown-toggle-1">
    <div class="olt-Dropdown">
      <div class="olt-Label-text">Select an option</div>
      <div class="olt-Dropdown-content">
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

## Dark Mode

The dropdown supports dark mode by putting it inside a *Card* element with `olt-Card--dark` and `olt-Theme-dark` classes.

```darkexample.html
<div class="olt-Card olt-Card--dark olt-Theme-dark">
  <input data-toggle="dropdown" id="dropdown-toggle-2" type="checkbox">
  <label class="olt-Label olt-Label--floating" for="dropdown-toggle-2">
    <div class="olt-Dropdown">
      <div class="olt-Label-text">Select an option</div>
      <div class="olt-Dropdown-content">
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

## Selected

The `olt-Dropdown-selected-content` and the `--selected` modifier are used when an element is selected and displayed as content in the dropdown.

```exampleselected.html
<div class="olt-Card">
  <input data-toggle="dropdown" id="dropdown-toggle-1" type="checkbox">
  <label class="olt-Label olt-Label--floating" for="dropdown-toggle-1">
    <div class="olt-Dropdown olt-Dropdown--selected">
      <div class="olt-Label-text">Select an option</div>
      <div class="olt-Dropdown-selected-content">Lorem Ipsum</div>
      <div class="olt-Dropdown-content">
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
