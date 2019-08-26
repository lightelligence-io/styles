---
name: V2Button
category: Component
---


## Description

V2-Buttons can be used with `<button>`, `<a>`, and `<input type="button">` 
elements and occupy the `olt-V2Button*` class names.


```example.html
<a class="olt-V2Button">Link</a>
<button class="olt-V2Button">Button</button>
<input class="olt-V2Button" type="button" value="Input"/>
```

Buttons enable users to perform clear actions with a single click. There are three levels of emphasis: primary, secondary and tertiary. For labeling purposes please use the Chip Component.

## Types

Buttons communicate actions that users can take. They are typically placed throughout the UI, in places like Dialogs, Modals, Forms, Cards, Toolbars...

Different types of buttons communicate different actions.

## Progressing Actions

The standard set of buttons can be used whenever an action is part of a process or opens up a variety of options to the user.

Contrasting levels of emphasis help the user to differentiate between important and less important actions. These levels can also be used to guide a user to a preferred outcome.

### Light Theme (default)

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer"></div>
    <div>
      <div class="demo-label">
        Default
      </div>
      <div class="demo-label">
        Decoration Left
      </div>
      <div class="demo-label">
        Decoration Right
      </div>
      <div class="demo-label">
        Disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary</div>
        <div class="demo-subtitle">
          Actions with a clear intention (Filled)
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="olt-V2Button">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="olt-V2Button">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="olt-V2Button">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="olt-V2Button">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Secondary</div>
        <div class="demo-subtitle">
          Other possible options (Outline)
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--secondary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--secondary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--secondary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--secondary">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary</div>
        <div class="demo-subtitle">
          Less important actions<br>(Text, Gray 500)
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--tertiary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="olt-V2Button">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--tertiary 
                    ">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--tertiary 
                    ">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary / Action</div>
        <div class="demo-subtitle">
          Recurring actions (Text, Primary)
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    ">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    ">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    ">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    ">Label</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


### Dark Theme (default)

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer"></div>
    <div>
      <div class="demo-label">
        Default
      </div>
      <div class="demo-label">
        Decoration Left
      </div>
      <div class="demo-label">
        Decoration Right
      </div>
      <div class="demo-label">
        Disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary</div>
        <div class="demo-subtitle">
          Actions with a clear intention (Filled)
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Secondary</div>
        <div class="demo-subtitle">
          Other possible options (Outline)
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary</div>
        <div class="demo-subtitle">
          Less important actions<br>(Text, Gray 500)
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary / Action</div>
        <div class="demo-subtitle">
          Recurring actions (Text, Primary)
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--action 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Completing Actions

This set of buttons can be used to complete or terminate an action. The labels should give a clear indication of what the user can expect after clicking.

### Destructive Actions

Buttons for destructive actions are available with three levels of emphasis and two to three varations in style. Primary and Secondary Buttons are available with a leading decoration. Tertiary Buttons can also be used with trailing decoration, since they can be part of a Cell when used in Data Cards.

#### Levels of emphasis
- Primary (Filled)
- Secondary (Outline)
- Tertiary (Text, Error)

#### Light Theme

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer demo-spacer-large"></div>
    <div>
      <div class="demo-label">
        Default
      </div>
      <div class="demo-label">
        Decoration Left
      </div>
      <div class="demo-label">
        Decoration Right
      </div>
      <div class="demo-label">
        Disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary</div>
        <div class="demo-subtitle demo-subtitle-large">
          Critical actions without second warning (for example definitely deleting an item)
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--destructive">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--destructive">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Secondary</div>
        <div class="demo-subtitle demo-subtitle-large">
          Destructive action as a possibility but not the only option available.<br> A warning in form of a <strong><i>Modal</i></strong> is necessary to prevent an unexpected outcome.
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--secondary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--secondary">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--secondary">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary</div>
        <div class="demo-subtitle demo-subtitle-large">
          Less important destructive actions.<br>A warning in form of a <strong><i>Modal</i></strong> is necessary to prevent an unexpected outcome.
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

#### Dark Theme

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer demo-spacer-large"></div>
    <div>
      <div class="demo-label">
        Default
      </div>
      <div class="demo-label">
        Decoration Left
      </div>
      <div class="demo-label">
        Decoration Right
      </div>
      <div class="demo-label">
        Disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary</div>
        <div class="demo-subtitle demo-subtitle-large">
          Critical actions without second warning (for example definitely deleting an item)
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Secondary</div>
        <div class="demo-subtitle demo-subtitle-large">
          Destructive action as a possibility but not the only option available.<br> A warning in form of a <strong><i>Modal</i></strong> is necessary to prevent an unexpected outcome.
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary</div>
        <div class="demo-subtitle demo-subtitle-large">
          Less important destructive actions.<br>A warning in form of a <strong><i>Modal</i></strong> is necessary to prevent an unexpected outcome.
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--destructive 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Confirmative Actions

