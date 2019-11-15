---
name: TextArea
category: Controls
---

## Description

Input is used with a wrapped `<label>` element that contains
`<textarea />`. It occupies `olt-TextArea*` class names.

---

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-textarea-spacer"></div>
    <div>
      <div class="demo-textarea-label">
        Empty
      </div>
      <div class="demo-textarea-label">
        Floating
      </div>
      <div class="demo-textarea-label">
        Filled
      </div>
      <div class="demo-textarea-label">
        Disabled
      </div>
      <div class="demo-textarea-label">
        Required
      </div>
      <div class="demo-textarea-label">
        Count
      </div>
      <div class="demo-textarea-label">
        Error
      </div>
      <div class="demo-textarea-label">
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
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea" placeholder="Your data"></textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label olt-Label--floating">
                <textarea class="olt-TextArea" placeholder="Your data"></textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea" disabled>Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea" required>Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-count">
                    11/150
                  </span>
                </div>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label has-error">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-error">
                    Not a valid input
                  </span>
                  <span class="olt-Label-count">
                    11/150
                  </span>
                </div>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
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
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea" placeholder="Your data"></textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label olt-Label--floating">
                <textarea class="olt-TextArea" placeholder="Your data" disabled></textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea" disabled>Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea" required>Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-count">
                    11/150
                  </span>
                </div>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label has-error">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
                <div class="olt-Label-footer">
                  <span class="olt-Label-error">
                    Not a valid input
                  </span>
                  <span class="olt-Label-count">
                    11/150
                  </span>
                </div>
              </label>
            </div>
            <div class="demo-textarea-content">
              <label class="olt-Label">
                <textarea class="olt-TextArea">Lorem ipsum</textarea>
                <span class="olt-Label-text">Enter your data</span>
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
  <textarea class="olt-TextArea" placeholder="Your data"></textarea>
  <span class="olt-Label-text">Enter your data</span>
</label>
```

## Floating

By default the input label is not floating meaning even without an
input value or without focus the label stays on top of the input.
To have a floating label the `olt-Label--floating` class has to
be added to the `label` element. When the input contains a value
the `has-value` class has to be set additionally in order to move
the label text on top of the input.

```floating.html
<label class="olt-Label olt-Label--floating">
  <textarea class="olt-TextArea" placeholder="Your data"></textarea>
  <span class="olt-Label-text">Enter your data</span>
</label>
<label class="olt-Label olt-Label--floating has-value">
  <textarea class="olt-TextArea">Lorem ipsum</textarea>
  <span class="olt-Label-text">Enter your data</span>
</label>
```

## Disabled

The input field can be disabled. The styles of the label
and additional elements will change accordingly.

```disabled.html
<label class="olt-Label">
  <textarea class="olt-TextArea" placeholder="Your data" disabled></textarea>
  <span class="olt-Label-text">Enter your data</span>
</label>
<label class="olt-Label">
  <textarea class="olt-TextArea" disabled>Lorem ipsum</textarea>
  <span class="olt-Label-text">Enter your data</span>
</label>
```

## Required

Setting the input element as required appends `*` to the label.

```required.html
<label class="olt-Label">
  <textarea class="olt-TextArea" required></textarea>
  <span class="olt-Label-text">Enter your data</span>
</label>
<label class="olt-Label">
  <textarea class="olt-TextArea" required>Lorem ipsum</textarea>
  <span class="olt-Label-text">Enter your data</span>
</label>
```

## Count

For inputs that are limited to a certain amount of characters
you can render that information for better user experience.

```count.html
<label class="olt-Label">
  <textarea class="olt-TextArea">Lorem ipsum</textarea>
  <span class="olt-Label-text">Enter your data</span>
  <div class="olt-Label-footer">
    <span class="olt-Label-count">
      11/150
    </span>
  </div>
</label>
<label class="olt-Label">
  <textarea class="olt-TextArea" disabled>Lorem ipsum</textarea>
  <span class="olt-Label-text">Enter your data</span>
  <div class="olt-Label-footer">
    <span class="olt-Label-count">
      11/150
    </span>
  </div>
</label>
```

## Error

If the user input is invalid the error can be indicated by adding
the `has-error` class to the label. The color of the input and label
change. The error messsage can be displayed below the input.

```error.html
<label class="olt-Label has-error">
  <textarea class="olt-TextArea">Lorem ipsum</textarea>
  <span class="olt-Label-text">Enter your data</span>
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
  <textarea class="olt-TextArea">Lorem ipsum</textarea>
  <span class="olt-Label-text">Enter your data</span>
  <div class="olt-Label-footer">
    <span class="olt-Label-hint">
      This input is required
    </span>
  </div>
</label>
```
