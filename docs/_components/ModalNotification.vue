<template>
    <section>
        <div class="olt-button is-raised--primary-01" @click="open = true">Open Modal</div>
        <section>
            <div class="olt-modal olt-modal--notification" :class="{'olt-modal--is-open': open}">
                <div class="olt-modal__content">
                    <div class="olt-modal__notification-icon">
                        <i class="material-icons">error_outline</i>
                    </div>
                    <div class="olt-headline--s">Oh No! A Device Is in A Critical State</div>
                    <div class="olt-copy--l">You should really check the configuration</div>
                </div>
                <div class="olt-modal__actions">
                    <button class="olt-button is-bordered--primary-01" @click="open = false">I'll do this later</button>
                    <button class="olt-button is-raised--primary-01" @click="open = false">Yes, show me</button>
                </div>
            </div>
            <div class="olt-modal__backdrop"></div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'modal-notification',

    data() {
        return {
            open: false,
        };
    },
};
</script>

