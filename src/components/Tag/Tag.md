---
name: Tag
category: Component
---

## Description

*Tags* can be used with `<span>` elements and and occupy the `olt-Tag*` class 
names. Tag's content is always rendered with `uppercase` text transformation.

```tag.html
<span class="olt-Tag">Tag</span>
```

## Colors

*Tag* can be rendered with 
[any of our conceptual colors](/#concepts-colors) :

```colors.html
<span class="olt-Tag olt-Tag--primary">Primary</span>
<span class="olt-Tag olt-Tag--secondary">Secondary</span>
<span class="olt-Tag olt-Tag--info">Info</span>
<span class="olt-Tag olt-Tag--error">Error</span>
<span class="olt-Tag olt-Tag--success">Success</span>
<span class="olt-Tag olt-Tag--dark">Dark</span>
<span class="olt-Tag olt-Tag--white">White</span>
```

## Variations

### Outline

The *Tag* cen be rendered as a *Outline* style.

```outline.html
<span class="olt-Tag olt-Tag--outline olt-Tag--primary">Primary</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--secondary">Secondary</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--info">Info</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--error">Error</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--success">Success</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--dark">Dark</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--white">White</span>
```

### Tags with icons

Additional icon can be added to the tag by adding `data-icon` attribute on
the tag element or nesting an [Icon](/#icon) component inside.

```icons.html
<span class="olt-Tag" data-icon="settings">Tag</span>
<span class="olt-Tag">
  <i class="olt-Tag-icon olt-Icon" data-icon="ac_unit"></i> Tag
</span>
<br /><br />
<span class="olt-Tag olt-Tag--primary" data-icon="settings">Primary</span>
<span class="olt-Tag olt-Tag--secondary" data-icon="settings">Secondary</span>
<span class="olt-Tag olt-Tag--info" data-icon="settings">Info</span>
<span class="olt-Tag olt-Tag--error" data-icon="settings">Error</span>
<span class="olt-Tag olt-Tag--success" data-icon="settings">Success</span>
<span class="olt-Tag olt-Tag--dark" data-icon="settings">Dark</span>
<span class="olt-Tag olt-Tag--white" data-icon="settings">White</span>
```

### Tags with close icon

There is a special `data-close` attribute, which simply adds a close icon
to the tag, but instead of adding it to the left side of the tag it will be
added to the right.

```close-icons.html
<span class="olt-Tag" data-close>Tag</span>
<span class="olt-Tag" data-icon="close">Tag</span>
```

### Selectable Tags

Selectable *Tag* are tags with `--selectable` modifier added as a class name.
They receive `:hover` state, as well as clickable mouse icon. They can be
used safely with `<button>` elements, as well as `<a>` tags. They can also be 
combined with `--outline` modifier

```selectable.html
<button class="olt-Tag" data-icon="grade">Tag</button>
<a class="olt-Tag" href="#">Tag</a>
<span class="olt-Tag olt-Tag--selectable">Tag <i class="olt-Tag-icon olt-Icon" data-icon="close"></i></span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--primary">Tag <i class="olt-Tag-icon olt-Icon" data-icon="close"></i></span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--secondary">Tag <i class="olt-Tag-icon olt-Icon" data-icon="close"></i></span>
<br /><br />
<span class="olt-Tag olt-Tag--selectable olt-Tag--primary">Primary</span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--secondary">Secondary</span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--info">Info</span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--error">Error</span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--success">Success</span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--dark">Dark</span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--white">White</span>
<br /><br />
<span class="olt-Tag olt-Tag--outline olt-Tag--selectable olt-Tag--primary">Primary</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--selectable olt-Tag--secondary">Secondary</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--selectable olt-Tag--info">Info</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--selectable olt-Tag--error">Error</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--selectable olt-Tag--success">Success</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--selectable olt-Tag--dark">Dark</span>
<span class="olt-Tag olt-Tag--outline olt-Tag--selectable olt-Tag--white">White</span>
```
