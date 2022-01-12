<template>
    <div :class="baseClass">
        <div class="flex">
            <div
                v-if="$slots['icon']"
                class="flex-shrink-0 mr-3"
            >
                <slot name="icon" />
            </div>

            <div>
                <slot />
            </div>

            <div
                v-if="dismissible"
                class="ml-auto pl-3"
            >
                <div class="-mx-1.5 -my-1.5">
                    <button
                        :class="baseButtonCloseClass"
                        @click.stop.prevent="onClose()"
                    >
                        <span class="sr-only">Dismiss</span>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TWAlert',

        props: {
            variant: {
                type: String,
                default: 'default',
            },
            dismissible: {
                type: Boolean,
                default: undefined,
            },
        },

        computed: {
            config() {
                return this?.$TWVue?.TWAlert || {};
            },

            baseClass() {
                return [
                    this.config.base,
                    this.getVariant.base,
                    this.getVariant.text,
                ];
            },

            baseButtonCloseClass() {
                return [
                    this.config.baseButtonClose,
                    this.getVariant.buttonClose,
                ];
            },

            getVariant() {
                const variants = this.config.variants;
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
