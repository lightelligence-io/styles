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
| <button class="olt-Button olt-Button--icon olt-Button--primary"></button>            | Primary         | `olt-u-colorPrimary`   |
| <button class="olt-Button olt-Button--icon olt-Button--secondary"></button>          | Secondary       | `olt-u-colorSecondary` |
| <button class="olt-Button olt-Button--icon olt-Button--info"></button>               | Info            | `olt-u-colorInfo`      |
| <button class="olt-Button olt-Button--icon olt-Button--warning"></button>            | Warning         | `olt-u-colorWarning`   | 
| <button class="olt-Button olt-Button--icon olt-Button--error"></button>              | Error           | `olt-u-colorError`     | 
| <button class="olt-Button olt-Button--icon olt-Button--success"></button>            | Success         | `olt-u-colorSuccess`   | 
| <button class="olt-Button olt-Button--icon olt-Button--light olt-u-border"></button> | Light ( White ) | `olt-u-colorLight`     | 
| <button class="olt-Button olt-Button--icon olt-Button--dark"></button>               | Dark            | `olt-u-colorDark`      | 

