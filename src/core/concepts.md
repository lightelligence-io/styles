---
name: Concepts
category: Getting Started
---

## Modular Notation

Lightelligence UI relies on 
[SUIT](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) 
css naming patterns. If you got used to lowercase and dashes, it might look 
unfamiliar at first, but this will change very quickly because SUIT just makes 
sense where classic BEM either gets messy or just isn't suited, i.e. responsive 
utilities aren't covered by classic BEM.

### Namespace

In order to prevent collisions, any of the css names get prefixed with the 
`olt-` namespace except for the state-classes which should never go alone.

> OLT stands for OSRAM Lightelligence

### Components

Component names are denoted in `pascalcase`, e.g. `Card`.

Syntax: `olt-<Component>`

### Descendants

Descendant names are `camelcase`. Separated by their parent component's name by 
a single dash, e.g. `Card-header`.

Syntax: `olt-<Component> olt-<ComponentName>-<descendant>`

### Modifiers

Modifier names add up to the component, separated by double-dash, e.g. 
`Card--primary`.

Syntax: `olt-<Component>--<modifier>`

### States

State css names are `camelcase` and prefixed by `is-`, e.g. 
`Button is-disabled`.

Syntax: `olt-<Component> is-<state>`

### Utilities

All utility classes are `camelcase` and prefixed with `u-`.

You may target particular screens by adding a breakpoint-infix, e.g. `md-` 
targets everything above. Combine multiple classes in order.

Syntax: `olt-u-[sm-|md-|lg-|xl-]<utility>{Value1|Value2|...}`.

## Interactions

All interactive components work out of the box without the need of Javascript.
Have a look at the examples to find out what is particularly needed in order to 
make it happen. However, you could always opt-out of this behavior by simply 
omitting trigger elements and control state classes via Javascript.

## Colors

We support a set of *Contextual Colors* 

| Color                                                                            | Name            | Utility Class          |
|:--------------------------------------------------------------------------------:|:----------------|:-----------------------|
| <button data-icon="" class="olt-Button olt-Button--primary"></button>            | Primary         | `olt-u-colorPrimary`   |
| <button data-icon="" class="olt-Button olt-Button--secondary"></button>          | Secondary       | `olt-u-colorSecondary` |
| <button data-icon="" class="olt-Button olt-Button--info"></button>               | Info            | `olt-u-colorInfo`      |
| <button data-icon="" class="olt-Button olt-Button--error"></button>              | Error           | `olt-u-colorError`     | 
| <button data-icon="" class="olt-Button olt-Button--success"></button>            | Success         | `olt-u-colorSuccess`   | 
| <button data-icon="" class="olt-Button olt-Button--light olt-u-border"></button> | Light ( White ) | `olt-u-colorLight`     | 
| <button data-icon="" class="olt-Button olt-Button--dark"></button>               | Dark            | `olt-u-colorDark`      | 

## Customization

Core properties can be customized via CSS Variables. Please have a look at the 
dedicated examples section to see how it works.

Here's the hackable stuff:

