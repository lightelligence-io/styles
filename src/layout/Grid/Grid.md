---
name: Grid
category: Layout
---

# Grid

Grid container.

```1.html
<div class="olt-Grid">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 1
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 2
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 3
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 4
      </div>
    </div>
  </div>
</div>
```

The grid applies the gutter vertically and horizontally by default.

```2.html
<div class="olt-Grid">
  <div class="olt-Grid-item olt-Grid-item--6">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 1
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--6">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 2
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--6">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 3
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--6">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 4
      </div>
    </div>
  </div>
</div>
```

With `olt-Grid-item--auto` your columns get a flexible width.

```auto.html
<div class="olt-Grid">
  <div class="olt-Grid-item olt-Grid-item--auto">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 1
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--auto">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 2 which is wider than 1
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--auto">
    <div class="olt-Card">
      <div class="olt-Card-content">
        C3
      </div>
    </div>
  </div>
</div>
```

The item modifier has variants for every breakpoint to make the grid responsive. Usage: `olt-Grid-item--[xs|sm|lg|xl]-{1-12}`.

```item-modifier.html
<div class="olt-Grid">
  <div class="olt-Grid-item olt-Grid-item--sm-12 olt-Grid-item--md-6 olt-Grid-item--lg-3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 1
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--sm-12 olt-Grid-item--md-6 olt-Grid-item--lg-3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 2
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--sm-12 olt-Grid-item--md-6 olt-Grid-item--lg-3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 3
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--sm-12 olt-Grid-item--md-6 olt-Grid-item--lg-3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 4
      </div>
    </div>
  </div>
</div>
```

# Grid Offset

Specify grid offset sizes per breakpoint.

`olt-Grid-item--[xs|sm|lg|xl]-offset{1-12}`

```offset.html
<div class="olt-Grid">
  <div class="olt-Grid-item olt-Grid-item--sm-offset3 olt-Grid-item--sm-6 olt-Grid-item--md-offset3 olt-Grid-item--md-6 olt-Grid-item--lg-offset4 olt-Grid-item--lg-4">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 4
      </div>
    </div>
  </div>
</div>
```
