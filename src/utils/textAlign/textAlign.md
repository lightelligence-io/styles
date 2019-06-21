---
name: Text Align
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]textAlign{Left|Center|Right|Justify|Initial}`

## Description

Text Align utility sets `text-align` CSS property. 

| Class name               | CSS properties        |
|:-------------------------|:----------------------|
| `olt-u-textAlignLeft`    | `text-align: left`    |
| `olt-u-textAlignCenter`  | `text-align: center`  |
| `olt-u-textAlignRight`   | `text-align: right`   |
| `olt-u-textAlignJustify` | `text-align: justify` |
| `olt-u-textAlignInitial` | `text-align: initial` |

```example.html
<p class="olt-Paragraph olt-u-textAlignLeft">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<p>
<p class="olt-Paragraph olt-u-textAlignCenter">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<p>
<p class="olt-Paragraph olt-u-textAlignRight">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<p>
<p class="olt-Paragraph olt-u-textAlignJustify">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<p>
```

## Responsive

Text Align utility can be used as well with the default screen 
[prefixes](/#screen) :

| Prefix | Example                     | Description                                                                        |
|:------:|:----------------------------|:-----------------------------------------------------------------------------------|
|     xs | `olt-u-xs-textAlignLeft`    | Will set `text-align: left` on the element when rendered on extra small screen     |
|     sm | `olt-u-sm-textAlignCenter`  | Will set `text-align: center` on the element when rendered on a small screen       |
|     md | `olt-u-md-textAlignRight`   | Will set `text-align: right` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-textAlignCenter`  | Will set `text-align: center` on the element when rendered on a large screen       |
|     xl | `olt-u-xl-textAlignJustify` | Will set `text-align: justify` on the element when rendered on extra large screen  |

