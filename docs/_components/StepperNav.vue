<template>
    <div class="olt-stepper-nav">
        <div class="olt-stepper-nav__step-item" :class="{'olt-stepper-nav__step-item--is-active': activeIndex === 0}" @click="activeIndex = 0">
            <div class="olt-stepper-nav__step-item-inner">
                <div class="olt-fab olt-fab--mini olt-fab--paginator">1</div>
                <span>Step</span>
            </div>
        </div>
        <div class="olt-stepper-nav__step-item" :class="{'olt-stepper-nav__step-item--is-active': activeIndex === 1}" @click="activeIndex = 1">
            <div class="olt-stepper-nav__step-item-inner">
                <div class="olt-fab olt-fab--mini olt-fab--paginator">2</div>
                <span>Step</span>
            </div>
        </div>
        <div class="olt-stepper-nav__step-item" :class="{'olt-stepper-nav__step-item--is-active': activeIndex === 2}" @click="activeIndex = 2">
            <div class="olt-stepper-nav__step-item-inner">
                <div class="olt-fab olt-fab--mini olt-fab--paginator">3</div>
                <span>Step</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepperNav',

    data() {
        return {
            activeIndex: 0,
        };
    },

    mounted() {
        const elements = this.$el.querySelectorAll('.olt-stepper-nav__step-item');
        const length = elements.length;
        elements.forEach((element) => {
            element.style.width = `${100 / length}%`;
        });
    }
};
</script>