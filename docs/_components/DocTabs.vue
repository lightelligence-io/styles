<template>
    <section class="doc-tabs">
        <div class="tab-items">
            <div class="item" :class="{'is-active': activeItem === 0}" @click="activeItem = 0">
                Example
            </div>
            <div class="item" :class="{'is-active': activeItem === 1}" @click="activeItem = 1">
                Code
            </div>
        </div>
        <div class="tab" v-show="activeItem === 0">
            <slot name="example"></slot>
        </div>
        <div class="tab" v-show="activeItem === 1">
            <slot name="code"></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'doc-tabs',

    data() {
        return {
            activeItem: 0,
        };
    },
};
</script>