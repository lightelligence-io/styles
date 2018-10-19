<template>
    <section>
        <button class="olt-button is-raised--primary-01" @click="toggle(false)">Toggle Snackbar</button>
        <div class="olt-snackbar" :class="{'olt-snackbar--is-open': snackbarOpen}">
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
            snackbarOpen: false,
            showClose: false,
        };
    },

    methods: {
        toggle(showClose) {
            if (this.snackbarOpen) {
                this.snackbarOpen = false;
            } else {
                this.snackbarOpen = true;
            }
            if (showClose) {
                this.showClose = showClose;
            } else {
                setTimeout(() => {
                    this.snackbarOpen = false;
                }, 3000);
            }
        }
    },
};
</script>
