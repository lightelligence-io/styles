---
name: Grid
category: Layout
---

## Description

*Grid* is our main layout component, which can be used to create responsive
grid layouts of your application. It occupies `olt-Grid*` class names.

*Grid* implements typical 12-columns based grid by using
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

*Grid* is used with typically a `div.olt-Grid` having `div.olt-Grid-item`
nested inside.

```demo.css hidden
body {
  margin:0;
}
h4.olt-u-H200 {
  margin-top: 20px;
  margin-bottom: 20px;
}
```

```demo.html
<div class="olt-Container">
<h4 class="olt-u-H200">3 column-width grid</h4>
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
  <h4 class="olt-u-H200">6 column-width grid</h4>
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
</div>
<br />
```

> Note: The grid applies the gutter vertically and horizontally by default.

## Modifiers

### Fixed size columns

You can specify the column size of each item via `-item--` modifier. The
`olt-Grid-item` elements must add up to *12* and can be different for each
column.

```size.html
<div class="olt-Grid">
    <div class="olt-Grid-item olt-Grid-item--2">
      <div class="olt-Card">
        <div class="olt-Card-content">
          <pre>item--2</pre>
        </div>
      </div>
    </div>
    <div class="olt-Grid-item olt-Grid-item--3">
      <div class="olt-Card">
        <div class="olt-Card-content">
          <pre>item--3</pre>
        </div>
      </div>
    </div>
    <div class="olt-Grid-item olt-Grid-item--4">
      <div class="olt-Card">
        <div class="olt-Card-content">
          <pre>item--4</pre>
        </div>
      </div>
    </div>
    <div class="olt-Grid-item olt-Grid-item--3">
      <div class="olt-Card">
        <div class="olt-Card-content">
          <pre>item--3</pre>
        </div>
      </div>
    </div>
</div>
```

### Auto size columns

With `olt-Grid-item--auto` modifier, your columns get a flexible width, based
on their content.

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
        Column 3
      </div>
    </div>
  </div>
</div>
```

### Offsets

You can use `olt-Grid-item--offset` modifier to specify if a column should take
pre-defined space before being rendered.

```offset.html
<div class="olt-Grid">
  <div class="olt-Grid-item olt-Grid-item--3 olt-Grid-item--offset3">
    <div class="olt-Card">
      <div class="olt-Card-content">
        This is column 1 with offset 3
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
</div>
```

### Responsive modifiers

All modifiers of the *Grid* item can be used per breakpoint in order to create
different visual representation on different screen sizes. The
[prefixes](/#screen) are the very same used for our media queries :

|       Name | Extra small |  Small | Medium |  Large | Extra large |
|-----------:|:-----------:|:------:|:------:|:------:|:-----------:|
| Breakpoint |    <576px   | ≥576px | ≥768px | ≥992px |   ≥1200px   |
|     Prefix |      xs     |   sm   |   md   |   lg   |      xl     |

Here is a table of how to use the *Grid*'s modifiers with the prefixes above :

| Prefix | Column fixed size     | Column auto size         | Offset                      |
|-------:|:---------------------:|:------------------------:|:---------------------------:|
|     xs | `olt-Grid-item--xs-1` | `olt-Grid-item--xs-auto` | `olt-Grid-item--xs-offset1` |
|     sm | `olt-Grid-item--sm-1` | `olt-Grid-item--sm-auto` | `olt-Grid-item--sm-offset1` |
|     md | `olt-Grid-item--md-1` | `olt-Grid-item--md-auto` | `olt-Grid-item--md-offset1` |
|     lg | `olt-Grid-item--lg-1` | `olt-Grid-item--lg-auto` | `olt-Grid-item--lg-offset1` |
|     xl | `olt-Grid-item--xl-1` | `olt-Grid-item--xl-auto` | `olt-Grid-item--xl-offset1` |

Try checking the example below in another page and change the screen size
accordingly to get a feeling of how the grid works.

> Note: You can open the example in an external tab by clicking the *Example*
> button on top left.

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

