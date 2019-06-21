---
name: FormField
category: Controls
---

## Description

*FormField* is similar to [TextField](/#text-field) and represents an `input` +
`label` combination for rendering form field. It occupies `olt-FormField*` 
class names.

It usually contains [Label](/#label) and can contain `-footer` sub element.

```form-field.html
<div class="olt-FormField">
  <label for="select" class="olt-Label">Role</label>
  <select id="select" class="olt-Select olt-Select--fullwidth">
    <option value="admin">Admin</option>
    <option value="writer">Writer</option>
    <option value="reader">Reader</option>
  </select>
  <div class="olt-FormField-footer">
    <div class="olt-FormField-message olt-u-colorInfo">
       What is the desired role
    </div>
  </div>
</div>
<br />
<div class="olt-FormField">
  <label for="select" class="olt-Label">Earth is</label>
  <select id="select" class="olt-Select olt-Select--fullwidth" disabled>
    <option value="round" selected>Round</option>
    <option value="flat">Flat</option>
  </select>
  <div class="olt-FormField-footer">
    <div class="olt-FormField-message olt-u-colorError">
       Science prevents you from modifying this field
    </div>
  </div>
</div>
```
