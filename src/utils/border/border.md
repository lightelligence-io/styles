---
name: Border
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]border[Top|Right|Bottom|Left][None]`

## Description

Border utility can be used to set `border` property of an element. It sets the
default border width and the default border color and can be easily combined
with [Border Color](/#border-color) utility.

> The default border-width is `1px` and the default border color is `#e3e4e5`

| Class name               | CSS Properties                      |
|:-------------------------|:------------------------------------|
| `olt-u-border`           | `border: 1px solid #E3E4E5;`        |
| `olt-u-borderTop`        | `border-top: 1px solid #E3E4E5;`    |
| `olt-u-borderRight`      | `border-right: 1px solid #E3E4E5;`  |
| `olt-u-borderBottom`     | `border-bottom: 1px solid #E3E4E5;` |
| `olt-u-borderLeft`       | `border-left: 1px solid #E3E4E5;`   |
| `olt-u-borderNone`       | `border: none;`                     |
| `olt-u-borderTopNone`    | `border-top: none;`                 |
| `olt-u-borderRightNone`  | `border-right: none;`               |
| `olt-u-borderBottomNone` | `border-bottom: none;`              |
| `olt-u-borderLeftNone`   | `border-left: none;`                |

```example.html
<div class="olt-u-border olt-u-padding8 olt-u-marginBottom2">An element with a border</div>
<div style="border: 1px solid blue" class="olt-u-borderNone">An element without border</div>
```

## Responsive

Border can also be used with the default screen [prefixes](/#screen) :

| Prefix | Example                     | Description                                                              |
|:------:|:----------------------------|:-------------------------------------------------------------------------|
|     xs | `olt-u-xs-border`           | Will set border on the element when rendered on extra small screen       |
|     sm | `olt-u-sm-borderTop`        | Will set top border the element when rendered on a small screen          |
|     md | `olt-u-md-borderNone`       | Will remove border of the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-borderBottomNone` | Will remove bottom border of the element when rendered on a large screen |
|     xl | `olt-u-xl-borderLeft`       | Will set left border on the element when rendered on extra large screen  |

