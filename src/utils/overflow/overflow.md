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
  <div class="olt-CardTable olt-CardTable--alwaysTable">
    <div class="olt-CardTable-frame">
      <div class="olt-CardTable-head">
        <div class="olt-CardTable-headItem">Firstname</div>
        <div class="olt-CardTable-headItem">Lastname</div>
        <div class="olt-CardTable-headItem">Age</div>
        <div class="olt-CardTable-headItem">Gender</div>
        <div class="olt-CardTable-headItem">Married</div>
        <div class="olt-CardTable-headItem">Children</div>
      </div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Jill
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Smith
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            50
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            f
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            yes
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            1
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            John
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Doe
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            34
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            m
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            no
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            0
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Eve
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Jackson
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            94
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            f
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            no
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            0
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
