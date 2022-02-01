<template>
    <span :class="baseClass">
        <slot />

        <button
            v-if="closable"
            type="button"
            :class="baseButtonCloseClass"
        >
            <svg
                class="h-2 w-2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 8 8"
            >
                <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M1 1l6 6m0-6L1 7"
                />
            </svg>
        </button>
    </span>
</template>

<script>
    import Vue from 'vue';

    const config = Vue.prototype.$TWVue.Tag;

    const defaultVariant = (config) => {
        if (!config?.variants) {
            throw new Error('You have to declare variants property');
        }

        if (!!config?.defaultVariant && !!config.variants[config.defaultVariant]) {
            return config?.defaultVariant;
        }

        return Object.keys(config.variants)[0];
    };

    const defaultSize = (config) => {
        if (!config?.sizes) {
            throw new Error('You have to declare sizes property');
        }

        if (!!config?.defaultSize && !!config.sizes[config.defaultSize]) {
            return config?.defaultSize;
        }

        return Object.keys(config.sizes)[0];
    };

    export default {
        name: 'Tag',

        props: {
            variants: {
                type: Object,
                default: undefined,
            },
            variant: {
                type: String,
                default: defaultVariant(config),
            },
            sizes: {
                type: Object,
                default: undefined,
            },
            size: {
                type: String,
                default: defaultSize(config),
            },
            closable: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            baseClass() {
                return [
                    config.base,
                    this.getSize,
                    this.getVariant.base,
                ];
            },

            baseButtonCloseClass() {
                return [
                    'h-4 w-4 ml-1 -mr-2',
                    config.baseButtonClose,
                    this.getVariant.buttonClose,
                ];
            },

            getVariant() {
                const variants = { ...config.variants, ...this.variants };
                return variants[this.variant];
            },

            getSize() {
                const sizes = { ...config.sizes, ...this.sizes };
                return sizes[this.size];
            },
        },
    };
</script>
