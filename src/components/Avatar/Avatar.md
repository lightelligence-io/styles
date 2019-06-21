---
name: Avatar
category: Component
---

## Description

Avatars can be used with `<i>` elements and occupy the `olt-Avatar*` class
names.

The default avatar is primary color while size adopts to current font-size.

```avatar.html
<i class="olt-Avatar">A</i>
```

## Colors

The *Avatar* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

```colors.html
<i class="olt-Avatar olt-Avatar--primary">1</i>
<i class="olt-Avatar olt-Avatar--secondary">2</i>
<i class="olt-Avatar olt-Avatar--error">E</i>
<i class="olt-Avatar olt-Avatar--success">S</i>
<i class="olt-Avatar olt-Avatar--info">I</i>
<i class="olt-Avatar olt-Avatar--dark">D</i>
```

## Sizes

To change the size of the *Avatar* you can use the size modifiers. We currently
support :

- `small`
- `medium`
- `large`

```sizes.html
<i class="olt-Avatar olt-Avatar--small">S</i>
<i class="olt-Avatar olt-Avatar--medium">M</i>
<i class="olt-Avatar olt-Avatar--large">L</i>
```

## Preset modifiers

There are also two pre-configured aliases for semantic class naming :

1. `olt-Avatar--user` which is the same as `olt-Avatar-primary`
2. `olt-Avatar--tenant` which is the same as `olt-Avatar-info`

```presets.html
<i class="olt-Avatar olt-Avatar--user olt-Avatar--medium">U</i>
<i class="olt-Avatar olt-Avatar--tenant olt-Avatar--medium">T</i>
```
