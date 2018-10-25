<template>
    <section>
        <div class="olt-tabs">
            <button class="olt-tabs__item" :class="{'olt-tabs__item--is-active': activeIndex === 0}" @click="activeIndex = 0">Lorem Ipsum Dolor</button>
            <button class="olt-tabs__item" :class="{'olt-tabs__item--is-active': activeIndex === 1}" @click="activeIndex = 1">Sit amet sow</button>
            <button class="olt-tabs__item" :class="{'olt-tabs__item--is-active': activeIndex === 2}" @click="activeIndex = 2">Tab 3</button>
        </div>
        <div v-show="activeIndex === 0">
            E-services utilize; magnetic scale: capture dynamic long-tail solutions interfaces, "e-services proactive synergies embrace vortals innovative." Peer-to-peer, embedded, podcasting transition wikis relationships implement maximize.
        </div>
        <div v-show="activeIndex === 1">
            Proactive models synthesize folksonomies infomediaries embedded integrate synergies; rich disintermediate killer niches reinvent 24/365. Visionary ubiquitous blogging matrix platforms? E-tailers reinvent; ROI aggregate engage architectures rss-capable. Clicks-and-mortar wireless channels; leading-edge portals cultivate expedite blogospheres platforms web-readiness integrate vortals.
        </div>
        <div v-show="activeIndex === 2">
            ROI transition disintermediate harness blogospheres bandwidth front-end proactive evolve back-end e-commerce. Disintermediate standards-compliant; post, technologies user-centred citizen-media, bleeding-edge enable maximize: A-list efficient, architectures viral.
        </div>
    </section>
</template>

<script>
export default {
    name: 'tab-example',

    data() {
        return {
            activeIndex: 0,
        };
    },
};
</script>

