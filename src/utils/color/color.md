---
name: Color
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]color{Primary|Secondary|Info|Error|Success}`

## Description

Color utility can be used to set `color` property of
an element. It is helpful when you want to use one of the default colors on
a custom HTML element. It is similar to [Background Color](/#background-color)
utility.

It supports all of our [conceptual colors](/#concepts-colors) :

| Class name             | Sets color to                                                  |
|:-----------------------|:---------------------------------------------------------------|
| `olt-u-colorPrimary`   | <div class="olt-u-backgroundColorPrimary demo-circle"></div>   |
| `olt-u-colorSecondary` | <div class="olt-u-backgroundColorSecondary demo-circle"></div> |
| `olt-u-colorInfo`      | <div class="olt-u-backgroundColorInfo demo-circle"></div>      |
| `olt-u-colorWarning`   | <div class="olt-u-backgroundColorWarning demo-circle"></div>   |
| `olt-u-colorError`     | <div class="olt-u-backgroundColorError demo-circle"></div>     |
| `olt-u-colorSuccess`   | <div class="olt-u-backgroundColorSuccess demo-circle"></div>   |
| `olt-u-colorGray100`   | <div class="olt-u-backgroundColorGray100 demo-circle"></div>   |
| `olt-u-colorGray200`   | <div class="olt-u-backgroundColorGray200 demo-circle"></div>   |
| `olt-u-colorGray300`   | <div class="olt-u-backgroundColorGray300 demo-circle"></div>   |
| `olt-u-colorGray400`   | <div class="olt-u-backgroundColorGray400 demo-circle"></div>   |
| `olt-u-colorGray500`   | <div class="olt-u-backgroundColorGray500 demo-circle"></div>   |
| `olt-u-colorGray600`   | <div class="olt-u-backgroundColorGray600 demo-circle"></div>   |
| `olt-u-colorGray700`   | <div class="olt-u-backgroundColorGray700 demo-circle"></div>   |
| `olt-u-colorGray800`   | <div class="olt-u-backgroundColorGray800 demo-circle"></div>   |
| `olt-u-colorGray900`   | <div class="olt-u-backgroundColorGray900 demo-circle"></div>   |

```examples.html
<div class="olt-u-colorPrimary olt-u-padding8 olt-u-marginBottom2">Primary</div>
<div class="olt-u-colorSecondary olt-u-padding8 olt-u-marginBottom2">Secondary</div>
<div class="olt-u-colorInfo olt-u-padding8 olt-u-marginBottom2">Info</div>
<div class="olt-u-colorError olt-u-padding8 olt-u-marginBottom2">Error</div>
<div class="olt-u-colorSuccess olt-u-padding8 olt-u-marginBottom2">Success</div>
```

## Responsive

*Color* can also be used with the default screen [prefixes](/#screen) :

| Prefix | Example                   | Description                                                                       |
|:------:|:--------------------------|:----------------------------------------------------------------------------------|
|     xs | `olt-u-xs-colorPrimary`   | Will set primary the color on the element when rendered on extra small screen     |
|     sm | `olt-u-sm-colorSecondary` | Will set secondary the color on the element when rendered on a small screen       |
|     md | `olt-u-md-colorPrimary`   | Will set primary the color on the element when rendered on a medium sized screen  |
|     lg | `olt-u-lg-colorError`     | Will set error the color on the element when rendered on a large screen           |
|     xl | `olt-u-xl-colorInfo`      | Will set info the color on the element when rendered on extra large screen        |


