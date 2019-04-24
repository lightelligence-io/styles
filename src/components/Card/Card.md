---
name: Card
category: Component
---

# Card

```1.html
<div class="olt-Card">
  <div class="olt-Card-header">
    <h4 class="olt-Card-title">
      Title
    </h4>
    <p class="olt-Card-description">
      Description
    </p>
  </div>
</div>
```

## Card with headline and description.

```2.html
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

## Card with headline, description and content.

```3.html
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

## Image

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

```colors.html
<div class="olt-Card olt-Card--primary">
  <div class="olt-Card-header">
    <h4 class="olt-Headline olt-Headline--4">Card header</h4>
  </div>
  <div class="olt-Card-content">
    Some content
  </div>
</div>
```

## Links

```links.html
<a class="olt-Card" href="https://google.com" target="_blank">
  <div class="olt-Card-header">
    <div class="olt-Card-title">Title</div>
    <div class="olt-Card-description">Description</div>
    <div class="olt-Card-action">
      <i class="olt-Icon" icon="more_vert"></i>
    </div>
  </div>
</a>
```

## Buttons

```buttons.html
<button class="olt-Card olt-Card--selectable">
  <div class="olt-Card-header">
    <div class="olt-Card-title">Title</div>
    <div class="olt-Card-description">Description</div>
    <div class="olt-Card-action"><i icon="more_vert"></i></div>
  </div>
</button>
```
