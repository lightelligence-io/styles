---
name: Padding
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]padding{Top|Right|Bottom|Left|X|Y}{<size>}`

`size`= 0|1|2|4|8|16|24|32|48|72|96


Padding utility sets `padding` CSS property

| Class name             | CSS properties                             |
|:-----------------------|:-------------------------------------------|
| `olt-u-padding4`       | `padding: 4px;`                            |
| `olt-u-paddingTop8`    | `padding-top: 8px;`                        |
| `olt-u-paddingRight96` | `padding-right: 96px;`                     |
| `olt-u-paddingBottom8` | `padding-bottom: 8px;`                     |
| `olt-u-paddingLeft16`  | `padding-left: 16px;`                      |
| `olt-u-paddingX16`     | `padding-left: 16px; padding-right: 16px;` |
| `olt-u-paddingY16`     | `padding-top: 16px; padding-bottom: 16px;` |

Allowed sizes are 0, 1, 2, 4, 8, 16, 24, 32, 48, 72, 96.

```example.html
<section class="olt-u-padding24 olt-u-border">
  <p class="olt-Paragraph">Some content</p>
</section>
```

## Responsive

Margin can also be used with the default screen [prefixes](/#screen), where
it can be very handy :

| Prefix | Example                   | Description                                                                                               |
|:------:|:--------------------------|:----------------------------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-padding8`       | Will set `padding: 8px` on the element when rendered on extra small screen                                |
|     sm | `olt-u-sm-paddingTop16`   | Will set `padding-top: 16px;` on the element when rendered on a small screen                              |
|     md | `olt-u-md-paddingX24`     | Will set `padding-left: 24px; padding-right: 24px;` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-paddingBottom16`| Will set `padding-bottom: 16px;` to the element when rendered on a large screen                           |
|     xl | `olt-u-xl-paddingLeft4`   | Will set `padding-left: 4px;` to the element when rendered on extra large screen                          |

```responsive.html
<section class="olt-u-padding8 olt-u-sm-padding24 olt-u-lg-padding24 olt-u-border">
  <p class="olt-Paragraph">Small padding on mobile</p>
  <p class="olt-Paragraph">Medium padding on tablet</p>
  <p class="olt-Paragraph">Large padding on desktop</p>
</section>
```
