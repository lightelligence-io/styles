<template>
    <section>
        <button class="olt-button is-raised--primary-01" @click="toggle(true)">Toggle Snackbar</button>
        <button class="olt-button is-raised--primary-01" @click="toggle(false)">Toggle Snackbar self disappear</button>
        <div id="snackbar" class="olt-snackbar" :class="{'olt-snackbar--is-open': open}">
            Snackbar Content
            <div class="olt-snackbar--actions" v-if="showClose">
                <button class="olt-button is-bordered--primary-08" @click="toggle(true)">Close</button>
            </div>
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
