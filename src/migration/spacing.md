# Spacings

In general the spacing ids have changed to numeric values from 1 to 8.

```
old      new
xxs        1
xs         2
s          3
m          4
l          5
xl         6
xxl        7
xxxl       8
```
The `xxxl` spacing value has changed from `160px` to `96`.

## The old definition for margin

```
class                          mobile   tablet  desktop
olt-spacing--xxs                  4px      4px      4px
olt-spacing--xs                   8px      8px      8px
olt-spacing--s                   16px     16px     16px
olt-spacing--m                   16px     24px     24px
olt-spacing--l                   24px     32px     32px
olt-spacing--xl                  32px     48px     48px
olt-spacing--xxl                 40px     72px     72px
olt-spacing--xxxl                48px    120px    160px
```

## The new way based on the new common utility notation

```
class                        rem    px
olt-u-margin1               0.25     4
olt-u-margin2                0.5     8
olt-u-margin3                  1    16
olt-u-margin4                1.5    24
olt-u-margin5                  2    32
olt-u-margin6                  3    48
olt-u-margin7                4.5    72
olt-u-margin8                  6    96
```

To specify a different value for a different breakpoint just add
the breakpoint to the corresponding definition.

`olt-u-[sm|md|lg|xl]-margin{Top|Right|Bottom|Left}{1-8|Auto}`

```html
<div class="olt-u-marginLeft3 olt-u-md-marginLeft6">Text</div>
```

This sets `1rem` for all breakpoints by default and overrides it with `3rem` from `md`-upwards.

## Padding

Padding works exactly like margin with the following utility:

`olt-u-[sm|md|lg|xl]-padding{Top|Right|Bottom|Left}{1-8}`

```
olt-spacing--xxs__as-padding        olt-u-paddingTop1
olt-spacing--xs__as-padding         olt-u-paddingTop2
olt-spacing--s__as-padding          olt-u-paddingTop3
olt-spacing--m__as-padding          olt-u-paddingTop4
olt-spacing--l__as-padding          olt-u-paddingTop5
olt-spacing--xl__as-padding         olt-u-paddingTop6
olt-spacing--xxl__as-padding        olt-u-paddingTop7
olt-spacing--xxxl__as-padding       olt-u-paddingTop8
```
