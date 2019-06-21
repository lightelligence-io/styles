---
name: Checkbox
category: Controls
---

## Description

Checkbox is used with a wrapped `<div>` elements that contain 
`<input type="checkbox"/>` with a sibling `<label>` element. It occupies 
`olt-Checkbox*` class names and has styles for the following native states :

- `:hover`
- `:focus`
- `:checked`
- `:disabled`
- `:indetermined` or `.--indeterminate` modifier.

```checkbox.html
<div class="olt-Checkbox">
  <input id="checkbox" type="checkbox" class="olt-Checkbox-input"/>
  <label for="checkbox" class="olt-Label olt-Checkbox-label">Checkbox</label>
</div>
<div class="olt-Checkbox">
  <input id="checked-checkbox" type="checkbox" class="olt-Checkbox-input" checked/>
  <label for="checked-checkbox" class="olt-Label olt-Checkbox-label">Checked checkbox</label>
</div>
<div class="olt-Checkbox">
  <input disabled id="disabled-checkbox" type="checkbox" class="olt-Checkbox-input"/>
  <label for="disabled-checkbox" class="olt-Label olt-Checkbox-label">Disabled checkbox</label>
</div>
<div class="olt-Checkbox">
  <input disabled id="disabled-checked-checkbox" type="checkbox" class="olt-Checkbox-input" checked/>
  <label for="disabled-checked-checkbox" class="olt-Label olt-Checkbox-label">Disabled checked checkbox</label>
</div>
```

## Indeterminate checkbox

Indeterminate checkbox implement the 
[HTML indeterminate pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate).

Typical usage is when a group is partially selected.

```indeterminate.html
<div class="olt-Checkbox">
  <input id="parent" type="checkbox" class="olt-Checkbox-input"/>
  <label for="parent" class="olt-Label olt-Checkbox-label">Parent</label>
</div>
<div class="olt-u-marginLeft5">
  <div class="olt-Checkbox">
    <input id="one" type="checkbox" class="olt-Checkbox-input"/>
    <label for="one" class="olt-Label olt-Checkbox-label">Child</label>
  </div>
  <div class="olt-Checkbox">
    <input id="two" type="checkbox" class="olt-Checkbox-input" />
    <label for="two" class="olt-Label olt-Checkbox-label">Child</label>
  </div>
</div>
```

```indeterminate.js
const c1 = document.getElementById("one");
const c2 = document.getElementById("two");
const parent = document.getElementById("parent");
[ c1, c2 ].forEach( checkbox => {
    checkbox.addEventListener( "click", () => {
        if ( c1.checked && c2.checked ) { 
          parent.indeterminate = false;
          return parent.checked = true; 
        }
        if ( !c1.checked && !c2.checked ) { 
          parent.indeterminate = false;
          return parent.checked = false; 
        }
        parent.indeterminate = true;
    } );
} );
parent.addEventListener( "click", () => {
    if ( parent.checked ) {
        c1.checked = true;
        c2.checked = true;
    } else {
        c1.checked = false;
        c2.checked = false;
    }
} );
```

You can set the indeterminate state as well via adding `--indeterminate`
modifier on the `olt-Checkbox-label` and then use it as a regular checkbox,
without using JavaScript.

```indeterminate-2.html
<div class="olt-Checkbox">
  <input id="indeterminate-checkbox" type="checkbox" checked class="olt-Checkbox-input"/>
  <label for="indeterminate-checkbox" class="olt-Label olt-Checkbox-label olt-Checkbox--indeterminate">Indeterminate Checkbox</label>
</div>
<div class="olt-Checkbox">
  <input id="indeterminate-checkbox" type="checkbox" disabled checked class="olt-Checkbox-input"/>
  <label for="indeterminate-checkbox" class="olt-Label olt-Checkbox-label olt-Checkbox--indeterminate">Disabled Indeterminate Checkbox</label>
</div>
```
