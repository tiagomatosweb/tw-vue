<template>
    <Component
        :is="renderComponent"
        :to="to"
        href=""
        class="block px-4 py-2 text-sm leading-5 text-cool-gray-700 hover:bg-gray-100 hover:text-cool-gray-900 focus:outline-none focus:bg-gray-100 focus:text-cool-gray-900"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'TwDropdownItem',

        props: {
            to: {
                type: [Object, String],
                default: '',
            },
        },

        data() {
            return {};
        },

        computed: {
            renderComponent() {
                return this.to ? 'RouterLink' : 'a';
            },
        },

        methods: {},
    };
</script>
