---
name: V2Container
category: Layout
---

## Description

*Container* wraps content in a block and adds default padding around it, as 
well as additional responsive-friendly margin on different screens. The
*Container* occupies `olt-V2Container*` class names.

The container changes it's size based on the screen size. You
can check the behaviour by reducing the screen size and look at the example
below :

```example.html
<div class="olt-V2Container">
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
this can be overridden by adding `--fluid` modifier to the container.

```flexible.html
<div class="olt-V2Container olt-V2Container--fluid">
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
<div class="olt-V2Container olt-V2Container--noPadding">
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

