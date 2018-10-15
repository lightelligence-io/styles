<template>
    <section>
        <button class="olt-button is-raised--primary-01" @click="toggle(false)">Toggle Snackbar</button>
        <div class="olt-snackbar" :class="{'olt-snackbar--is-open': open}">
            <span class="olt-snackbar__content">
                <i class="material-icons">error_outline</i>
                Snackbar Content
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'snackbar',

    data() {
        return {
            open: false,
            showClose: false,
        };
    },

    methods: {
        toggle(showClose) {
            if (this.open) {
                this.open = false;
            } else {
                this.open = true;
            }
            if (showClose) {
                this.showClose = showClose;
            } else {
                setTimeout(() => {
                    this.open = false;
                }, 3000);
            }
        }
    },
};
</script>
