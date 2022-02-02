<template>
    <small :class="baseClass">
        <slot />
    </small>
</template>

<script>
    import Vue from 'vue';

    const config = Vue.prototype.$TWVue.HelpText;

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
        name: 'HelpText',
        props: {
            variants: {
                type: Object,
                default: undefined,
            },
            variant: {
                type: String,
                default: defaultVariant(config),
            },
        },
        computed: {
            baseClass() {
                return [
                    'relative',
                    config.base,
                    this.getVariant.base,
                ];
            },
            getVariant() {
                const variants = { ...config.variants, ...this.variants };
                return variants[this.variant];
            },
        },
    };
</script>
