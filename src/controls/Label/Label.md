---
name: Label
category: Controls
---

## Description

*Label* represents a label in form fields, input fields, etc. Label is normally 
used with `<label>` elements and occupies `olt-Label*` class names.

Check [FormField](/#form-field) for information on how to combine and create
a form.

```label.html
<div class="olt-FormField">
  <label for="username" class="olt-Label">Username</label>
  <input id="username" class="olt-Input" type="text" placeholder="john_doe" />
</div>
<br />
<div class="olt-FormField">
  <label for="password" class="olt-Label">Password</label>
  <input id="password" class="olt-Input" type="password" />
</div>
<br />
<div class="olt-FormField">
  <label for="password_confirm" class="olt-Label">Confirm Password</label>
  <input id="password_confirm" class="olt-Input" type="password" />
</div>
```
