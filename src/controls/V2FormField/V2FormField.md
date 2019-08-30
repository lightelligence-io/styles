---
name: V2FormField
category: Controls
---

## Description

_FormField_ represents a wrapper around a input element, etc. and occupies `olt-V2FormField*` class names.

```form-field.html
<div class="olt-V2FormField">
  <input class="olt-V2Input" type="text" placeholder="john_doe" />
</div>
<br />
<div class="olt-V2FormField has-value">
  <input class="olt-V2Input" type="text" value="john_doe" />
</div>
<br />
<div class="olt-V2FormField has-value">
  <input class="olt-V2Input" type="password" value="password-xyz" />
</div>
<br />
<div class="olt-V2FormField">
  <input class="olt-V2Input" type="password" />
</div>
<br />
<div class="olt-V2FormField">
  <select class="olt-V2Select">
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
</div>
<br />
<div class="olt-V2FormField has-value">
  <select class="olt-V2Select" value="Lorem Ipsum">
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
</div>
```
