---
name: Font Weight
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]fontWeight{Lighter|Normal|Bold|Bolder|Initial|100-900}`

## Description

Font Weight utility sets `font-weight` CSS property.

| Class name                | CSS properties          | Will render                                        |
|:--------------------------|:------------------------|:---------------------------------------------------|
| `olt-u-fontWeightLighter` | `font-weight: lighter;` | <div class="olt-u-fontWeightLighter">Lighter</div> |
| `olt-u-fontWeightNormal`  | `font-weight: 400;`     | <div class="olt-u-fontWeightNormal">Normal</div>   |
| `olt-u-fontWeightBold`    | `font-weight: 700;`     | <div class="olt-u-fontWeightBold">Bold</div>       |
| `olt-u-fontWeightBolder`  | `font-weight: bolder;`  | <div class="olt-u-fontWeightBolder">Bolder</div>   |
| `olt-u-fontWeightInitial` | `font-weight: 400;`     | <div class="olt-u-fontWeightInitial">Initial</div> |
| `olt-u-fontWeight100`     | `font-weight: 100;`     | <div class="olt-u-fontWeight100">100</div>         |
| `olt-u-fontWeight200`     | `font-weight: 200;`     | <div class="olt-u-fontWeight200">200</div>         |
| `olt-u-fontWeight300`     | `font-weight: 300;`     | <div class="olt-u-fontWeight300">300</div>         |
| `olt-u-fontWeight400`     | `font-weight: 400;`     | <div class="olt-u-fontWeight400">400</div>         |
| `olt-u-fontWeight500`     | `font-weight: 500;`     | <div class="olt-u-fontWeight500">500</div>         |
| `olt-u-fontWeight600`     | `font-weight: 600;`     | <div class="olt-u-fontWeight600">600</div>         |
| `olt-u-fontWeight700`     | `font-weight: 700;`     | <div class="olt-u-fontWeight700">700</div>         |
| `olt-u-fontWeight800`     | `font-weight: 800;`     | <div class="olt-u-fontWeight800">800</div>         |
| `olt-u-fontWeight900`     | `font-weight: 900;`     | <div class="olt-u-fontWeight900">900</div>         |

```example.html
<p class="olt-Paragraph olt-u-fontWeightBold">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<p>
<p class="olt-Paragraph olt-u-fontWeightLighter">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<p>
```

## Responsive

Font size utility becomes very handy, when used in a combination with the 
default screen [prefixes](/#screen) :

| Prefix | Example                      | Description                                                                        |
|:------:|:-----------------------------|:-----------------------------------------------------------------------------------|
|     xs | `olt-u-xs-fontWeightLighter` | Will set `font-weight: lighter` on the element when rendered on extra small screen |
|     sm | `olt-u-sm-fontWeightBold`    | Will set `font-weight: 700` on the element when rendered on a small screen         |
|     md | `olt-u-md-fontWeight700`     | Will set `font-weight: 700` on the element when rendered on a medium sized screen  |
|     lg | `olt-u-lg-fontWeightBolder`  | Will set `font-weight: bolder` on the element when rendered on a large screen      |
|     xl | `olt-u-xl-fontWeight200`     | Will set `font-weight: 200` on the element when rendered on extra large screen     |


