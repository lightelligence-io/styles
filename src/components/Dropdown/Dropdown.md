# Dropdown

```html
<div class="olt-Dropdown olt-Dropdown--dark">
  <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
    Dropdown
    <span tabindex="-1"></span>
  </div>
  <ul class="olt-Dropdown-content olt-Menu olt-Menu--sub">
    <li class="olt-Menu-item">
      <a class="olt-Menu-link" href="#">Item 1</a>
    </li>
    <li class="olt-Menu-item">
      <a class="olt-Menu-link" href="#">Item 2</a>
    </li>
    <li class="olt-Menu-item">
      <a class="olt-Menu-link" href="#">Item 3</a>
    </li>
  </ul>
</div>
```

## Inside Menus

```html
<ul class="olt-Menu olt-Menu--dark">
  <li class="olt-Menu-item active">
    <a class="olt-Menu-link" href="#">Item 1</a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link" href="#">Item 2</a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link" href="#">Item 3</a>
  </li>
  <li class="olt-Menu-item olt-Dropdown">
    <div class="olt-Menu-link olt-Dropdown-label" data-toggle="dropdown" tabindex="1" >
      Account
      <span tabindex="-1"></span>
    </div>
    <div class="olt-Dropdown-content">
      <ul class="olt-Menu olt-Menu--sub">
        <li class="olt-Menu-item">
          <a class="olt-Menu-link" href="#">Item 1</a>
        </li>
        <li class="olt-Menu-item">
          <a class="olt-Menu-link" href="#">Item 2</a>
        </li>
        <li class="olt-Menu-item">
          <a class="olt-Menu-link" href="#">Item 3</a>
        </li>
      </ul>
    </div>
  </li>
</ul>
```
