<template>
    <Component
        :is="is"
        :type="type"
        :disabled="busy || disabled"
        :href="localHref"
        :to="to"
        :class="classList"
        v-on="inputListeners"
    >
        <TWSpinner
            v-if="busy"
            :class="$slots['default'] ? '-ml-1 mr-3 h-full w-5' : undefined"
        />

        <slot />
    </Component>
</template>

<script>
    import TWSpinner from '../spinner/TWSpinner';

    export default {
        name: 'TWButton',

        components: {
            TWSpinner,
        },

        props: {
            type: {
                type: String,
                default: 'button',
            },
            variant: {
                type: String,
                default: 'default',
            },
            size: {
                type: String,
                default: 'md',
            },
            block: {
                type: Boolean,
                default: false,
            },
            busy: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            href: {
                type: String,
                default: undefined,
            },

            to: {
                type: [String, Object],
                default: undefined,
            },
        },

        data() {
            return {
                TWOptions: {},
            };
        },

        computed: {
            classList() {
                const base = [
                    this.TWOptions.base,
                ];

                if (this.block) {
                    base.push('w-full justify-center');
                }

                if (this.busy) {
                    base.push('opacity-75');
                }

                return [
                    base.join(' '),
                    this.getVariant,
                    this.getSizes,
                ];
            },

            getVariant() {
                const variants = this.TWOptions.variants;
                return variants[this.variant];
            },

            getSizes() {
                const sizes = this.TWOptions.sizes;
                return sizes[this.size];
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

            inputListeners() {
                return this.$listeners;
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWButton || {};
        },
    };
</script>