```css
:root {
  --olt-containerPadding: 15px;
  --olt-containerMaxWidthSm: 540px;
  --olt-containerMaxWidthMd: 720px;
  --olt-containerMaxWidthLg: 960px;
  --olt-containerMaxWidthXl: 1140px;
  --olt-breakpointXs: 0;
  --olt-breakpointSm: 576px;
  --olt-breakpointMd: 768px;
  --olt-breakpointLg: 992px;
  --olt-breakpointXl: 1200px;
  --olt-colorPrimary: #FF6600;
  --olt-colorSecondary: #0D122C;
  --olt-colorInfo: #17A2B8;
  --olt-colorSuccess: #02BF1B;
  --olt-colorError: #FD5952;
  --olt-colorWarning: #FFC107;
  --olt-colorLight: #FFFFFF;
  --olt-colorDark: #000000;
  --olt-inversePrimary: var(--olt-colorLight);
  --olt-inverseSecondary: var(--olt-colorLight);
  --olt-inverseInfo: var(--olt-colorLight);
  --olt-inverseSuccess: var(--olt-colorLight);
  --olt-inverseError: var(--olt-colorLight);
  --olt-inverseWarning: var(--olt-colorDark);
  --olt-inverseLight: var(--olt-colorDark);
  --olt-inverseDark: var(--olt-colorLight);
  --olt-gray100: #F5F6F8;
  --olt-gray200: #E9ECEF;
  --olt-gray300: #E3E4E5;
  --olt-gray400: #D0D1D3;
  --olt-gray500: #A7A8AA;
  --olt-gray600: #58585A;
  --olt-gray700: #495057;
  --olt-gray800: #343a40;
  --olt-gray900: #212529;
  --olt-borderRadius: 2px;
  --olt-borderWidth: 1px;
  --olt-borderColor: var(--olt-gray300);
  --olt-fontFamilyBase: PT Sans;
  --olt-fontFamilyMono: Overpass Mono;
  --olt-fontSizeBase: 16px;
  --olt-fontSizeXxSmall: calc(var(--olt-fontSizeBase) * .65);
  --olt-fontSizeXSmall: calc(var(--olt-fontSizeBase) * .75);
  --olt-fontSizeSmall: calc(var(--olt-fontSizeBase) * .8);
  --olt-fontSizeMedium: var(--olt-fontSizeBase);
  --olt-fontSizeLarge: calc(var(--olt-fontSizeBase) * 1.5);
  --olt-fontSizeXLarge: calc(var(--olt-fontSizeBase) * 1.8);
  --olt-fontSizeXxLarge: calc(var(--olt-fontSizeBase) * 2.2);
  --olt-fontSizeSmaller: 80%;
  --olt-fontSizeLarger: 150%;
  --olt-headingFontSize1: 4.375rem;
  --olt-headingFontSize2: 2.5rem;
  --olt-headingFontSize3: 2.25rem;
  --olt-headingFontSize4: 2rem;
  --olt-headingFontSize5: 1.5rem;
  --olt-headingFontSize6: 1.25rem;
  --olt-headingLineHeight1: 5.625rem;
  --olt-headingLineHeight2: 3rem;
  --olt-headingLineHeight3: 2.85rem;
  --olt-headingLineHeight4: 2.5rem;
  --olt-headingLineHeight5: 2rem;
  --olt-headingLineHeight6: 1.75rem;
  --olt-lineHeightBase: 1.5;
  --olt-lineHeightXxSmall: calc(var(--olt-lineHeightBase) * .6667);
  --olt-lineHeightXSmall: calc(var(--olt-lineHeightBase) * .8333);
  --olt-lineHeightSmall: calc(var(--olt-lineHeightBase) * .9);
  --olt-lineHeightMedium: var(--olt-lineHeightBase);
  --olt-lineHeightLarge: calc(var(--olt-lineHeightBase) * 1.3333);
  --olt-lineHeightXLarge: calc(var(--olt-lineHeightBase) * 1.5333);
  --olt-lineHeightXxLarge: calc(var(--olt-lineHeightBase) * 1.7333);
  --olt-lineHeightSmaller: 80%;
  --olt-lineHeightLarger: 150%;
  --olt-fontWeightLight: 400;
  --olt-fontWeightRegular: 400;
  --olt-fontWeightBold: 700;
  --olt-fontWeightMonoLight: 300;
  --olt-fontWeightMonoRegular: 300;
  --olt-fontWeightMonoBold: 300;
  --olt-fontFamilyHeading: var(--olt-fontFamilyBase);
  --olt-fontWeightHeading: var(--olt-fontWeightBold);
  --olt-linkColor: var(--olt-colorPrimary);
  --olt-linkHoverContrast: 10%;
  --olt-spacer: var(--olt-fontSizeBase);
  --olt-spacing0: 0;
  --olt-spacing1: calc(var(--olt-spacer) * .25);
  --olt-spacing2: calc(var(--olt-spacer) * .5);
  --olt-spacing3: var(--olt-spacer);
  --olt-spacing4: calc(var(--olt-spacer) * 1.5);
  --olt-spacing5: calc(var(--olt-spacer) * 2);
  --olt-spacing6: calc(var(--olt-spacer) * 3);
  --olt-spacing7: calc(var(--olt-spacer) * 4.5);
  --olt-spacing8: calc(var(--olt-spacer) * 6);
  --olt-transitionDuration: 150ms;
  --olt-transitionTimingFunction: ease;
}
```

> Tip: Use variables to make your individual stylesheets match our CI

### Examples

The following example modifies the `--olt-colorPrimary` and 
`--olt-inversePrimary` variables which updates the styles

```variables.css
:root {
  --olt-colorPrimary: peachpuff !important;
  --olt-inversePrimary: tomato !important;
}
```

```variables.html
<div class="olt-Card olt-Card--primary">
  <div class="olt-Card-header">
    <h4 class="olt-Headline olt-Headline--4">Card header</h4>
  </div>
  <div class="olt-Card-content">
    Some content
  </div>
</div>
```
