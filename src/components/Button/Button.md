---
name: Button
category: Component
---

## Description

Buttons can be used with `<button>`, `<button>`, and `<input type="button">`
elements and occupy the `olt-Button*` class names.

```button.html
<a class="olt-Button">Link</a>
<button class="olt-Button">Button</button>
<input class="olt-Button" type="button" value="Input"/>
```

## Colors

The *Buttons* can be rendered with
[any of our conceptual colors](/#concepts-colors) :

```colors.html
<button class="olt-Button olt-Button--primary">Primary</button>
<button class="olt-Button olt-Button--secondary">Secondary</button>
<button class="olt-Button olt-Button--info">Info</button>
<button class="olt-Button olt-Button--error">Error</button>
<button class="olt-Button olt-Button--success">Success</button>
<button class="olt-Button olt-Button--dark">Dark</button>
```

## Outline

The *Button* can also be rendered as *outline*, which turns the accent color
into a border, instead of a background.

```outline.html
<button class="olt-Button olt-Button--outline">Button</button>
<button class="olt-Button olt-Button--outline olt-Button--primary">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--secondary">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--info">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--error">Outline</button>
<button class="olt-Button olt-Button--outline olt-Button--success">Outline</button>
```

## Icon

Make use of the `olt-Button--icon` class in order to apply an icon to a button. Please
note that this doesn't work with inputs of button type.

```icon.html
<a class="olt-Button olt-Button--icon olt-Icon-close olt-Icon--small"></a>
<a class="olt-Button olt-Button--outline olt-Button--icon olt-Icon-close olt-Icon--small"></a>
<button class="olt-Button olt-Button--primary olt-Button--icon olt-Icon-close olt-Icon--small"></button>
<button class="olt-Button olt-Button--primary olt-Button--outline olt-Button--icon olt-Icon-close olt-Icon--small"></button>
```

## States

The buttons have the standard `:hover` and `:focus` states, which doesn't have
corresponding CSS class names. For states `:active` and `:disabled` we can
also use `.is-active` and `.is-disabled` class names in addition to the native
states.

```states.html
<h2>Default Buttons</h2>
<table class="olt-Table olt-Table--justify">
  <thead class="olt-Table-head">
    <tr class="olt-Table-row">
      <th class="olt-Table-header">Default</th>
      <th class="olt-Table-header">Active</th>
      <th class="olt-Table-header">Disabled</th>
    </tr>
  </thead>
  <tbody class="olt-Table-body">
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--primary">Primary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--primary is-active">Primary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--primary is-disabled">Primary</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--secondary">Secondary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--secondary is-active">Secondary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--secondary is-disabled">Secondary</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--info">Info</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--info is-active">Info</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--info is-disabled">Info</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--error">Error</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--error is-active">Error</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--error is-disabled">Error</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--success">Success</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--success is-active">Success</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--success is-disabled">Success</button>
      </td>
    </tr>
  </tbody>
</table>

<h2>Outline Buttons</h2>
<table class="olt-Table olt-Table--justify">
  <thead class="olt-Table-head">
    <tr class="olt-Table-row">
      <th class="olt-Table-header">Default</th>
      <th class="olt-Table-header">Active</th>
      <th class="olt-Table-header">Disabled</th>
    </tr>
  </thead>
  <tbody class="olt-Table-body">
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--primary">Primary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--primary is-active">Primary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--primary is-disabled">Primary</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--secondary">Secondary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--secondary is-active">Secondary</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--secondary is-disabled">Secondary</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--info">Info</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--info is-active">Info</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--info is-disabled">Info</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--error">Error</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--error is-active">Error</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--error is-disabled">Error</button>
      </td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--success">Success</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--success is-active">Success</button>
      </td>
      <td class="olt-Table-data">
        <button class="olt-Button olt-Button--outline olt-Button--success is-disabled">Success</button>
      </td>
    </tr>
  </tbody>
</table>
```



