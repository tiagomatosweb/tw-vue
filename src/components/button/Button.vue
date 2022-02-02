<template>
    <Component
        :is="computedTag"
        :class="baseClass"
        :type="type"
        :disabled="$attrs.disabled || busy"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <TWSpinner
            v-if="busy"
            size="xxs"
            class="-ml-0.5 mr-2"
        />
        <span v-if="label">{{ label }}</span>
        <span v-else-if="$slots.default">
            <slot />
        </span>
    </Component>
</template>
<script>
    import Vue from 'vue';
    import TWSpinner from '@/components/spinner/Spinner';

    const config = Vue.prototype.$TWVue.Button;

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
        name: 'Button',
        inheritAttrs: false,
        components: {
            TWSpinner,
        },
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
            label: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: 'button',
                validator: (value) => {
                    return [
                        'button',
                        'submit',
                        'reset',
                    ].includes(value);
                },
            },
            block: {
                type: Boolean,
                default: false,
            },
            busy: {
                type: Boolean,
                default: false,
            },
            tag: {
                type: String,
                default: 'button',
            },
        },
        computed: {
            baseClass() {
                return [
                    config.base,
                    this.getSize,
                    this.getVariant.base,
                    this.getOpacity,
                    this.getBlock,
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
            computedTag() {
                if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                    return 'button';
                }
                return this.tag;
            },
            getOpacity() {
                return this.busy || this.$attrs.disabled ? 'opacity-75' : '';
            },
            getBlock() {
                return this.block ? 'w-full justify-center' : '';
            },
        },
    };
</script>
