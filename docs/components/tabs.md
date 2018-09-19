# Tabs

:::warning
You have to implement the active/inactive logic by your own. Just the class `olt-tab--item__is-active` has to be added 
and remove for `olt-tab--item`.
:::

<tab-example></tab-example>

````html
<div class="olt-tabs">
    <button class="olt-tabs--item olt-tab--item__is-active">Tab 1</button>
    <button class="olt-tabs--item">Tab 2</button>
    <button class="olt-tabs--item">Tab 3</button>
</div>
````

#### State Classes 
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-tab--item__is-active`                   | set tab item to active          |