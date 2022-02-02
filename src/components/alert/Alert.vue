<template>
    <div :class="baseClass">
        <slot name="content">
            <div class="flex">
                <div
                    v-if="$slots['icon']"
                    class="flex-shrink-0 mr-3"
                >
                    <slot name="icon" />
                </div>

                <div :class="dismissible ? 'mr-10 ' : null">
                    <slot />
                </div>
            </div>
        </slot>

        <button
            v-if="dismissible"
            :class="baseButtonCloseClass"
            @click.stop.prevent="onClose()"
        >
            <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';

    const config = Vue.prototype.$TWVue.Alert;

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
        name: 'Alert',
        props: {
            variants: {
                type: Object,
                default: undefined,
            },
            variant: {
                type: String,
                default: defaultVariant(config),
            },
            dismissible: {
                type: Boolean,
                default: undefined,
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
            baseButtonCloseClass() {
                return [
                    'absolute right-4 top-4 ml-auto -mx-1.5 -my-1.5',
                    config.baseButtonClose,
                    this.getVariant.buttonClose,
                ];
            },
            getVariant() {
                const variants = { ...config.variants, ...this.variants };
                return variants[this.variant];
            },
        },
        methods: {
            onClose() {
                if (this.dismissible) {
                    this.$emit('close');
                }
            },
        },
    };
</script>
