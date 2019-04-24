---
name: Navbar
category: Component
---

# Navbar




```1.html
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
          <i class="olt-Icon olt-u-displayNone olt-u-xl-displayInline" data-icon="person"></i>
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

<script>
window.tasks = window.tasks || [];
window.tasks.push(function () { 
  window.stylemark.convertToExternalOnlyExample("navbar-1");
});
</script>