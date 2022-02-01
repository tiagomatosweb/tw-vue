<template>
    <div
        :class="baseClass"
        @click.stop.prevent="onClick()"
    >
        <slot>
            <img
                v-if="src"
                :src="src"
                :alt="alt"
            >
        </slot>

        <span v-if="text && (!src || $slots['default'])">
            {{ text }}
        </span>
    </div>
</template>

<script>
    import Vue from 'vue';

    const config = Vue.prototype.$TWVue.Avatar;

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
        name: 'Avatar',

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
            src: {
                type: String,
                default: undefined,
            },
            alt: {
                type: String,
                default: undefined,
            },
            text: {
                type: String,
                default: undefined,
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

            getVariant() {
                const variants = { ...config.variants, ...this.variants };
                return variants[this.variant];
            },

            getSize() {
                const sizes = { ...config.sizes, ...this.sizes };
                return sizes[this.size];
            },
        },

        methods: {
            onClick() {
                this.$emit('click');
            },
        },
    };
</script>
