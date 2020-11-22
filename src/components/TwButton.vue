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
        name: 'TwButton',

        components: {
            TwSpinner,
        },

        props: {
            type: {
                type: String,
                default: 'button',
                validator: value => ['button', 'submit'].includes(value),
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
                localBase: '',
                localVariants: {},
                localSizes: {},
            };
        },

        computed: {
            classList() {
                const base = [
                    this.localBase,
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
                const variants = { ...this.localVariants };
                return variants[this.variant];
            },

            getSizes() {
                const sizes = { ...this.localSizes };
                return sizes[this.size];
            },

            inputListeners() {
                return this.$listeners;
            },
        },

        created() {
            this.localBase = this?.$TWVue?.TWButton?.base || '';
            this.localVariants = this?.$TWVue?.TWButton?.variants || {};
            this.localSizes = this?.$TWVue?.TWButton?.sizes || {};
        },
    };
</script>
