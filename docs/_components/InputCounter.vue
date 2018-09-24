<template>
    <section>
        <div class="olt-textfield__wrapper has-info is-fullwidth">
            <input class="olt-textfield__input" v-model="input" id="input-counter" maxlength="20" name="input"/>
            <label class="olt-textfield__input-label" for="input-counter">Input with Counter</label>
            <span class="olt-textfield__input-info-right">{{ `${input.length}/20` }}</span>
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

