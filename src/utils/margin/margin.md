---
name: Margin
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]margin{Top|Right|Bottom|Left|X|Y}{1-8|Auto}`

## Description

Margin utility sets `margin` CSS property 

| Class name             | CSS properties                           |
|:-----------------------|:-----------------------------------------|
| `olt-u-margin1`        | `margin: 4px;`                           |
| `olt-u-marginTopAuto`  | `margin-top: auto;`                      |
| `olt-u-marginRight8`   | `margin-right: 96px;`                    |
| `olt-u-marginBottom2`  | `margin-bottom: 8px;`                    |
| `olt-u-marginLeftAuto` | `margin-left: auto;`                     |
| `olt-u-marginXAuto`    | `margin-left: auto; margin-right: auto;` |
| `olt-u-marginY3`       | `margin-top: 16px; margin-bottom: 16px;` |

The sizes between `1-8` are predefined as follow :

| Size | Value |
|:-----|:------|
| 1    | 4px   |
| 2    | 8px   |
| 3    | 16px  |
| 4    | 24px  |
| 5    | 32px  |
| 6    | 48px  |
| 7    | 72px  |
| 8    | 96px  |

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
|     xs | `olt-u-xs-margin2`       | Will set `margin: 8px` on the element when rendered on extra small screen                               |
|     sm | `olt-u-sm-marginTop3`    | Will set `margin-top: 16px;` on the element when rendered on a small screen                             |
|     md | `olt-u-md-marginXAuto`   | Will set `margin-left: auto; margin-right: auto;` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-marginBottom3` | Will set `margin-bottom: 16px;` to the element when rendered on a large screen                          |
|     xl | `olt-u-xl-marginLeft2`   | Will set `margin-left: 2px;` to the element when rendered on extra large screen                         | 

```responsive.html
<section class="olt-u-border">
  <div class="olt-u-margin2 olt-u-sm-margin4 olt-u-lg-margin6">
    <p class="olt-Paragraph">Small margin on mobile</p>
    <p class="olt-Paragraph">Medium margin on tablet</p>
    <p class="olt-Paragraph">Large margin on desktop</p>
  </div>
</section>
```
