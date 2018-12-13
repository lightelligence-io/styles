# TextField

TextField is used with `<div>` elements that contain a text-input and optionally a label

```html
<div class="olt-TextField">
  <label class="olt-Label olt-TextField-label">Label</label>
  <input class="olt-Input olt-TextField-input" placeholder="Enter your life..."/>
</div>
```

Enable floating labels by adding `--float` modifier and placing the label after the input in markup.

```html
<div class="olt-TextField olt-TextField--float">
  <input id="input" class="olt-Input olt-TextField-input" placeholder="Enter your life..."/>
  <label for="input" class="olt-Label olt-TextField-label">Label</label>
</div>
```

Provide error message

```html
<div class="olt-TextField">
  <label class="olt-Label olt-TextField-label">Label</label>
  <input class="olt-Input olt-TextField-input is-error" placeholder="Enter your life..."/>
  <div class="olt-TextField-message olt-u-textError">Something went horribly wrong</div>
</div>
```
