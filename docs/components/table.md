# Table

## Basic example

<table class="olt-table">
  <thead>
    <tr class="olt-table__header">
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </tbody>
</table>

````html
<table class="olt-table olt-table--line-hover olt-table--flow-aligned">
  <thead>
    <tr class="olt-table__header">
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </tbody>
</table>
````


### modifire --line-hover

<table class="olt-table olt-table--line-hover">
  <thead>
    <tr class="olt-table__header">
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </tbody>
</table>

### modifire --middle-aligned

<table class="olt-table olt-table--middle-aligned">
  <thead>
    <tr class="olt-table__header">
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </tbody>
</table>


## Complex table design (Device Table)
<table class="olt-table olt-table--middle-aligned">
  <thead>
    <tr class="olt-table__header">
      <th class="olt-table--primary-label">Name/ID</th>
      <th>Type</th> 
      <th>Firmware</th>
      <th>Tags</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody class="olt-form--s">
    <tr>
      <td>
        <div class="olt-headline--s olt-color--primary-01">Gateway XX</div>
        <div class="olt-mono--s">1234567890</div>
      </td>
      <td>
        <div class="olt-text--line">
          <i class="material-icons olt-color--primary-01">exit_to_app</i>
          <span class="olt-mono--s">Gateway</span>
        </div>
      </td> 
      <td class="olt-color--primary-01">DEV2S</td> 
      <td>
        <div class="olt-tags">
          <span class="olt-tag olt-tag--bordered-primary-02">tag a</span>
          <span class="olt-tag olt-tag--bordered-primary-02">sds</span>
        </div>
      </td>
      <td>
          <i class="olt-color--success">●</i>
          online
      </td>
    </tr>
  </tbody>
</table>

::: warning 
The gutter between the tags will be smaller on dom generator, 
because the white space not exists between two and more tags
:::
