---
name: Select
category: Controls
---

## Description

*Select* represents an 
[HTML Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option).
It uses the semantic tag names `<select>` and children of `<option>` tags. It
occupies the `olt-Select*` class names.

```select.html
<select class="olt-Select">
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
```

## Modifiers

### Full width

A select can be rendered with full width by adding `--fullwidth` modifier. This
will add `width: 100%` to the select element.

```fullwidth.html
<select class="olt-Select olt-Select--fullwidth">
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
```

### Inline select

*Select* is rendered as Block element by default. If you want to change that
behaviour you can use `--inline` modifier.

```inline.html
<select class="olt-Select olt-Select--inline">
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
<select class="olt-Select olt-Select--inline">
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
```


## States

### Disabled state

A select can be rendered as disabled by adding `is-disabled` state class name.

```disabled.html
<select class="olt-Select is-disabled" disabled>
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
```

### Error state

*Select* can also be rendered in an error state by adding `is-error` class name.

```error.html
<select class="olt-Select is-error">
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
```

### Readonly State

A select can also have a readonly state by adding `is-readonly` class name.

```readonly.html
<select disabled class="olt-Select is-readonly">
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
```

## Variations

### Use with Label

A select is typically used with a [Label](/#label) component to represent more
information regarding the usage.

```label.html
<label class="olt-Label">Select</label>
<select class="olt-Select">
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</select>
```

