---
name: V2Dropdown
category: Controls
---

## Description

You can use the *Dropdown* component to show a dropdown that opens popup and displays a list of values to choose. This component occupies `olt-Dropdown*` class names.

```example.html
<div class="olt-Card">
  <input data-toggle="dropdown" id="dropdown-toggle-1" type="checkbox">
  <label class="olt-V2Label olt-V2Label--floating" for="dropdown-toggle-1">
    <div class="olt-V2Dropdown olt-V2Dropdown">
      <div class="olt-V2Label-text">Select an option</div>
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

## Dark Mode

The dropdown supports dark mode by putting it inside a *Card* element with *olt-Card--dark* and *olt-Theme-dark* classes.

```darkexample.html
<div class="olt-Card olt-Card--dark olt-Theme-dark">
  <input data-toggle="dropdown" id="dropdown-toggle-2" type="checkbox">
  <label class="olt-V2Label olt-V2Label--floating" for="dropdown-toggle-2">
    <div class="olt-V2Dropdown">
      <div class="olt-V2Label-text">Select an option</div>
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


