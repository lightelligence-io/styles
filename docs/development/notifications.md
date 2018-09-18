# Error Notifications

## As Snackbar
:::warning
You have to implement the open and close logic by your own. Just the class `olt-snackbar--is-open` has to be added 
and remove to open and close the snackbar.
:::

<snackbar></snackbar>

````html
<div class="olt-snackbar">
    Snackbar Content
    <div class="olt-snackbar--actions">
        <button class="olt-button is-bordered--primary-08">Close</button>
    </div>
</div>
<!-- opened snackbar -->
<div class="olt-snackbar olt-snackbar--is-open">
    Snackbar Content
    <div class="olt-snackbar--actions">
        <button class="olt-button is-bordered--primary-08">Close</button>
    </div>
</div>
````
#### State Classes
| Class                        |                                 |
| ---------------------------- | ------------------------------- |
| `olt-snackbar--is-open`      | shows up snackbar               |

## As Banner

### No action required, can be dismissed

<div class="olt-banner-notification olt-spacing--s-top">
    <div class="olt-banner-notification--content">
        Oh snap! You really need to change a few things up to move
    </div>
    <div class="olt-banner-notification--actions">
        <button class="olt-button is-bordered--notify">Dismiss</button>
    </div>
</div>

### Action required, can't be dismissed until error is resolved

<div class="olt-banner-notification--action-required olt-spacing--s-top">
    <div class="olt-banner-notification--content">
        Oh snap! You really need to change a few things up to move
    </div>
    <div class="olt-banner-notification--actions">
        <button class="olt-button is-bordered--primary-08">Fix it now</button>
    </div>
</div>

### Dismiss example
:::warning
You have to implement the dismiss logic by your own. Just the class `olt-banner-notification--is-dismissed` has to be added 
and remove to dismiss the alert.
:::

<banner-notification-dismiss></banner-notification-dismiss>

````html
<div class="olt-banner-notification">
    <div class="olt-banner-notification--content">
        Oh snap! You really need to change a few things up to move
    </div>
    <div class="olt-banner-notification--actions">
        <button class="olt-button is-bordered--notify">Dismiss</button>
    </div>
</div>
<div class="olt-banner-notification--action-required">
    <div class="olt-banner-notification--content">
        Oh snap! You really need to change a few things up to move
    </div>
    <div class="olt-banner-notification--actions">
        <button class="olt-button is-bordered--primary-08">Fix it now</button>
    </div>
</div>
````

#### State Classes 
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-banner-notification--is-dismissed`      | dismissed the banner            |

## As Modal
:::warning
You have to implement the open/close logic by your own. Just the class `olt-modal--is-open` has to be added 
and remove to open or close the modal.
:::

If you search for other modals go to <a href="./modals.html">Modals Section</a>.

<modal-notification class="olt-spacing--s-top"></modal-notification>

````html
<section>
    <div class="olt-modal olt-modal--notification"><!-- <- put here open-class -->
        <div class="olt-modal--content">
            <div class="olt-headline--s">Oh No! A Device Is in A Critical State</div>
            <div class="olt-copy--l">You should really check the configuration</div>
        </div>
        <div class="olt-modal--actions">
            <button class="olt-button is-bordered--primary-01">I'll do this later</button>
            <button class="olt-button is-raised--primary-01">Yes, show me</button>
        </div>
    </div>
    <div class="olt-modal--backdrop"></div>
</section>
````

#### State Classes 
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-modal--is-open`                         | opens the modal                 |
