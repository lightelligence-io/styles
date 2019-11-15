---
name: Floating List
category: Content
---

## Description

A *Floating List* allows to display a list of items with a gap inbetween them.

```example-1.html
<div class="olt-FloatingList">
  <div class="olt-FloatingList-items">
    <div class="olt-Chip">Developer</div>
    <div class="olt-Chip">Admin</div>
    <div class="olt-Chip">Manager</div>
  </div>
</div>
```

Items are floating horizontally in general, but they can wrap. In such a case the gap is also applied vertically.

```example-2.html
<div class="olt-FloatingList" style="width:200px; background-color: #ff6600; padding:5px;">
  <div class="olt-FloatingList-items">
    <div class="olt-Chip">Developer</div>
    <div class="olt-Chip">Admin</div>
    <div class="olt-Chip">Manager</div>
  </div>
</div>
```

## Modifiers

### Adjust the gap size

Normally a list uses the value of `spacer1` as a gap between elements. The `--gap{size}` modifiers allow to change the default behaviour. It supports values between 0 and 8 for `size`.

```example-3.html
<div class="olt-FloatingList olt-FloatingList--gap4" style="width:200px; background-color: #ff6600; padding:5px;">
  <div class="olt-FloatingList-items">
    <div class="olt-Chip">Developer</div>
    <div class="olt-Chip">Admin</div>
    <div class="olt-Chip">Manager</div>
  </div>
</div>
```

### Change Alignment

By default all items are left aligned or in flex terms the content is positioned at flex-start. This can be changed with the `--justifyEnd` modifier.

```example-4.html
<div class="olt-FloatingList olt-FloatingList--justifyEnd" style="width:200px; background-color: #ff6600; padding:5px;">
  <div class="olt-FloatingList-items">
    <div class="olt-Chip">Developer</div>
    <div class="olt-Chip">Admin</div>
    <div class="olt-Chip">Manager</div>
  </div>
</div>
```

