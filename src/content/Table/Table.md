---
name: Table
category: Content
---

## Description

*Table* component must be used with `<table>` and its relatives, it occupies
`olt-Table*` class names and must be semantically structured as 
[HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).

The following class names must be used corresponding to the native HTML tags :

- `table` with `olt-Table`
- `thead` with `olt-Table-head`
- `tbody` with `olt-Table-body`
- `tr` with `olt-Table-row`
- `th` with `olt-Table-header`
- `td` with `olt-Table-data`

```table.html
<table class="olt-Table">
  <thead class="olt-Table-head">
    <tr class="olt-Table-row">
      <th class="olt-Table-header">Firstname</th>
      <th class="olt-Table-header">Lastname</th>
      <th class="olt-Table-header">Age</th>
    </tr>
  </thead>
  <tbody class="olt-Table-body">
    <tr class="olt-Table-row">
      <td class="olt-Table-data">Jill</td>
      <td class="olt-Table-data">Smith</td>
      <td class="olt-Table-data">50</td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">Eve</td>
      <td class="olt-Table-data">Jackson</td>
      <td class="olt-Table-data">94</td>
    </tr>
  </tbody>
</table>
```

## Modifiers

### Selectable rows

Use `olt-Table--selectable` on the `table` tag, if your rows may be selected.

```selectable.html
<table class="olt-Table olt-Table--selectable">
  <thead class="olt-Table-head">
    <tr class="olt-Table-row">
      <th class="olt-Table-header">Firstname</th>
      <th class="olt-Table-header">Lastname</th>
      <th class="olt-Table-header">Age</th>
    </tr>
  </thead>
  <tbody class="olt-Table-body">
    <tr class="olt-Table-row">
      <td class="olt-Table-data">Jill</td>
      <td class="olt-Table-data">Smith</td>
      <td class="olt-Table-data">50</td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">Eve</td>
      <td class="olt-Table-data">Jackson</td>
      <td class="olt-Table-data">94</td>
    </tr>
  </tbody>
</table>
```

### Table with justified content

Use `olt-Table--justify` for aligning cells from left to right ( similar to
the native `text-align: justify;` ).

```justify.html
<table class="olt-Table olt-Table--justify">
  <thead class="olt-Table-head">
    <tr class="olt-Table-row">
      <th class="olt-Table-header">Firstname</th>
      <th class="olt-Table-header">Lastname</th>
      <th class="olt-Table-header">Age</th>
    </tr>
  </thead>
  <tbody class="olt-Table-body">
    <tr class="olt-Table-row">
      <td class="olt-Table-data">Jill</td>
      <td class="olt-Table-data">Smith</td>
      <td class="olt-Table-data">50</td>
    </tr>
    <tr class="olt-Table-row">
      <td class="olt-Table-data">Eve</td>
      <td class="olt-Table-data">Jackson</td>
      <td class="olt-Table-data">94</td>
    </tr>
  </tbody>
</table>
```

## Responsive behaviour

The *Table* component can be used as a responsive component, by wrapping it 
around an element with `overflow-x: auto;`. This will make the *Table* 
horizontally scrollable.

```responsive.css hidden
body > div.olt-Frame { 
    max-width: 340px;
}
body > div.olt-Frame .olt-u-overflowXAuto {
    resize: horizontal;
    border: 2px solid #ff6600;
    padding: 20px;
}
```

```responsive.html
<div class="olt-u-overflowXAuto">
  <table class="olt-Table olt-Table--selectable">
    <thead class="olt-Table-head">
      <tr class="olt-Table-row">
        <th class="olt-Table-header">First Name</th>
        <th class="olt-Table-header">Last Name</th>
        <th class="olt-Table-header">Email</th>
        <th class="olt-Table-header"></th>
        <th class="olt-Table-header">Admin/Read/Write</th>
      </tr>
    </thead>
    <tbody class="olt-Table-body">
      <tr class="olt-Table-row">
        <td class="olt-Table-data">Test</td>
        <td class="olt-Table-data">Osteron</td>
        <td class="olt-Table-data">test@osteron.com</td>
        <td class="olt-Table-data">
          <a href="#" class="olt-Link olt-u-colorError">Remove</a>
        </td>
        <td class="olt-Table-data">
          <div class="olt-u-displayFlex olt-u-flexRow olt-u-justifyContentSpaceBetween">
            <div class="olt-Checkbox">
              <input id="checkbox1" type="checkbox" class="olt-Checkbox-input" checked="">
              <label for="checkbox1" class="label olt-Checkbox-label"></label>
            </div>
            <div class="olt-Checkbox">
              <input id="checkbox2" type="checkbox" class="olt-Checkbox-input">
              <label for="checkbox2" class="label olt-Checkbox-label"></label>
            </div>
            <div class="olt-Checkbox">
              <input id="checkbox3" type="checkbox" class="olt-Checkbox-input">
              <label for="checkbox3" class="label olt-Checkbox-label"></label>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

```responsive-2.css hidden
body > div.olt-Frame { 
    max-width: 400px;
    resize: both;
}
body > div.olt-Frame .olt-u-overflowXAuto {
    resize: horizontal;
    border: 2px solid #ff6600;
    padding: 20px;
}
```

```responsive-2.html
<div class="olt-u-overflowXAuto">
  <table class="olt-Table olt-Table--selectable olt-Table--justify">
    <thead class="olt-Table-head">
      <tr class="olt-Table-row">
        <th class="olt-Table-header">Firstname</th>
        <th class="olt-Table-header">Type</th>
        <th class="olt-Table-header">Firmware</th>
        <th class="olt-Table-header">Tags</th>
        <th class="olt-Table-header">Status</th>
      </tr>
    </thead>
    <tbody class="olt-Table-body">
      <tr class="olt-Table-row">
        <td class="olt-Table-data">
          <h5 class="olt-Headline--6 olt-u-textPrimary">Gateway XXX</h5>
          <p class="olt-Paragraph olt-u-fontMono olt-u-fontSizeXxSmall">0123456789</p>
        </td>
        <td class="olt-Table-data olt-u-fontMono">
          <i class="olt-Icon olt-u-textPrimary olt-Icon-link-external olt-Icon--large"></i> <span class="olt-u-fontSizeXSmall">Gateway</span>
        </td>
        <td class="olt-Table-data olt-u-textPrimary olt-u-fontSizeSmall">DEV2S</td>
        <td class="olt-Table-data">
          <span class="olt-Tag olt-Tag--secondary olt-Tag--outline">Tag 1</span>
          <span class="olt-Tag olt-Tag--secondary olt-Tag--outline">Tag 2</span>
        </td>
        <td class="olt-Table-data ">
          <span class="olt-u-textSuccess">●</span> Online
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

