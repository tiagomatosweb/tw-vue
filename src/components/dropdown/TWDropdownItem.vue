<template>
    <Component
        :is="is"
        :href="localHref"
        :to="to"
        :class="classList"
        @click="onClick"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'TWDropdownItem',

        inject: {
            'TWDropdown': {
                default: undefined,
            },
        },

        props: {
            href: {
                type: String,
                default: undefined,
            },

            to: {
                type: [String, Object],
                default: undefined,
            },
        },

        computed: {
            classList() {
                return [
                    'group flex items-center',
                    'block w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:text-gray-900 hover:bg-gray-100',
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

                if (typeof this.href !== 'undefined') {
                    return 'a';
                }

                return 'button';
            },
        },

        methods: {
            onClick(evt) {
                this.closeDropdown();
                this.$emit('click', evt);
            },

            closeDropdown() {
                if (!this.TWDropdown) {
                    return;
                }

                this.TWDropdown.close();
            },
        },
    };
</script>
