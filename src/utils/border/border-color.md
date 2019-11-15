---
name: Border Color
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]borderColor{Primary|Secondary|Info|Error|Success|Gray[100-900]}`

## Description

Border color utility can be used to set `border-color` property of an element.
Can be used in a combination with [Border](/#border) utility.

It supports all of our [conceptual colors](/#concepts-colors) :

| Class name                 | Sets border color to                                         |
|:---------------------------|:-------------------------------------------------------------|
| `olt-u-borderColorPrimary` | <div class="olt-u-backgroundColorPrimary demo-circle"></div> |
| `olt-u-borderColorInfo`    | <div class="olt-u-backgroundColorInfo demo-circle"></div>    |
| `olt-u-borderColorError`   | <div class="olt-u-backgroundColorError demo-circle"></div>   |
| `olt-u-borderColorSuccess` | <div class="olt-u-backgroundColorSuccess demo-circle"></div> |
| `olt-u-borderColorGray100` | <div class="olt-u-backgroundColorGray100 demo-circle"></div> |
| `olt-u-borderColorGray200` | <div class="olt-u-backgroundColorGray200 demo-circle"></div> |
| `olt-u-borderColorGray300` | <div class="olt-u-backgroundColorGray300 demo-circle"></div> |
| `olt-u-borderColorGray400` | <div class="olt-u-backgroundColorGray400 demo-circle"></div> |
| `olt-u-borderColorGray500` | <div class="olt-u-backgroundColorGray500 demo-circle"></div> |
| `olt-u-borderColorGray600` | <div class="olt-u-backgroundColorGray600 demo-circle"></div> |
| `olt-u-borderColorGray700` | <div class="olt-u-backgroundColorGray700 demo-circle"></div> |
| `olt-u-borderColorGray800` | <div class="olt-u-backgroundColorGray800 demo-circle"></div> |
| `olt-u-borderColorGray900` | <div class="olt-u-backgroundColorGray900 demo-circle"></div> |

```examples.html
<div class="olt-u-border olt-u-borderColorPrimary olt-u-padding8 olt-u-marginBottom2">Primary</div>
<div class="olt-u-border olt-u-borderColorSecondary olt-u-padding8 olt-u-marginBottom2">Secondary</div>
<div class="olt-u-border olt-u-borderColorInfo olt-u-padding8 olt-u-marginBottom2">Info</div>
<div class="olt-u-border olt-u-borderColorError olt-u-padding8 olt-u-marginBottom2">Error</div>
<div class="olt-u-border olt-u-borderColorSuccess olt-u-padding8 olt-u-marginBottom2">Success</div>
<div class="olt-u-border olt-u-borderColorGray100 olt-u-padding8 olt-u-marginBottom2">Gray 100</div>
<div class="olt-u-border olt-u-borderColorGray200 olt-u-padding8 olt-u-marginBottom2">Gray 200</div>
<div class="olt-u-border olt-u-borderColorGray300 olt-u-padding8 olt-u-marginBottom2">Gray 300</div>
<div class="olt-u-border olt-u-borderColorGray400 olt-u-padding8 olt-u-marginBottom2">Gray 400</div>
<div class="olt-u-border olt-u-borderColorGray500 olt-u-padding8 olt-u-marginBottom2">Gray 500</div>
<div class="olt-u-border olt-u-borderColorGray600 olt-u-padding8 olt-u-marginBottom2">Gray 600</div>
<div class="olt-u-border olt-u-borderColorGray700 olt-u-padding8 olt-u-marginBottom2">Gray 700</div>
<div class="olt-u-border olt-u-borderColorGray800 olt-u-padding8 olt-u-marginBottom2">Gray 800</div>
<div class="olt-u-border olt-u-borderColorGray900 olt-u-padding8 olt-u-marginBottom2">Gray 900</div>
```

## Responsive

Background color can also be used with the default screen [prefixes](/#screen) :

| Prefix | Example                         | Description                                                                          |
|:------:|:--------------------------------|:-------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-borderColorPrimary`   | Will set primary border color on the element when rendered on extra small screen     |
|     sm | `olt-u-sm-borderColorSecondary` | Will set secondary border color on the element when rendered on a small screen       |
|     md | `olt-u-md-borderColorPrimary`   | Will set primary border color on the element when rendered on a medium sized screen  |
|     lg | `olt-u-lg-borderColorError`     | Will set error border color on the element when rendered on a large screen           |
|     xl | `olt-u-xl-borderColorInfo`      | Will set info border color on the element when rendered on extra large screen        |


