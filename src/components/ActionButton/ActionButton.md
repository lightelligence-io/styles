---
name: ActionButton
category: Component
---


## Description

ActionButtons can be used with `<button>` and `<a>` elements and occupy the `olt-ActionButton*` class names.

The Action Button consists of three states, depending on the cursor's distance to the click-area:

- Default: The label is hidden and only the icon is displayed
- Approximation: If the cursor is over a containing element (or near the button) the icon's base and the label appear
- Hover: When the cursor directly approaches the click-area the base will expand and include the label. Also the label and the icon will come closer.

Use `--default`, `--primary`, `--destructive` and `--confirmative` modifiers to define the type of the button and set its respective color.

Additional modifiers:
- `--fixed` ensures that the label is always shown
- `--standalone` hides the label
- `--base` always shows the base (hover effect)
- `--proximity` show the icon base (proximity effect)
- `--proximity-area` define a surrounding element as proximity area to apply the proximity effect when the mouse approaches the button

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer--small" style="height: 45px;"></div>
    <div>
      <div class="demo-label">
        Default
      </div>
      <div class="demo-label">
        Icon Left
      </div>
      <div class="demo-label">
        Proximity
      </div>
      <div class="demo-label">
        Fixed Label
      </div>
      <div class="demo-label">
        Standalone
      </div>
      <div class="demo-label">
        Standalone with Base
      </div>
      <div class="demo-label">
        Icon Right
      </div>
      <div class="demo-label">
        Icon Right (fixed label w/ base)
      </div>
      <div class="demo-label">
        Icon Right (proximity)
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Default</div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--proximity">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--fixed">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--standalone">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-right olt-Icon-edit">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--fixed olt-ActionButton--base olt-ActionButton-icon-right olt-Icon-edit">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--proximity olt-ActionButton-icon-right olt-Icon-edit">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary</div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-add-outline">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-add-outline">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-add-outline olt-ActionButton--proximity">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-add-outline olt-ActionButton--fixed">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-add-outline olt-ActionButton--standalone">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-add-outline olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-right olt-Icon-add-outline">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--fixed olt-ActionButton--base olt-ActionButton--primary olt-ActionButton-icon-right olt-Icon-add-outline">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--proximity olt-ActionButton--primary olt-ActionButton-icon-right olt-Icon-add-outline">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Destructive</div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-remove-outline">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-remove-outline">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-remove-outline olt-ActionButton--proximity">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-remove-outline olt-ActionButton--fixed">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-remove-outline olt-ActionButton--standalone">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-remove-outline olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-right olt-Icon-add-outline">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--fixed olt-ActionButton--base olt-ActionButton--destructive olt-ActionButton-icon-right olt-Icon-add-outline">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--proximity olt-ActionButton--destructive olt-ActionButton-icon-right olt-Icon-add-outline">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Confirmative</div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-refresh">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-refresh">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-refresh olt-ActionButton--proximity">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-refresh olt-ActionButton--fixed">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-refresh olt-ActionButton--standalone">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-refresh olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-right olt-Icon-refresh">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--fixed olt-ActionButton--base olt-ActionButton--confirmative olt-ActionButton-icon-right olt-Icon-refresh">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--proximity olt-ActionButton--confirmative olt-ActionButton-icon-right olt-Icon-refresh">
                <div class="olt-ActionButton-label">
                  Label
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


On Tablet and Mobile Devices the action button is always displayed as the "Standalone with Base" variant to increase and show the click-area. If the standalone version cannot properly represent the action it should be used together with the label ("Fixed Label") depending on the context.

```example.html
<div class="olt-ActionButton--proximity-area" style="padding: 20px; border: 1px dotted lightgrey">
<button class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-edit">
  <div class="olt-ActionButton-label">Edit</div>
</button>
</div>
<div class="olt-ActionButton--proximity-area" style="padding: 20px; border: 1px dotted lightgrey">
<button class="olt-ActionButton olt-ActionButton--fixed olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-edit">
  <div class="olt-ActionButton-label">Edit (fixed label)</div>
</button>
</div>
```

## Disabled
The button can be disabled using the `--disabled` modifier. This overrides any colors being set through other modifiers.

```disabled.html
<div class="demo-content">
  <button
    class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--disabled">
      <div class="olt-ActionButton-label">
        Label
      </div>
    </button>
</div>
<div class="demo-content">
  <button
    class="olt-ActionButton olt-ActionButton--fixed olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--disabled">
      <div class="olt-ActionButton-label">
        Label
      </div>
    </button>
</div>
<div class="demo-content">
  <button
    class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--disabled olt-ActionButton--base">
      <div class="olt-ActionButton-label">
        Label
      </div>
    </button>
</div>
<div class="demo-content">
  <button
    class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-edit olt-ActionButton--disabled olt-ActionButton--standalone olt-ActionButton--base">
      <div class="olt-ActionButton-label">
        Label
      </div>
    </button>
</div>
```
