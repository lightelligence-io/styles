<template>
    <section class="rectangle" :class="`${componentClass} ${colorClass}`">
        <span><slot></slot></span>
    </section>
</template>

<script>
export default {
    name: 'rectangle',

    props: {
        componentClass: {
            type: String,
        },
        colorClass: {
            type: String,
            default: 'is-grey',
        },
    },
};
</script>


