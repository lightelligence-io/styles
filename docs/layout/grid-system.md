# Grid System

Lightelligence UI grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

<img src="../_assets/responsive-layout.png" alt="Responsive-Layout">

## Examples

### Responsive

<div class="olt-row olt-spacing--s-top">
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-8">
        <rectangle color-class="olt-color--as-background-primary-01">Responsive</rectangle>
    </div>
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        <rectangle>Responsive</rectangle>
    </div>
</div>

```html
<div class="olt-row">
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-8">
        <span>Responsive</span>
    </div>
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        <span>Responsive</span>
    </div>
</div>
```

### Offset

<div class="olt-row olt-spacing--s-top">
    <div class="olt-col-mobile-offset-3 olt-col-mobile-1">
        <rectangle>Offset</rectangle>
    </div>
    <div class="olt-col-mobile-offset-2 olt-col-mobile-2">
        <rectangle>Offset</rectangle>
    </div>
    <div class="olt-col-mobile-offset-1 olt-col-mobile-3">
        <rectangle>Offset</rectangle>
    </div>
</div>

```html
<div class="olt-row">
    <div class="olt-col-mobile-offset-3 olt-col-mobile-1">
        <span>Offset</span>
    </div>
    <div class="olt-col-mobile-offset-2 olt-col-mobile-2">
        <span>Offset</span>
    </div>
    <div class="olt-col-mobile-offset-1 olt-col-mobile-3">
        <span>Offset</span>
    </div>
</div>
```

### Auto Width

<div class="olt-row olt-spacing--s-top">
    <div class="olt-col-mobile">
        <rectangle>Auto Width</rectangle>
    </div>
    <div class="olt-col-mobile">
        <rectangle>Auto Width</rectangle>
    </div>
    <div class="olt-col-mobile">
        <rectangle>Auto Width</rectangle>
    </div>
</div>

```html
<div class="olt-row">
    <div class="olt-col-mobile">
        <span>Auto Width</span>
    </div>
    <div class="olt-col-mobile">
        <span>Auto Width</span>
    </div>
    <div class="olt-col-mobile">
        <span>Auto Width</span>
    </div>
</div>
```

### Alignment

<div class="olt-row olt-start-mobile olt-spacing--s-top">
    <div class="olt-col-mobile-2">
        <rectangle>start</rectangle>
    </div>
</div>
<div class="olt-row olt-center-mobile">
    <div class="olt-col-mobile-2">
        <rectangle>center</rectangle>
    </div>
</div>
<div class="olt-row olt-end-mobile">
    <div class="olt-col-mobile-2">
        <rectangle>end</rectangle>
    </div>
</div>

```html
<div class="olt-row olt-start-mobile">
    <div class="olt-col-mobile-2">
        <span>start</span>
    </div>
</div>
<div class="olt-row olt-center-mobile">
    <div class="olt-col-mobile-2">
        <span>center</span>
    </div>
</div>
<div class="olt-row olt-end-mobile">
    <div class="olt-col-mobile-2">
        <span>end</span>
    </div>
</div>
```

## Container
<div class="large-container">
    <div class="olt-row olt-container olt-spacing--s-top">
        <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-8">
            <rectangle color-class="olt-color--as-background-primary-01">Responsive</rectangle>
        </div>
        <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
            <rectangle>Responsive</rectangle>
        </div>
    </div>
    <div class="olt-row olt-container-small olt-spacing--s-top">
        <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-8">
            <rectangle color-class="olt-color--as-background-primary-01">Responsive</rectangle>
        </div>
        <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
            <rectangle>Responsive</rectangle>
        </div>
    </div>
</div>

```html
<div class="olt-row olt-container olt-spacing--s-top">
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-8">
        <rectangle color-class="olt-color--as-background-primary-01">Responsive</rectangle>
    </div>
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        <rectangle>Responsive</rectangle>
    </div>
</div>
<div class="olt-row olt-container-small olt-spacing--s-top">
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-8">
        <rectangle color-class="olt-color--as-background-primary-01">Responsive</rectangle>
    </div>
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        <rectangle>Responsive</rectangle>
    </div>
</div>
```


## All Classes

```
 col-mobile-1 // 25%
 col-mobile-2 // 50%
 col-mobile-3 // 75%
 col-mobile-4 // 100%

 col-tablet-1 // 12.5%
 col-tablet-2 // 25%
 col-tablet-3 // 37.5%
 col-tablet-4 // 50%
 col-tablet-5 // 62.5%
 col-tablet-6 // 75%
 col-tablet-7 // 87.5%
 col-tablet-8 // 100%

 col-desktop-1 // 8.333%
 col-desktop-2 // 16.667%
 col-desktop-3 // 25%
 col-desktop-4 // 33.333%
 col-desktop-5 // 41.667%
 col-desktop-6 // 50%
 col-desktop-7 // 58.333%
 col-desktop-8 // 66.667%
 col-desktop-9 // 75%
col-desktop-10 // 83.333%
col-desktop-11 // 91.667%
col-desktop-12 // 100%

olt-container
olt-container-small // max-width: 600px
```
