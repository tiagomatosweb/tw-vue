<template>
    <button
        :type="type"
        :disabled="busy || disabled"
        :class="classList"
        v-on="inputListeners"
    >
        <TwSpinner
            v-if="busy"
            class="mr-2"
        />

        <slot />
    </button>
</template>

<script>
    import TwSpinner from '@/components/TwSpinner';

    export default {
        name: 'TWButton',

        components: {
            TwSpinner,
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
        },

        data() {
            return {
                options: {},
            };
        },

        computed: {
            classList() {
                const base = [
                    this.options.base,
                ];

                if (this.block) {
                    base.push('w-full justify-center');
                }

                if (this.busy) {
                    base.push('opacity-75');
                }

                return [
                    base.join(' '),
                    this.getVariants,
                    this.getSizes,
                ];
            },

            getVariants() {
                const variants = this.options.variants;
                return variants[this.variant];
            },

            getSizes() {
                const sizes = this.options.sizes;
                return sizes[this.size];
            },

            inputListeners() {
                return this.$listeners;
            },
        },

        created() {
            this.options = this?.$TWVue?.TWButton || {};
        },
    };
</script>
