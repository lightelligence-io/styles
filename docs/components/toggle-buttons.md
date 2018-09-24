# Toggle Buttons

:::warning
You have to implement the active/inactive logic by your own. Just the class `olt-toggle-button--is-active` has to be added 
and remove for `olt-toggle-button`.
:::

<toggle-buttons></toggle-buttons>

````html
<div class="olt-toggle-button__group">
    <button class="olt-toggle-button olt-toggle-button--is-active">
        Button Label
    </button>
    <button class="olt-toggle-button">
        Button Label
    </button>
    <button class="olt-toggle-button">
        Button Label
    </button>
</div>
````

#### State Classes 
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-toggle-button--is-active`               | set button to active            |