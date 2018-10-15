# Modals

:::warning
You have to implement the open/close logic by your own. Just the class `olt-modal--is-open` has to be added 
and remove to open or close the modal.
:::

We have an explicit modal to notify the user about an error [here](/components/notifications.html#as-modal).

<fullscreen-modal></fullscreen-modal>

````html
<section>
    <div class="olt-modal olt-modal--fullscreen">
        <button class="olt-modal--close-button">
            <i class="material-icons">close</i>
        </button>
        <div class="olt-modal__header">
            <div class="olt-headline--l">Headline</div>
        </div>
        <div class="olt-modal__content">
            <div class="olt-modal__content--inner">
                <div class="olt-copy--l">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
            </div>
        </div>
    </div>
    <div class="olt-modal__backdrop"></div>
</section>

<section>
    <div class="olt-modal">
        <div class="olt-modal__content">
            <div class="olt-headline--s">Oh No! A Devicee</div>
            <div class="olt-copy--l">You should really check the configuration</div>
        </div>
        <div class="olt-modal__actions">
            <button class="olt-button is-raised--primary-01">Yes, show me</button>
        </div>
    </div>
    <div class="olt-modal__backdrop"></div>
</section>
````

#### State Classes 
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-modal--is-open`                         | opens the modal                 |