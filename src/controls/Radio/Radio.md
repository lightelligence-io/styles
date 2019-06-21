---
name: Radio
category: Controls
---

## Description

Radio is used with a wrapped `<label>` element that contain 
`<input type="radio"/>`. It occupies `olt-Radio*` class names and has styles 
for the following native states :

- `:checked`
- `:disabled`

```radio.html
<label class="olt-Radio">
  <input type="radio" />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Radio button</span>
</label>
<label class="olt-Radio">
  <input type="radio" checked />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Checked radio button</span>
</label>
<label class="olt-Radio">
  <input type="radio" disabled />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Disabled radio button</span>
</label>
<label class="olt-Radio">
  <input type="radio" disabled checked />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Disabled checked radio button</span>
</label>
```

## Use as radio group

You can use several radios as a radio group by using the same `name` for all 
of them as in the 
[HTML radio specs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio).

```radio-group.html
<label class="olt-Radio">
  <input type="radio" value="admin" name="role"/>
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Admin</span>
</label>
<label class="olt-Radio">
  <input type="radio" disabled value="super_admin" name="role"/>
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Super Admin</span>
</label>
<label class="olt-Radio">
  <input type="radio" checked value="writer" name="role" />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Writer</span>
</label>
<label class="olt-Radio">
  <input type="radio" value="reader" name="role"/>
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Reader</span>
</label>
```
