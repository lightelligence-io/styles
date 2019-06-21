---
name: Menu
category: Component
---

## Description

The *Menu* component is used to render a horizontal or vertical Menu element.
This component occupies `olt-Menu*` class names and can be used with `<ul>` 
element, with nested `<li>`s.

A typical menu consists of a `ul`, `li` and `a` elements nested inside :

```html
<ul class="olt-Menu">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">Link</a>
  </li>
</ul>
```

## Colors 

The *Menu* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

```colors.css hidden
body > div.olt-Frame .olt-Menu { margin-right: 10px; }
```

```colors.html
<div class="olt-u-displayFlex olt-u-margin3">
<ul class="olt-Menu olt-Menu--light">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
<ul class="olt-Menu olt-Menu--dark">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
</div>
<div class="olt-u-displayFlex olt-u-margin3">
<ul class="olt-Menu olt-Menu--primary">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
<ul class="olt-Menu olt-Menu--info">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
<ul class="olt-Menu olt-Menu--success">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
<ul class="olt-Menu olt-Menu--error">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
</div>
```

## Variations

### Horizontal Menu

The *Menu* can also be rendered as horizontal menu :

```horizontal.html
<ul class="olt-Menu olt-Menu--horizontal">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
<br />
<ul class="olt-Menu olt-Menu--dark olt-Menu--horizontal">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link is-active">
      Active Menu Item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Another Menu Item
    </a>
  </li>
</ul>
```

### Submenus

Nested menus get smaller font-size by a modifier

```submenu.html
<div class="olt-u-displayFlex olt-u-margin3">
<ul class="olt-Menu">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Light menu item 
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Light menu item with submenu
    </a>
    <ul class="olt-Menu olt-Menu--sub">
      <li class="olt-Menu-item">
        <a class="olt-Menu-link is-active">
          Active submenu item
        </a>
      </li>
      <li class="olt-Menu-item">
        <a class="olt-Menu-link">
          Submenu item
        </a>
      </li>
    </ul>
  </li>
</ul>
</div>
<div class="olt-u-displayFlex olt-u-margin3">
<ul class="olt-Menu olt-Menu--dark">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Dark menu item
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Dark menu item with submenu
    </a>
    <ul class="olt-Menu olt-Menu--sub olt-Menu--dark">
      <li class="olt-Menu-item">
        <a class="olt-Menu-link is-active">
          Active submenu item
        </a>
      </li>
      <li class="olt-Menu-item">
        <a class="olt-Menu-link">
          Submenu item
        </a>
      </li>
    </ul>
  </li>
</ul>
</div>
```

### Menu with a Dropdown

A menu can also include a [Dropdown](/#dropdown)

```dropdown.html
<div class="olt-u-displayFlex olt-u-margin3">
<ul class="olt-Menu olt-Menu--dark">
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu item 
    </a>
  </li>
  <li class="olt-Menu-item olt-Dropdown">
    <div class="olt-Menu-link olt-Dropdown-label" data-toggle="dropdown" tabindex="1" >
      Menu item with dropdown
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
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu item 
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu item 
    </a>
  </li>
  <li class="olt-Menu-item">
    <a class="olt-Menu-link">
      Menu item 
    </a>
  </li>
</ul>
</div>
```
