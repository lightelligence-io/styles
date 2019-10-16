---
name: ActionButton
category: Component
---


## Description

V2-Buttons can be used with `<button>` and `<a>` elements and occupy the `olt-ActionButton*` class names.

The Action Button consists of three three state, depending on the cursor's distance to the click-area:

- Default: The label is hidden and only the icon is displayed
- Approximation: If the cursor is over a containing element (or near the button) the icon's base and the label appear
- Hover: When the cursor directly approaches the click-area the base will expand and include the label. Also the label and the icon will come closer.

Use `--default`, `--primary`, `--destructive` and `--confirmative` modifiers to define the type of the button and set its respective color.

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
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-edit">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-edit">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-edit olt-ActionButton--proximity">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-edit olt-ActionButton--fixed">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-edit olt-ActionButton--standalone">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-left olt-Icon-action-edit olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton-icon-right olt-Icon-action-edit">
                  <div class="olt-ActionButton-action-label">
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
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-add-circle">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-add-circle">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-add-circle olt-ActionButton--proximity">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-add-circle olt-ActionButton--fixed">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-add-circle olt-ActionButton--standalone">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-add-circle olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-right olt-Icon-action-add-circle">
                <div class="olt-ActionButton-action-label">
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
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-action-remove-circle">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-action-remove-circle">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-action-remove-circle olt-ActionButton--proximity">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-action-remove-circle olt-ActionButton--fixed">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-action-remove-circle olt-ActionButton--standalone">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-left olt-Icon-action-remove-circle olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--destructive olt-ActionButton-icon-right olt-Icon-action-add-circle">
                <div class="olt-ActionButton-action-label">
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
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-action-refresh">
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-action-refresh">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-action-refresh olt-ActionButton--proximity">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-action-refresh olt-ActionButton--fixed">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-action-refresh olt-ActionButton--standalone">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-left olt-Icon-action-refresh olt-ActionButton--standalone olt-ActionButton--base">
                  <div class="olt-ActionButton-action-label">
                    Label
                  </div>
                </button>
            </div>
            <div class="demo-content">
              <button
                class="olt-ActionButton olt-ActionButton--confirmative olt-ActionButton-icon-right olt-Icon-action-refresh">
                <div class="olt-ActionButton-action-label">
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


On Tablet and Mobile Devices the action button is always displayed as the "Standalone with Base" variant to increase and show the click-area. If the standalone version cannot satisfactory represent the action it can be assisted with the label ("Fixed Label") depending on the context

```example.html
<div class="olt-ActionButton--proximity-area" style="padding: 20px">
<button class="olt-ActionButton olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-edit">
  <div class="olt-ActionButton-action-label">Edit</div>
</button>
</div>
<div class="olt-ActionButton--proximity-area" style="padding: 20px">
<button class="olt-ActionButton olt-ActionButton--fixed olt-ActionButton--primary olt-ActionButton-icon-left olt-Icon-action-edit">
  <div class="olt-ActionButton-action-label">Edit (fixed label)</div>
</button>
</div>
```