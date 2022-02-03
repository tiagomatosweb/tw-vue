<template>
    <button
        type="button"
        v-on="$listeners"
        :class="baseClass"
    >
        <svg
            style=" height: 100%; width: 100%;"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
        /></svg>
    </button>
</template>
<script>
    import Vue from 'vue';

    const config = Vue.prototype.$TWVue.ButtonClose;

    const defaultSize = (config) => {
        if (!config?.sizes) {
            throw new Error('You have to declare sizes property');
        }

        if (!!config?.defaultSize && !!config.sizes[config.defaultSize]) {
            return config?.defaultSize;
        }

        return Object.keys(config.sizes)[0];
    };

    const defaultVariant = (config) => {
        if (!config?.variants) {
            throw new Error('You have to declare variants property');
        }

        if (!!config?.defaultVariant && !!config.variants[config.defaultVariant]) {
            return config?.defaultVariant;
        }

        return Object.keys(config.variants)[0];
    };

    export default {
        name: 'ButtonClose',
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
        },
        computed: {
            baseClass() {
                return [
                    config.base,
                    this.getVariant.base,
                    this.getSize,
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
