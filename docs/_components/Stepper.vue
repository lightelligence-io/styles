<template>
    <section class="olt-stepper">
        <div class="olt-stepper--header">
            <div class="olt-stepper--step-item" :class="{'olt-stepper--step-item__is-active': activeIndex === 0}" @click="activeIndex = 0">
                <div class="olt-stepper--step-item__inner">
                    <div class="olt-fab olt-fab--paginator">1</div>
                    <span>Step</span>
                </div>
            </div>
            <div class="olt-stepper--step-item" :class="{'olt-stepper--step-item__is-active': activeIndex === 1}" @click="activeIndex = 1">
                <div class="olt-stepper--step-item__inner">
                    <div class="olt-fab olt-fab--paginator">2</div>
                    <span>Step</span>
                </div>
            </div>
            <div class="olt-stepper--step-item" :class="{'olt-stepper--step-item__is-active': activeIndex === 2}" @click="activeIndex = 2">
                <div class="olt-stepper--step-item__inner">
                    <div class="olt-fab olt-fab--paginator">3</div>
                    <span>Step</span>
                </div>
            </div>
        </div>
        <div class="olt-stepper--content">
            <div class="olt-stepper--content-item" :class="{'olt-stepper--content-item__is-active': activeIndex === 0}">
                Real-time, systems synergies cultivate iterate visualize incubate folksonomies cultivate remix capture strategize harness 
                leading-edge transparent, engineer target e-business. Reinvent, end-to-end networks, "value viral incentivize matrix dot-com 
                e-commerce innovate orchestrate evolve channels infomediaries syndicate, architectures methodologies folksonomies reinvent, 
                disintermediate." Podcasting authentic architectures infrastructures empower, niches embrace action-items users back-end, 
                maximize, action-items initiatives engage vertical. Web-enabled feeds networks rss-capable virtual reinvent empower e-services 
                extensible. Partnerships intuitive ecologies, "cutting-edge e-business," aggregate grow streamline deliverables.
            </div>
            <div class="olt-stepper--content-item" :class="{'olt-stepper--content-item__is-active': activeIndex === 1}">
                Models data-driven initiatives distributed user-contributed reinvent enhance redefine dynamic, functionalities, engage 
                monetize maximize enterprise, extend incentivize transform eyeballs. E-tailers bleeding-edge synergize, "weblogs webservices 
                initiatives user-contributed clicks-and-mortar?"
            </div>
            <div class="olt-stepper--content-item" :class="{'olt-stepper--content-item__is-active': activeIndex === 2}">
                Cluetrain users bleeding-edge reinvent, incentivize. Vertical e-services e-tailers solutions rss-capable innovative 
                user-centric, generate long-tail; brand matrix best-of-breed, wikis.
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Stepper',

    data() {
        return {
            activeIndex: 0,
        };
    },

    mounted() {
        const elements = this.$el.querySelectorAll('.olt-stepper--step-item');
        const length = elements.length;
        elements.forEach((element) => {
            element.style.width = `${100 / length}%`;
        });
    }
};
</script>