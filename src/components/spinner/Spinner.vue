<template>
    <div :class="baseClass">
        <svg
            class="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            />
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    </div>
</template>

<script>
    import Vue from 'vue';

    const config = Vue.prototype.$TWVue.Spinner;

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
        name: 'Spinner',
        inheritAttrs: false,
        props: {
            // variants: {
            //     type: Object,
            //     default: undefined,
            // },
            // variant: {
            //     type: String,
            //     default: undefined,
            // },
            sizes: {
                type: Object,
                default: undefined,
            },
            size: {
                type: String,
                default: defaultSize(config),
            },
        },
        computed: {
            baseClass() {
                return [
                    config.base,
                    this.getSize,
                    // this.getVariant.base,
                ];
            },

            // getVariant() {
            //     const variants = { ...config.variants, ...this.variants };
            //     return this.variant? variants[this.variant] : '';
            // },

            getSize() {
                const sizes = { ...config.sizes, ...this.sizes };
                return sizes[this.size];
            },
        },
    };
</script>
