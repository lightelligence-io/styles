---
name: Snackbar
category: Component
---

## Description

The *Snackbar* is used to show a message on the bottom of the screen which
can be displayed to the user. It occupies the `olt-Snackbar*` class names.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
     <button class="olt-Button" data-snackbar-trigger="demo-1">Demo</button>
  </div>
</div>
<div class="olt-Snackbar olt-Snackbar--success" data-snackbar-target="demo-1">
    Hello world!
</div>

```html
<div class="olt-Snackbar olt-Snackbar--success">
    Hello world!
</div>
```

## States

A *Snackbar* is hidden by default. It can be rendered by adding `is-open` 
state class at the main element. It will then animate into the bottom of the
page.

```html
<div class="olt-Snackbar olt-Snackbar--success is-open">
    Hello world!
</div>
```

## Colors

The *Snackbar* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--primary" data-snackbar-trigger="demo-2">Primary</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--secondary" data-snackbar-trigger="demo-3">Secondary</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--info" data-snackbar-trigger="demo-4">Info</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--error" data-snackbar-trigger="demo-5">Error</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--success" data-snackbar-trigger="demo-6">Success</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--dark" data-snackbar-trigger="demo-7">Dark</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button" data-snackbar-trigger="demo-8">White</button>
  </div>
</div>
<div class="olt-Snackbar olt-Snackbar--primary" data-snackbar-target="demo-2">
    Hello world!
</div>
<div class="olt-Snackbar olt-Snackbar--secondary" data-snackbar-target="demo-3">
    Hello world!
</div>
<div class="olt-Snackbar olt-Snackbar--info" data-snackbar-target="demo-4">
    Hello world!
</div>
<div class="olt-Snackbar olt-Snackbar--error" data-snackbar-target="demo-5">
    Hello world!
</div>
<div class="olt-Snackbar olt-Snackbar--success" data-snackbar-target="demo-6">
    Hello world!
</div>
<div class="olt-Snackbar olt-Snackbar--dark" data-snackbar-target="demo-7">
    Hello world!
</div>
<div class="olt-Snackbar olt-Snackbar--light" data-snackbar-target="demo-8">
    Hello world!
</div>

```html
<div class="olt-Snackbar olt-Snackbar--primary">Hello world!</div>
<div class="olt-Snackbar olt-Snackbar--secondary">Hello world!</div>
<div class="olt-Snackbar olt-Snackbar--info">Hello world!</div>
<div class="olt-Snackbar olt-Snackbar--error">Hello world!</div>
<div class="olt-Snackbar olt-Snackbar--success">Hello world!</div>
<div class="olt-Snackbar olt-Snackbar--dark">Hello world!</div>
<div class="olt-Snackbar olt-Snackbar--light">Hello world!</div>
```

