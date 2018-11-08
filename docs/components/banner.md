# Banner 
## Dismiss Error Banner Example
:::warning
You have to implement the dismiss logic by your own. Just the class `olt-banner-notification--is-dismissed` has to be added
and remove to dismiss the alert.
:::

<banner-notification-dismiss></banner-notification-dismiss>

````html
<div class="olt-banner-notification">
    <div class="olt-banner-notification__content">
        <i class="material-icons">error_outline</i>
        Oh snap! You really need to change a few things up to move
    </div>
    <div class="olt-banner-notification__actions">
        <button class="olt-button is-bordered--notify">Dismiss</button>
    </div>
</div>
<div class="olt-banner-notification--action-required">
    <div class="olt-banner-notification__content">
        <i class="material-icons">error_outline</i>
        Oh snap! You really need to change a few things up to move
    </div>
    <div class="olt-banner-notification__actions">
        <button class="olt-button is-bordered--primary-08">Fix it now</button>
    </div>
</div>
````

#### State Classes
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-banner-notification--is-dismissed`      | dismissed the banner            |
