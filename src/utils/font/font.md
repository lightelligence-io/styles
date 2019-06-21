---
name: Font
category: Utilities
---

## Syntax

`olt-u-[sm-|md-|lg-|xl-]font{Sans|Mono}`

## Description

Font utility sets `font-family` CSS properties to match our pre-defined fonts. 

| Class name          | Sets the font to                 
|:--------------------|:--------------------------------------------------|
| `olt-u-fontSans`    | <div class="olt-u-fontSans">Sans-Serif Font</div> |
| `olt-u-fontMono`    | <div class="olt-u-fontMono">Monospaced font</div> |

```examples.html
<div class="olt-u-fontSans">Sans</div>
<div class="olt-u-fontMono">Mono</div>
```

## Responsive

Font utility can be used with a responsive modifier by adding a screen 
[prefixes](/#screen) :

| Prefix | Example             | Description                                                                           |
|:------:|:--------------------|:--------------------------------------------------------------------------------------|
|     xs | `olt-u-xs-fontSans` | Will set the font to Sans-Serif on the element when rendered on extra small screen    |
|     sm | `olt-u-sm-fontMono` | Will set the font to Monospaced on the element when rendered on a small screen        |
|     md | `olt-u-md-fontMono` | Will set the font to Monospaced on the element when rendered on a medium sized screen |
|     lg | `olt-u-lg-fontSans` | Will set the font to Sans-Serif on the element when rendered on a large screen        |
|     xl | `olt-u-xl-fontMono` | Will set the font to Monospaced on the element when rendered on extra large screen    |


