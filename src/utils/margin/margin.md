---
name: Margin
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]margin{Top|Right|Bottom|Left|X|Y}{<size>|Auto}`

`size`= 0|1|2|4|8|16|24|32|48|72|96

## Description

Margin utility sets `margin` CSS property

| Class name             | CSS properties                           |
|:-----------------------|:-----------------------------------------|
| `olt-u-margin4`        | `margin: 4px;`                           |
| `olt-u-marginTopAuto`  | `margin-top: auto;`                      |
| `olt-u-marginRight96`  | `margin-right: 96px;`                    |
| `olt-u-marginBottom8`  | `margin-bottom: 8px;`                    |
| `olt-u-marginLeftAuto` | `margin-left: auto;`                     |
| `olt-u-marginXAuto`    | `margin-left: auto; margin-right: auto;` |
| `olt-u-marginY16`      | `margin-top: 16px; margin-bottom: 16px;` |

Allowed sizes are 0, 1, 2, 4, 8, 16, 24, 32, 48, 72, 96.

```example.html
<section class="olt-u-border">
  <div class="olt-u-margin4">
    <p class="olt-Paragraph">Some content</p>
  </div>
</section>
```

## Responsive

Margin can also be used with the default screen [prefixes](/#screen), where
it can be very handy :

| Prefix | Example                  | Description                                                                                             |
|:------:|:-------------------------|:--------------------------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-margin8`       | Will set `margin: 8px` on the element when rendered on extra small screen                               |
|     sm | `olt-u-sm-marginTop16`   | Will set `margin-top: 16px;` on the element when rendered on a small screen                             |
|     md | `olt-u-md-marginXAuto`   | Will set `margin-left: auto; margin-right: auto;` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-marginBottom16`| Will set `margin-bottom: 16px;` to the element when rendered on a large screen                          |
|     xl | `olt-u-xl-marginLeft4`   | Will set `margin-left: 4px;` to the element when rendered on extra large screen                         |

```responsive.html
<section class="olt-u-border">
  <div class="olt-u-margin8 olt-u-sm-margin24 olt-u-lg-margin48">
    <p class="olt-Paragraph">Small margin on mobile</p>
    <p class="olt-Paragraph">Medium margin on tablet</p>
    <p class="olt-Paragraph">Large margin on desktop</p>
  </div>
</section>
```
