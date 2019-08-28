---
name: Chip
category: Component
---

## Description

_Chip_ can be used with `<span>` elements and and occupy the `olt-Chip*` class
names.

---

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
        Count
      </div>
      <div class="demo-label">
        Count + Decoration Left
      </div>
      <div class="demo-label">
        Shortened
      </div>
    </div>
    <div class="demo-spacer--small"></div>
    <div>
      <div class="demo-label">
        Selectable
      </div>
      <div class="demo-label">
        Disabled
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Default</div>
        <div class="demo-subtitle">
          Tags, Attributes, Filters <br />
          Clickable but no Call To Action
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <span class="olt-Chip">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip" data-icon-left="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip" data-icon-right="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--withBubble">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--withBubble" data-icon-left="add">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip">Lore...sum</span>
            </div>
            <div class="demo-spacer--small"></div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--selectable">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip is-disabled">Disabled</span>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Dark</div>
        <div class="demo-subtitle">
          Medium Emphasis <br />
          Tags, Attributes, Filters <br />
          Clickable but no Call To Action
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark" data-icon-left="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark" data-icon-right="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark olt-Chip--withBubble">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark olt-Chip--withBubble" data-icon-left="add">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark">Lore...sum</span>
            </div>
            <div class="demo-spacer--small"></div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark olt-Chip--selectable">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--dark is-disabled">Disabled</span>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Light</div>
        <div class="demo-subtitle">
          Medium Emphasis <br />
          Tags, Attributes, Filters <br />
          Clickable but no Call To Action
        </div>
        <div class="olt-Card olt-Card--dark">
          <div class="olt-Card-content">
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light" data-icon-left="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light" data-icon-right="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light olt-Chip--withBubble">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light olt-Chip--withBubble" data-icon-left="add">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light">Lore...sum</span>
            </div>
            <div class="demo-spacer--small"></div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light olt-Chip--selectable">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--light is-disabled">Disabled</span>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--3">
        <div class="demo-title">Primary / Active</div>
        <div class="demo-subtitle">
          Medium emphasis <br />
          Active Tags, Attributes, Filters <br />
          Clickable but no CTA
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary" data-icon-left="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary" data-icon-right="add">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary olt-Chip--withBubble">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary olt-Chip--withBubble" data-icon-left="add">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary">Lore...sum</span>
            </div>
            <div class="demo-spacer--small"></div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary olt-Chip--selectable">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--primary is-disabled">Disabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

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
        Count
      </div>
      <div class="demo-label">
        Count + Decoration Left
      </div>
      <div class="demo-label">
        Shortened
      </div>
    </div>
  </div>
  <div class="olt-Grid-item olt-Grid-item--9">
    <div class="olt-Grid">
      <div class="olt-Grid-item olt-Grid-item--4">
        <div class="demo-title">
          Error
        </div>
        <div class="demo-subtitle">
          Negative Emphasis <br />
          No destructive CTA <br />
          Not Clickable
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--error">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--error" data-icon-left="close">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--error olt-Chip--withBubble">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--error olt-Chip--withBubble" data-icon-left="close">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--error">Lore...sum</span>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--4">
        <div class="demo-title">Success</div>
        <div class="demo-subtitle">
          Positive Emphasis <br />
          No confirmative CTA<br />
          Not Clickable
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--success">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--success" data-icon-left="check">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--success olt-Chip--withBubble">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--success olt-Chip--withBubble" data-icon-left="check">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--success">Lore...sum</span>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-Grid-item olt-Grid-item--4">
        <div class="demo-title">Info</div>
        <div class="demo-subtitle">
          Neutral Emphasis<br/>
          Important Notes & Announcements<br/>
          Not Clickable
        </div>
        <div class="olt-Card">
          <div class="olt-Card-content">
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--info">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--info" data-icon-left="info">Label</span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--info olt-Chip--withBubble">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--info olt-Chip--withBubble" data-icon-left="info">
                Label
                <span class="olt-Chip-bubble">42</span>
              </span>
            </div>
            <div class="demo-content">
              <span class="olt-Chip olt-Chip--info">Lore...sum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

```chip.html
<span class="olt-Chip">Label</span>
```

## Colors

_Chip_ can be rendered with different colors by adding one of the following
modifiers :

- `--dark`
- `--light`
- `--primary/--active`
- `--error`
- `--success`
- `--info`

```colors.html
<span class="olt-Chip">Default</span>
<span class="olt-Chip olt-Chip--dark">Dark</span>
<span class="olt-Chip olt-Chip--primary">Primary</span>
<span class="olt-Chip olt-Chip--active">Active</span>
<span class="olt-Chip olt-Chip--error">Error</span>
<span class="olt-Chip olt-Chip--success">Success</span>
<span class="olt-Chip olt-Chip--info">Info</span>
```

## Variations

### Disabled

_Chips_ which are not `--error`, `--success` or `--info` can have the `is-disabled`
state which will make them disabled

```disabled.html
<span class="olt-Chip">Default</span>
<span class="olt-Chip is-disabled">Default Disabled</span>
<br/><br />
<span class="olt-Chip olt-Chip--dark">Dark</span>
<span class="olt-Chip olt-Chip--dark is-disabled">Dark Disabled</span>
<br/><br />
<span class="olt-Chip olt-Chip--primary">Primary</span>
<span class="olt-Chip olt-Chip--primary is-disabled">Primary Disabled</span>
```

