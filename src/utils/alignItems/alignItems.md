---
name: Align Items
category: Utilities
---

## Syntax

`olt-u-[sm-|lg-|md-|xl-]alignItems{Start|Center|End|Stretch|Baseline}`

## Description

Align items utility can be used to set the `align-items` property of an
element. It is helpful for making custom
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
layouts.

| Class name                 | CSS properties            |
|:---------------------------|:--------------------------|
| `olt-u-alignItemsStart`    | `align-items: flex-start` |
| `olt-u-alignItemsCenter`   | `align-items: center`     |
| `olt-u-alignItemsEnd`      | `align-items: flex-end`   |
| `olt-u-alignItemsStretch`  | `align-items: stretch`    |
| `olt-u-alignItemsBaseline` | `align-items: baseline`   |

## Responsive

Align items can also be used with the default screen [prefixes](/#screen) :

| Prefix | Example                     | Description                                                                              |
|:------:|:----------------------------|:-----------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-alignItemsStart`  | Will set `align-items: flex-start` on the element when rendered on extra small screen    |
|     sm | `olt-u-sm-alignItemsCenter` | Will set `align-items: center` on the element when rendered on a small screen            |
|     md | `olt-u-md-alignItemsStart`  | Will set `align-items: flex-start` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-alignItemsEnd`    | Will set `align-items: flex-end` on the element when rendered on a large screen          |
|     xl | `olt-u-xl-alignItemsStart`  | Will set `align-items: flex-start` on the element when rendered on extra large screen    |

```examples.html
<div class="olt-u-displayFlex olt-u-alignItemsCenter">
  <div class="olt-u-border olt-u-padding16">Small item<br />( in the middle )</div>
  <div style="height: 150px" class="olt-u-border olt-u-padding16">
    Large item
  </div>
</div>
```
