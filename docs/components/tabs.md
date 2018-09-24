# Tabs

:::warning
You have to implement the active/inactive logic by your own. Just the class `olt-tab__item--is-active` has to be added 
and remove for `olt-tab__item`.
:::

<tab-example></tab-example>

````html
<div class="olt-tabs">
    <button class="olt-tabs__item olt-tab__item--is-active">Tab 1</button>
    <button class="olt-tabs__item">Tab 2</button>
    <button class="olt-tabs__item">Tab 3</button>
</div>
````

#### State Classes 
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-tab__item--is-active`                   | set tab item to active          |