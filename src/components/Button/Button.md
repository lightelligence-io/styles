# Button

Buttons can be used with `<button>`, `<button>`, and `<input type="button">` elements.

```html
<a class="olt-Button">Link</a>
<button class="olt-Button">Button</button>
<input class="olt-Button" type="button" value="Input"/>
```

## Colors

```html
<button class="olt-Button olt-Button--primary">Primary</button>
<button class="olt-Button olt-Button--secondary">Secondary</button>
<button class="olt-Button olt-Button--info">Info</button>
<button class="olt-Button olt-Button--error">Error</button>
<button class="olt-Button olt-Button--success">Success</button>
```

## Outline


```html
<button class="olt-Button olt-Button--outline">Button</button>
<button class="olt-Button olt-Button--outline olt-Button--primary">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--secondary">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--info">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--error">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--success">Outline</button>
```

## Icon

Make use of `data-icon` attribute in order to apply an icon to a button.

Please note that this doesn't work with inputs of button type.

```html
<a data-icon="close" class="olt-Button"></a>
<a data-icon="close" class="olt-Button olt-Button--outline"></a>
<button data-icon="close" class="olt-Button olt-Button--primary"></button>
<button data-icon="close" class="olt-Button olt-Button--primary olt-Button--outline"></button>
```

## States


### Disabled

```html
<button disabled class="olt-Button">Disabled</button>
<a class="olt-Button is-disabled">Disabled</a>
<button class="olt-Button olt-Button--primary is-disabled">Primary</button>
<button class="olt-Button olt-Button--outline olt-Button--primary is-disabled">Outline</button>
```

### Active

```html
<button class="olt-Button is-active">Active</button>
```

<!--
### Pending

```html
<button class="olt-Button is-pending">Pending</button>
<button class="olt-Button olt-Button--outline is-pending">Pending</button>
<button class="olt-Button olt-Button--primary is-pending">Pending</button>
<button class="olt-Button olt-Button--primary olt-Button--outline is-pending">Pending</button>
```
-->
