---
name: Icon
category: Component
---

## Description

The *Icon* component is an interface for 
[material icons](https://jossef.github.io/material-design-icons-iconfont/). This
component occupies `olt-Icon*` class names and can be used with `<i>` element.

Per default, icons adjust to current color and font-size.

```example.html
<i class="olt-Icon olt-Icon--action-cart"></i>
<i class="olt-Icon olt-Icon--action-copy"></i>
<i class="olt-Icon" data-icon="chevron_right"></i>
<i class="olt-Icon" data-icon="check"></i>
<i class="olt-Icon" data-icon="directions_walk"></i>
<i class="olt-Icon" data-icon="insert_emoticon"></i>
<i class="olt-Icon" data-icon="account_box"></i>
```

## Colors

The *Icon* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

```colors.html
<i class="olt-Icon olt-Icon--primary" data-icon="grade"></i>
<i class="olt-Icon olt-Icon--secondary" data-icon="grade"></i>
<i class="olt-Icon olt-Icon--error" data-icon="error"></i>
<i class="olt-Icon olt-Icon--success" data-icon="done"></i>
<i class="olt-Icon olt-Icon--info" data-icon="info"></i>
<i class="olt-Icon olt-Icon--dark" data-icon="grade"></i>
```

## Sizes

To change the size of the *Icon* you can use the size modifiers. For *Icon*
the modifiers are : 

- `small`
- `medium`
- `large`

```sizes.html
<i class="olt-Icon olt-Icon--small" data-icon="done"></i>
<i class="olt-Icon olt-Icon--medium" data-icon="done"></i>
<i class="olt-Icon olt-Icon--large" data-icon="done"></i>
```

You can also change the size of the icon with the 
[Font Size utility classes](/#font-size). You can use : 

- `olt-u-fontSizeXxSmall`
- `olt-u-fontSizeXSmall`
- `olt-u-fontSizeSmall`
- `olt-u-fontSizeMedium`
- `olt-u-fontSizeLarge`
- `olt-u-fontSizeXLarge`
- `olt-u-fontSizeXxLarge`

```font-size.html
<i class="olt-Icon olt-u-fontSizeXxSmall" data-icon="done"></i>
<i class="olt-Icon olt-u-fontSizeXSmall" data-icon="done"></i>
<i class="olt-Icon olt-u-fontSizeSmall" data-icon="done"></i>
<i class="olt-Icon olt-u-fontSizeMedium" data-icon="done"></i>
<i class="olt-Icon olt-u-fontSizeLarge" data-icon="done"></i>
<i class="olt-Icon olt-u-fontSizeXLarge" data-icon="done"></i>
<i class="olt-Icon olt-u-fontSizeXxLarge" data-icon="done"></i>
```
