<template>
    <section>
        <div class="olt-toggle-button--group">
            <button class="olt-toggle-button" :class="{'olt-toggle-button__is-active': activeIndex === 0}" @click="activeIndex = 0">
                Button Label
            </button>
            <button class="olt-toggle-button" :class="{'olt-toggle-button__is-active': activeIndex === 1}" @click="activeIndex = 1">
                Button Label
            </button>
            <button class="olt-toggle-button" :class="{'olt-toggle-button__is-active': activeIndex === 2}" @click="activeIndex = 2">
                Button Label
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'toggle-buttons',

    data() {
        return {
            activeIndex: 0,
        };
    },
};
</script>