---
name: Tooltip
category: Component
---

# Tooltip

Tooltips can be used to display additional information to a user, when hovering over an element.

```1.css
body {
  margin-top: 110px;
}
```
```1.html
<div class="olt-Tooltip">
    <button class="olt-Button olt-Button--outline olt-Button--primary">
      Normal Tooltip
    </button>
    <div class="olt-Tooltip-content">
        <span>Tooltip</span>
    </div>
</div>

<div class="olt-Tooltip">
    <button class="olt-Button olt-Button--outline olt-Button--primary">
      Long Tooltip
    </button>
    <div class="olt-Tooltip-content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </div>
</div>
```

## Bottom Tooltip

```bottom.html
<div class="olt-Tooltip olt-Tooltip--bottom">
    <button class="olt-Button olt-Button--outline olt-Button--primary">
      Normal Tooltip
    </button>
    <div class="olt-Tooltip-content">
        <span>Tooltip</span>
    </div>
</div>

<div class="olt-Tooltip olt-Tooltip--bottom">
    <button class="olt-Button olt-Button--outline olt-Button--primary">
      Long Tooltip
    </button>
    <div class="olt-Tooltip-content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </div>
</div>
```
