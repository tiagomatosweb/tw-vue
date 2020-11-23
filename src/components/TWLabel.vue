<template>
    <label
        class="block text-cool-gray-700 text-sm font-bold mb-2 tracking-wide"
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
                default: '',
            },
        },

        data() {
            return {};
        },

        methods: {},
    };
</script>
