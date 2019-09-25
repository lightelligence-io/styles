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

Additional icon can be added to the tag by adding a `olt-Tag-icon` class to
the tag element or nesting an [Icon](/#icon) component inside.

```icons.html
<span class="olt-Tag olt-Tag-icon olt-Icon-action-settings">Tag</span>
<span class="olt-Tag">
  <i class="olt-Tag-icon olt-Icon olt-Icon-data-temperature"></i> Tag
</span>
<br /><br />
<span class="olt-Tag olt-Tag--primary olt-Tag-icon olt-Icon-action-settings">Primary</span>
<span class="olt-Tag olt-Tag--secondary olt-Tag-icon olt-Icon-action-settings">Secondary</span>
<span class="olt-Tag olt-Tag--info olt-Tag-icon olt-Icon-action-settings">Info</span>
<span class="olt-Tag olt-Tag--error olt-Tag-icon olt-Icon-action-settings">Error</span>
<span class="olt-Tag olt-Tag--success olt-Tag-icon olt-Icon-action-settings">Success</span>
<span class="olt-Tag olt-Tag--dark olt-Tag-icon olt-Icon-action-settings">Dark</span>
<span class="olt-Tag olt-Tag--white olt-Tag-icon olt-Icon-action-settings">White</span>
```

### Tags with close icon

There is a special `olt-Tag-close` class, which simply adds a close icon
to the tag, but instead of adding it to the left side of the tag it will be
added to the right.

```close-icons.html
<span class="olt-Tag olt-Tag-close" data-close>Tag</span>
<span class="olt-Tag olt-Tag-icon olt-Icon-navigation-close olt-Icon--small">Tag</span>
```

### Selectable Tags

Selectable *Tag* are tags with `--selectable` modifier added as a class name.
They receive `:hover` state, as well as clickable mouse icon. They can be
used safely with `<button>` elements, as well as `<a>` tags. They can also be 
combined with `--outline` modifier

```selectable.html
<button class="olt-Tag olt-Tag-icon olt-Icon-action-favorite-filled">Tag</button>
<a class="olt-Tag" href="#">Tag</a>
<span class="olt-Tag olt-Tag--selectable">Tag <i class="olt-Tag-icon olt-Icon olt-Icon-navigation-close olt-Icon--small"></i></span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--primary">Tag <i class="olt-Tag-icon olt-Icon olt-Icon-navigation-close olt-Icon--small"></i></span>
<span class="olt-Tag olt-Tag--selectable olt-Tag--secondary">Tag <i class="olt-Tag-icon olt-Icon olt-Icon-navigation-close olt-Icon--small"></i></span>
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
