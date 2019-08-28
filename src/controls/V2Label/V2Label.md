---
name: V2Label
category: Controls
---

## Description

*Label* represents a label in form fields, input fields, etc. Label is normally
used with `<label>` elements and occupies `olt-V2Label*` class names.

```label.html
<label class="olt-V2Label">
  <input id="username" class="olt-V2Input" type="text" placeholder="john_doe" />
  <span class="olt-V2Label-text">Username</span>
</label>
<br />
<label class="olt-V2Label has-value">
  <input id="username" class="olt-V2Input" type="text" value="john_doe" />
  <span class="olt-V2Label-text">Username</span>
</label>
<br />
<label class="olt-V2Label has-value">
  <input id="password" class="olt-V2Input" type="password" value="password-xyz" />
  <span class="olt-V2Label-text">Password</span>
</label>
<br />
<label class="olt-V2Label">
  <input id="password_confirm" class="olt-V2Input" type="password" />
  <span class="olt-V2Label-text">Confirm Password</span>
</label>
```
