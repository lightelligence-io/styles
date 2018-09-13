<template>
    <section>
        <doc-tabs>
            <template slot="example">
                <input type="text" v-model="textModel"/>
                <div class="typo-example" v-for="(typo, index) in typography" :key="`typo-${index}`">
                    <hr />
                    <div class="olt-overline">{{ typo.class }}</div>
                    <h1 :class="typo.class" v-if="typo.tag === 'h1'">{{ textModel }}</h1>
                    <h2 :class="typo.class" v-if="typo.tag === 'h2'">{{ textModel }}</h2>
                    <h3 :class="typo.class" v-if="typo.tag === 'h3'">{{ textModel }}</h3>
                    <h4 :class="typo.class" v-if="typo.tag === 'h4'">{{ textModel }}</h4>
                    <h5 :class="typo.class" v-if="typo.tag === 'h5'">{{ textModel }}</h5>
                    <h6 :class="typo.class" v-if="typo.tag === 'h6'">{{ textModel }}</h6>
                    <span :class="typo.class" v-if="typo.tag === 'span'">{{ textModel }}</span>
                    <p :class="typo.class" v-if="typo.tag === 'p'">{{ textModel }}</p>
                </div>
            </template>
            <template slot="code">
                <pre lass="language-html">
                    <code v-for="(typo, index) in typography" :key="`typo-${index}`">
{{
`&lt;${typo.tag} class="${typo.class}"&gt;`
}}
    {{ textModel }}
{{ `&lt;/${typo.tag}&gt;` }}
                    </code>
                </pre>
            </template>
        </doc-tabs>
    </section>
</template>

<script>
import DocTabs from './DocTabs.vue';

export default {
    name: 'typography',

    components: {
        DocTabs,
    },

    props: {
        text: {
            type: String,
            default: 'Back-end utilize engage, cross-platform user-centric, revolutionize.',
        },
        typography: {
            type: Array,
        },
    },

    data() {
        return {
            textModel: '',
        }
    },

    mounted() {
        this.textModel = this.text;
    }
};
</script>

<style scoped>
.olt-overline {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    color: #A5A6A8;
}
.typo-example:first-child hr {
    display: none;
}
h2 {
    border: 0;
}
</style>


