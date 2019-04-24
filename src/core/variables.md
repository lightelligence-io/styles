---
name: Variables
category: Core
---

## Variables

Core properties can be customized via CSS Variables.
Please have a look at the dedicated examples section to see how it works.

Here's the hackable stuff:


```css
:root {
  --olt-containerPadding: 15px;
  --olt-containerMaxWidthSm: 540px;
  --olt-containerMaxWidthMd: 720px;
  --olt-containerMaxWidthLg: 960px;
  --olt-containerMaxWidthXl: 1140px;
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
  --olt-lineHeightBase: 1.5;
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
