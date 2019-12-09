---
name: Select
category: Controls
---

## Description

Select is used with a wrapped `<label>` element that contain
`<select />`. It occupies `olt-Select*` class names.

---

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-input-spacer"></div>
    <div>
      <div class="demo-input-label">
        Empty
      </div>
      <div class="demo-input-label">
        Floating
      </div>
      <div class="demo-input-label">
        Selected
      </div>
      <div class="demo-input-label">
        Disabled
      </div>
      <div class="demo-input-label">
        Required
      </div>
      <div class="demo-input-label">
        Error
      </div>
      <div class="demo-input-label">
        Hint
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--5">
        <div class="demo-title">Light Theme</div>
        <div class="demo-subtitle-small"></div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum">Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label olt-Label--floating">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum">Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select" disabled>
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select" required>
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label has-error">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-error">
                    Not a valid input
                  </span>
                </div>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-hint">
                    This input is required
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--5">
        <div class="demo-title">Dark Theme</div>
        <div class="demo-subtitle-small"></div>
        <div class="olt-Card olt-Card--dark olt-Theme-dark">
          <div class="olt-Card-content">
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum">Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label olt-Label--floating">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum">Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select" disabled>
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select" required>
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label has-error">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-error">
                    Not a valid input
                  </span>
                </div>
              </label>
            </div>
            <div class="demo-input-content">
              <label class="olt-Label">
                <select class="olt-Select">
                  <option hidden></option>
                  <option value="LoremIpsum" selected>Lorem Ipsum</option>
                  <option value="DolorSitAmet">Dolor Sit Amet</option>
                  <option value="EtVersus">Et Versus</option>
                </select>
                <span class="olt-Label-text">Select an option</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-hint">
                    This input is required
                  </span>
                </div>
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

By default the input label is not floating meaning even without an
input value or without focus the label stays on top of the input.
`olt-Label--floating` class has to be added to the input `label`.
When the input contains a value the `has-value` class has to be set
additionally in order to move the label text on top of the input.

```floating.html
<label class="olt-Label olt-Label--floating">
  <select class="olt-Select">
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
</label>
<label class="olt-Label olt-Label--floating has-value">
  <select class="olt-Select">
    <option hidden></option>
    <option value="LoremIpsum" selected>Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
</label>
```

## Disabled

The select field can be disabled. The styles of the label
and additional elements will change accordingly.

```disabled.html
<label class="olt-Label">
  <select class="olt-Select" disabled>
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
</label>
<label class="olt-Label">
  <select class="olt-Select" disabled>
    <option hidden></option>
    <option value="LoremIpsum" selected>Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
</label>
```

## Required

Setting the select element as required appends `*` to the label.

```required.html
<label class="olt-Label">
  <select class="olt-Select" required>
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
</label>
<label class="olt-Label">
  <select class="olt-Select" required>
    <option hidden></option>
    <option value="LoremIpsum" selected>Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
</label>
```

## Error

If the user input is invalid the error can be indicated by adding
the `has-error` class to the label. The color of the input and label
change. The error messsage can be displayed below the input.

```error.html
<label class="olt-Label has-error">
  <select class="olt-Select">
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
  <div class="olt-Label-footer">
    <span class="olt-Label-error">
      Not a valid input
    </span>
  </div>
</label>
```

## Hint

If the user input is validated a hint can be shown below the input
for better user experience.

```hint.html
<label class="olt-Label">
  <select class="olt-Select">
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <span class="olt-Label-text">Select an option</span>
  <div class="olt-Label-footer">
    <span class="olt-Label-hint">
      This input is required
    </span>
  </div>
</label>
```

## Pagination

The pagination use-case is an exception from the above button rules and uses the `olt-Select--pagination` modifier. This will show a border around the element.

```pagination.html
<select class="olt-Select olt-Select--pagination">
  <option hidden></option>
  <option value="10">10</option>
  <option value="30">30</option>
</select>
```
