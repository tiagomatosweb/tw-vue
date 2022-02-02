<template>
    <button
        type="button"
        :class="baseClass"
        @click="onClick"
    >
        <span :class="handlerClass" />
    </button>
</template>

<script>
    import Vue from 'vue';

    const config = Vue.prototype.$TWVue.FormSwitch;

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
        name: 'FormSwitch',
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
            value: {
                type: [Boolean, Number],
                default: false,
            },
        },
        data() {
            return {
                localValue: this.value,
            };
        },
        computed: {
            baseClass() {
                return [
                    config.base,
                    this.isEnabled ? this.getVariant.base.enabled : this.getVariant.base.disabled,
                    this.getSize.base,
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
            handlerClass() {
                return [
                    config.baseHandler,
                    this.isEnabled ? 'translate-x-full' : 'translate-x-0',
                    this.isEnabled ? this.getVariant.handler.enabled : this.getVariant.handler.disabled,
                    this.getSize.handler,
                ];
            },
            isEnabled() {
                return !!this.localValue;
            },
        },
        watch: {
            value(newValue) {
                this.localValue = newValue;
            },
        },
        methods: {
            onClick() {
                this.localValue = !this.localValue;
                this.$emit('input', this.localValue);
            },
        },
    };
</script>
