---
name: Label
category: Controls
---

## Description

*Label* represents a label in form fields, input fields, etc. Label is normally
used with `<label>` elements and occupies `olt-Label*` class names.

Check [Input](/#input) or [Select](/#select) for information on how
to use *Label* together with input elements.

```example.html
<label class="olt-Label">
  <input class="olt-Input" type="text" placeholder="Your data" />
  <div class="olt-Label-text">Enter your data</div>
</label>
<label class="olt-Label">
  <select class="olt-Select">
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
</label>
```

## Floating

By default the label is not floating meaning even without an
input value or without focus the label stays on top of the input.
To have a floating label the `olt-Label--floating` class has to
be added to the `label` element. When the input contains a value
the `has-value` class has to be set additionally in order to move
the label text on top of the input.

```floating.html
<label class="olt-Label olt-Label--floating">
  <input class="olt-Input" type="text" placeholder="Your data" />
  <span class="olt-Label-text">Enter your data</span>
</label>
<label class="olt-Label olt-Label--floating has-value">
  <input class="olt-Input" type="text" value="Lorem ipsum" />
  <span class="olt-Label-text">Enter your data</span>
</label>
```

## has-value

When an input element contains a value the `has-value` class has to be
added to the `label`.

```filled.html
<label class="olt-Label has-value">
  <input class="olt-Input" type="text" value="Lorem ipsum" />
  <span class="olt-Label-text">Enter your data</span>
</label>
```

## has-error

If the user input is invalid the error can be indicated by adding
the `has-error` class to the label. The colors of the contained
elements change accordingly.

```error.html
<label class="olt-Label has-value has-error">
  <input class="olt-Input" type="text" value="Lorem ipsum" />
  <span class="olt-Label-text">Enter your data</span>
  <div class="olt-Label-footer">
    <span class="olt-Label-error">
      Not a valid input
    </span>
  </div>
</label>
```