Buttons for confirmative actions are available with three levels of emphasis and two varations in style. Primary and Secondary Buttons are available with a leading decoration.

#### Levels of emphasis
- Primary (Filled)
- Secondary (Outline)
- Tertiary (Text, Success)


#### Light Theme

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer"></div>
    <div>
      <div class="demo-label">
        Default
      </div>
      <div class="demo-label">
        Decoration Left
      </div>
      <div class="demo-label">
        Decoration Right
      </div>
      <div class="demo-label">
        Disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary</div>
        <div class="demo-subtitle">
          A successful outcome of the action is guaranteed
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Secondary</div>
        <div class="demo-subtitle">
          Preferred positive actions with medium emphasis
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--secondary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--secondary">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--secondary">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary</div>
        <div class="demo-subtitle">
          Less important actions
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

#### Dark Theme

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
  <div class="olt-Grid-item olt-Grid-item--3">
    <div class="demo-spacer"></div>
    <div>
      <div class="demo-label">
        Default
      </div>
      <div class="demo-label">
        Decoration Left
      </div>
      <div class="demo-label">
        Decoration Right
      </div>
      <div class="demo-label">
        Disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary</div>
        <div class="demo-subtitle">
          A successful outcome of the action is guaranteed
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Secondary</div>
        <div class="demo-subtitle">
          Preferred positive actions with medium emphasis
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--secondary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Tertiary</div>
        <div class="demo-subtitle">
          Less important actions
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <button 
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-left="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                data-icon-right="add"
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
            <div class="demo-content">
              <button 
                disabled
                class="
                    olt-V2Button 
                    olt-V2Button--confirmative 
                    olt-V2Button--tertiary 
                    olt-V2Button--dark">Label</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Emphasis

Buttons can have the following modifiers to indicate its emphasis: `olt-V2Button--primary` (default), `olt-V2Button--secondary` and `olt-V2Button--tertiary`.

```emphasis.html
<button class="olt-V2Button olt-V2Button--primary">Label</button>
<button class="olt-V2Button olt-V2Button--secondary">Label</button>
<button class="olt-V2Button olt-V2Button--tertiary">Label</button>
```

## Theme

Buttons support two different themes: `olt-V2Button--light` (default) and `olt-V2Button--dark`.

```theme.html
<div class="olt-Card">
  <div class="olt-Card-content">
    <button class="olt-V2Button olt-V2Button--secondary olt-V2Button--light">Label</button>
  </div>
</div>
<div class="olt-Card olt-Card--dark olt-u-marginTop4">
  <div class="olt-Card-content">
    <button class="olt-V2Button olt-V2Button--secondary olt-V2Button--dark">Label</button>
  </div>
</div>
```

## Types

Besides `emphasis` and `theme` a buttons `type` plays a major role for its appearance. There are four modifiers `olt-V2Button--default` (default),  `olt-V2Button--desctructive`, `olt-V2Button--confirmative` and `olt-V2Button--action`. The latter `olt-V2Button--action` is only available in combination with `olt-V2Button--tertiary` (tertiary emphasis).

```types.html
<button class="olt-V2Button olt-V2Button--default">Default</button>
<button class="olt-V2Button olt-V2Button--confirmative">Confirmative</button>
<button class="olt-V2Button olt-V2Button--destructive">Desctructive</button>
<button class="olt-V2Button olt-V2Button--tertiary olt-V2Button--action">Action</button>
```

## Disabled

Use the `disabled` attribute to disable buttons.

```disabled.html
<button class="olt-V2Button olt-V2Button--default" disabled>Default</button>
```

## Decorations

To show decorations inside a button, use the `data-icon-left` and `data-icon-right` attribute. This will show an icon on the left or right of the label.

```decorations.html
<button class="olt-V2Button olt-V2Button--default" data-icon-left="add">Default</button>
<button class="olt-V2Button olt-V2Button--default" data-icon-right="add">Default</button>
<button class="olt-V2Button olt-V2Button--secondary" data-icon-left="add">Default</button>
<button class="olt-V2Button olt-V2Button--secondary" data-icon-right="add">Default</button>
<button class="olt-V2Button olt-V2Button--tertiary" data-icon-right="add">Default</button>
```