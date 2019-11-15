---
name: List
category: Content
---

## Description

*List* is normally used with `<ul>` elements in which `<li>` is contained but
can be used with arbitrary elements as well.

For Definition Lists the semantic elements are `<dl>`, `<dt>` and `<dd>`.

The *List* occupies `olt-List*` class names.

## Variations

### Unordered List

Unordered lists is the default
[HTML unordered list](https://developer.mozilla.org/en/docs/Web/HTML/Element/ul)
with extra styles that match this styleguide. Semantic tag for starting this
list is `<ul>`.

No additional modifiers are necessary in order to make an unordered list.

```unordered.html
<ul class="olt-List">
  <li class="olt-List-item">Item One</li>
  <li class="olt-List-item">Item Two</li>
  <li class="olt-List-item">Item Three</li>
</ul>
```

### Ordered List

Same as Unordered list above, it represents
[HTML ordered list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
with extra styles that match this styleguide. Semantic tag for ordered list is
`<ol>`.

In order to produce Ordered list, you need to add `--ordered` modifier.

```ordered.html
<ol class="olt-List olt-List--ordered">
  <li class="olt-List-item">Item One</li>
  <li class="olt-List-item">Item Two</li>
  <li class="olt-List-item">Item Three</li>
</ol>
```

### Definition List

The definition list represents
[HTML definition list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl).
Semantic tag for definition list is `<dl>`.

The definition list works with additional modifier `--definition` next to the
`olt-List` class.

```definition-list.html
<dl class="olt-List olt-List--definition">
  <dt class="olt-List-term">Device Name</dt>
  <dd class="olt-List-item">Waterproofed solar roof</dd>
  <dt class="olt-List-term">Device Type</dt>
  <dd class="olt-List-item">Gateway</dd>
  <dt class="olt-List-term">Description</dt>
  <dd class="olt-List-item">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</dd>
  <dt class="olt-List-term">Firmware</dt>
  <dd class="olt-List-item">DEV2S</dd>
  <dt class="olt-List-term">Tags</dt>
  <dd class="olt-List-item">
    <span class="olt-Chip">Light</span>
    <span class="olt-Chip">Intelligence</span>
  </dd>
  <dt class="olt-List-term">Status</dt>
  <dd class="olt-List-item">Waterproofed solar roof 4</dd>
</dl>
```

#### Definition list with 2 columns

You can display a definition list in 2 columns with the `--2columns` modifier.
The modifier is responsive:

- `olt-List--xs-2columns` for only extra small screen
- `olt-List--sm-2columns` for <= small screen
- `olt-List--lg-2columns` for <= large screen
- `olt-List--xl-2columns` for all screens

```two-columns.html
<dl class="olt-List olt-List--definition olt-List--sm-2columns">
  <dt class="olt-List-term">Device Name</dt>
  <dd class="olt-List-item">Waterproofed solar roof</dd>
  <dt class="olt-List-term">Device Type</dt>
  <dd class="olt-List-item">Gateway</dd>
  <dt class="olt-List-term">Description</dt>
  <dd class="olt-List-item">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</dd>
  <dt class="olt-List-term">Firmware</dt>
  <dd class="olt-List-item">DEV2S</dd>
  <dt class="olt-List-term">Tags</dt>
  <dd class="olt-List-item">
    <span class="olt-Chip">Light</span>
    <span class="olt-Chip">Intelligence</span>
  </dd>
  <dt class="olt-List-term">Status</dt>
  <dd class="olt-List-item">Waterproofed solar roof 4</dd>
</dl>
```

#### Vertically stacked definition list

You can display a definition list vertically stacked in a single column with
the `--vertical` modifier. The modifier is responsive as well :

- `olt-List--xs-vertical` for only extra small screen
- `olt-List--sm-vertical` for <= small screen
- `olt-List--lg-vertical` for <= large screen
- `olt-List--xl-vertical` for all screens

It can be combined with `--2columns` modifier.

```vertically-stacked.html
<dl class="olt-List olt-List--definition olt-List--sm-vertical olt-List--lg-2columns">
  <dt class="olt-List-term">Device Name</dt>
  <dd class="olt-List-item">Waterproofed solar roof</dd>
  <dt class="olt-List-term">Device Type</dt>
  <dd class="olt-List-item">Gateway</dd>
  <dt class="olt-List-term">Description</dt>
  <dd class="olt-List-item">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</dd>
  <dt class="olt-List-term">Firmware</dt>
  <dd class="olt-List-item">DEV2S</dd>
  <dt class="olt-List-term">Tags</dt>
  <dd class="olt-List-item">
    <span class="olt-Chip">Light</span>
    <span class="olt-Chip">Intelligence</span>
  </dd>
  <dt class="olt-List-term">Status</dt>
  <dd class="olt-List-item">Waterproofed solar roof 4</dd>
</dl>
```
