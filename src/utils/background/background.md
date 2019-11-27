---
name: Background Color
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]backgroundColor{Primary|Secondary|Info|Error|Success}`

## Description

Background Color utility can be used to set `background-color` property of
an element. It is helpful when you want to use one of the default colors on
a custom HTML element.

It supports all of our [conceptual colors](/#concepts-colors) :

| Class name                       | Sets background color to                                     |
|:---------------------------------|:-------------------------------------------------------------|
| `olt-u-backgroundColorPrimary`   | <div class="olt-u-backgroundColorPrimary demo-circle"></div> |
| `olt-u-backgroundColorSecondary` | <div class="olt-u-backgroundColorSecondary demo-circle"></div>|
| `olt-u-backgroundColorInfo`      | <div class="olt-u-backgroundColorInfo demo-circle"></div>    |
| `olt-u-backgroundColorError`     | <div class="olt-u-backgroundColorError demo-circle"></div>   |
| `olt-u-backgroundColorSuccess`   | <div class="olt-u-backgroundColorSuccess demo-circle"></div> |
| `olt-u-backgroundColorGray100`   | <div class="olt-u-backgroundColorGray100 demo-circle"></div> |
| `olt-u-backgroundColorGray200`   | <div class="olt-u-backgroundColorGray200 demo-circle"></div> |
| `olt-u-backgroundColorGray300`   | <div class="olt-u-backgroundColorGray300 demo-circle"></div> |
| `olt-u-backgroundColorGray400`   | <div class="olt-u-backgroundColorGray400 demo-circle"></div> |
| `olt-u-backgroundColorGray500`   | <div class="olt-u-backgroundColorGray500 demo-circle"></div> |
| `olt-u-backgroundColorGray600`   | <div class="olt-u-backgroundColorGray600 demo-circle"></div> |
| `olt-u-backgroundColorGray700`   | <div class="olt-u-backgroundColorGray700 demo-circle"></div> |
| `olt-u-backgroundColorGray800`   | <div class="olt-u-backgroundColorGray800 demo-circle"></div> |
| `olt-u-backgroundColorGray900`   | <div class="olt-u-backgroundColorGray900 demo-circle"></div> |

```examples.html
<div class="olt-u-backgroundColorPrimary olt-u-padding8 olt-u-marginBottom2">Primary</div>
<div class="olt-u-backgroundColorSecondary olt-u-colorLight olt-u-padding8 olt-u-marginBottom2">Secondary</div>
<div class="olt-u-backgroundColorInfo olt-u-padding8 olt-u-marginBottom2">Info</div>
<div class="olt-u-backgroundColorError olt-u-padding8 olt-u-marginBottom2">Error</div>
<div class="olt-u-backgroundColorSuccess olt-u-padding8 olt-u-marginBottom2">Success</div>
<div class="olt-u-backgroundColorGray100 olt-u-padding8 olt-u-marginBottom2">Gray 100</div>
<div class="olt-u-backgroundColorGray200 olt-u-padding8 olt-u-marginBottom2">Gray 200</div>
<div class="olt-u-backgroundColorGray300 olt-u-padding8 olt-u-marginBottom2">Gray 300</div>
<div class="olt-u-backgroundColorGray400 olt-u-padding8 olt-u-marginBottom2">Gray 400</div>
<div class="olt-u-backgroundColorGray500 olt-u-padding8 olt-u-marginBottom2">Gray 500</div>
<div class="olt-u-backgroundColorGray600 olt-u-colorLight olt-u-padding8 olt-u-marginBottom2">Gray 600</div>
<div class="olt-u-backgroundColorGray700 olt-u-colorLight olt-u-padding8 olt-u-marginBottom2">Gray 700</div>
<div class="olt-u-backgroundColorGray800 olt-u-colorLight olt-u-padding8 olt-u-marginBottom2">Gray 800</div>
<div class="olt-u-backgroundColorGray900 olt-u-colorLight olt-u-padding8 olt-u-marginBottom2">Gray 900</div>
```

## Responsive

Background color can also be used with the default screen [prefixes](/#screen) :

| Prefix | Example                             | Description                                                                              |
|:------:|:------------------------------------|:-----------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-backgroundColorPrimary`   | Will set primary background color on the element when rendered on extra small screen     |
|     sm | `olt-u-sm-backgroundColorSecondary` | Will set secondary background color on the element when rendered on a small screen       |
|     md | `olt-u-md-backgroundColorPrimary`   | Will set primary background color on the element when rendered on a medium sized screen  |
|     lg | `olt-u-lg-backgroundColorError`     | Will set error background color on the element when rendered on a large screen           |
|     xl | `olt-u-xl-backgroundColorInfo`      | Will set info background color on the element when rendered on extra large screen        |

