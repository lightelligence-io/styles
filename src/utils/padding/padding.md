---
name: Padding
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]padding{Top|Right|Bottom|Left|X|Y}{1-8}`

Padding utility sets `padding` CSS property 

| Class name             | CSS properties                             |
|:-----------------------|:-------------------------------------------|
| `olt-u-padding1`       | `padding: 4px;`                            |
| `olt-u-paddingTop2`    | `padding-top: 8px;`                        |
| `olt-u-paddingRight8`  | `padding-right: 96px;`                     |
| `olt-u-paddingBottom2` | `padding-bottom: 8px;`                     |
| `olt-u-paddingLeft3`   | `padding-left: 16px;`                      |
| `olt-u-paddingX3`      | `padding-left: 16px; padding-right: 16px;` |
| `olt-u-paddingY3`      | `padding-top: 16px; padding-bottom: 16px;` |

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
<section class="olt-u-padding4 olt-u-border">
  <p class="olt-Paragraph">Some content</p>
</section>
```

## Responsive

Margin can also be used with the default screen [prefixes](/#screen), where
it can be very handy :

| Prefix | Example                   | Description                                                                                               |
|:------:|:--------------------------|:----------------------------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-padding2`       | Will set `padding: 8px` on the element when rendered on extra small screen                                |
|     sm | `olt-u-sm-paddingTop3`    | Will set `padding-top: 16px;` on the element when rendered on a small screen                              |
|     md | `olt-u-md-paddingX4`      | Will set `padding-left: 24px; padding-right: 24px;` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-paddingBottom3` | Will set `padding-bottom: 16px;` to the element when rendered on a large screen                           |
|     xl | `olt-u-xl-paddingLeft2`   | Will set `padding-left: 2px;` to the element when rendered on extra large screen                          | 

```responsive.html
<section class="olt-u-padding2 olt-u-sm-padding4 olt-u-lg-padding6 olt-u-border">
  <p class="olt-Paragraph">Small padding on mobile</p>
  <p class="olt-Paragraph">Medium padding on tablet</p>
  <p class="olt-Paragraph">Large padding on desktop</p>
</section>
```
