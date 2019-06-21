---
name: Font Size
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]fontSize{XxSmall|XSmall|Small|Medium|Large|XLarge|XxLarge|Smaller|Larger}`

## Description

Font Size utility sets `font-size` CSS property to match our pre-defined 
sizes. 

| Class name              | CSS properties      |
|:------------------------|:--------------------|
| `olt-u-fontSizeXxSmall` | `font-size: 10.4px` |
| `olt-u-fontSizeXSmall`  | `font-size: 12px`   |
| `olt-u-fontSizeSmall`   | `font-size: 12.8px` |
| `olt-u-fontSizeMedium`  | `font-size: 16px`   |
| `olt-u-fontSizeLarge`   | `font-size: 24px`   |
| `olt-u-fontSizeXLarge`  | `font-size: 28.8px` |
| `olt-u-fontSizeXxLarge` | `font-size: 35.2px` |
| `olt-u-fontSizeSmaller` | `font-size: 80%;`   |
| `olt-u-fontSizeLarger`  | `font-size: 150%;`  |

```example.html
<div class="olt-u-fontSizeXxSmall">XxSmall</div>
<div class="olt-u-fontSizeXSmall">XSmall</div>
<div class="olt-u-fontSizeSmall">Small</div>
<div class="olt-u-fontSizeMedium">Medium</div>
<div class="olt-u-fontSizeLarge">Large</div>
<div class="olt-u-fontSizeXLarge">XLarge</div>
<div class="olt-u-fontSizeXxLarge">XxLarge</div>
<div class="olt-u-fontSizeSmaller">Smaller</div>
<div class="olt-u-fontSizeLarger">Larger</div>
```

## Responsive

Font size utility becomes very handy, when used in a combination with the 
default screen [prefixes](/#screen) :

| Prefix | Example                    | Description                                                                      |
|:------:|:---------------------------|:---------------------------------------------------------------------------------|
|     xs | `olt-u-xs-fontSizeXxSmall` | Will set `font-size: 10.4px` on the element when rendered on extra small screen  |
|     sm | `olt-u-sm-fontSizeXSmall`  | Will set `font-size: 12px` on the element when rendered on a small screen        |
|     md | `olt-u-md-fontSizeMedium`  | Will set `font-size: 16px` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-fontSizeLarge`   | Will set `font-size: 24px` on the element when rendered on a large screen        |
|     xl | `olt-u-xl-fontSizeXLarge`  | Will set `font-size: 28.8px` on the element when rendered on extra large screen  |


