---
name: Radio
category: Controls
---

## Description

Radio is used with a wrapped `<label>` element that contain
`<input type="radio"/>`. It occupies `olt-Radio*` class names.

---

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer-small"></div>
    <div>
      <div class="demo-label">
        Active
      </div>
      <div class="demo-label">
        Active Disabled
      </div>
      <div class="demo-label">
        Inactive
      </div>
      <div class="demo-label">
        Inactive disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--7">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--4">
        <div class="demo-title">Light Theme</div>
        <div class="demo-subtitle-small"></div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio" checked />
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio" checked disabled />
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio"/>
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio" disabled />
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--4">
        <div class="demo-title">Dark Theme</div>
        <div class="demo-subtitle-small"></div>
        <div class="olt-Card olt-Card--dark olt-Theme-dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio" checked />
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio" checked disabled />
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio"/>
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
            <div class="demo-content">
              <label class="olt-Radio">
                <input type="radio" disabled />
                <span class="olt-Radio-button"></span>
                <span class="olt-Radio-label">Select an option</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

```example.html
<label class="olt-Radio">
  <input type="radio" />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Select an option</span>
</label>
```

## HTML Input states

The radio control is a native browser `input[type="radio"]` so you can apply
`disable`, `checked` attributes directly to the input field

```states.html
<label class="olt-Radio">
  <input type="radio" />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Select an option</span>
</label>
<label class="olt-Radio">
  <input type="radio" disabled />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Select an option</span>
</label>
<label class="olt-Radio">
  <input type="radio" checked />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Select an option</span>
</label>
<label class="olt-Radio">
  <input type="radio" disabled checked />
  <span class="olt-Radio-button"></span>
  <span class="olt-Radio-label">Select an option</span>
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
