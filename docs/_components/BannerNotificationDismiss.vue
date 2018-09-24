<template>
    <section class="olt-spacing--s-top">
        <button class="olt-button is-raised--primary-01 olt-spacing--s-bottom" @click="open = !open">Toggle Notification</button>
        <div class="olt-banner-notification" :class="{'olt-banner-notification--is-dismissed': !open}">
            <div class="olt-banner-notification__content">
                <i class="material-icons">error_outline</i>
                Click on dismiss to look at the dismiss animation
            </div>
            <div class="olt-banner-notification__actions">
                <button class="olt-button is-bordered--notify" @click="open = false">Dismiss</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'banner-notification-dismiss',

    data() {
        return {
            open: true,
        };
    },
};
</script>

