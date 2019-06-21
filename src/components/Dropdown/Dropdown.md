---
name: Dropdown
category: Component
---

## Description

A *Dropdown* is pure CSS implementation of a Dropdown. It occupies the
`olt-Dropdown` class names.

Usually a *Dropdown* contains as it's content a [Menu component](/#menu).

```example.css hidden
body > div.olt-Frame { min-height: 140px; }
```

```example.html
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

## Colors

The *Dropdown* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

```colors.css hidden
body > div.olt-Frame { min-height: 140px; }
```

```colors.html
<div class="olt-u-displayFlex">
  <div class="olt-Dropdown olt-Dropdown--primary olt-u-marginRight2">
    <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
      Primary
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
  <div class="olt-Dropdown olt-Dropdown--secondary olt-u-marginRight2">
    <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
      Secondary
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
  <div class="olt-Dropdown olt-Dropdown--info olt-u-marginRight2">
    <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
      Info
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
  <div class="olt-Dropdown olt-Dropdown--error olt-u-marginRight2">
    <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
      Error
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
  <div class="olt-Dropdown olt-Dropdown--success olt-u-marginRight2">
    <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
      Success
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
  <div class="olt-Dropdown olt-Dropdown--dark olt-u-marginRight2">
    <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
      Dark
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
  <div class="olt-Dropdown olt-Dropdown--light olt-u-marginRight2">
    <div class="olt-Dropdown-label" data-toggle="dropdown" tabindex="0" onclick="">
      Light
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
</div>
```

## Use cases

### Usage inside [Menu component](/#menu)

You can safely use the *Dropdown* component nested inside a 
[Menu component](/#menu)

```inside-menu.css hidden
body > div.olt-Frame { min-height: 250px; }
```

```inside-menu.html
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
