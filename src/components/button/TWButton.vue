<template>
    <Component
        :is="is"
        :type="localType"
        :disabled="busy || disabled"
        :href="localHref"
        :to="to"
        :class="classList"
        v-on="inputListeners"
    >
        <TWSpinner
            v-if="busy"
            :variant="spinnerVariant"
            size="xxs"
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
            spinnerVariant: {
                type: String,
                default: 'white',
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
                    this.getSize,
                ];
            },

            getVariant() {
                const variants = this.TWOptions.variants;
                return variants[this.variant];
            },

            getSize() {
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

            localType() {
                if (typeof this.to !== 'undefined') {
                    return undefined;
                }

                return this.type;
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
