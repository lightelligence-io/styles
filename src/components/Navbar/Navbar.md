---
name: Navbar
category: Component
---

## Description

*Navbar* is used to render the main navigation of an application. It usually
includes [Menu Component](/#menu) as well as [Dropdowns](/#dropdown).

The *Navbar* has a breakpoint that transforms the navigation to a vertical
sidebar. You can test the functionality by reducing the screen width of this
page and take a look at the example below.

```navbar.css hidden
body > div.olt-Frame { min-height: 400px; }
```

```navbar.html
<nav role="navigation" class="olt-Navbar olt-Navbar--dark">
  <input data-toggle="navbar" id="navbar-toggle" type="checkbox"/>
  <label class="olt-Navbar-toggle" for="navbar-toggle"></label>
  <a href="/" class="olt-Navbar-title"></a>
  <div class="olt-Navbar-content">
    <a href="/" class="olt-Navbar-title"></a>
    <ul class="olt-Navbar-menu olt-Menu">
      <li class="olt-Menu-item active">
        <a class="olt-Menu-link is-active" href="#">Item 1</a>
      </li>
      <li class="olt-Menu-item">
        <a class="olt-Menu-link" href="#">Item 2</a>
      </li>
      <li class="olt-Menu-item">
        <a class="olt-Menu-link" href="#">Item 3</a>
      </li>
    </ul>
    <ul class="olt-Navbar-menu olt-Menu">
      <li class="olt-Dropdown">
        <button class="olt-Dropdown-label" data-toggle="dropdown" tabindex="1" >
          <i class="olt-Icon olt-u-displayNone olt-u-xl-displayInline olt-Icon-user-default"></i>
          <span class="olt-u-xl-displayNone">Account</span>
          <span tabindex="-1"></span>
        </button>
        <div class="olt-Dropdown-content">
          <ul class="olt-Navbar-menu olt-Menu olt-Menu--sub">
            <li class="olt-Menu-item">
              <span class="olt-Menu-link">Item 1</span>
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
    </li>
  </ul>
</nav>
```
