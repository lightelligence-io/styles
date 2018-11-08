<template>
    <section>
        <button class="olt-button is-raised--primary-01" @click="toggle(false)">{{label}}</button>
        <div class="olt-snackbar" :class="[
            {'olt-snackbar--is-open': snackbarOpen},
            styleClass
        ]">
            <span class="olt-snackbar__content">
                <i class="material-icons">{{icon}}</i>
                Snackbar Content
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'snackbar',

    props: {
        label: {
            type: String,
            default: 'toggle Snackbar',
        },
        styleType: {
            type: String,
            default: 'error',
        },
        icon: {
            type: String,
            default: 'error_outline',
        }
    },

    data() {
        return {
            snackbarOpen: false,
            showClose: false,
        };
    },

    computed: {
        styleClass() {
            return `olt-snackbar--is-${this.styleType}`;
        },
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
