---
name: Container
category: Layout
---

## Description

*Container* wraps content in a block and adds default padding around it, as
well as additional responsive-friendly margin on screens wider than 576px. The
*Container* occupies `olt-Container*` class names.

In general the container occupies the full screen size minus some margin. Only on very large screens the max-width is limited to a maximum of `1248px`. You
can check the behaviour by reducing the screen size and look at the example
below :

```example.html
<div class="olt-Container">
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
</div>
```

## Modifiers

### Flexible width

By default the *Container* has `max-width` css property which is being set,
this can be overridden by adding `--fluid` modifier to the container. By default this only effects the rendering of the xl breakpoint.

```flexible.html
<div class="olt-Container olt-Container--fluid">
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
</div>
```

### No padding

You can remove the default padding of the *Container* by setting `--noPadding`
modifier class name. This will only remove the left and the right padding,
making it useful in situations where additional spacing is not needed.

```no-padding.html
<div class="olt-Container olt-Container--noPadding">
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
</div>
```

