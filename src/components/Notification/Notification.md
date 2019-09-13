---
name: Notification
category: Component
---

## Description

The *Notification* is used to show a message on the bottom of the screen which
can be displayed to the user. It occupies the `olt-Notification*` class names.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <button class="olt-Button" data-notification-trigger="notification-demo-1">Demo</button>
    <button class="olt-Button" data-notification-trigger="notification-demo-2">Error Demo</button>
 </div>
</div>

<div class="olt-Notification olt-Notification--success" data-notification-target="notification-demo-1">
    <div class="olt-Notification-dialog">
        <label class="olt-Notification-close" for="notification-demo-1"></label>
        <header class="olt-Notification-header">This is a Notification</header>
        <div class="olt-Notification-content">
            <p>Everything went well.</p>
        </div>
    </div>
</div>
<div class="olt-Notification olt-Notification--error" data-notification-target="notification-demo-2">
    <label class="olt-Notification-close" for="notification-demo-2"></label>
    <div class="olt-Notification-dialog">
        <header class="olt-Notification-header">An Error Occurred</header>
        <div class="olt-Notification-content">
            <p>Everything went well ... and more. This is a long text to see how the notification grows, when the text gets longer ... and it looks good!</p>
        </div>
    </div>
</div>

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="notification" id="demo-3" type="checkbox">
    <label class="olt-Button" id="button-demo-3" for="notification-demo-3"></label>
    <div class="olt-Notification olt-Notification--success" data-notification-trigger="notification-demo-3">
        <div class="olt-Notification-dialog">
            <label class="olt-Notification-close" for="notification-demo-3"></label>
            <header class="olt-Notification-header">This is a Notification</header>
            <div class="olt-Notification-content">
                <p>Everything went well.</p>
            </div>
        </div>
    </div>
  </div>
</div>

```html
<div class="olt-Notification olt-Notification--success">
    Hello world!
</div>
```

## States

A *Notification* is hidden by default. It can be rendered by adding `is-open` 
state class at the main element. It will then animate into the bottom of the
page.

```html
<div class="olt-Notification olt-Notification--success is-open">
    Hello world!
</div>
```

## Colors

The *Notification* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--primary" data-notification-trigger="demo-2">Primary</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--secondary" data-notification-trigger="demo-3">Secondary</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--info" data-notification-trigger="demo-4">Info</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--error" data-notification-trigger="demo-5">Error</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--success" data-notification-trigger="demo-6">Success</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button olt-Button--dark" data-notification-trigger="demo-7">Dark</button>
  </div>
  <div class="olt-u-marginAuto olt-u-padding1">
     <button class="olt-Button" data-notification-trigger="demo-8">White</button>
  </div>
</div>
<div class="olt-Notification olt-Notification--primary" data-notification-target="demo-2">
    Hello world!
</div>
<div class="olt-Notification olt-Notification--secondary" data-notification-target="demo-3">
    Hello world!
</div>
<div class="olt-Notification olt-Notification--info" data-notification-target="demo-4">
    Hello world!
</div>
<div class="olt-Notification olt-Notification--error" data-notification-target="demo-5">
    Hello world!
</div>
<div class="olt-Notification olt-Notification--success" data-notification-target="demo-6">
    Hello world!
</div>
<div class="olt-Notification olt-Notification--dark" data-notification-target="demo-7">
    Hello world!
</div>
<div class="olt-Notification olt-Notification--light" data-notification-target="demo-8">
    Hello world!
</div>

```html
<div class="olt-Notification olt-Notification--primary">Hello world!</div>
<div class="olt-Notification olt-Notification--secondary">Hello world!</div>
<div class="olt-Notification olt-Notification--info">Hello world!</div>
<div class="olt-Notification olt-Notification--error">Hello world!</div>
<div class="olt-Notification olt-Notification--success">Hello world!</div>
<div class="olt-Notification olt-Notification--dark">Hello world!</div>
<div class="olt-Notification olt-Notification--light">Hello world!</div>
```

