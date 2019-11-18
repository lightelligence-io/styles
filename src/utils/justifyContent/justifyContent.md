---
name: Justify Content
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]justifyContent{Start|Center|End|Between|Around|Evenly}`

## Description

Justify Content utility sets `justify-content` CSS property. It can be used
with [Flex Utility](/#flex) to create
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
layouts.

| Class name                    | CSS properties                   |
|:------------------------------|:---------------------------------|
| `olt-u-justifyContentStart`   | `justify-content: flex-start`    |
| `olt-u-justifyContentCenter`  | `justify-content: center`        |
| `olt-u-justifyContentEnd`     | `justify-content: flex-end`      |
| `olt-u-justifyContentBetween` | `justify-content: space-between` |
| `olt-u-justifyContentAround`  | `justify-content: space-around`  |
| `olt-u-justifyContentEvenly`  | `justify-content: space-evenly`  |

```example.html
<div class="olt-u-displayFlex olt-u-justifyContentCenter">
  <div>Justify content centered</div>
  <div style="height: 200px" class="olt-u-border olt-u-padding16">
    Large item
  </div>
</div>
```

## Responsive

Justify Content utility becomes very handy, when used in a combination with the
default screen [prefixes](/#screen) :

| Prefix | Example                          | Description                                                                               |
|:------:|:---------------------------------|:------------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-justifyContentStart`   | Will set `justify-content: start` on the element when rendered on extra small screen      |
|     sm | `olt-u-sm-justifyContentEnd`     | Will set `justify-content: end` on the element when rendered on a small screen            |
|     md | `olt-u-md-justifyContentBetween` | Will set `justify-content: between` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-justifyContentEnd`     | Will set `justify-content: end` on the element when rendered on a large screen            |
|     xl | `olt-u-xl-justifyContentStart`   | Will set `justify-content: start` on the element when rendered on extra large screen      |

