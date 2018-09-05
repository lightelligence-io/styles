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

<style>
.rectangle {
    border-radius: 4px;
    height: 120px;
    width: 100%;
    line-height: 120px;
    text-align: center;
    margin-bottom: 16px;
    border: solid 2px #CFCFCF;
}

.rectangle.is-grey {
    background: #CFCFCF;
}
</style>


