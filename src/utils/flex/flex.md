---
name: Flex
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]flex{Row|RowReverse|Column|ColumnReverse|Wrap|WrapReverse|Nowrap}`

## Description

Flex utility sets `flex-direction` or `flex-wrap` CSS properties. It can be
used with `olt-u-displayFlex` to make a
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
layout without additional class names or inline styles.

| Class name                | CSS properties                   |
|:--------------------------|:---------------------------------|
| `olt-u-flexRow`           | `flex-direction: row`            |
| `olt-u-flexRowReverse`    | `flex-direction: row-reverse`    |
| `olt-u-flexColumn`        | `flex-direction: column`         |
| `olt-u-flexColumnReverse` | `flex-direction: column-reverse` |
| `olt-u-flexWrap`          | `flex-wrap: wrap`                |
| `olt-u-flexWrapReverse`   | `flex-wrap: wrap-reverse`        |
| `olt-u-flexNowrap`        | `flex-wrap: nowrap`              |

```example.html
<div class="olt-u-displayFlex olt-u-flexColumn olt-u-flexWrap">
  <div class="olt-u-border olt-u-gridColumn4 olt-u-padding8 olt-u-margin2">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
  <div class="olt-u-border olt-u-gridColumn8 olt-u-padding8 olt-u-margin2">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
  <div class="olt-u-border olt-u-gridColumn4 olt-u-padding8 olt-u-margin2">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
  <div class="olt-u-border olt-u-gridColumn5 olt-u-padding8 olt-u-margin2">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>
```

## Responsive

Flex utility becomes very handy, when used in a combination with the default
screen [prefixes](/#screen) :

| Prefix | Example               | Description                                                                          |
|:------:|:----------------------|:-------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-flexRow`    | Will set `flex-direction: row` on the element when rendered on extra small screen    |
|     sm | `olt-u-sm-flexColumn` | Will set `flex-direction: column` on the element when rendered on a small screen     |
|     md | `olt-u-md-flexRow`    | Will set `flex-direction: row` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-flexWrap`   | Will set `flex-wrap: wrap` on the element when rendered on a large screen            |
|     xl | `olt-u-xl-flexNowrap` | Will set `flex-wrap: nowrap` on the element when rendered on extra large screen      |

