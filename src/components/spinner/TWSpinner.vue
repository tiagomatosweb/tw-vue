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
    export default {
        name: 'TWSpinner',

        props: {
            variant: {
                type: String,
                default: undefined,
            },
            size: {
                type: String,
                default: 'md',
            },
        },

        computed: {
            config() {
                return this?.$TWVue?.TWSpinner || {};
            },

            baseClass() {
                return [
                    this.config.base,
                    this.getSize,
                    this.getVariant,
                ];
            },

            getVariant() {
                return this.variant ? this.config.variants[this.variant] : '';
            },

            getSize() {
                return this.config.sizes[this.size];
            },
        },
    };
</script>