### Selectable

_Chips_ which are not `--error`, `--success` or `--info` can have the `--selectable`
modifier which will make them selectable

```selectable.html
<span class="olt-Chip">Default</span>
<span class="olt-Chip olt-Chip--selectable">Default Selectable</span>
<br/><br />
<span class="olt-Chip olt-Chip--dark">Dark</span>
<span class="olt-Chip olt-Chip--dark olt-Chip--selectable">Dark Selectable</span>
<br/><br />
<span class="olt-Chip olt-Chip--primary">Primary</span>
<span class="olt-Chip olt-Chip--primary olt-Chip--selectable">Primary Selectable</span>
```

## Decorations

### Icons

Each _Chip_ can have an icon rendered on the left or on the right side by adding
`data-icon-left` or `data-icon-right` attribute to the component's class names.

```icons.html
<span class="olt-Chip" data-icon-left="add">Default</span>
<span class="olt-Chip olt-Chip--dark" data-icon-left="add">Dark</span>
<span class="olt-Chip olt-Chip--primary" data-icon-left="add">Primary</span>
<span class="olt-Chip olt-Chip--error" data-icon-left="add">Error</span>
<span class="olt-Chip olt-Chip--success" data-icon-left="add">Success</span>
<span class="olt-Chip olt-Chip--info" data-icon-left="add">Info</span>
<br />
<br />
<span class="olt-Chip" data-icon-right="add">Default</span>
<span class="olt-Chip olt-Chip--dark" data-icon-right="add">Dark</span>
<span class="olt-Chip olt-Chip--primary" data-icon-right="add">Primary</span>
<span class="olt-Chip olt-Chip--error" data-icon-right="add">Error</span>
<span class="olt-Chip olt-Chip--success" data-icon-right="add">Success</span>
<span class="olt-Chip olt-Chip--info" data-icon-right="add">Info</span>
```

### Bubble

Each _Chip_ can have an additional bubble rendered on the top right side by
adding `--withBubble` modifier and a descendant `-bubble` component inside the
_Chip_.

```bubbles.html
<span class="olt-Chip olt-Chip--withBubble">
  Default
  <span class="olt-Chip-bubble">42</span>
</span>
<span class="olt-Chip olt-Chip--dark olt-Chip--withBubble">
  Dark
  <span class="olt-Chip-bubble">42</span>
</span>
<span class="olt-Chip olt-Chip--primary olt-Chip--withBubble">
  Primary
  <span class="olt-Chip-bubble">42</span>
</span>
<span class="olt-Chip olt-Chip--error olt-Chip--withBubble">
  Error
  <span class="olt-Chip-bubble">42</span>
</span>
<span class="olt-Chip olt-Chip--success olt-Chip--withBubble">
  Success
  <span class="olt-Chip-bubble">42</span>
</span>
<span class="olt-Chip olt-Chip--info olt-Chip--withBubble">
  Info
  <span class="olt-Chip-bubble">42</span>
</span>
```

The _Chip_'s bubble can also be an icon by adding `data-icon` to the bubble
element.

```bubble-icons.html
<span class="olt-Chip olt-Chip--withBubble">
  Default
  <span class="olt-Chip-bubble" data-icon="add"></span>
</span>
<span class="olt-Chip olt-Chip--dark olt-Chip--withBubble">
  Dark
  <span class="olt-Chip-bubble" data-icon="add"></span>
</span>
<span class="olt-Chip olt-Chip--primary olt-Chip--withBubble">
  Primary
  <span class="olt-Chip-bubble" data-icon="add"></span>
</span>
<span class="olt-Chip olt-Chip--error olt-Chip--withBubble">
  Error
  <span class="olt-Chip-bubble" data-icon="add"></span>
</span>
<span class="olt-Chip olt-Chip--success olt-Chip--withBubble">
  Success
  <span class="olt-Chip-bubble" data-icon="add"></span>
</span>
<span class="olt-Chip olt-Chip--info olt-Chip--withBubble">
  Info
  <span class="olt-Chip-bubble" data-icon="add"></span>
</span>
```

Bubble's colors can also be fixed with one of the additional modifier for the
bubble's element. They only work with the default _Chip_.

- `olt-Chip-bubble--info`
- `olt-Chip-bubble--success`
- `olt-Chip-bubble--warning`
- `olt-Chip-bubble--error`

```bubble-colors.html
<span class="olt-Chip olt-Chip--withBubble">
  Info with icon
  <span class="olt-Chip-bubble olt-Chip-bubble--info" data-icon="add"></span>
</span>
<span class="olt-Chip olt-Chip--withBubble">
  Success with counter
  <span class="olt-Chip-bubble olt-Chip-bubble--success">42</span>
</span>
<span class="olt-Chip olt-Chip--withBubble">
  Warning with icon
  <span class="olt-Chip-bubble olt-Chip-bubble--warning" data-icon="add"></span>
</span>
<span class="olt-Chip olt-Chip--withBubble">
  Error with icon
  <span class="olt-Chip-bubble olt-Chip-bubble--error" data-icon="add"></span>
</span>
```
