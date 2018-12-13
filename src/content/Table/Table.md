# Table

Tables must be used with `<table>` and its relatives.

```html
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

## Selectable

Use `olt-Table--selectable` if your rows may be selected.

```html
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

## Justify

Use `olt-Table--justify` for aligning cells from left to right

```html
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

## Responsive

```html
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
          <input data-toggle="modal" id="modal-toggle-1" type="checkbox">
          <label class="olt-Link olt-u-textError" for="modal-toggle-1">Remove</label>
          <section class="olt-Modal olt-Modal--error">
            <div class="olt-Modal-dialog">
              <label class="olt-Modal-close" for="modal-toggle-1"></label>
              <div class="olt-Modal-content">
                <div class="olt-u-textAlignCenter">
                  <h5 class="olt-Headline olt-Headline--5">Remove User</h5>
                  <p class="olt-u-fontSizeSmall olt-u-fontMono olt-u-fontSizeXSmall">test@osteron.com</p>
                  <p class="olt-u-fontSizeSmall">
                    This user will be removed from this tenant. This is a permanent action and cannot be reverted. You can always re-invite users later.
                  </p>
                </div>
              </div>
              <div class="olt-Modal-footer">
                <label class="olt-Button olt-Button--outline olt-u-marginRight2" for="modal-toggle-1">Cancel</label>
                <label class="olt-Button olt-Button--primary" for="modal-toggle-1">Confirm</label>
              </div>
            </div>
          </section>
        </td>
        <td class="olt-Table-data">
          <div class="u-displayFlex u-flexRow u-justifyContentSpaceBetween">
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

## Example

```html
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
          <i class="olt-Icon olt-u-textPrimary" data-icon="exit_to_app"></i> <span class="olt-u-fontSizeXSmall">Gateway</span>
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
