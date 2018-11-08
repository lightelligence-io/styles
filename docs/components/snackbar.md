# Snackbar

:::warning
You have to implement the open and close logic by your own. Just the class `olt-snackbar--is-open` has to be added
and remove to open and close the snackbar.
:::

<snackbar label='Error'></snackbar>


<snackbar label='Success' style-type="success" icon="done_outline"></snackbar>

### Error Snackbar
````html
<div class="olt-snackbar">
    Snackbar Content
</div>
<!-- opened snackbar -->
<div class="olt-snackbar olt-snackbar--is-open">
    Snackbar Content
</div>
````

### Success Snackbar

````html
<div class="olt-snackbar olt-snackbar--is-success">
    <div class="olt-snackbar__content">
        Lorem Ipsum...
    </div>
</div>
````


#### State Classes
| Class                        |                                     |
| ---------------------------- | ----------------------------------- |
| `olt-snackbar--is-open`      | shows up snackbar                   |
| `olt-snackbar--is-success`   | renders snackbar indicating success |