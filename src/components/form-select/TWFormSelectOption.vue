<template>
    <option
        :value="value"
        :disabled="disabled"
    >
        <slot />
    </option>
</template>

<script>
    export default {
        name: 'TWFormSelectOption',

        props: {
            value: {
                type: [String, Number, Object, Array, Boolean],
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>
