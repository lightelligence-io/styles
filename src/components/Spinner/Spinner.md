---
name: Spinner
category: Component
---

## Description

A loading spinner for your pending states. The *Spinner* occupies `olt-Spinner*`
class names and it scales by font-size.

```spinner.html
<i class="olt-Spinner"></i>
```

## Colors

The *Spinner* can be rendered with
[any of our colors](/#color) :

```colors.css hidden
body > div.olt-Frame { display: flex; }
.olt-Card + .olt-Card { margin-left: 10px; }
```

```colors.html
<div class="olt-Card">
  <div class="olt-Card-header">Primary</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-u-colorPrimary"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">Secondary</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-u-colorSecondary"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">Info</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-u-colorInfo"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">Error</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-u-colorError"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">Success</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-u-colorSuccess"></i>
  </div>
</div>
```

## Sizes

The *Spinner* can be rendered in different sizes as well using the
[fontSize utility classes](/#util). You can use :

- `olt-u-fontSizeSmall`
- `olt-u-fontSizeMedium`
- `olt-u-fontSizeLarge`
- `olt-u-fontSizeXLarge`
- `olt-u-fontSizeXxLarge`

```sizes.css hidden
body > div.olt-Frame { display: flex; }
.olt-Card + .olt-Card { margin-left: 10px; }
```

```sizes.html
<div class="olt-Card">
  <div class="olt-Card-header">Small</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-Spinner--primary olt-u-fontSizeSmall"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">Medium</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-Spinner--primary olt-u-fontSizeMedium"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">Large</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-Spinner--primary olt-u-fontSizeLarge"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">XLarge</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-Spinner--primary olt-u-fontSizeXLarge"></i>
  </div>
</div>
<div class="olt-Card">
  <div class="olt-Card-header">XxLarge</div>
  <div class="olt-Card-content olt-u-marginAuto">
    <i class="olt-Spinner olt-Spinner--primary olt-u-fontSizeXxLarge"></i>
  </div>
</div>
```

