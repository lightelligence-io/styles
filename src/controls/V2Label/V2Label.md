---
name: V2Label
category: Controls
---

## Description

*Label* represents a label in form fields, input fields, etc. Label is normally
used with `<label>` elements and occupies `olt-V2Label*` class names.

Check [V2Input](/#v-2-input) or [V2Select](/#v-2-select) for information on how
to use *Label* together with input elements.

```example.html
<label class="olt-V2Label">
  <input class="olt-V2Input" type="text" placeholder="Your data" />
  <div class="olt-V2Label-text">Enter your data</div>
</label>
<label class="olt-V2Label">
  <select class="olt-V2Select">
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-V2Label-text">Select an option</span>
</label>
```

## has-value

When an input element contains a value the `has-value` class has to be
added to the `label`.

```filled.html
<label class="olt-V2Label has-value">
  <input class="olt-V2Input" type="text" value="Lorem ipsum" />
  <span class="olt-V2Label-text">Enter your data</span>
</label>
```

## has-error

If the user input is invalid the error can be indicated by adding
the `has-error` class to the label. The colors of the contained
elements change accordingly.

```error.html
<label class="olt-V2Label has-value has-error">
  <input class="olt-V2Input" type="text" value="Lorem ipsum" />
  <span class="olt-V2Label-text">Enter your data</span>
  <div class="olt-V2Label-footer">
    <span class="olt-V2Label-error">
      Not a valid input
    </span>
  </div>
</label>
```
