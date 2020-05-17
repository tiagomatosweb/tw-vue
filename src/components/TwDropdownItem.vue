<template>
    <Component
        :href="localHref"
        :to="to"
        :is="is"
        :class="classList"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'TwDropdownItem',

        props: {
            href: {
                type: String,
                default: '#',
            },

            to: {
                type: [String, Object],
                default: undefined,
            },
        },

        data() {
            return {
            };
        },

        computed: {
            classList() {
                return [
                    'group flex items-center',
                    'block px-4 py-2 text-sm leading-5 text-gray-700 hover:text-gray-900 hover:bg-gray-100',
                    'focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                ];
            },

            localHref() {
                if (typeof this.to !== 'undefined') {
                    return undefined;
                }

                return this.href;
            },

            is() {
                if (typeof this.to !== 'undefined') {
                    return 'RouterLink';
                }

                return 'a';
            },
        },

        methods: {},
    };
</script>
