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
|     xs | `olt-u-xs-overflowXauto`    | Will set `overflow-x: auto` on the element when rendered on exdiva small screen       |
|     sm | `olt-u-sm-overflowScroll`   | Will set `overflow: scroll` on the element when rendered on a small screen           |
|     md | `olt-u-md-overflowYVisible` | Will set `overflow-y: visible` on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-overflowScroll`   | Will set `overflow: scroll` on the element when rendered on a large screen           |
|     xl | `olt-u-xl-overflowHidden`   | Will set `overflow: hidden` on the element when rendered on extra large screen       |

```example.html
<div class="olt-u-overflowAuto olt-u-lg-overflowHidden">
  <div class="olt-DataCards olt-DataCards--alwaysTable">
    <div class="olt-DataCards-frame">
      <div class="olt-DataCards-head">
        <div class="olt-DataCards-headItem">Firstname</div>
        <div class="olt-DataCards-headItem">Lastname</div>
        <div class="olt-DataCards-headItem">Age</div>
        <div class="olt-DataCards-headItem">Gender</div>
        <div class="olt-DataCards-headItem">Married</div>
        <div class="olt-DataCards-headItem">Children</div>
      </div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Jill
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Smith
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            50
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            f
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            yes
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            1
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            John
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Doe
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            34
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            m
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            no
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            0
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Eve
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Jackson
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            94
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            f
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            no
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            0
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
