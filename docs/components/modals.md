# Modals

:::warning
You have to implement the open/close logic by your own. Just the class `olt-modal--is-open` has to be added
and remove to open or close the modal.
:::

<fullscreen-modal></fullscreen-modal>

If you want to disable the scrollability of the whole body you have to set the class `olt-modal--in-body-open` to the body element.

````html
<section>
    <div class="olt-modal olt-modal--fullscreen">
        <button class="olt-modal--close-button">
            <i class="material-icons">close</i>
        </button>
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
            <div class="olt-copy--l">
                You should really check the configuration
            </div>
        </div>
        <div class="olt-modal__actions">
            <button class="olt-button is-raised--primary-01">
                Yes, show me
            </button>
        </div>
    </div>
    <div class="olt-modal__backdrop"></div>
</section>
````

#### State Classes
| Class                                        |                                 |
| -------------------------------------------- | ------------------------------- |
| `olt-modal--is-open`                         | opens the modal                 |
| `olt-modal--in-body-open`                    | disable scroll in body          |

## Displaying errors with modals
:::warning
You have to implement the open/close logic by your own. Just the class `olt-modal--is-open` has to be added
and remove to open or close the modal.
:::


<modal-notification class="olt-spacing--s-top"></modal-notification>

````html
<section>
    <div class="olt-modal olt-modal--notification">
        <div class="olt-modal__content">
            <div class="olt-headline--s">
                Oh No! A Device Is in A Critical State
            </div>
            <div class="olt-copy--l">
                You should really check the configuration
            </div>
        </div>
        <div class="olt-modal__actions">
            <button class="olt-button is-bordered--primary-01">
                I'll do this later
            </button>
            <button class="olt-button is-raised--primary-01">
                Yes, show me
            </button>
        </div>
    </div>
    <div class="olt-modal__backdrop"></div>
</section>
````
