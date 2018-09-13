<template>
    <section>
        <div class="olt-textfield--wrapper has-info is-fullwidth">
            <input class="olt-textfield--input" v-model="input" id="input-counter" maxlength="20" name="input"/>
            <label class="olt-textfield--input__label" for="input-counter">Input with Counter</label>
            <span class="olt-textfield--input__info-right">{{ `${input.length}/20` }}</span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'input-counter',

    data() {
        return {
            input: '',
        };
    },
};
</script>

