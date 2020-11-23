<template>
    <label
        :class="options.base"
        :for="labelFor"
    >
        <slot />
    </label>
</template>

<script>
    export default {
        name: 'TWLabel',

        props: {
            labelFor: {
                type: String,
                default: undefined,
            },
        },

        created() {
            this.options = this?.$TWVue?.TWLabel || {};
        },
    };
</script>
