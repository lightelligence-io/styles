---
name: Display
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]display{None|Inline|InlineBlock|Block|Table|TableRow|TableCell|Flex|InlineFlex}`

## Description

Display utility can be used to set `display` property of an element. It can
be used to hide, inline elements or to create a 
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
wrapper for other elements.

| Class name                 | CSS properties          |
|:---------------------------|:------------------------|
| `olt-u-displayNone`        | `display: none`         |
| `olt-u-displayInline`      | `display: inline`       |
| `olt-u-displayInlineBlock` | `display: inline-block` |
| `olt-u-displayBlock`       | `display: block`        |
| `olt-u-displayTable`       | `display: table`        |
| `olt-u-displayTableRow`    | `display: table-row`    |
| `olt-u-displayTableCell`   | `display: table-cell`   |
| `olt-u-displayFlex`        | `display: flex`         |
| `olt-u-displayInlineFlex`  | `display: inline-flex`  |

## Responsive

Display utility becomes very handy, when used in a combination with the default 
screen [prefixes](/#screen) :

| Prefix | Example                  | Description                                                                     |
|:------:|:-------------------------|:--------------------------------------------------------------------------------|
|     xs | `olt-u-xs-displayNone`   | Will set `display: none` on the element when rendered on extra small screen     |
|     sm | `olt-u-sm-displayInline` | Will set `display: inline` on the element when rendered on a small screen       |
|     md | `olt-u-md-displayBlock`  | Will set `display: block` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-displayFlex`   | Will set `display: flex` on the element when rendered on a large screen         |
|     xl | `olt-u-xl-displayNone`   | Will set `display: none` on the element when rendered on extra large screen     |

> Note: You can open the example in an external tab by clicking the *Example*
> button on top left.

```example.html
<div class="olt-u-lg-displayNone">This element is hidden on desktop</div>
<div class="olt-u-displayNone olt-u-sm-displayBlock">This element is hidden on mobile</div>
```
