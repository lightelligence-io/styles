---
name: Radio
category: Controls
---

# Radio

Represents a radio button field

Radios can be used with `<input type="radio">` elements wrapped into a `<label>` element.

```1.html
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