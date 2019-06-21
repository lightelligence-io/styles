---
name: Overflow
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]overflow[X|Y]{Auto|Visible|Hidden|Scroll|Initial}`
`olt-u-[sm-|md-|lg-|xl-]overflowSnap`

## Description

Overflow utility sets `overflow`, `overflow-x` and `overflow-y` CSS properties.
It will also set `-webkit-overflow-scrolling: touch;` to the element, when
being used.

| Class name              | CSS properties        |
|:------------------------|:----------------------|
| `olt-u-overflowAuto`    | `overflow: auto`    |
| `olt-u-overflowVisible` | `overflow: visible`  |
| `olt-u-overflowHidden`  | `overflow: hidden`   |
| `olt-u-overflowScroll`  | `overflow: scroll` |
| `olt-u-overflowInitial` | `overflow: initial` |

### Overflow Snap

Setting `olt-u-overflowSnap` will add the following CSS properties :

```css
.olt-u-overflowSnap {
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
}
```

### Setting X / Y

Overflow Utility also supports setting `overflow-x` and `overflow-y` by adding
`x` or `y` to the class name :

| Class name               | CSS properties       |
|:-------------------------|:---------------------|
| `olt-u-overflowXAuto`    | `overflow-x: auto`   |
| `olt-u-overflowYHidden`  | `overflow-y: hidden` |

## Responsive

Overflow utility can be used as well with the default screen 
[prefixes](/#screen) :

| Prefix | Example                     | Description                                                                          |
|:------:|:----------------------------|:-------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-overflowXauto`    | Will set `overflow-x: auto` on the element when rendered on extra small screen       |
|     sm | `olt-u-sm-overflowScroll`   | Will set `overflow: scroll` on the element when rendered on a small screen           |
|     md | `olt-u-md-overflowYVisible` | Will set `overflow-y: visible` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-overflowScroll`   | Will set `overflow: scroll` on the element when rendered on a large screen           |
|     xl | `olt-u-xl-overflowHidden`   | Will set `overflow: hidden` on the element when rendered on extra large screen       |

```example.html
<div class="olt-u-overflowAuto olt-u-lg-overflowHidden">
  <table class="olt-Table olt-Table--selectable olt-Table--justify">
    <thead class="olt-Table-head">
      <tr class="olt-Table-row">
        <th class="olt-Table-header">Firstname</th>
        <th class="olt-Table-header">Lastname</th>
        <th class="olt-Table-header">Age</th>
        <th class="olt-Table-header">Gender</th>
        <th class="olt-Table-header">Married</th>
        <th class="olt-Table-header">Children</th>
      </tr>
    </thead>
    <tbody>
      <tr class="olt-Table-row">
        <td class="olt-Table-data">Jill</td>
        <td class="olt-Table-data">Smith</td>
        <td class="olt-Table-data">50</td>
        <td class="olt-Table-data">f</td>
        <td class="olt-Table-data">yes</td>
        <td class="olt-Table-data">1</td>
      </tr>
      <tr class="olt-Table-row">
        <td class="olt-Table-data">John</td>
        <td class="olt-Table-data">Doe</td>
        <td class="olt-Table-data">34</td>
        <td class="olt-Table-data">m</td>
        <td class="olt-Table-data">no</td>
        <td class="olt-Table-data">0</td>
      </tr>
      <tr class="olt-Table-row">
        <td class="olt-Table-data">Eve</td>
        <td class="olt-Table-data">Jackson</td>
        <td class="olt-Table-data">94</td>
        <td class="olt-Table-data">f</td>
        <td class="olt-Table-data">no</td>
        <td class="olt-Table-data">0</td>
      </tr>
    </tbody>
  </table>
</div>
```
