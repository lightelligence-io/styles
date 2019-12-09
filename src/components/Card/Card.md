---
name: Card
category: Component
---

## Description

You can use the *Card* component to wrap content inside a card-like block. This
component occupies `olt-Card*` class names.

The card can be a `div`, `button` or an `a` element, which makes it suitable
for actions on click, hover, etc.

```basic.css hidden
body > div.olt-Frame { background-color: lightgrey; padding: 5px }
```

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

```context.css hidden
body > div.olt-Frame { background-color: lightgrey; padding: 5px }
```

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
      <i class="olt-Icon olt-Icon-more olt-Icon--large"></i>
    </div>
  </div>
</div>
```

### Card with *title*, *description*, *content* and *context icon*

Any *Card* can contain additional content inside `.olt-Card-content` if
provided.

```content.css hidden
body > div.olt-Frame { background-color: lightgrey; padding: 5px }
```

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
      <i class="olt-Icon olt-Icon-more olt-Icon--large"></i>
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
body > div.olt-Frame { min-height: 280px; background-color: lightgrey; padding: 5px }
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
[any of our background colors](/#background-color) :

```colors.css hidden
body > div.olt-Frame { display: flex; }
```

```colors.html
<div class="olt-Card olt-u-backgroundColorPrimary olt-u-colorLight olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Primary</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-u-backgroundColorSecondary olt-u-colorLight olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Secondary</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-u-backgroundColorInfo olt-u-colorLight olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Info</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-u-backgroundColorError olt-u-colorLight olt-u-marginRight2">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Error</h4>
  </div>
  <div class="olt-Card-content">Card component</div>
</div>
<div class="olt-Card olt-u-backgroundColorSuccess olt-u-colorLight">
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
body > div.olt-Frame { padding: 20px; margin: auto; background-color: lightgrey; }
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

## Edit Card

By adding `olt-Card--edit` you can make a card "editable", which will
add an additional edit button at the top right corner as well as `:hover` and `:active` states to it.

```edit.css hidden
body > div.olt-Frame { padding: 20px; margin: auto; background-color: lightgrey; }
```

```edit.html
<div class="olt-Card olt-Card--edit olt-ActionButton--proximity-area">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Title</h4>
    <div class="olt-Card-description">Description</div>
    <div class="olt-Card-action">
      <button class="olt-ActionButton olt-ActionButton-icon-right olt-Icon-edit">
        <div class="olt-ActionButton-label">Edit</div>
      </button>
    </div>
  </div>
  <div class="olt-Card-content">
    Content
  </div>
</div>
```

## Nested Cards

Nested Cards will be shown with a border around them.

```nested.css hidden
body > div.olt-Frame { min-height: 130px; }
```

```nested.html
<div class="olt-Card">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">Title</h4>
    <div class="olt-Card-description">Description</div>
  </div>
  <div class="olt-Card-content">
    <div class="olt-Card">
      <div class="olt-Card-header">
        <h4 class="olt-Card-title">Title</h4>
        <div class="olt-Card-description">Description</div>
      </div>
      <div class="olt-Card-content">
        Content
      </div>
    </div>
  </div>
</div>
```
