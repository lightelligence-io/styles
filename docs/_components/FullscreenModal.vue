<template>
    <section>
        <div class="olt-button is-raised--primary-01" @click="open = true">Open Fullscreen Modal</div>
        <div class="olt-button is-raised--primary-01" @click="openClassic = true">Open Classic Modal</div>
        <section>
            <div class="olt-modal olt-modal--fullscreen" :class="{'olt-modal--is-open': open}">
                <button class="olt-modal__close-button" @click="open = false">
                    <i class="material-icons">close</i>
                </button>
                <div class="olt-modal__header">
                    <div class="olt-headline--l">Headline</div>
                </div>
                <div class="olt-modal__content">
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
            <div class="olt-modal__backdrop"></div>
        </section>
        <section>
            <div class="olt-modal" :class="{'olt-modal--is-open': openClassic}">
                <div class="olt-modal__content">
                    <div class="olt-headline--s">Oh No! A Devicee</div>
                    <div class="olt-copy--l">You should really check the configuration</div>
                </div>
                <div class="olt-modal__actions">
                    <button class="olt-button is-raised--primary-01" @click="openClassic = false">Yes, show me</button>
                </div>
            </div>
            <div class="olt-modal__backdrop" @click="openClassic = false"></div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'fullscreen-modal',

    data() {
        return {
            open: false,
            openClassic: false,
        };
    },
};
</script>
