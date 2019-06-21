---
name: Card
category: Component
---

## Description

You can use the *Card* component to wrap content inside a card-like block. This 
component occupies `olt-Card*` class names.

The card can be a `div`, `button` or an `a` element, which makes it suitable
for actions on click, hover, etc.

```basic.html
<div class="olt-Card">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">
      A title of a card
    </h4>
    <p class="olt-Card-description">
      Lorem ipsum dolor
    </p>
  </div>
</div>

<br />

<a class="olt-Card" href="https://lightelligence.io" target="_blank">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">
      Lightelligence
    </h4>
    <div class="olt-Card-description">
      An IoT Platform for the Light and Building Market
    </div>
  </div>
</a>
```

## Examples

### Card with *title*, *description* and *context icon*

A *Card* can be additionally rendered with context icon on the top right, used
for drop down menu or additional context actions.

```context.html
<div class="olt-Card">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">
      Title
    </h4>
    <h6 class="olt-Card-description">
      Description
    </h6>
    <div class="olt-Card-action">
      <i class="olt-Icon" data-icon="more_vert"></i>
    </div>
  </div>
</div>
```

### Card with *title*, *description*, *content* and *context icon*

Any *Card* can contain additional content inside `.olt-Card-content` if 
provided.

```content.html
<div class="olt-Card">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">
      Title
    </h4>
    <h6 class="olt-Card-description">
      Description
    </h6>
    <div class="olt-Card-action">
      <i class="olt-Icon" data-icon="more_vert"></i>
    </div>
  </div>
  <div class="olt-Card-content">
    Content
  </div>
</div>
```

### Card with *title*, *content* and *image*

A *Card* can also have an image with an `img` tag and `olt-Card-image` class
name.

```image.css hidden
body > div.olt-Frame { min-height: 280px; }
```

```image.html
<div class="olt-Card">
  <img class="olt-Card-image olt-Image olt-Image--fluid" src="https://picsum.photos/860/200"/>
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Title</h4>
  </div>
  <div class="olt-Card-content">
    Content
  </div>
</div>
```

## Colors

The *Cards* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

```colors.css hidden
body > div.olt-Frame { display: flex; }
```

```colors.html
<div class="olt-Card olt-Card--primary olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Primary</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-Card--secondary olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Secondary</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-Card--info olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Info</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-Card--error olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Error</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-Card--success">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Success</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
```

## Selectable Card

By adding `olt-Card--selectable` you can make a card "selectable", which will
add additional `:hover` and `:active` states to it.

```buttons.css hidden
body > div.olt-Frame { padding: 50px; margin: auto; }
```

```buttons.html
<button class="olt-Card olt-Card--selectable">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Title</h4>
    <div class="olt-Card-description">Description</div>
  </div>
  <div class="olt-Card-content">
    Content
  </div>
</button>
```
